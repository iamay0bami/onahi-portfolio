"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const values = [
  { icon: "◎", title: "Culture is the foundation", description: "Everything starts from culture — it shapes how we see, what we build, and who we build it for." },
  { icon: "◈", title: "Storytelling is a superpower", description: "The right story told with intention can change minds, shift culture, and open doors." },
  { icon: "◉", title: "Community over competition", description: "African creativity thrives when we amplify each other. There's room for all of us at the top." },
  { icon: "◇", title: "Excellence in every detail", description: "From concept to execution — if it carries my name, it has to be done with full intention." },
];

export default function Values() {
  const sectionRef = useRef<HTMLElement>(null);
  const quoteRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Quote reveal - word by word
      const words = quoteRef.current?.querySelectorAll<HTMLSpanElement>(".word");
      if (words) {
        gsap.fromTo(words,
          { y: 20, opacity: 0 },
          {
            y: 0, opacity: 1, duration: 0.6, ease: "power2.out",
            stagger: 0.04,
            scrollTrigger: { trigger: quoteRef.current, start: "top 80%" }
          }
        );
      }

      gsap.utils.toArray<HTMLElement>(".value-card-item").forEach((el, i) => {
        gsap.fromTo(el,
          { y: 40, opacity: 0 },
          {
            y: 0, opacity: 1, duration: 0.7, ease: "power2.out",
            delay: i * 0.12,
            scrollTrigger: { trigger: el, start: "top 90%" }
          }
        );
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const quoteText = `"For me, creativity is about amplifying what already exists — the culture, the people, the stories. My job is to make it undeniable."`;

  return (
    <section
      id="values"
      ref={sectionRef}
      style={{
        padding: "clamp(80px, 12vw, 160px) clamp(24px, 6vw, 80px)",
        background: "var(--bg-warm)",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <div style={{ maxWidth: "var(--container-max)", margin: "0 auto" }}>

        {/* Header */}
        <div style={{
          display: "grid",
          gridTemplateColumns: "auto 1fr",
          gap: "clamp(40px, 8vw, 100px)",
          alignItems: "start",
          marginBottom: "clamp(60px, 8vw, 100px)",
        }} className="values-header-grid">
          <div>
            <span style={{
              fontFamily: "var(--font-sans)",
              fontSize: "12px",
              letterSpacing: "0.2em",
              color: "var(--gold)",
              textTransform: "uppercase",
              display: "block",
              marginBottom: "16px",
            }}>
              I follow and believe in
            </span>
            <h2 style={{
              fontFamily: "var(--font-serif)",
              fontSize: "clamp(40px, 6vw, 80px)",
              lineHeight: 0.95,
              letterSpacing: "-0.02em",
              color: "var(--cream)",
              whiteSpace: "nowrap",
            }}>
              Key <span style={{ fontStyle: "italic" }}>Principles</span>
            </h2>
          </div>

          {/* Quote */}
          <div
            ref={quoteRef}
            style={{
              paddingTop: "clamp(12px, 2vw, 24px)",
              maxWidth: "540px",
            }}
          >
            <div style={{
              fontFamily: "var(--font-serif)",
              fontStyle: "italic",
              fontSize: "clamp(16px, 1.8vw, 22px)",
              color: "var(--cream-muted)",
              lineHeight: 1.6,
            }}>
              {quoteText.split(" ").map((word, i) => (
                <span key={i} className="word" style={{ display: "inline-block", marginRight: "0.3em" }}>
                  {word}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Value cards */}
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(2, 1fr)",
          gap: "clamp(12px, 2vw, 20px)",
        }} className="values-cards-grid">
          {values.map((v, i) => (
            <div key={i} className="value-card value-card-item" style={{ alignItems: "flex-start" }}>
              <div style={{
                width: 44, height: 44, borderRadius: "50%",
                background: i % 3 === 0
                  ? "rgba(200,134,42,0.18)"
                  : i % 3 === 1
                    ? "rgba(181,82,46,0.18)"
                    : "rgba(45,74,53,0.25)",
                display: "flex", alignItems: "center", justifyContent: "center",
                flexShrink: 0,
                fontSize: "18px",
                color: i % 3 === 0 ? "var(--gold)" : i % 3 === 1 ? "var(--terracotta)" : "var(--forest-light)",
              }}>
                {v.icon}
              </div>
              <div>
                <div style={{
                  fontFamily: "var(--font-sans)",
                  fontSize: "clamp(14px, 1.3vw, 16px)",
                  fontWeight: 500,
                  color: "var(--cream)",
                  marginBottom: "8px",
                }}>
                  {v.title}
                </div>
                <div style={{
                  fontFamily: "var(--font-sans)",
                  fontSize: "clamp(13px, 1.1vw, 14px)",
                  fontWeight: 300,
                  color: "var(--cream-muted)",
                  lineHeight: 1.6,
                  opacity: 0.8,
                }}>
                  {v.description}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        @media (max-width: 768px) {
          .values-header-grid { grid-template-columns: 1fr !important; }
          .values-cards-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
