"use client";
import { useEffect, useRef } from "react";
import { gsap } from "@/lib/gsap";

export default function Afronated() {
  const sectionRef = useRef<HTMLElement>(null);
  const photoRef   = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Only continuous float animation — no initial opacity changes
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

      {/* Floating diary photo — CSS animated */}
      <div
        ref={photoRef}
        style={{
          position: "absolute",
          top: "clamp(40px, 6vw, 80px)",
          left: "clamp(16px, 3vw, 48px)",
          zIndex: 5,
          transform: "rotate(-5deg)",
          animation: "fadeIn 1s ease 0.2s both",
        }}
      >
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

          {/* Left — CSS animated */}
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

          {/* Right — spinning ring + photo — CSS animated */}
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

        {/* Feature cards — CSS animated with stagger */}
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