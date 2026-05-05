"use client";
import { useEffect, useRef } from "react";
import { gsap } from "@/lib/gsap";

export default function About() {
  const sectionRef = useRef<HTMLElement>(null);
  const img3Ref    = useRef<HTMLDivElement>(null);
  const photoRef   = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.to(img3Ref.current, {
        y: -10, duration: 3.2, ease: "sine.inOut", yoyo: true, repeat: -1,
      });
      gsap.to(photoRef.current, {
        y: -6, duration: 3.8, ease: "sine.inOut", yoyo: true, repeat: -1, delay: 0.5,
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="about"
      ref={sectionRef}
      className="pinstripe"
      style={{
        background: "var(--cream-warm)",
        position: "relative",
        padding: "clamp(80px, 12vw, 160px) var(--container-pad)",
        overflow: "hidden",
      }}
    >
      <div className="wrap">

        {/* TOP — headline + bio */}
        <div style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "clamp(36px, 8vw, 96px)",
          alignItems: "start",
          marginBottom: "clamp(64px, 10vw, 120px)",
        }} className="about-top">

          <div style={{ animation: "fadeUp 1s cubic-bezier(0.22,1,0.36,1) 0.1s both" }}>
            <h2 style={{
              fontFamily: "var(--font-serif)", fontWeight: 300,
              fontSize: "clamp(44px, 7vw, 96px)",
              lineHeight: 0.9, letterSpacing: "-0.02em",
              color: "var(--charcoal)",
            }}>
              Hi there, I&apos;m<br/>
              <em style={{ fontStyle: "italic" }}>Onahi.</em>
            </h2>
            <div style={{ marginTop: "20px" }}>
              <span style={{
                display: "inline-block",
                fontFamily: "var(--font-sans)", fontSize: "13px", fontWeight: 300,
                letterSpacing: "0.04em", color: "var(--charcoal-soft)",
                border: "1px solid rgba(28,28,26,0.22)",
                borderRadius: "100px", padding: "6px 16px",
              }}>Also Ona, or Nahi</span>
            </div>
          </div>

          <div style={{ paddingTop: "8px", animation: "fadeUp 1s cubic-bezier(0.22,1,0.36,1) 0.25s both" }}>
            <p style={{
              fontFamily: "var(--font-sans)", fontSize: "clamp(14px, 1.4vw, 17px)",
              fontWeight: 300, lineHeight: 1.8, color: "var(--charcoal-soft)",
              marginBottom: "18px",
            }}>
              A Lagos-rooted creative director, curator, and media founder with a deep love
              for African culture, music, and storytelling.
            </p>
            <p style={{
              fontFamily: "var(--font-sans)", fontSize: "clamp(14px, 1.4vw, 17px)",
              fontWeight: 300, lineHeight: 1.8, color: "var(--charcoal-soft)",
            }}>
              I am the founder of{" "}
              <strong style={{ fontWeight: 500, color: "var(--charcoal)" }}>Afronated</strong>
              {" "}— a creative media collective amplifying African voices through powerful
              storytelling, spotlight interviews, and cultural excellence. A big part of my
              life is building spaces where African creativity gets to be undeniable.
            </p>
          </div>
        </div>

        {/* BOTTOM — diary-style photos cluster */}
        <div style={{
          display: "flex",
          alignItems: "flex-end",
          justifyContent: "center",
          gap: "clamp(12px, 3vw, 32px)",
          flexWrap: "wrap",
          position: "relative",
        }}>

          {/* Green soft circle */}
          <div style={{
            position: "absolute",
            left: "50%", bottom: "-20px",
            transform: "translateX(-50%)",
            width: "clamp(220px, 32vw, 420px)",
            height: "clamp(220px, 32vw, 420px)",
            borderRadius: "50%",
            background: "radial-gradient(circle, rgba(184,191,168,0.6) 0%, rgba(184,191,168,0.15) 70%, transparent 100%)",
            zIndex: 0,
            animation: "fadeIn 1.3s ease 0.3s both",
          }} aria-hidden="true" />

          {/* Photo 3 — small polaroid with pin */}
          <div
            ref={img3Ref}
            style={{
              position: "absolute",
              top: "-50px",
              left: "clamp(0px, 4vw, 60px)",
              zIndex: 5,
              transform: "rotate(-6deg)",
              animation: "fadeIn 1.2s ease 0.5s both",
            }}
          >
            {/* Board pin — sage green for this small photo */}
            <div style={{
              position: "absolute",
              top: "-22px",
              left: "50%",
              transform: "translateX(-50%)",
              zIndex: 10,
              filter: "drop-shadow(0 3px 6px rgba(0,0,0,0.25))",
            }}>
              <svg width="22" height="36" viewBox="0 0 22 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                <ellipse cx="11" cy="18" rx="5.5" ry="1.5" fill="rgba(0,0,0,0.15)" />
                <path d="M 10.5 16 L 10.5 34 Q 11 36 11.5 34 L 11.5 16 Z" fill="#6B7560" opacity="0.8" />
                <circle cx="11" cy="10" r="9" fill="#6B7560" />
                <circle cx="11" cy="10" r="9" stroke="rgba(0,0,0,0.18)" strokeWidth="1" fill="none" />
                <ellipse cx="8.5" cy="7" rx="4" ry="2.8" fill="rgba(255,255,255,0.25)" />
                <circle cx="7.5" cy="6.5" r="1.2" fill="rgba(255,255,255,0.4)" />
              </svg>
            </div>

            <div className="photo-frame" style={{
              width: "clamp(100px, 13vw, 165px)",
              height: "clamp(130px, 17vw, 215px)",
              borderRadius: "3px",
            }}>
              <div style={{
                width: "100%", height: "80%",
                background: "linear-gradient(150deg, #d4c8b8 0%, #c0b8a8 100%)",
                display: "flex", alignItems: "center", justifyContent: "center",
              }}>
                <span style={{ fontFamily: "var(--font-serif)", fontStyle: "italic", fontSize: "18px", color: "rgba(28,28,26,0.25)" }}>✦</span>
              </div>
              <div style={{
                height: "20%", background: "rgba(255,255,255,0.7)",
                display: "flex", alignItems: "center", justifyContent: "center",
              }}>
                <span style={{ fontFamily: "var(--font-serif)", fontStyle: "italic", fontSize: "9px", color: "rgba(28,28,26,0.35)" }}>Lagos, 2024</span>
              </div>
            </div>
          </div>

          {/* Photo 1 — larger, tilted left, with pin */}
          <div style={{ position: "relative", zIndex: 2 }}>
            {/* Gold board pin on main photo */}
            <div style={{
              position: "absolute",
              top: "-26px",
              left: "50%",
              transform: "translateX(-50%)",
              zIndex: 10,
              filter: "drop-shadow(0 4px 8px rgba(0,0,0,0.3))",
            }}>
              <svg width="26" height="42" viewBox="0 0 26 42" fill="none" xmlns="http://www.w3.org/2000/svg">
                <ellipse cx="13" cy="21" rx="6.5" ry="1.8" fill="rgba(0,0,0,0.16)" />
                <path d="M 12.5 19 L 12.5 40 Q 13 42 13.5 40 L 13.5 19 Z" fill="#8A7355" opacity="0.85" />
                <circle cx="13" cy="11" r="10" fill="#8A7355" />
                <circle cx="13" cy="11" r="10" stroke="rgba(0,0,0,0.2)" strokeWidth="1" fill="none" />
                <ellipse cx="10" cy="7.5" rx="4.5" ry="3.2" fill="rgba(255,255,255,0.28)" />
                <circle cx="9" cy="7" r="1.4" fill="rgba(255,255,255,0.45)" />
              </svg>
            </div>

            <div
              ref={photoRef}
              className="photo-frame"
              style={{
                width: "clamp(180px, 26vw, 340px)",
                height: "clamp(240px, 34vw, 440px)",
                transform: "rotate(-4deg)",
                borderRadius: "4px",
                animation: "fadeUp 1.1s cubic-bezier(0.22,1,0.36,1) 0.2s both",
              }}
            >
              <div style={{
                width: "100%", height: "100%",
                background: "linear-gradient(160deg, #c8c4b8 0%, #b0ad9d 100%)",
                display: "flex", flexDirection: "column",
                alignItems: "center", justifyContent: "center", gap: "8px",
              }}>
                <svg width="44" height="54" viewBox="0 0 44 54" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ opacity: 0.22 }}>
                  <ellipse cx="22" cy="16" rx="12" ry="14" fill="rgba(28,28,26,0.8)" />
                  <path d="M2 52c0-11 9-20 20-20s20 9 20 20" stroke="rgba(28,28,26,0.8)" strokeWidth="1.5" fill="none" />
                </svg>
                <span style={{ fontFamily: "var(--font-sans)", fontSize: "10px", letterSpacing: "0.1em", color: "rgba(28,28,26,0.28)", textTransform: "uppercase" }}>Photo</span>
              </div>
            </div>
          </div>

          {/* Photo 2 — smaller, tilted right, with terracotta pin */}
          <div style={{ position: "relative", zIndex: 3 }}>
            {/* Terracotta pin */}
            <div style={{
              position: "absolute",
              top: "-24px",
              left: "50%",
              transform: "translateX(-50%) rotate(8deg)",
              zIndex: 10,
              filter: "drop-shadow(0 3px 7px rgba(0,0,0,0.25))",
            }}>
              <svg width="20" height="34" viewBox="0 0 20 34" fill="none" xmlns="http://www.w3.org/2000/svg">
                <ellipse cx="10" cy="17" rx="5" ry="1.4" fill="rgba(0,0,0,0.14)" />
                <path d="M 9.5 15 L 9.5 32 Q 10 34 10.5 32 L 10.5 15 Z" fill="#9B5F44" opacity="0.8" />
                <circle cx="10" cy="9" r="8" fill="#9B5F44" />
                <circle cx="10" cy="9" r="8" stroke="rgba(0,0,0,0.18)" strokeWidth="0.8" fill="none" />
                <ellipse cx="7.5" cy="6.5" rx="3.5" ry="2.5" fill="rgba(255,255,255,0.24)" />
                <circle cx="6.8" cy="6" r="1.1" fill="rgba(255,255,255,0.38)" />
              </svg>
            </div>

            <div className="photo-frame" style={{
              width: "clamp(140px, 20vw, 260px)",
              height: "clamp(180px, 26vw, 340px)",
              transform: "rotate(5deg) translateY(-18px)",
              borderRadius: "4px",
              animation: "fadeUp 1.1s cubic-bezier(0.22,1,0.36,1) 0.35s both",
            }}>
              <div style={{
                width: "100%", height: "100%",
                background: "linear-gradient(160deg, #bfbcb2 0%, #a8a598 100%)",
                display: "flex", flexDirection: "column",
                alignItems: "center", justifyContent: "center", gap: "8px",
              }}>
                <svg width="36" height="44" viewBox="0 0 44 54" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ opacity: 0.22 }}>
                  <ellipse cx="22" cy="16" rx="12" ry="14" fill="rgba(28,28,26,0.8)" />
                  <path d="M2 52c0-11 9-20 20-20s20 9 20 20" stroke="rgba(28,28,26,0.8)" strokeWidth="1.5" fill="none" />
                </svg>
                <span style={{ fontFamily: "var(--font-sans)", fontSize: "10px", letterSpacing: "0.1em", color: "rgba(28,28,26,0.28)", textTransform: "uppercase" }}>Photo</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Spinning circular text */}
      <div style={{
        position: "absolute",
        right: "clamp(20px, 5vw, 80px)", top: "50%",
        transform: "translateY(-50%)",
        width: "clamp(110px, 14vw, 180px)",
        height: "clamp(110px, 14vw, 180px)",
        zIndex: 4,
      }}>
        <svg className="spin-ccw" viewBox="0 0 180 180" style={{ width: "100%", height: "100%", opacity: 0.45 }}>
          <defs>
            <path id="abt-ring" d="M 90,90 m -68,0 a 68,68 0 1,1 136,0 a 68,68 0 1,1 -136,0" />
          </defs>
          <text style={{ fontFamily: "var(--font-sans)", fontSize: "9.5px", fill: "var(--charcoal)", letterSpacing: "4.5px" }}>
            <textPath href="#abt-ring">CREATIVE DIRECTOR · CURATOR · FOUNDER ·</textPath>
          </text>
        </svg>
      </div>

      {/*
        ─── SUBTLE DOODLE: Small wavy underline scribble ───
        Placed bottom-right of the section, very faint.
        Like a notebook margin doodle — editorial, not childish.
      */}
      <div style={{
        position: "absolute",
        bottom: "clamp(30px, 5vw, 56px)",
        right: "clamp(80px, 12vw, 160px)",
        zIndex: 4,
        opacity: 0.18,
        pointerEvents: "none",
      }} aria-hidden="true">
        <svg width="72" height="22" viewBox="0 0 72 22" fill="none">
          <path
            d="M 2 14 C 10 8, 18 20, 26 14 C 34 8, 42 20, 50 14 C 58 8, 66 18, 70 14"
            stroke="var(--charcoal)"
            strokeWidth="1.4"
            strokeLinecap="round"
            fill="none"
          />
          <path
            d="M 8 18 C 16 12, 24 24, 32 18 C 40 12, 48 24, 56 18 C 62 13, 67 20, 70 18"
            stroke="var(--charcoal)"
            strokeWidth="0.8"
            strokeLinecap="round"
            fill="none"
            opacity="0.5"
          />
        </svg>
      </div>

      <style jsx>{`
        @media (max-width: 768px) {
          .about-top { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}