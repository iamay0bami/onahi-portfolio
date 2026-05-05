"use client";
import { useEffect, useRef, useState, useCallback } from "react";
import { gsap, ScrollTrigger } from "@/lib/gsap";

const ROLES = ["Creative Director", "Curator", "Founder", "Media Maker"];

export default function Navbar() {
  // roleIdx is only the logical index — animation is driven entirely by GSAP refs
  const roleIdxRef  = useRef(0);
  const [menuOpen, setMenuOpen] = useState(false);

  // Two DOM nodes for the ticker — always mounted, GSAP owns their y/opacity
  const topRef    = useRef<HTMLSpanElement>(null); // currently visible
  const bottomRef = useRef<HTMLSpanElement>(null); // waiting below, slides up

  const navRef   = useRef<HTMLElement>(null);
  const cycleRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const busyRef  = useRef(false); // prevent overlapping tweens

  // ── Animate to a new role index ──
  const animateTo = useCallback((nextIdx: number) => {
    if (busyRef.current) return;
    if (nextIdx === roleIdxRef.current) return;
    busyRef.current = true;

    const top    = topRef.current;
    const bottom = bottomRef.current;
    if (!top || !bottom) { busyRef.current = false; return; }

    // Write incoming text into the hidden bottom span
    bottom.textContent = ROLES[nextIdx];

    // Make sure bottom starts from below
    gsap.set(bottom, { y: 14, opacity: 0 });

    const tl = gsap.timeline({
      onComplete: () => {
        // Snap: top now owns the new text, bottom resets below
        top.textContent = ROLES[nextIdx];
        gsap.set(top,    { y: 0,  opacity: 1 });
        gsap.set(bottom, { y: 14, opacity: 0 });
        roleIdxRef.current = nextIdx;
        busyRef.current = false;
      },
    });

    // Outgoing (top) slides up and fades out
    tl.to(top, {
      y: -14,
      opacity: 0,
      duration: 0.42,
      ease: "power2.in",
    });

    // Incoming (bottom) slides up into place — slight overlap for continuity
    tl.to(bottom, {
      y: 0,
      opacity: 1,
      duration: 0.46,
      ease: "power2.out",
    }, "-=0.18");
  }, []);

  const startCycle = useCallback(() => {
    if (cycleRef.current) clearInterval(cycleRef.current);
    cycleRef.current = setInterval(() => {
      animateTo((roleIdxRef.current + 1) % ROLES.length);
    }, 2800);
  }, [animateTo]);

  useEffect(() => {
    // Seed the spans on mount
    if (topRef.current) {
      topRef.current.textContent = ROLES[0];
      gsap.set(topRef.current, { y: 0, opacity: 1 });
    }
    if (bottomRef.current) {
      bottomRef.current.textContent = ROLES[1];
      gsap.set(bottomRef.current, { y: 14, opacity: 0 });
    }

    startCycle();

    // Scroll-context triggers
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
          onEnter:     () => { if (cycleRef.current) clearInterval(cycleRef.current); animateTo(idx); startCycle(); },
          onEnterBack: () => { if (cycleRef.current) clearInterval(cycleRef.current); animateTo(Math.max(0, idx - 1)); startCycle(); },
        });
      });
      ScrollTrigger.refresh();
    }, 400);

    // Nav entrance animation
    gsap.fromTo(navRef.current,
      { y: -20, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.9, delay: 0.5, ease: "power2.out" }
    );

    return () => {
      clearTimeout(timer);
      if (cycleRef.current) clearInterval(cycleRef.current);
    };
  }, [animateTo, startCycle]);

  const scrollTo = (id: string) => {
    document.querySelector(id)?.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false);
  };
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    setMenuOpen(false);
  };

  const pillBg     = "rgba(242, 237, 228, 0.88)";
  const pillBorder = "rgba(28, 28, 26, 0.10)";
  const pillShadow = "0 2px 12px rgba(28,28,26,0.10), 0 1px 3px rgba(28,28,26,0.07)";

  return (
    <>
      <style>{`
        /* Ticker: clipping window + two stacked absolutely-positioned spans */
        .role-ticker {
          position: relative;
          overflow: hidden;
          height: 15px;
          /* Wide enough for the longest role "Creative Director" + tracking */
          min-width: 120px;
          flex-shrink: 0;
        }
        .ticker-span {
          position: absolute;
          left: 0;
          top: 0;
          line-height: 15px;
          white-space: nowrap;
          font-family: var(--font-sans);
          font-size: 12px;
          font-weight: 300;
          letter-spacing: 0.07em;
          color: var(--charcoal-soft);
          will-change: transform, opacity;
          pointer-events: none;
          user-select: none;
        }
      `}</style>

      <nav
        ref={navRef}
        style={{
          position: "fixed", top: 0, left: 0, right: 0, zIndex: 200,
          padding: "16px clamp(20px, 4vw, 56px)",
          display: "flex", alignItems: "center", justifyContent: "space-between",
          background: "transparent",
        }}
      >
        {/* ── LEFT: Logo + role ticker in a pill ── */}
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
            (e.currentTarget as HTMLElement).style.boxShadow =
              "0 4px 18px rgba(28,28,26,0.14), 0 1px 4px rgba(28,28,26,0.10)";
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

          {/*
            Two spans, always in the DOM.
            GSAP animates y + opacity directly on the DOM nodes —
            React never re-renders these after mount, so there's
            no state-driven flicker or mid-animation reset.
          */}
          <div className="role-ticker">
            <span ref={topRef}    className="ticker-span" />
            <span ref={bottomRef} className="ticker-span" />
          </div>
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
          {(["#portfolio", "#values", "#what"] as const).map((href, i) => (
            <div key={href} style={{ display: "flex", alignItems: "center" }}>
              {i > 0 && (
                <div style={{
                  width: "1px", height: "14px",
                  background: "rgba(28,28,26,0.15)",
                  margin: "0 2px", flexShrink: 0,
                }} />
              )}
              <button
                className="nav-link"
                onClick={() => scrollTo(href)}
                style={{
                  padding: "6px 14px", borderRadius: "100px",
                  fontSize: "13px", fontWeight: 300, letterSpacing: "0.05em",
                  color: "var(--charcoal)",
                  transition: "background 0.22s ease",
                }}
                onMouseEnter={e => { (e.currentTarget as HTMLElement).style.background = "rgba(107,117,96,0.12)"; }}
                onMouseLeave={e => { (e.currentTarget as HTMLElement).style.background = "transparent"; }}
              >
                {["Portfolio", "My Values", "What I Do"][i]}
              </button>
            </div>
          ))}

          <div style={{
            width: "1px", height: "14px",
            background: "rgba(28,28,26,0.15)",
            margin: "0 4px 0 2px", flexShrink: 0,
          }} />

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