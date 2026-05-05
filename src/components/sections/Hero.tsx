"use client";
import { useEffect, useRef } from "react";
import { gsap } from "@/lib/gsap";

export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const photoRef   = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Only GSAP for continuous float on photo
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
      {/* Main content grid: name left, photo right */}
      <div
        style={{
          position: "relative", zIndex: 2,
          maxWidth: "var(--container-max)", margin: "0 auto", width: "100%",
          display: "grid",
          gridTemplateColumns: "1fr auto",
          gap: "clamp(48px, 7vw, 100px)",
          alignItems: "center",
        }}
        className="hero-grid"
      >
        {/* LEFT — Name + tagline — CSS animated */}
        <div>
          {/* First name */}
          <div
            style={{
              fontFamily: "var(--font-serif)", fontWeight: 300,
              fontSize: "clamp(70px, 12vw, 190px)",
              lineHeight: 0.88, letterSpacing: "-0.025em",
              color: "var(--charcoal)",
              animation: "clipReveal 1.1s cubic-bezier(0.22,1,0.36,1) 0.3s both",
            }}
          >Onahi</div>

          {/* Last name */}
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

          {/* Subtext */}
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

        {/* RIGHT — Headshot / Polaroid — bold and prominent */}
        <div
          ref={photoRef}
          className="hero-photo-wrap"
          style={{
            flexShrink: 0,
            transform: "rotate(2deg)",
            animation: "fadeIn 1.1s cubic-bezier(0.22,1,0.36,1) 0.9s both",
          }}
        >
          <div
            className="photo-frame"
            style={{
              // Significantly larger: wider and taller for bold presence
              width: "clamp(260px, 28vw, 420px)",
              height: "clamp(340px, 37vw, 555px)",
              borderRadius: "4px",
              position: "relative",
            }}
          >
            {/* Placeholder content — replace with <Image> when photo is available */}
            <div style={{
              width: "100%", height: "86%",
              background: "linear-gradient(165deg, #c9c5b8 0%, #b5b2a3 50%, #a8a496 100%)",
              display: "flex", flexDirection: "column",
              alignItems: "center", justifyContent: "center", gap: "12px",
            }}>
              <svg width="62" height="76" viewBox="0 0 44 54" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ opacity: 0.28 }}>
                <ellipse cx="22" cy="16" rx="12" ry="14" fill="rgba(28,28,26,0.6)" />
                <path d="M2 52c0-11 9-20 20-20s20 9 20 20" stroke="rgba(28,28,26,0.6)" strokeWidth="1.5" fill="none" />
              </svg>
              <span style={{
                fontFamily: "var(--font-sans)", fontSize: "11px",
                letterSpacing: "0.14em", textTransform: "uppercase",
                color: "rgba(28,28,26,0.28)",
              }}>Headshot</span>
            </div>

            {/* Polaroid caption strip */}
            <div style={{
              height: "14%",
              background: "rgba(255,255,255,0.75)",
              display: "flex", alignItems: "center", justifyContent: "center",
            }}>
              <span style={{
                fontFamily: "var(--font-serif)", fontStyle: "italic",
                fontSize: "15px", color: "rgba(28,28,26,0.45)",
              }}>Onahi ✦</span>
            </div>

            {/* Pin effect */}
            <div style={{
              position: "absolute", top: "-12px", left: "50%",
              transform: "translateX(-50%)",
              width: "16px", height: "16px", borderRadius: "50%",
              background: "var(--sage-deep)",
              boxShadow: "0 2px 8px rgba(0,0,0,0.22)",
            }} />
          </div>
        </div>
      </div>

      {/* Scroll indicator REMOVED */}

      <style jsx>{`
        @media (max-width: 768px) {
          .hero-grid { grid-template-columns: 1fr !important; }
          .hero-photo-wrap { display: none !important; }
        }
      `}</style>
    </section>
  );
}