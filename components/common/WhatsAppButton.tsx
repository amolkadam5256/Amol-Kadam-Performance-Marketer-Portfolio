"use client";

import { motion } from "framer-motion";
import { useState } from "react";

export function WhatsAppButton() {
  const [hovered, setHovered] = useState(false);
  const phoneNumber = "917709266280";
  const message = encodeURIComponent("Hi Amol, I visited your website and would like to discuss a performance marketing project.");
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;

  return (
    <motion.div
      style={{
        position: "fixed",
        bottom: "26px",
        right: "26px",
        zIndex: 9999,
        display: "flex",
        alignItems: "center",
        gap: "10px",
      }}
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 0.5, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
    >
      {/* Optional Tooltip Pill */}
      {hovered && (
        <motion.span
          initial={{ opacity: 0, x: 10, scale: 0.95 }}
          animate={{ opacity: 1, x: 0, scale: 1 }}
          exit={{ opacity: 0, x: 10 }}
          style={{
            background: "#181818",
            color: "#fff",
            fontSize: "12px",
            fontWeight: 700,
            padding: "8px 14px",
            borderRadius: "20px",
            boxShadow: "0 6px 20px rgba(0,0,0,0.2)",
            whiteSpace: "nowrap",
            pointerEvents: "none",
          }}
        >
          Chat with Amol on WhatsApp 👋
        </motion.span>
      )}

      {/* Floating Button */}
      <motion.a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with Amol Kadam on WhatsApp (+91 7709266280)"
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        style={{
          width: "56px",
          height: "56px",
          borderRadius: "50%",
          backgroundColor: "#25D366",
          display: "grid",
          placeItems: "center",
          color: "#ffffff",
          boxShadow: "0 8px 25px rgba(37, 211, 102, 0.45), 0 2px 8px rgba(0, 0, 0, 0.15)",
          cursor: "pointer",
          position: "relative",
          textDecoration: "none",
        }}
        whileHover={{ scale: 1.12 }}
        whileTap={{ scale: 0.92 }}
        animate={{
          boxShadow: [
            "0 8px 25px rgba(37, 211, 102, 0.45), 0 0 0 0px rgba(37, 211, 102, 0.4)",
            "0 8px 25px rgba(37, 211, 102, 0.45), 0 0 0 14px rgba(37, 211, 102, 0)",
            "0 8px 25px rgba(37, 211, 102, 0.45), 0 0 0 0px rgba(37, 211, 102, 0.4)",
          ],
        }}
        /* @ts-ignore */
        transition={{
          boxShadow: {
            duration: 2.8,
            repeat: Infinity,
            ease: "easeInOut",
          },
        }}
      >
        {/* Authentic SVG WhatsApp Logo */}
        <svg
          width="28"
          height="28"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          style={{ filter: "drop-shadow(0 1px 2px rgba(0,0,0,0.15))" }}
        >
          <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" fill="#ffffff" stroke="#ffffff" />
          <path d="M16.5 14.5c-.3-.2-1.7-.8-1.9-.9-.3-.1-.5-.2-.7.1-.2.3-.7.9-.9 1.1-.1.2-.3.2-.6.1s-1.3-.5-2.5-1.5c-.9-.8-1.5-1.8-1.7-2.1-.2-.3 0-.5.1-.6.1-.1.3-.4.5-.6.1-.2.2-.3.3-.5.1-.2 0-.4 0-.5s-.7-1.7-1-2.3c-.3-.6-.5-.5-.7-.5h-.6c-.2 0-.6.1-.9.4s-1.2 1.2-1.2 2.9 1.2 3.4 1.4 3.6c.2.2 2.4 3.7 5.9 5.2 2.9 1.2 3.5 1 4.1.9.7-.1 2.2-.9 2.5-1.8.3-.9.3-1.6.2-1.8-.1-.2-.3-.3-.6-.5z" fill="#25D366" />
        </svg>
      </motion.a>
    </motion.div>
  );
}
