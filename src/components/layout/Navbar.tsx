"use client";
import { useEffect, useRef, useState, useCallback } from "react";
import { gsap, ScrollTrigger } from "@/lib/gsap";

const ROLES = ["Creative Director", "Curator", "Founder", "Media Maker"];

export default function Navbar() {
  const [roleIdx, setRoleIdx] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);
  const roleRef = useRef<HTMLSpanElement>(null);
  const navRef = useRef<HTMLElement>(null);
  const cycleRef = useRef<ReturnType<typeof setInterval> | null>(null);

  // Auto-cycle roles every 2.5 seconds
  const startCycle = useCallback(() => {
    cycleRef.current = setInterval(() => {
      setRoleIdx(prev => (prev + 1) % ROLES.length);
    }, 2500);
  }, []);

  useEffect(() => {
    startCycle();

    // Scroll-based role update (for section context)
    const timer = setTimeout(() => {
      const triggers = [
        { id: "#hero",      idx: 0 },
        { id: "#about",     idx: 1 },
        { id: "#portfolio", idx: 2 },
        { id: "#afronated", idx: 3 },
      ];
      triggers.forEach(({ id, idx }) => {
        const el = document.querySelector(id);
        if (!el) return;
        ScrollTrigger.create({
          trigger: el, start: "top 55%",
          onEnter:     () => {
            if (cycleRef.current) clearInterval(cycleRef.current);
            setRoleIdx(idx);
            startCycle();
          },
          onEnterBack: () => {
            if (cycleRef.current) clearInterval(cycleRef.current);
            setRoleIdx(Math.max(0, idx - 1));
            startCycle();
          },
        });
      });
      ScrollTrigger.refresh();
    }, 400);

    gsap.fromTo(navRef.current,
      { y: -20, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.9, delay: 0.5, ease: "power2.out" }
    );

    return () => {
      clearTimeout(timer);
      if (cycleRef.current) clearInterval(cycleRef.current);
    };
  }, [startCycle]);

  useEffect(() => {
    if (!roleRef.current) return;
    gsap.fromTo(roleRef.current,
      { opacity: 0, y: 5 },
      { opacity: 1, y: 0, duration: 0.35, ease: "power2.out" }
    );
  }, [roleIdx]);

  const scrollTo = (id: string) => {
    document.querySelector(id)?.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    setMenuOpen(false);
  };

  return (
    <>
      <nav
        ref={navRef}
        style={{
          position: "fixed", top: 0, left: 0, right: 0, zIndex: 200,
          padding: "18px clamp(20px, 4vw, 56px)",
          display: "flex", alignItems: "center", justifyContent: "space-between",
          // Always fully transparent — no background at any scroll position
          background: "transparent",
          backdropFilter: "none",
        }}
      >
        {/* Clickable logo/role area — scrolls to top */}
        <button
          onClick={scrollToTop}
          aria-label="Back to top"
          style={{
            background: "none", border: "none", cursor: "pointer",
            display: "flex", alignItems: "center", gap: "10px",
            padding: "4px 0",
          }}
        >
          <div className="logo-circle">
            <span>O</span>
          </div>
          <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-start", gap: "1px" }}>
            <span
              ref={roleRef}
              className="role-text"
              style={{ display: "block", lineHeight: 1.2 }}
            >
              {ROLES[roleIdx]}
            </span>
          </div>
        </button>

        {/* Desktop nav links */}
        <div className="hide-mobile" style={{ display: "flex", alignItems: "center", gap: "clamp(18px, 2.5vw, 32px)" }}>
          {["#portfolio","#values","#what"].map((href, i) => (
            <button key={href} className="nav-link" onClick={() => scrollTo(href)}>
              {["Portfolio","My Values","What I Do"][i]}
            </button>
          ))}
          <button className="contact-pill" onClick={() => scrollTo("#contact")}>Contact</button>
        </div>

        {/* Mobile hamburger */}
        <button
          className="show-mobile"
          onClick={() => setMenuOpen(v => !v)}
          style={{ background: "none", border: "none", cursor: "pointer", display: "none", flexDirection: "column", gap: "5px", padding: "4px" }}
          aria-label="Menu"
        >
          {[0,1,2].map(i => (
            <span key={i} style={{
              display: "block", width: "22px", height: "1px",
              background: "var(--charcoal)",
              transition: "all 0.3s ease", transformOrigin: "center",
              transform: menuOpen
                ? i===0 ? "rotate(45deg) translate(4px,4px)"
                  : i===2 ? "rotate(-45deg) translate(4px,-4px)"
                  : "scaleX(0)"
                : "none",
            }}/>
          ))}
        </button>
      </nav>

      {/* Mobile menu */}
      <div className={`mobile-menu ${menuOpen ? "open" : ""}`}>
        {["#portfolio","#about","#values","#what","#contact"].map((h,i) => (
          <a key={h} onClick={() => scrollTo(h)} href="#">
            {["Portfolio","About","My Values","What I Do","Contact"][i]}
          </a>
        ))}
      </div>
    </>
  );
}