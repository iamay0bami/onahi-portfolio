"use client";
import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

// Roles cycle on scroll exactly like the reference site
const ROLES = ["Creative Director", "Curator", "Founder", "Media Maker"];

export default function Navbar() {
  const [role, setRole] = useState(0);
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const roleRef = useRef<HTMLSpanElement>(null);
  const navRef = useRef<HTMLElement>(null);

  useEffect(() => {
    // Map scroll sections to roles
    const triggers = [
      { id: "#hero",       idx: 0 },
      { id: "#about",      idx: 1 },
      { id: "#portfolio",  idx: 2 },
      { id: "#afronated",  idx: 3 },
    ];
    triggers.forEach(({ id, idx }) => {
      const el = document.querySelector(id);
      if (!el) return;
      ScrollTrigger.create({
        trigger: el, start: "top 55%",
        onEnter:     () => setRole(idx),
        onEnterBack: () => setRole(Math.max(0, idx - 1)),
      });
    });

    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);

    gsap.fromTo(navRef.current, { y: -20, opacity: 0 }, { y: 0, opacity: 1, duration: 0.9, delay: 0.5, ease: "power2.out" });

    return () => { window.removeEventListener("scroll", onScroll); ScrollTrigger.getAll().forEach(t => t.kill()); };
  }, []);

  useEffect(() => {
    if (!roleRef.current) return;
    gsap.fromTo(roleRef.current, { opacity: 0, y: 6 }, { opacity: 1, y: 0, duration: 0.38, ease: "power2.out" });
  }, [role]);

  const scrollTo = (id: string) => {
    document.querySelector(id)?.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false);
  };

  return (
    <>
      <nav
        ref={navRef}
        style={{
          position: "fixed", top: 0, left: 0, right: 0, zIndex: 200,
          padding: "14px clamp(20px, 4vw, 56px)",
          display: "flex", alignItems: "center", justifyContent: "space-between",
          transition: "background 0.4s ease, backdrop-filter 0.4s ease",
          background: scrolled ? "rgba(184,191,168,0.88)" : "transparent",
          backdropFilter: scrolled ? "blur(14px)" : "none",
        }}
      >
        {/* LEFT — logo + cycling role */}
        <div className="role-badge">
          <div className="logo-circle">
            <span>O</span>
          </div>
          <span ref={roleRef} className="role-text">{ROLES[role]}</span>
        </div>

        {/* RIGHT — nav links + single contact pill */}
        <div className="hide-mobile" style={{ display: "flex", alignItems: "center", gap: "clamp(18px, 2.5vw, 32px)" }}>
          {["#portfolio","#values","#what"].map((href, i) => (
            <button key={href} className="nav-link" onClick={() => scrollTo(href)}>
              {["Portfolio","My Values","What I Do"][i]}
            </button>
          ))}
          <button className="contact-pill" onClick={() => scrollTo("#contact")}>Contact</button>
        </div>

        {/* MOBILE hamburger */}
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

      {/* Mobile full-screen menu */}
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
