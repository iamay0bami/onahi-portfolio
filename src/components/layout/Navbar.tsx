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

  // Pill background: a warm parchment/linen tone that reads clearly on sage
  // and doesn't feel clinical — like aged paper, slightly warm
  const pillBg = "rgba(242, 237, 228, 0.88)"; // --cream with slight transparency
  const pillBorder = "rgba(28, 28, 26, 0.10)";
  const pillShadow = "0 2px 12px rgba(28,28,26,0.10), 0 1px 3px rgba(28,28,26,0.07)";

  return (
    <>
      <nav
        ref={navRef}
        style={{
          position: "fixed", top: 0, left: 0, right: 0, zIndex: 200,
          padding: "16px clamp(20px, 4vw, 56px)",
          display: "flex", alignItems: "center", justifyContent: "space-between",
          background: "transparent",
          backdropFilter: "none",
        }}
      >
        {/* ── LEFT: Logo / role badge in a pill ── */}
        <button
          onClick={scrollToTop}
          aria-label="Back to top"
          style={{
            background: pillBg,
            border: `1px solid ${pillBorder}`,
            borderRadius: "100px",
            boxShadow: pillShadow,
            backdropFilter: "blur(8px)",
            WebkitBackdropFilter: "blur(8px)",
            cursor: "pointer",
            display: "flex",
            alignItems: "center",
            gap: "10px",
            padding: "7px 16px 7px 8px",
            transition: "box-shadow 0.25s ease, transform 0.2s ease",
          }}
          onMouseEnter={e => {
            (e.currentTarget as HTMLElement).style.boxShadow = "0 4px 18px rgba(28,28,26,0.14), 0 1px 4px rgba(28,28,26,0.10)";
            (e.currentTarget as HTMLElement).style.transform = "translateY(-1px)";
          }}
          onMouseLeave={e => {
            (e.currentTarget as HTMLElement).style.boxShadow = pillShadow;
            (e.currentTarget as HTMLElement).style.transform = "translateY(0)";
          }}
        >
          <div className="logo-circle">
            <span>O</span>
          </div>
          <span
            ref={roleRef}
            style={{
              fontFamily: "var(--font-sans)",
              fontSize: "12px",
              fontWeight: 300,
              letterSpacing: "0.07em",
              color: "var(--charcoal-soft)",
              display: "block",
              lineHeight: 1.2,
              whiteSpace: "nowrap",
            }}
          >
            {ROLES[roleIdx]}
          </span>
        </button>

        {/* ── RIGHT: Nav links + Contact in a single pill ── */}
        <div
          className="hide-mobile"
          style={{
            display: "flex",
            alignItems: "center",
            background: pillBg,
            border: `1px solid ${pillBorder}`,
            borderRadius: "100px",
            boxShadow: pillShadow,
            backdropFilter: "blur(8px)",
            WebkitBackdropFilter: "blur(8px)",
            padding: "5px 6px 5px 8px",
            gap: "0",
          }}
        >
          {/* Nav links with subtle dividers between them */}
          {(["#portfolio", "#values", "#what"] as const).map((href, i) => (
            <div key={href} style={{ display: "flex", alignItems: "center" }}>
              {/* Divider between items (not before first) */}
              {i > 0 && (
                <div style={{
                  width: "1px",
                  height: "14px",
                  background: "rgba(28,28,26,0.15)",
                  margin: "0 2px",
                  flexShrink: 0,
                }} />
              )}
              <button
                className="nav-link"
                onClick={() => scrollTo(href)}
                style={{
                  padding: "6px 14px",
                  borderRadius: "100px",
                  fontSize: "13px",
                  fontWeight: 300,
                  letterSpacing: "0.05em",
                  color: "var(--charcoal)",
                  transition: "background 0.22s ease, color 0.22s ease",
                }}
                onMouseEnter={e => {
                  (e.currentTarget as HTMLElement).style.background = "rgba(107,117,96,0.12)";
                }}
                onMouseLeave={e => {
                  (e.currentTarget as HTMLElement).style.background = "transparent";
                }}
              >
                {["Portfolio", "My Values", "What I Do"][i]}
              </button>
            </div>
          ))}

          {/* Divider before Contact pill */}
          <div style={{
            width: "1px",
            height: "14px",
            background: "rgba(28,28,26,0.15)",
            margin: "0 4px 0 2px",
            flexShrink: 0,
          }} />

          {/* Contact — filled accent pill inside the container */}
          <button
            className="contact-pill"
            onClick={() => scrollTo("#contact")}
            style={{ padding: "8px 20px", fontSize: "13px" }}
          >
            Contact
          </button>
        </div>

        {/* Mobile hamburger */}
        <button
          className="show-mobile"
          onClick={() => setMenuOpen(v => !v)}
          style={{
            background: pillBg,
            border: `1px solid ${pillBorder}`,
            borderRadius: "10px",
            boxShadow: pillShadow,
            cursor: "pointer",
            display: "none",
            flexDirection: "column",
            gap: "5px",
            padding: "10px 12px",
          }}
          aria-label="Menu"
        >
          {[0, 1, 2].map(i => (
            <span key={i} style={{
              display: "block", width: "22px", height: "1px",
              background: "var(--charcoal)",
              transition: "all 0.3s ease", transformOrigin: "center",
              transform: menuOpen
                ? i === 0 ? "rotate(45deg) translate(4px,4px)"
                  : i === 2 ? "rotate(-45deg) translate(4px,-4px)"
                  : "scaleX(0)"
                : "none",
            }} />
          ))}
        </button>
      </nav>

      {/* Mobile menu */}
      <div className={`mobile-menu ${menuOpen ? "open" : ""}`}>
        {["#portfolio", "#about", "#values", "#what", "#contact"].map((h, i) => (
          <a key={h} onClick={() => scrollTo(h)} href="#">
            {["Portfolio", "About", "My Values", "What I Do", "Contact"][i]}
          </a>
        ))}
      </div>
    </>
  );
}