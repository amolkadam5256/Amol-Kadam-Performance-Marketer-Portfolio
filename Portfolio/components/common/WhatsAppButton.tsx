"use client";

import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { site, whatsappHref } from "@/data/site";

const SIZE = 56;
const MARGIN = 12;
const DRAG_THRESHOLD = 6;
const STORAGE_KEY = "wa-fab-pos";

type Point = { x: number; y: number };

function clamp(point: Point): Point {
  if (typeof window === "undefined") return point;
  return {
    x: Math.min(Math.max(MARGIN, point.x), window.innerWidth - SIZE - MARGIN),
    y: Math.min(Math.max(MARGIN, point.y), window.innerHeight - SIZE - MARGIN),
  };
}

function defaultPoint(): Point {
  return clamp({
    x: window.innerWidth - SIZE - 26,
    y: window.innerHeight - SIZE - 26,
  });
}

function readSaved(): Point | null {
  try {
    const raw = sessionStorage.getItem(STORAGE_KEY);
    if (!raw) return null;
    const parsed = JSON.parse(raw) as Point;
    if (typeof parsed.x !== "number" || typeof parsed.y !== "number") return null;
    return clamp(parsed);
  } catch {
    return null;
  }
}

export function WhatsAppButton() {
  const [hovered, setHovered] = useState(false);
  const [ready, setReady] = useState(false);
  const [dragging, setDragging] = useState(false);
  const [pos, setPos] = useState<Point>({ x: 0, y: 0 });
  const posRef = useRef<Point>({ x: 0, y: 0 });
  const drag = useRef({
    active: false,
    moved: false,
    startX: 0,
    startY: 0,
    originX: 0,
    originY: 0,
  });
  const whatsappUrl = whatsappHref();

  useEffect(() => {
    const start = readSaved() ?? defaultPoint();
    posRef.current = start;
    setPos(start);
    setReady(true);

    const onResize = () => {
      const next = clamp(posRef.current);
      posRef.current = next;
      setPos(next);
    };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  function onPointerDown(event: React.PointerEvent<HTMLAnchorElement>) {
    if (event.button !== 0) return;
    event.currentTarget.setPointerCapture(event.pointerId);
    setDragging(true);
    drag.current = {
      active: true,
      moved: false,
      startX: event.clientX,
      startY: event.clientY,
      originX: pos.x,
      originY: pos.y,
    };
    setHovered(false);
  }

  function onPointerMove(event: React.PointerEvent<HTMLAnchorElement>) {
    if (!drag.current.active) return;
    const dx = event.clientX - drag.current.startX;
    const dy = event.clientY - drag.current.startY;
    if (Math.abs(dx) > DRAG_THRESHOLD || Math.abs(dy) > DRAG_THRESHOLD) {
      drag.current.moved = true;
    }
    if (!drag.current.moved) return;
    event.preventDefault();
    const next = clamp({
      x: drag.current.originX + dx,
      y: drag.current.originY + dy,
    });
    posRef.current = next;
    setPos(next);
  }

  function onPointerUp(event: React.PointerEvent<HTMLAnchorElement>) {
    if (!drag.current.active) return;
    drag.current.active = false;
    setDragging(false);
    try {
      event.currentTarget.releasePointerCapture(event.pointerId);
    } catch {
      /* already released */
    }
    if (drag.current.moved) {
      sessionStorage.setItem(STORAGE_KEY, JSON.stringify(posRef.current));
    }
  }

  function onClick(event: React.MouseEvent<HTMLAnchorElement>) {
    if (drag.current.moved) {
      event.preventDefault();
      drag.current.moved = false;
    }
  }

  if (!ready) return null;

  return (
    <motion.div
      className={`wa-fab${dragging ? " is-dragging" : ""}`}
      style={{ left: pos.x, top: pos.y }}
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 0.45, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
    >
      {hovered && !drag.current.moved && (
        <span className="wa-fab-tip">Chat with Amol on WhatsApp</span>
      )}

      <motion.a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`Chat with Amol Kadam on WhatsApp (${site.phone})`}
        aria-grabbed={dragging}
        onMouseEnter={() => !drag.current.active && setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        onPointerDown={onPointerDown}
        onPointerMove={onPointerMove}
        onPointerUp={onPointerUp}
        onPointerCancel={onPointerUp}
        onClick={onClick}
        drag={false}
        animate={{
          boxShadow: [
            "0 8px 25px rgba(37, 211, 102, 0.45), 0 0 0 0px rgba(37, 211, 102, 0.4)",
            "0 8px 25px rgba(37, 211, 102, 0.45), 0 0 0 14px rgba(37, 211, 102, 0)",
            "0 8px 25px rgba(37, 211, 102, 0.45), 0 0 0 0px rgba(37, 211, 102, 0.4)",
          ],
        }}
        transition={{
          boxShadow: { duration: 2.8, repeat: Infinity, ease: "easeInOut" },
        }}
      >
        <svg width="28" height="28" viewBox="0 0 24 24" aria-hidden="true">
          <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" fill="#ffffff" />
          <path d="M16.5 14.5c-.3-.2-1.7-.8-1.9-.9-.3-.1-.5-.2-.7.1-.2.3-.7.9-.9 1.1-.1.2-.3.2-.6.1s-1.3-.5-2.5-1.5c-.9-.8-1.5-1.8-1.7-2.1-.2-.3 0-.5.1-.6.1-.1.3-.4.5-.6.1-.2.2-.3.3-.5.1-.2 0-.4 0-.5s-.7-1.7-1-2.3c-.3-.6-.5-.5-.7-.5h-.6c-.2 0-.6.1-.9.4s-1.2 1.2-1.2 2.9 1.2 3.4 1.4 3.6c.2.2 2.4 3.7 5.9 5.2 2.9 1.2 3.5 1 4.1.9.7-.1 2.2-.9 2.5-1.8.3-.9.3-1.6.2-1.8-.1-.2-.3-.3-.6-.5z" fill="#25D366" />
        </svg>
      </motion.a>
    </motion.div>
  );
}
