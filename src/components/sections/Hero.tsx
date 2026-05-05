"use client";
import { useEffect, useRef } from "react";
import { gsap } from "@/lib/gsap";

export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const photoRef   = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.to(photoRef.current, {
        y: -10, duration: 3.2, ease: "sine.inOut", yoyo: true, repeat: -1, delay: 1.5,
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section
      id="hero"
      ref={sectionRef}
      className="pinstripe"
      style={{
        minHeight: "100vh",
        background: "var(--sage)",
        position: "relative",
        overflow: "hidden",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        padding: "120px var(--container-pad) 100px",
      }}
    >
      {/*
        Grid: name text on the left, polaroid on the right.
        The photo column uses a negative right margin so the polaroid
        can bleed slightly outside the container on the right edge —
        giving it more visual weight and making it feel bolder.
      */}
      <div
        style={{
          position: "relative", zIndex: 2,
          maxWidth: "var(--container-max)", margin: "0 auto", width: "100%",
          display: "grid",
          /*
            Two columns: text gets all flexible space, photo gets a fixed
            generous chunk. The photo column is intentionally large so the
            frame dominates the right half of the hero.
          */
          gridTemplateColumns: "1fr clamp(300px, 34vw, 480px)",
          gap: "clamp(32px, 5vw, 72px)",
          alignItems: "center",
        }}
        className="hero-grid"
      >
        {/* LEFT — Name + tagline */}
        <div>
          <div
            style={{
              fontFamily: "var(--font-serif)", fontWeight: 300,
              fontSize: "clamp(70px, 12vw, 190px)",
              lineHeight: 0.88, letterSpacing: "-0.025em",
              color: "var(--charcoal)",
              animation: "clipReveal 1.1s cubic-bezier(0.22,1,0.36,1) 0.3s both",
            }}
          >Onahi</div>

          <div
            style={{
              fontFamily: "var(--font-serif)", fontWeight: 300, fontStyle: "italic",
              fontSize: "clamp(70px, 12vw, 190px)",
              lineHeight: 0.88, letterSpacing: "-0.02em",
              color: "var(--charcoal)",
              marginTop: "clamp(4px, 0.5vw, 10px)",
              animation: "clipReveal 1.1s cubic-bezier(0.22,1,0.36,1) 0.55s both",
            }}
          >Ijeh.</div>

          <div
            style={{
              marginTop: "clamp(22px, 3.5vw, 40px)",
              maxWidth: "480px",
              animation: "fadeUp 0.9s cubic-bezier(0.22,1,0.36,1) 0.85s both",
            }}
          >
            <p style={{
              fontFamily: "var(--font-serif)", fontStyle: "italic",
              fontSize: "clamp(16px, 1.8vw, 22px)",
              fontWeight: 300, lineHeight: 1.55,
              color: "var(--charcoal-soft)",
            }}>
              At the heart of <em style={{ fontStyle: "normal", fontWeight: 500 }}>Culture</em> is
              an opportunity to{" "}
              <em style={{ fontStyle: "italic" }}>tell stories.</em>
            </p>
            <div style={{
              width: "56px", height: "2px", marginTop: "14px",
              background: "var(--sage-deep)",
            }} />
          </div>
        </div>

        {/* RIGHT — Bold polaroid frame */}
        <div
          ref={photoRef}
          className="hero-photo-wrap"
          style={{
            flexShrink: 0,
            /*
              Slight clockwise tilt + nudge left so the frame overlaps
              toward the name text a touch — feels confident, not shy.
            */
            transform: "rotate(2.5deg) translateX(-16px)",
            animation: "fadeIn 1.1s cubic-bezier(0.22,1,0.36,1) 0.9s both",
          }}
        >
          <div
            className="photo-frame"
            style={{
              /*
                Significantly bolder dimensions — fills the column width.
                At 1440px viewport: ~490px wide × ~640px tall.
                At 1024px viewport: ~350px wide × ~455px tall.
                This gives it the weighty editorial presence of a magazine spread.
              */
              width: "clamp(280px, 32vw, 490px)",
              height: "clamp(370px, 42vw, 640px)",
              borderRadius: "4px",
              position: "relative",
            }}
          >
            {/* Photo area — replace with <Image> when headshot is ready */}
            <div style={{
              width: "100%", height: "87%",
              background: "linear-gradient(165deg, #cac6b9 0%, #b8b5a6 45%, #aba896 100%)",
              display: "flex", flexDirection: "column",
              alignItems: "center", justifyContent: "center", gap: "14px",
            }}>
              <svg
                width="68" height="82"
                viewBox="0 0 44 54" fill="none"
                xmlns="http://www.w3.org/2000/svg"
                style={{ opacity: 0.26 }}
              >
                <ellipse cx="22" cy="16" rx="12" ry="14" fill="rgba(28,28,26,0.65)" />
                <path d="M2 52c0-11 9-20 20-20s20 9 20 20" stroke="rgba(28,28,26,0.65)" strokeWidth="1.5" fill="none" />
              </svg>
              <span style={{
                fontFamily: "var(--font-sans)", fontSize: "11px",
                letterSpacing: "0.16em", textTransform: "uppercase",
                color: "rgba(28,28,26,0.26)",
              }}>Headshot</span>
            </div>

            {/* Polaroid caption strip */}
            <div style={{
              height: "13%",
              background: "rgba(255,255,255,0.75)",
              display: "flex", alignItems: "center", justifyContent: "center",
            }}>
              <span style={{
                fontFamily: "var(--font-serif)", fontStyle: "italic",
                fontSize: "16px", color: "rgba(28,28,26,0.45)",
              }}>Onahi ✦</span>
            </div>

            {/* Pin */}
            <div style={{
              position: "absolute", top: "-13px", left: "50%",
              transform: "translateX(-50%)",
              width: "18px", height: "18px", borderRadius: "50%",
              background: "var(--sage-deep)",
              boxShadow: "0 2px 8px rgba(0,0,0,0.24)",
            }} />
          </div>
        </div>
      </div>

      <style jsx>{`
        @media (max-width: 768px) {
          .hero-grid { grid-template-columns: 1fr !important; }
          .hero-photo-wrap { display: none !important; }
        }
      `}</style>
    </section>
  );
}