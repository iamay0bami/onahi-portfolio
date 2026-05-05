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

        {/* RIGHT — Bold polaroid frame with realistic board pin */}
        <div
          ref={photoRef}
          className="hero-photo-wrap"
          style={{
            flexShrink: 0,
            transform: "rotate(2.5deg) translateX(-16px)",
            animation: "fadeIn 1.1s cubic-bezier(0.22,1,0.36,1) 0.9s both",
            position: "relative",
          }}
        >
          {/*
            ─── REALISTIC BOARD PIN ───
            A classic push-pin / thumbtack rendered in SVG.
            The pin sits centered at the top of the polaroid, slightly
            overlapping it, creating the illusion of it being nailed
            to the pinstripe board background. It has:
            - A round colored head with a convex highlight (like real metal/plastic)
            - A subtle shadow under the head
            - A short pointed shaft below
          */}
          <div style={{
            position: "absolute",
            top: "-28px",
            left: "50%",
            transform: "translateX(-50%)",
            zIndex: 10,
            filter: "drop-shadow(0 4px 8px rgba(0,0,0,0.28))",
          }}>
            <svg width="28" height="44" viewBox="0 0 28 44" fill="none" xmlns="http://www.w3.org/2000/svg">
              {/* Pin shadow on board */}
              <ellipse cx="14" cy="22" rx="7" ry="2" fill="rgba(0,0,0,0.18)" />
              {/* Pin shaft */}
              <path
                d="M 13.5 20 L 13.5 42 Q 14 44 14.5 42 L 14.5 20 Z"
                fill="#8A7355"
                opacity="0.85"
              />
              {/* Pin head base — the round disc */}
              <circle cx="14" cy="12" r="11" fill="#9B5F44" />
              {/* Pin head rim — slightly darker for depth */}
              <circle cx="14" cy="12" r="11" stroke="rgba(0,0,0,0.2)" strokeWidth="1" fill="none" />
              {/* Convex highlight — simulates the dome of a real pin head */}
              <ellipse
                cx="11"
                cy="8"
                rx="5"
                ry="3.5"
                fill="rgba(255,255,255,0.28)"
                style={{ transform: "rotate(-15deg)", transformOrigin: "11px 8px" }}
              />
              {/* Small specular dot */}
              <circle cx="10" cy="7.5" r="1.5" fill="rgba(255,255,255,0.45)" />
            </svg>
          </div>

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

      {/*
        ─── SUBTLE HERO DOODLE ───
        A small hand-drawn-style star/asterisk in the bottom-left corner.
        Editorial magazines use these as decorative accents.
        Positioned far from the main content so it doesn't crowd anything.
      */}
      <div style={{
        position: "absolute",
        bottom: "clamp(40px, 7vw, 80px)",
        left: "clamp(20px, 4vw, 56px)",
        zIndex: 3,
        opacity: 0.35,
        animation: "fadeIn 1.5s ease 1.2s both",
      }} aria-hidden="true">
        <svg width="36" height="36" viewBox="0 0 36 36" fill="none">
          {/* 6-pointed asterisk doodle */}
          <line x1="18" y1="2" x2="18" y2="34" stroke="var(--charcoal)" strokeWidth="1.2" strokeLinecap="round" />
          <line x1="2" y1="18" x2="34" y2="18" stroke="var(--charcoal)" strokeWidth="1.2" strokeLinecap="round" />
          <line x1="6" y1="6" x2="30" y2="30" stroke="var(--charcoal)" strokeWidth="1.2" strokeLinecap="round" />
          <line x1="30" y1="6" x2="6" y2="30" stroke="var(--charcoal)" strokeWidth="1.2" strokeLinecap="round" />
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