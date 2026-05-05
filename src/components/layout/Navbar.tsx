"use client";
import { useEffect, useRef, useState, useCallback } from "react";
import { gsap, ScrollTrigger } from "@/lib/gsap";

const ROLES = ["Creative Director", "Curator", "Founder", "Media Maker"];

export default function Navbar() {
  const roleIdxRef  = useRef(0);
  const [menuOpen, setMenuOpen] = useState(false);

  const topRef    = useRef<HTMLSpanElement>(null);
  const bottomRef = useRef<HTMLSpanElement>(null);
  const tickerPillRef = useRef<HTMLDivElement>(null);

  const navRef   = useRef<HTMLElement>(null);
  const cycleRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const busyRef  = useRef(false);

  // Measure text width using a hidden canvas for pixel-perfect sizing
  // We add generous padding so text never clips
  const measureText = useCallback((text: string): number => {
    const canvas = document.createElement("canvas");
    const ctx = canvas.getContext("2d");
    if (!ctx) return 140;
    // Match the actual rendered font as closely as possible
    ctx.font = "300 12px 'Jost', system-ui, sans-serif";
    const measured = Math.ceil(ctx.measureText(text).width);
    // Add 10px safety buffer on each side to prevent any clipping
    return measured + 20;
  }, []);

  const animateTo = useCallback((nextIdx: number) => {
    if (busyRef.current) return;
    if (nextIdx === roleIdxRef.current) return;
    busyRef.current = true;

    const top    = topRef.current;
    const bottom = bottomRef.current;
    const pill   = tickerPillRef.current;
    if (!top || !bottom) { busyRef.current = false; return; }

    bottom.textContent = ROLES[nextIdx];

    gsap.set(bottom, { y: 14, opacity: 0 });

    // Animate pill width to fit new text + padding buffer
    if (pill) {
      const newWidth = measureText(ROLES[nextIdx]);
      gsap.to(pill, { width: newWidth, duration: 0.45, ease: "power2.inOut" });
    }

    const tl = gsap.timeline({
      onComplete: () => {
        top.textContent = ROLES[nextIdx];
        gsap.set(top,    { y: 0,  opacity: 1 });
        gsap.set(bottom, { y: 14, opacity: 0 });
        roleIdxRef.current = nextIdx;
        busyRef.current = false;
      },
    });

    tl.to(top, { y: -14, opacity: 0, duration: 0.42, ease: "power2.in" });
    tl.to(bottom, { y: 0, opacity: 1, duration: 0.46, ease: "power2.out" }, "-=0.18");
  }, [measureText]);

  const startCycle = useCallback(() => {
    if (cycleRef.current) clearInterval(cycleRef.current);
    cycleRef.current = setInterval(() => {
      animateTo((roleIdxRef.current + 1) % ROLES.length);
    }, 2800);
  }, [animateTo]);

  useEffect(() => {
    // Seed spans on mount
    if (topRef.current) {
      topRef.current.textContent = ROLES[0];
      gsap.set(topRef.current, { y: 0, opacity: 1 });
    }
    if (bottomRef.current) {
      bottomRef.current.textContent = ROLES[1];
      gsap.set(bottomRef.current, { y: 14, opacity: 0 });
    }
    // Set initial pill width — use measureText which includes padding buffer
    if (tickerPillRef.current) {
      tickerPillRef.current.style.width = `${measureText(ROLES[0])}px`;
    }

    startCycle();

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

    gsap.fromTo(navRef.current,
      { y: -20, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.9, delay: 0.5, ease: "power2.out" }
    );

    return () => {
      clearTimeout(timer);
      if (cycleRef.current) clearInterval(cycleRef.current);
    };
  }, [animateTo, startCycle, measureText]);

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
        .role-ticker {
          position: relative;
          overflow: hidden;
          height: 15px;
          flex-shrink: 0;
          /* Width is set inline and animated by GSAP */
          transition: none;
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

        /* Nav link: round bg highlight on hover — no underline */
        .nav-link-clean {
          font-family: var(--font-sans);
          font-size: 13px;
          font-weight: 300;
          letter-spacing: 0.05em;
          color: var(--charcoal);
          background: transparent;
          border: none;
          cursor: pointer;
          padding: 6px 14px;
          border-radius: 100px;
          transition: background 0.22s ease;
          text-decoration: none;
          display: inline-flex;
          align-items: center;
        }
        .nav-link-clean:hover {
          background: rgba(107, 117, 96, 0.13);
        }

        /* Elegant O logomark */
        .logo-o-mark {
          transition: transform 0.3s ease;
        }
        .logo-o-mark:hover {
          transform: rotate(-5deg) scale(1.05);
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
        {/* ── LEFT: Brand mark + role ticker pill ── */}
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
            padding: "6px 16px 6px 6px",
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
          {/*
            ── NEW LOGOMARK: Elegant cursive-inspired "O" ──
            
            A refined circle with a hand-drawn cursive O feel —
            thin stroke, a graceful entry/exit flourish like real
            calligraphy, a tiny gold accent dot. Feminine, editorial,
            and unmistakably personal. The swash tail at the bottom
            evokes signature / handwriting energy without being literal.
          */}
          <div
            className="logo-o-mark"
            style={{
              width: 30,
              height: 30,
              borderRadius: "50%",
              background: "var(--charcoal)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              flexShrink: 0,
              position: "relative",
            }}
          >
            <svg
              width="20"
              height="20"
              viewBox="0 0 22 22"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              style={{ display: "block", overflow: "visible" }}
            >
              {/*
                Main oval — slightly compressed vertically like a
                handwritten letter O, thin elegant stroke weight
              */}
              <ellipse
                cx="11"
                cy="10.5"
                rx="5.8"
                ry="7"
                stroke="rgba(242,237,228,0.92)"
                strokeWidth="1.1"
                fill="none"
              />
              {/*
                Entry flourish — top-left, like a pen starting a cursive O.
                A short curved stroke coming in from upper left.
              */}
              <path
                d="M 5.5 5.2 C 4.2 3.8 3.6 2.8 4.4 2.2"
                stroke="rgba(242,237,228,0.75)"
                strokeWidth="0.9"
                strokeLinecap="round"
                fill="none"
              />
              {/*
                Exit tail — bottom right, the signature swash of a
                handwritten O, sweeping out gracefully to the right
              */}
              <path
                d="M 16.2 13.5 C 17.8 15.2 18.2 16.8 16.8 17.6"
                stroke="rgba(242,237,228,0.75)"
                strokeWidth="0.9"
                strokeLinecap="round"
                fill="none"
              />
              {/*
                Tiny gold accent dot — like the dot of an 'i' or a
                jewel accent, feminine and deliberate
              */}
              <circle
                cx="16"
                cy="4.5"
                r="1.1"
                fill="#B8997A"
                opacity="0.95"
              />
            </svg>
          </div>

          {/* Divider */}
          <div style={{
            width: "1px",
            height: "14px",
            background: "rgba(28,28,26,0.15)",
            flexShrink: 0,
          }} />

          {/* Role ticker — width animated by GSAP, includes padding buffer */}
          <div ref={tickerPillRef} className="role-ticker">
            <span ref={topRef}    className="ticker-span" />
            <span ref={bottomRef} className="ticker-span" />
          </div>
        </button>

        {/* ── RIGHT: Nav links pill ── */}
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
                className="nav-link-clean"
                onClick={() => scrollTo(href)}
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