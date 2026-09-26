"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { navLinks } from "@/data/site";

function isActive(path: string, href: string) {
  if (href === "/") return path === "/";
  return path === href || path.startsWith(`${href}/`);
}

export function Navbar() {
  const path = usePathname();
  const [open, setOpen] = useState(false);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    let last = window.scrollY;
    const onScroll = () => {
      const now = window.scrollY;
      setVisible(now < 80 || now < last);
      last = now;
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [path]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header className={`pill-header ${visible || open ? "nav-visible" : "nav-hidden"} ${open ? "is-open" : ""}`}>
      <nav className="pill-nav" aria-label="Primary">
        <Link href="/" className="pill-logo" aria-label="Amol Kadam home">
          <Image src="/logo.png" alt="Amol Kadam" width={72} height={72} priority />
        </Link>

        <div className="pill-links">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={isActive(path, link.href) ? "on" : undefined}
            >
              {link.label}
            </Link>
          ))}
        </div>

        <Link className="pill-mail" href="/contact">
          Contact
        </Link>

        <button
          className="pill-toggle"
          type="button"
          onClick={() => setOpen((value) => !value)}
          aria-expanded={open}
          aria-label={open ? "Close navigation" : "Open navigation"}
        >
          {open ? <X size={18} /> : <Menu size={18} />}
        </button>
      </nav>

      {open && (
        <div className="pill-drawer">
          <p className="pill-drawer-label">Menu</p>
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={isActive(path, link.href) ? "on" : undefined}
              onClick={() => setOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          <Link className="pill-drawer-cta" href="/contact" onClick={() => setOpen(false)}>
            Contact
          </Link>
        </div>
      )}
    </header>
  );
}
