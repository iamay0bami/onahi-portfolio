"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const features = [
  { label: "Spotlight Interviews", description: "Long-form conversations with African creatives shaping culture globally." },
  { label: "Editorial Content", description: "Visual storytelling that captures the texture and depth of African creative life." },
  { label: "Cultural Coverage", description: "From Lagos art weeks to diaspora movements — we document what matters." },
  { label: "Community Building", description: "A collective of voices, collaborators, and builders amplifying each other." },
];

export default function Afronated() {
  const sectionRef = useRef<HTMLElement>(null);
  const headlineRef = useRef<HTMLDivElement>(null);
  const circleTextRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(headlineRef.current,
        { y: 60, opacity: 0 },
        {
          y: 0, opacity: 1, duration: 1, ease: "power3.out",
          scrollTrigger: { trigger: headlineRef.current, start: "top 80%" }
        }
      );

      gsap.fromTo(circleTextRef.current,
        { scale: 0.8, opacity: 0 },
        {
          scale: 1, opacity: 1, duration: 1.2, ease: "power3.out",
          scrollTrigger: { trigger: circleTextRef.current, start: "top 85%" }
        }
      );

      gsap.utils.toArray<HTMLElement>(".afronated-card").forEach((el, i) => {
        gsap.fromTo(el,
          { y: 40, opacity: 0 },
          {
            y: 0, opacity: 1, duration: 0.7, ease: "power2.out",
            delay: i * 0.1,
            scrollTrigger: { trigger: el, start: "top 90%" }
          }
        );
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="afronated"
      ref={sectionRef}
      style={{
        padding: "clamp(80px, 12vw, 160px) clamp(24px, 6vw, 80px)",
        background: "var(--bg-section)",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Warm glow */}
      <div style={{
        position: "absolute",
        right: "-10%", bottom: "-20%",
        width: "600px", height: "600px",
        borderRadius: "50%",
        background: "radial-gradient(circle, rgba(181,82,46,0.07) 0%, transparent 65%)",
        pointerEvents: "none",
      }} />

      <div style={{ maxWidth: "var(--container-max)", margin: "0 auto" }}>
        <div style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "clamp(40px, 8vw, 100px)",
          alignItems: "center",
          marginBottom: "clamp(60px, 8vw, 100px)",
        }} className="afronated-grid">

          {/* Left: text */}
          <div ref={headlineRef}>
            <span style={{
              fontFamily: "var(--font-sans)",
              fontSize: "12px",
              letterSpacing: "0.2em",
              color: "var(--terracotta)",
              textTransform: "uppercase",
              display: "block",
              marginBottom: "16px",
            }}>
              The Collective
            </span>
            <h2 style={{
              fontFamily: "var(--font-serif)",
              fontSize: "clamp(48px, 8vw, 110px)",
              lineHeight: 0.9,
              letterSpacing: "-0.02em",
              color: "var(--cream)",
              marginBottom: "clamp(20px, 3vw, 32px)",
            }}>
              Afron<span style={{ fontStyle: "italic", color: "var(--gold)" }}>ated</span>
            </h2>
            <p style={{
              fontFamily: "var(--font-sans)",
              fontSize: "clamp(15px, 1.4vw, 18px)",
              fontWeight: 300,
              color: "var(--cream-muted)",
              lineHeight: 1.8,
              maxWidth: "480px",
              marginBottom: "28px",
            }}>
              A creative media collective amplifying African voices through powerful
              storytelling, spotlight interviews, and cultural excellence.
              Based in Africa. Built for the world.
            </p>
            <a
              href="https://afronated.com"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
            >
              Visit Afronated ↗
            </a>
          </div>

          {/* Right: spinning circle */}
          <div
            ref={circleTextRef}
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              position: "relative",
            }}
          >
            <div style={{
              width: "clamp(200px, 28vw, 360px)",
              height: "clamp(200px, 28vw, 360px)",
              borderRadius: "50%",
              border: "1px solid rgba(200,134,42,0.2)",
              position: "relative",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}>
              <svg
                className="spin-slow"
                viewBox="0 0 300 300"
                style={{
                  position: "absolute",
                  inset: 0, width: "100%", height: "100%",
                  opacity: 0.6,
                }}
              >
                <defs>
                  <path
                    id="afronated-circle"
                    d="M 150,150 m -110,0 a 110,110 0 1,1 220,0 a 110,110 0 1,1 -220,0"
                  />
                </defs>
                <text style={{ fontFamily: "var(--font-sans)", fontSize: "12px", fill: "var(--gold)", letterSpacing: "5px" }}>
                  <textPath href="#afronated-circle">
                    AMPLIFYING AFRICAN VOICES · CREATIVE MEDIA · STORYTELLING ·
                  </textPath>
                </text>
              </svg>
              <div style={{ textAlign: "center", zIndex: 2 }}>
                <div style={{
                  fontFamily: "var(--font-serif)",
                  fontStyle: "italic",
                  fontSize: "clamp(22px, 3vw, 36px)",
                  color: "var(--gold)",
                  lineHeight: 1.2,
                }}>
                  Afronated
                </div>
                <div style={{
                  fontFamily: "var(--font-sans)",
                  fontSize: "11px",
                  color: "var(--cream-muted)",
                  letterSpacing: "0.1em",
                  marginTop: "6px",
                  opacity: 0.6,
                }}>
                  EST. 2021
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Feature cards */}
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
          gap: "clamp(12px, 2vw, 20px)",
        }}>
          {features.map((f, i) => (
            <div key={i} className="afronated-card value-card">
              <div style={{
                width: 36, height: 36, borderRadius: "50%",
                background: i % 2 === 0 ? "rgba(200,134,42,0.2)" : "rgba(181,82,46,0.2)",
                display: "flex", alignItems: "center", justifyContent: "center",
                flexShrink: 0,
                fontFamily: "var(--font-serif)",
                fontStyle: "italic",
                fontSize: "14px",
                color: i % 2 === 0 ? "var(--gold)" : "var(--terracotta)",
              }}>
                {i + 1}
              </div>
              <div>
                <div style={{
                  fontFamily: "var(--font-sans)",
                  fontSize: "14px",
                  fontWeight: 500,
                  color: "var(--cream)",
                  marginBottom: "4px",
                }}>
                  {f.label}
                </div>
                <div style={{
                  fontFamily: "var(--font-sans)",
                  fontSize: "13px",
                  fontWeight: 300,
                  color: "var(--cream-muted)",
                  lineHeight: 1.5,
                  opacity: 0.75,
                }}>
                  {f.description}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        @media (max-width: 768px) {
          .afronated-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
