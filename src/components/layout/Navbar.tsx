"use client";

import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const roles = ["Creative Director", "Curator", "Founder", "Storyteller"];

const navLinks = [
  { label: "Portfolio", href: "#portfolio" },
  { label: "About", href: "#about" },
  { label: "Values", href: "#values" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const navRef = useRef<HTMLElement>(null);
  const roleRef = useRef<HTMLSpanElement>(null);
  const [currentRole, setCurrentRole] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Role cycling tied to scroll sections
  useEffect(() => {
    const sections = ["#hero", "#about", "#portfolio", "#values", "#contact"];
    sections.forEach((id, i) => {
      const el = document.querySelector(id);
      if (!el) return;
      ScrollTrigger.create({
        trigger: el,
        start: "top center",
        onEnter: () => setCurrentRole(Math.min(i, roles.length - 1)),
        onEnterBack: () => setCurrentRole(Math.max(i - 1, 0)),
      });
    });
  }, []);

  // Animate role text change
  useEffect(() => {
    if (!roleRef.current) return;
    gsap.fromTo(roleRef.current,
      { opacity: 0, y: 8 },
      { opacity: 1, y: 0, duration: 0.4, ease: "power2.out" }
    );
  }, [currentRole]);

  // Navbar background on scroll
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Entrance animation
  useEffect(() => {
    gsap.fromTo(navRef.current,
      { y: -20, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.8, delay: 0.6, ease: "power2.out" }
    );
  }, []);

  const scrollTo = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false);
  };

  return (
    <>
      <nav
        ref={navRef}
        style={{
          position: "fixed",
          top: 0, left: 0, right: 0,
          zIndex: 150,
          padding: "16px clamp(20px, 4vw, 60px)",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          transition: "background 0.4s ease, backdrop-filter 0.4s ease",
          background: scrolled ? "rgba(10,9,7,0.9)" : "transparent",
          backdropFilter: scrolled ? "blur(12px)" : "none",
        }}
      >
        {/* Left: Logo + Role */}
        <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
          <div style={{
            width: 32, height: 32,
            background: "var(--gold)",
            borderRadius: "50%",
            display: "flex", alignItems: "center", justifyContent: "center",
            flexShrink: 0,
          }}>
            <span style={{
              fontFamily: "var(--font-serif)",
              fontSize: "15px",
              color: "var(--bg-dark)",
              fontStyle: "italic",
              lineHeight: 1,
            }}>O</span>
          </div>
          <span ref={roleRef} style={{
            fontFamily: "var(--font-sans)",
            fontSize: "13px",
            color: "var(--cream-muted)",
            letterSpacing: "0.06em",
          }}>
            {roles[currentRole]}
          </span>
        </div>

        {/* Center / Right: Nav Links (desktop) */}
        <div style={{
          display: "flex",
          alignItems: "center",
          gap: "clamp(16px, 2.5vw, 32px)",
        }} className="hidden-mobile">
          {navLinks.map((link) => (
            <button
              key={link.href}
              onClick={() => scrollTo(link.href)}
              className="nav-link"
              style={{ background: "none", border: "none", cursor: "pointer" }}
            >
              {link.label}
            </button>
          ))}
          <button
            onClick={() => scrollTo("#contact")}
            className="btn-primary"
            style={{ padding: "8px 20px", fontSize: "13px" }}
          >
            Contact
          </button>
        </div>

        {/* Mobile hamburger */}
        <button
          className="show-mobile"
          onClick={() => setMenuOpen(!menuOpen)}
          style={{
            background: "none", border: "none", cursor: "pointer",
            display: "none",
            flexDirection: "column", gap: "5px", padding: "4px",
          }}
          aria-label="Menu"
        >
          {[0, 1, 2].map((i) => (
            <span key={i} style={{
              display: "block", width: "22px", height: "1px",
              background: "var(--cream)",
              transition: "all 0.3s ease",
              transformOrigin: "center",
              transform: menuOpen
                ? i === 0 ? "rotate(45deg) translate(4px, 4px)"
                  : i === 2 ? "rotate(-45deg) translate(4px, -4px)"
                  : "scaleX(0)"
                : "none",
            }} />
          ))}
        </button>
      </nav>

      {/* Mobile Menu */}
      <div className={`mobile-menu ${menuOpen ? "open" : ""}`}>
        {navLinks.map((link) => (
          <a key={link.href} onClick={() => scrollTo(link.href)} href="#">
            {link.label}
          </a>
        ))}
      </div>

      <style jsx>{`
        @media (max-width: 768px) {
          .hidden-mobile { display: none !important; }
          .show-mobile { display: flex !important; }
        }
      `}</style>
    </>
  );
}
