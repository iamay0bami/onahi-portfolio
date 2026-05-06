"use client";
import { useEffect, useRef } from "react";
import { gsap } from "@/lib/gsap";

export default function Afronated() {
  const sectionRef = useRef<HTMLElement>(null);
  const photoRef   = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.to(photoRef.current, {
        rotate: -3, y: -6, duration: 3.5, ease: "sine.inOut", yoyo: true, repeat: -1, delay: 0.5,
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="afronated"
      ref={sectionRef}
      className="pinstripe"
      style={{
        background: "var(--cream)",
        position: "relative",
        padding: "clamp(80px,12vw,160px) var(--container-pad)",
        overflow: "hidden",
      }}
    >
      {/* Large faint watermark text */}
      <div aria-hidden style={{
        position: "absolute", right: "-2%", bottom: "-4%",
        fontFamily: "var(--font-serif)", fontSize: "clamp(100px,18vw,280px)",
        fontStyle: "italic", fontWeight: 300,
        color: "rgba(107,117,96,0.07)",
        lineHeight: 1, pointerEvents: "none", userSelect: "none",
        whiteSpace: "nowrap",
      }}>Afronated</div>

      {/*
        ─── INK / PRESS MARK — top left ───
        A faint rectangular press mark with a smudge — the kind that
        appears on physical printed matter (zines, magazines, editorial
        books). Single instance, one corner only. References the print/
        media world Onahi operates in. Extremely subtle at 0.09 opacity.
      */}
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          top: "clamp(36px, 5vw, 56px)",
          left: "clamp(20px, 3vw, 40px)",
          zIndex: 2,
          opacity: 0.09,
          pointerEvents: "none",
          transform: "rotate(-2deg)",
        }}
      >
        <svg width="52" height="32" viewBox="0 0 52 32" fill="none">
          {/* Outer rectangle — the stamp border */}
          <rect x="1" y="1" width="50" height="30" rx="1" stroke="var(--charcoal)" strokeWidth="1.2" fill="none" />
          {/* Inner double-line border — like a real rubber stamp */}
          <rect x="4" y="4" width="44" height="24" rx="0.5" stroke="var(--charcoal)" strokeWidth="0.5" fill="none" />
          {/* Stamp text */}
          <text x="26" y="13" textAnchor="middle" style={{ fontFamily: "var(--font-sans)", fontSize: "5px", letterSpacing: "2px", fill: "var(--charcoal)", textTransform: "uppercase" }}>AFRONATED</text>
          <text x="26" y="21" textAnchor="middle" style={{ fontFamily: "var(--font-sans)", fontSize: "4px", letterSpacing: "1.5px", fill: "var(--charcoal)" }}>LAGOS · MEDIA</text>
          {/* Smudge/blur mark — an imperfect ink edge */}
          <path d="M 2 28 Q 8 30 14 27 Q 10 29 6 31" stroke="var(--charcoal)" strokeWidth="0.6" fill="none" opacity="0.5" />
        </svg>
      </div>

      {/* Polaroid with board pin — bottom-right corner */}
      <div
        ref={photoRef}
        style={{
          position: "absolute",
          bottom: "clamp(32px, 5vw, 64px)",
          right: "clamp(32px, 5vw, 72px)",
          zIndex: 5,
          transform: "rotate(4deg)",
          animation: "fadeIn 1s ease 0.2s both",
        }}
      >
        {/* Sage green pin */}
        <div style={{
          position: "absolute",
          top: "-22px",
          left: "48%",
          transform: "translateX(-50%) rotate(5deg)",
          zIndex: 10,
          filter: "drop-shadow(0 3px 7px rgba(0,0,0,0.26))",
        }}>
          <svg width="20" height="32" viewBox="0 0 20 32" fill="none" xmlns="http://www.w3.org/2000/svg">
            <ellipse cx="10" cy="16" rx="5" ry="1.4" fill="rgba(0,0,0,0.14)" />
            <path d="M 9.5 14 L 9.5 30 Q 10 32 10.5 30 L 10.5 14 Z" fill="#6B7560" opacity="0.85" />
            <circle cx="10" cy="8.5" r="8" fill="#6B7560" />
            <circle cx="10" cy="8.5" r="8" stroke="rgba(0,0,0,0.18)" strokeWidth="0.9" fill="none" />
            <ellipse cx="7.5" cy="6" rx="3.5" ry="2.4" fill="rgba(255,255,255,0.26)" />
            <circle cx="6.8" cy="5.5" r="1.1" fill="rgba(255,255,255,0.38)" />
          </svg>
        </div>

        {/*
          ─── CROP MARKS on this Afronated photo ───
          Same editorial contact-sheet feel as the hero photo.
          Gives variety between photos (washi tape on About small photo,
          crop marks here and hero, pins on main photos).
        */}
        {/* TL */}
        <svg aria-hidden="true" width="14" height="14" viewBox="0 0 14 14" fill="none"
          style={{ position: "absolute", top: "-8px", left: "-8px", opacity: 0.2, zIndex: 12 }}>
          <path d="M 0 8 L 0 0 L 8 0" stroke="var(--charcoal)" strokeWidth="1" strokeLinecap="round" fill="none" />
        </svg>
        {/* TR */}
        <svg aria-hidden="true" width="14" height="14" viewBox="0 0 14 14" fill="none"
          style={{ position: "absolute", top: "-8px", right: "-8px", opacity: 0.2, zIndex: 12 }}>
          <path d="M 6 0 L 14 0 L 14 8" stroke="var(--charcoal)" strokeWidth="1" strokeLinecap="round" fill="none" />
        </svg>
        {/* BL */}
        <svg aria-hidden="true" width="14" height="14" viewBox="0 0 14 14" fill="none"
          style={{ position: "absolute", bottom: "-8px", left: "-8px", opacity: 0.2, zIndex: 12 }}>
          <path d="M 0 6 L 0 14 L 8 14" stroke="var(--charcoal)" strokeWidth="1" strokeLinecap="round" fill="none" />
        </svg>
        {/* BR */}
        <svg aria-hidden="true" width="14" height="14" viewBox="0 0 14 14" fill="none"
          style={{ position: "absolute", bottom: "-8px", right: "-8px", opacity: 0.2, zIndex: 12 }}>
          <path d="M 6 14 L 14 14 L 14 6" stroke="var(--charcoal)" strokeWidth="1" strokeLinecap="round" fill="none" />
        </svg>

        <div className="photo-frame" style={{
          width: "clamp(90px, 11vw, 145px)",
          height: "clamp(115px, 14vw, 185px)",
          borderRadius: "3px",
        }}>
          <div style={{
            width: "100%", height: "78%",
            background: "linear-gradient(145deg, #c4c0b0 0%, #b2ae9e 100%)",
            display: "flex", alignItems: "center", justifyContent: "center",
          }}>
            <span style={{ fontFamily: "var(--font-serif)", fontStyle: "italic", fontSize: "16px", color: "rgba(28,28,26,0.22)" }}>✦</span>
          </div>
          <div style={{
            height: "22%", background: "rgba(255,255,255,0.65)",
            display: "flex", alignItems: "center", justifyContent: "center",
          }}>
            <span style={{ fontFamily: "var(--font-serif)", fontStyle: "italic", fontSize: "8px", color: "rgba(28,28,26,0.32)" }}>Afronated ✦</span>
          </div>
        </div>
      </div>

      <div className="wrap">
        <div style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "clamp(40px, 8vw, 96px)",
          alignItems: "center",
        }} className="afrn-grid">

          {/* Left — label + title + body + CTA */}
          <div>
            <span style={{
              display: "block",
              fontFamily: "var(--font-sans)", fontSize: "11px", letterSpacing: "0.22em",
              textTransform: "uppercase", color: "var(--terracotta)",
              marginBottom: "14px", fontWeight: 300,
              animation: "fadeUp 0.85s cubic-bezier(0.22,1,0.36,1) 0.1s both",
            }}>The Collective</span>

            <h2 style={{
              fontFamily: "var(--font-serif)", fontWeight: 300,
              fontSize: "clamp(48px, 7.5vw, 108px)",
              lineHeight: 0.9, letterSpacing: "-0.02em",
              color: "var(--charcoal)",
              marginBottom: "clamp(18px, 2.5vw, 28px)",
              animation: "fadeUp 0.85s cubic-bezier(0.22,1,0.36,1) 0.2s both",
            }}>
              Afron<em style={{ fontStyle: "italic" }}>ated</em>
            </h2>

            <p style={{
              fontFamily: "var(--font-sans)", fontSize: "clamp(14px,1.35vw,17px)",
              fontWeight: 300, lineHeight: 1.8, color: "var(--charcoal-soft)",
              maxWidth: "460px", marginBottom: "28px",
              animation: "fadeUp 0.85s cubic-bezier(0.22,1,0.36,1) 0.3s both",
            }}>
              A creative media collective amplifying African voices through powerful
              storytelling, spotlight interviews, and cultural excellence.
              Based in Africa. Built for the world.
            </p>

            <a
              href="https://afronated.com" target="_blank" rel="noopener noreferrer"
              className="contact-pill"
              style={{
                background: "var(--charcoal)", color: "var(--cream)",
                animation: "fadeUp 0.85s cubic-bezier(0.22,1,0.36,1) 0.4s both",
                display: "inline-block",
              }}
            >
              Visit Afronated ↗
            </a>
          </div>

          {/* Right — spinning ring + photo placeholder */}
          <div style={{
            display: "flex", justifyContent: "center", alignItems: "center",
            position: "relative",
            animation: "fadeIn 1s ease 0.3s both",
          }}>
            <div style={{
              width: "clamp(200px, 28vw, 360px)",
              height: "clamp(200px, 28vw, 360px)",
              borderRadius: "50%",
              border: "1px solid rgba(28,28,26,0.15)",
              position: "relative",
              display: "flex", alignItems: "center", justifyContent: "center",
            }}>
              <svg className="spin-cw" viewBox="0 0 300 300"
                style={{ position: "absolute", inset: 0, width: "100%", height: "100%", opacity: 0.5 }}>
                <defs>
                  <path id="afrn-ring" d="M 150,150 m -112,0 a 112,112 0 1,1 224,0 a 112,112 0 1,1 -224,0" />
                </defs>
                <text style={{ fontFamily: "var(--font-sans)", fontSize: "11px", fill: "var(--charcoal)", letterSpacing: "5px" }}>
                  <textPath href="#afrn-ring">
                    AMPLIFYING AFRICAN VOICES · CREATIVE MEDIA · STORYTELLING ·
                  </textPath>
                </text>
              </svg>

              <div style={{
                width: "58%", height: "58%", borderRadius: "50%",
                background: "linear-gradient(135deg, var(--cream-warm), var(--sage))",
                display: "flex", flexDirection: "column",
                alignItems: "center", justifyContent: "center", gap: "6px",
                overflow: "hidden", position: "relative", zIndex: 2,
                border: "6px solid var(--off-white)",
                boxShadow: "2px 3px 12px rgba(0,0,0,0.1)",
              }}>
                <span style={{ fontFamily: "var(--font-serif)", fontStyle: "italic", fontSize: "clamp(18px,2.5vw,28px)", color: "rgba(28,28,26,0.35)" }}>✦</span>
                <span style={{ fontFamily: "var(--font-sans)", fontSize: "9px", letterSpacing: "0.1em", color: "rgba(28,28,26,0.25)", textTransform: "uppercase" }}>Photo</span>
              </div>
            </div>
          </div>
        </div>

        {/* Feature cards */}
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(220px,1fr))",
          gap: "clamp(10px,1.5vw,18px)",
          marginTop: "clamp(56px,8vw,96px)",
        }}>
          {[
            { n: "Spotlight Interviews", d: "Long-form conversations with African creatives shaping culture globally." },
            { n: "Editorial Content",    d: "Visual storytelling that captures the texture and depth of African creative life." },
            { n: "Cultural Coverage",    d: "From Lagos art weeks to diaspora movements — we document what matters." },
            { n: "Community Building",  d: "A collective of voices, collaborators, and builders amplifying each other." },
          ].map((f, i) => (
            <div
              key={i}
              className="val-card"
              style={{ animation: `fadeUp 0.75s cubic-bezier(0.22,1,0.36,1) ${0.1 + i * 0.1}s both` }}
            >
              <div style={{
                width: 38, height: 38, borderRadius: "50%",
                background: i%2===0 ? "rgba(107,117,96,0.18)" : "rgba(155,95,68,0.15)",
                display: "flex", alignItems: "center", justifyContent: "center",
                flexShrink: 0,
                fontFamily: "var(--font-serif)", fontStyle: "italic", fontSize: "15px",
                color: i%2===0 ? "var(--sage-deep)" : "var(--terracotta)",
              }}>{i+1}</div>
              <div>
                <div style={{ fontFamily: "var(--font-sans)", fontSize: "14px", fontWeight: 400, color: "var(--charcoal)", marginBottom: "4px" }}>{f.n}</div>
                <div style={{ fontFamily: "var(--font-sans)", fontSize: "13px", fontWeight: 300, color: "var(--charcoal-soft)", lineHeight: 1.55, opacity: 0.8 }}>{f.d}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        @media (max-width: 768px) {
          .afrn-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}