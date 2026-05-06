"use client";
import { useEffect, useRef } from "react";
import { gsap } from "@/lib/gsap";

const VALUES = [
  { icon: "◎", title: "Culture is the foundation",       desc: "Everything starts from culture — it shapes how we see, what we build, and who we build it for." },
  { icon: "◈", title: "Storytelling is a superpower",    desc: "The right story told with intention can change minds, shift culture, and open doors." },
  { icon: "◉", title: "Community over competition",      desc: "African creativity thrives when we amplify each other. There's room for all of us at the top." },
  { icon: "◇", title: "Excellence in every detail",      desc: "From concept to execution — if it carries my name, it has to be done with full intention." },
];

const QUOTE = `"For me, creativity is about amplifying what already exists — the culture, the people, the stories. My job is to make it undeniable."`;

export default function Values() {
  const sectionRef = useRef<HTMLElement>(null);
  const photoRef   = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.to(photoRef.current, {
        y: -7, duration: 4, ease: "sine.inOut", yoyo: true, repeat: -1, delay: 0.5,
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="values"
      ref={sectionRef}
      className="pinstripe"
      style={{
        background: "var(--cream-warm)",
        position: "relative",
        padding: "clamp(80px,12vw,160px) var(--container-pad)",
        overflow: "hidden",
      }}
    >
      {/* Decorative large faint circle */}
      <div aria-hidden style={{
        position: "absolute", left: "-8%", bottom: "-15%",
        width: "clamp(280px,40vw,560px)", height: "clamp(280px,40vw,560px)",
        borderRadius: "50%",
        border: "1px solid rgba(107,117,96,0.18)",
        pointerEvents: "none",
      }} />

      {/* Diary photo with board pin */}
      <div
        ref={photoRef}
        style={{
          position: "absolute",
          bottom: "clamp(24px, 4vw, 56px)",
          left: "clamp(16px, 3vw, 44px)",
          zIndex: 5,
          transform: "rotate(-7deg)",
          animation: "fadeIn 1s ease 0.3s both",
        }}
      >
        {/* Gold pin — slightly off-center for natural feel */}
        <div style={{
          position: "absolute",
          top: "-24px",
          left: "45%",
          transform: "translateX(-50%) rotate(-4deg)",
          zIndex: 10,
          filter: "drop-shadow(0 4px 7px rgba(0,0,0,0.28))",
        }}>
          <svg width="22" height="36" viewBox="0 0 22 36" fill="none" xmlns="http://www.w3.org/2000/svg">
            <ellipse cx="11" cy="18" rx="5.5" ry="1.5" fill="rgba(0,0,0,0.15)" />
            <path d="M 10.5 16 L 10.5 34 Q 11 36 11.5 34 L 11.5 16 Z" fill="#8A7355" opacity="0.85" />
            <circle cx="11" cy="10" r="9" fill="#8A7355" />
            <circle cx="11" cy="10" r="9" stroke="rgba(0,0,0,0.2)" strokeWidth="1" fill="none" />
            <ellipse cx="8.5" cy="7" rx="4" ry="2.8" fill="rgba(255,255,255,0.28)" />
            <circle cx="7.5" cy="6.5" r="1.2" fill="rgba(255,255,255,0.42)" />
          </svg>
        </div>

        {/*
          ─── DIAGONAL MASKING TAPE STRIP ───
          A single strip of tape running diagonally across the top-right
          corner of the photo — like a label stub or a piece of masking
          tape used to annotate a reference photo on a real moodboard.
          Warm cream/amber translucent tone. This is the one instance
          of tape-as-diagonal on the whole site. Unique to this photo.
        */}
        <div
          aria-hidden="true"
          style={{
            position: "absolute",
            top: "12px",
            right: "-18px",
            width: "56px",
            height: "14px",
            background: "rgba(184,153,122,0.36)",
            borderRadius: "1px",
            zIndex: 11,
            transform: "rotate(42deg)",
            boxShadow: "inset 0 1px 0 rgba(255,255,255,0.28), 0 1px 3px rgba(0,0,0,0.10)",
          }}
        />

        <div className="photo-frame" style={{
          width: "clamp(88px, 11vw, 140px)",
          height: "clamp(115px, 14vw, 180px)",
          borderRadius: "3px",
        }}>
          <div style={{
            width: "100%", height: "78%",
            background: "linear-gradient(150deg, #cac4b4 0%, #b8b2a2 100%)",
            display: "flex", alignItems: "center", justifyContent: "center",
          }}>
            <span style={{ fontFamily: "var(--font-serif)", fontStyle: "italic", fontSize: "16px", color: "rgba(28,28,26,0.22)" }}>✦</span>
          </div>
          <div style={{
            height: "22%", background: "rgba(255,255,255,0.62)",
            display: "flex", alignItems: "center", justifyContent: "center",
          }}>
            <span style={{ fontFamily: "var(--font-serif)", fontStyle: "italic", fontSize: "8px", color: "rgba(28,28,26,0.32)" }}>my values ✦</span>
          </div>
        </div>
      </div>

      {/*
        ─── TOP RIGHT: Ruled lines cluster ───
        Matches the notebook aesthetic from About section but placed
        top-right here for compositional balance. These are the
        "notepad" moment — creative director's draft lines.
        Extremely faint at 0.08 opacity.
      */}
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          top: "clamp(40px, 6vw, 72px)",
          right: "clamp(28px, 5vw, 64px)",
          zIndex: 2,
          opacity: 0.08,
          pointerEvents: "none",
          transform: "rotate(-0.8deg)",
        }}
      >
        <svg width="56" height="34" viewBox="0 0 56 34" fill="none">
          <line x1="0" y1="7"  x2="56" y2="7"  stroke="var(--charcoal)" strokeWidth="1" />
          <line x1="0" y1="14" x2="56" y2="14" stroke="var(--charcoal)" strokeWidth="1" />
          <line x1="0" y1="21" x2="56" y2="21" stroke="var(--charcoal)" strokeWidth="1" />
          <line x1="0" y1="28" x2="56" y2="28" stroke="var(--charcoal)" strokeWidth="1" />
          <line x1="8" y1="0"  x2="8"  y2="34" stroke="var(--terracotta)" strokeWidth="0.6" opacity="0.45" />
        </svg>
      </div>

      <div className="wrap">
        {/* Header row */}
        <div style={{
          display: "grid",
          gridTemplateColumns: "auto 1fr",
          gap: "clamp(32px,6vw,80px)",
          alignItems: "start",
          marginBottom: "clamp(56px,8vw,96px)",
        }} className="val-header">

          <div style={{ animation: "fadeUp 0.9s cubic-bezier(0.22,1,0.36,1) 0.1s both" }}>
            <span style={{
              display: "block",
              fontFamily: "var(--font-sans)", fontSize: "11px",
              letterSpacing: "0.2em", textTransform: "uppercase",
              color: "var(--sage-deep)", marginBottom: "14px", fontWeight: 300,
            }}>I follow and believe in</span>
            <h2 style={{
              fontFamily: "var(--font-serif)", fontWeight: 300,
              fontSize: "clamp(40px,5.5vw,76px)",
              lineHeight: 0.95, letterSpacing: "-0.02em",
              color: "var(--charcoal)", whiteSpace: "nowrap",
            }}>
              Key <em style={{ fontStyle: "italic" }}>Principles</em>
            </h2>
          </div>

          <div style={{ paddingTop: "clamp(10px,1.5vw,20px)", maxWidth: "520px", animation: "fadeUp 0.9s cubic-bezier(0.22,1,0.36,1) 0.25s both" }}>
            <p style={{
              fontFamily: "var(--font-serif)", fontStyle: "italic", fontWeight: 300,
              fontSize: "clamp(15px,1.7vw,21px)",
              lineHeight: 1.6, color: "var(--charcoal-soft)",
            }}>
              {QUOTE}
            </p>
          </div>
        </div>

        {/* Value cards 2×2 */}
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(2,1fr)",
          gap: "clamp(10px,1.6vw,18px)",
        }} className="val-cards">
          {VALUES.map((v, i) => (
            <div
              key={i}
              className="val-card"
              style={{
                alignItems: "flex-start",
                animation: `fadeUp 0.75s cubic-bezier(0.22,1,0.36,1) ${0.1 + i * 0.1}s both`,
              }}
            >
              <div style={{
                width: 42, height: 42, borderRadius: "50%", flexShrink: 0,
                background: i % 3 === 0 ? "rgba(107,117,96,0.18)"
                          : i % 3 === 1 ? "rgba(155,95,68,0.14)"
                          : "rgba(138,115,85,0.16)",
                display: "flex", alignItems: "center", justifyContent: "center",
                fontSize: "17px",
                color: i % 3 === 0 ? "var(--sage-deep)"
                     : i % 3 === 1 ? "var(--terracotta)"
                     : "var(--gold)",
              }}>
                {v.icon}
              </div>
              <div>
                <div style={{
                  fontFamily: "var(--font-sans)", fontSize: "clamp(13px,1.2vw,15px)",
                  fontWeight: 400, color: "var(--charcoal)", marginBottom: "6px",
                }}>
                  {v.title}
                </div>
                <div style={{
                  fontFamily: "var(--font-sans)", fontSize: "clamp(12px,1.1vw,14px)",
                  fontWeight: 300, color: "var(--charcoal-soft)", lineHeight: 1.6, opacity: 0.85,
                }}>
                  {v.desc}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        @media (max-width: 768px) {
          .val-header { grid-template-columns: 1fr !important; }
          .val-cards  { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}