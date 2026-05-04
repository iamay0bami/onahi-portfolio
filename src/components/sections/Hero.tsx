"use client";
import { useEffect, useRef } from "react";
import { gsap } from "@/lib/gsap";

export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const photoRef   = useRef<HTMLDivElement>(null);
  const scrollRef  = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Only GSAP for continuous float on photo and scroll indicator bob
      gsap.to(photoRef.current, {
        y: -10, duration: 3.2, ease: "sine.inOut", yoyo: true, repeat: -1, delay: 1.5,
      });
      gsap.to(scrollRef.current, {
        y: 7, duration: 1.6, ease: "sine.inOut", yoyo: true, repeat: -1,
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
        padding: "120px var(--container-pad) 140px",
      }}
    >
      {/* NO sphere, NO bowl — clean sage background with only pinstripe */}

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

        {/* RIGHT — Headshot / Polaroid — prominent, right-aligned */}
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
              width: "clamp(200px, 22vw, 320px)",
              height: "clamp(270px, 30vw, 430px)",
              borderRadius: "3px",
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
              <svg width="52" height="64" viewBox="0 0 44 54" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ opacity: 0.28 }}>
                <ellipse cx="22" cy="16" rx="12" ry="14" fill="rgba(28,28,26,0.6)" />
                <path d="M2 52c0-11 9-20 20-20s20 9 20 20" stroke="rgba(28,28,26,0.6)" strokeWidth="1.5" fill="none" />
              </svg>
              <span style={{
                fontFamily: "var(--font-sans)", fontSize: "10px",
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
                fontSize: "13px", color: "rgba(28,28,26,0.45)",
              }}>Onahi ✦</span>
            </div>

            {/* Pin effect */}
            <div style={{
              position: "absolute", top: "-10px", left: "50%",
              transform: "translateX(-50%)",
              width: "14px", height: "14px", borderRadius: "50%",
              background: "var(--sage-deep)",
              boxShadow: "0 2px 6px rgba(0,0,0,0.18)",
            }} />
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div
        ref={scrollRef}
        style={{
          position: "absolute", bottom: "36px", left: "50%",
          transform: "translateX(-50%)",
          display: "flex", flexDirection: "column", alignItems: "center", gap: "8px",
          zIndex: 5,
          animation: "fadeIn 0.6s ease 1.4s both",
        }}
      >
        <span style={{
          fontFamily: "var(--font-sans)", fontSize: "10px",
          letterSpacing: "0.18em", color: "var(--sage-deep)",
          textTransform: "uppercase", opacity: 0.7,
        }}>Scroll</span>
        <div style={{
          width: "1px", height: "44px",
          background: "linear-gradient(to bottom, var(--charcoal), transparent)",
        }} />
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