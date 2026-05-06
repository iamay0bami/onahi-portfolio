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
      <div
        style={{
          position: "relative", zIndex: 2,
          maxWidth: "var(--container-max)", margin: "0 auto", width: "100%",
          display: "grid",
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

        {/* RIGHT — Polaroid frame with board pin + crop marks */}
        <div
          style={{
            flexShrink: 0,
            position: "relative",
          }}
          className="hero-photo-wrap"
        >
          {/*
            ─── CROP MARKS on polaroid corners ───
            Four L-shaped corner brackets — the kind printed on
            physical photo sheets and editorial layouts. They sit
            just outside the photo frame, referencing the art direction
            / photography production world. Ultra-subtle at 0.12 opacity.
          */}
          {/* Top-left crop mark */}
          <svg
            aria-hidden="true"
            width="18" height="18"
            viewBox="0 0 18 18"
            fill="none"
            style={{
              position: "absolute",
              top: "-10px", left: "-10px",
              opacity: 0.18, zIndex: 8,
              animation: "fadeIn 1.4s ease 1.1s both",
            }}
          >
            <path d="M 0 10 L 0 0 L 10 0" stroke="var(--charcoal)" strokeWidth="1" strokeLinecap="round" fill="none" />
          </svg>
          {/* Top-right crop mark */}
          <svg
            aria-hidden="true"
            width="18" height="18"
            viewBox="0 0 18 18"
            fill="none"
            style={{
              position: "absolute",
              top: "-10px", right: "-10px",
              opacity: 0.18, zIndex: 8,
              animation: "fadeIn 1.4s ease 1.1s both",
            }}
          >
            <path d="M 8 0 L 18 0 L 18 10" stroke="var(--charcoal)" strokeWidth="1" strokeLinecap="round" fill="none" />
          </svg>
          {/* Bottom-left crop mark */}
          <svg
            aria-hidden="true"
            width="18" height="18"
            viewBox="0 0 18 18"
            fill="none"
            style={{
              position: "absolute",
              bottom: "-10px", left: "-10px",
              opacity: 0.18, zIndex: 8,
              animation: "fadeIn 1.4s ease 1.1s both",
            }}
          >
            <path d="M 0 8 L 0 18 L 10 18" stroke="var(--charcoal)" strokeWidth="1" strokeLinecap="round" fill="none" />
          </svg>
          {/* Bottom-right crop mark */}
          <svg
            aria-hidden="true"
            width="18" height="18"
            viewBox="0 0 18 18"
            fill="none"
            style={{
              position: "absolute",
              bottom: "-10px", right: "-10px",
              opacity: 0.18, zIndex: 8,
              animation: "fadeIn 1.4s ease 1.1s both",
            }}
          >
            <path d="M 8 18 L 18 18 L 18 8" stroke="var(--charcoal)" strokeWidth="1" strokeLinecap="round" fill="none" />
          </svg>

          {/*
            ─── WASHI TAPE strip — top of polaroid ───
            A semi-transparent, slightly angled tape strip holding
            the photo to the "board". Warm translucent cream/sage tone.
            This replaces the board pin on the hero photo — the crop
            marks already give it that professional art-direction feel,
            and the washi tape adds the personal/corkboard warmth.
          */}
          <div
            aria-hidden="true"
            style={{
              position: "absolute",
              top: "-14px",
              left: "50%",
              transform: "translateX(-50%) rotate(-1.5deg)",
              width: "clamp(70px, 10vw, 110px)",
              height: "22px",
              background: "rgba(184,191,168,0.42)",
              borderRadius: "2px",
              zIndex: 9,
              boxShadow: "inset 0 1px 0 rgba(255,255,255,0.3), 0 1px 3px rgba(0,0,0,0.08)",
              backdropFilter: "blur(1px)",
              animation: "fadeIn 1.2s ease 1s both",
            }}
          />

          {/* Floating photo */}
          <div
            ref={photoRef}
            style={{
              transform: "rotate(2.5deg) translateX(-16px)",
              animation: "fadeIn 1.1s cubic-bezier(0.22,1,0.36,1) 0.9s both",
            }}
          >
            <div
              className="photo-frame"
              style={{
                width: "clamp(280px, 32vw, 490px)",
                height: "clamp(370px, 42vw, 640px)",
                borderRadius: "4px",
                position: "relative",
              }}
            >
              {/* Photo area */}
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
            </div>
          </div>
        </div>
      </div>

      {/*
        ─── HERO EDITORIAL MARKS ───

        1. Asterisk (bottom-left) — kept, it works.
        2. Small postmark circle (bottom-right quadrant) — Lagos stamp.
           Gives the "this is from somewhere real" editorial energy.
      */}

      {/* 1. Asterisk — bottom left */}
      <div style={{
        position: "absolute",
        bottom: "clamp(40px, 7vw, 80px)",
        left: "clamp(20px, 4vw, 56px)",
        zIndex: 3,
        opacity: 0.28,
        animation: "fadeIn 1.5s ease 1.2s both",
        pointerEvents: "none",
      }} aria-hidden="true">
        <svg width="32" height="32" viewBox="0 0 36 36" fill="none">
          <line x1="18" y1="2" x2="18" y2="34" stroke="var(--charcoal)" strokeWidth="1.1" strokeLinecap="round" />
          <line x1="2" y1="18" x2="34" y2="18" stroke="var(--charcoal)" strokeWidth="1.1" strokeLinecap="round" />
          <line x1="6" y1="6" x2="30" y2="30" stroke="var(--charcoal)" strokeWidth="1.1" strokeLinecap="round" />
          <line x1="30" y1="6" x2="6" y2="30" stroke="var(--charcoal)" strokeWidth="1.1" strokeLinecap="round" />
        </svg>
      </div>

      {/* 2. Postmark / stamp — bottom right, faint */}
      <div style={{
        position: "absolute",
        bottom: "clamp(60px, 9vw, 100px)",
        right: "clamp(60px, 10vw, 140px)",
        zIndex: 3,
        opacity: 0.11,
        animation: "fadeIn 1.8s ease 1.4s both",
        pointerEvents: "none",
        transform: "rotate(-12deg)",
      }} aria-hidden="true">
        <svg width="88" height="88" viewBox="0 0 88 88" fill="none">
          {/* Outer circle */}
          <circle cx="44" cy="44" r="40" stroke="var(--charcoal)" strokeWidth="1.2" fill="none" strokeDasharray="3 2" />
          {/* Inner circle */}
          <circle cx="44" cy="44" r="30" stroke="var(--charcoal)" strokeWidth="0.8" fill="none" />
          {/* Text along path */}
          <defs>
            <path id="stamp-ring" d="M 44,44 m -24,0 a 24,24 0 1,1 48,0 a 24,24 0 1,1 -48,0" />
          </defs>
          <text style={{ fontFamily: "var(--font-sans)", fontSize: "7px", letterSpacing: "3px", fill: "var(--charcoal)" }}>
            <textPath href="#stamp-ring">LAGOS · NG · 2024 · CREATIVE ·</textPath>
          </text>
          {/* Center mark */}
          <text x="44" y="48" textAnchor="middle" style={{ fontFamily: "var(--font-serif)", fontStyle: "italic", fontSize: "9px", fill: "var(--charcoal)" }}>Onahi</text>
        </svg>
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