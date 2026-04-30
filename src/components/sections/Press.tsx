"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const pressItems = [
  { source: "Placeholder Media", title: "The creative director redefining how Africa tells its story", year: "2024", type: "Feature" },
  { source: "Placeholder Mag", title: "Afronated and the new wave of African media collectives", year: "2024", type: "Interview" },
  { source: "Placeholder Podcast", title: "On building a brand from culture, not capital", year: "2023", type: "Podcast" },
  { source: "Placeholder Forum", title: "Creative curation as an act of cultural preservation", year: "2023", type: "Talk" },
  { source: "Placeholder Review", title: "Why Afronated is the platform African creatives needed", year: "2022", type: "Review" },
  { source: "Placeholder Panel", title: "Young founders shaping African creative media in 2022", year: "2022", type: "Panel" },
];

export default function Press() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.utils.toArray<HTMLElement>(".press-item").forEach((el, i) => {
        gsap.fromTo(el,
          { y: 30, opacity: 0 },
          {
            y: 0, opacity: 1, duration: 0.6, ease: "power2.out",
            delay: i * 0.08,
            scrollTrigger: { trigger: el, start: "top 92%" }
          }
        );
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="press"
      ref={sectionRef}
      style={{
        padding: "clamp(80px, 12vw, 160px) clamp(24px, 6vw, 80px)",
        background: "var(--bg-dark)",
        position: "relative",
      }}
    >
      <div style={{ maxWidth: "var(--container-max)", margin: "0 auto" }}>
        <div style={{ marginBottom: "clamp(40px, 6vw, 80px)" }}>
          <h2 style={{
            fontFamily: "var(--font-serif)",
            fontSize: "clamp(44px, 7vw, 100px)",
            lineHeight: 0.95,
            letterSpacing: "-0.02em",
            color: "var(--cream)",
          }}>
            <span style={{ fontStyle: "italic" }}>In the Room</span>
            <br />& Spotlight
          </h2>
          <p style={{
            fontFamily: "var(--font-sans)",
            fontSize: "clamp(14px, 1.3vw, 16px)",
            fontWeight: 300,
            color: "var(--cream-muted)",
            marginTop: "16px",
            maxWidth: "480px",
            lineHeight: 1.7,
          }}>
            Press features, podcast appearances, panel talks, and media coverage —
            placeholder content ready to be updated with real links.
          </p>
        </div>

        {/* Press list */}
        <div style={{ display: "flex", flexDirection: "column" }}>
          {pressItems.map((item, i) => (
            <div
              key={i}
              className="press-item"
              style={{
                display: "flex",
                alignItems: "center",
                gap: "clamp(16px, 3vw, 32px)",
                padding: "clamp(16px, 2.5vw, 28px) 0",
                borderTop: "1px solid rgba(200,134,42,0.1)",
                cursor: "pointer",
                transition: "background 0.3s ease",
                borderRadius: "0",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.paddingLeft = "12px";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.paddingLeft = "0";
              }}
            >
              <span style={{
                fontFamily: "var(--font-sans)",
                fontSize: "11px",
                letterSpacing: "0.12em",
                color: "var(--terracotta)",
                textTransform: "uppercase",
                minWidth: "70px",
                flexShrink: 0,
              }}>
                {item.type}
              </span>

              <span style={{
                fontFamily: "var(--font-sans)",
                fontSize: "11px",
                letterSpacing: "0.08em",
                color: "var(--cream-muted)",
                opacity: 0.5,
                minWidth: "130px",
                flexShrink: 0,
              }}>
                {item.source}
              </span>

              <span style={{
                fontFamily: "var(--font-serif)",
                fontStyle: "italic",
                fontSize: "clamp(15px, 1.8vw, 22px)",
                color: "var(--cream)",
                flex: 1,
                transition: "color 0.3s ease",
              }}>
                {item.title}
              </span>

              <span style={{
                fontFamily: "var(--font-sans)",
                fontSize: "12px",
                color: "var(--cream-muted)",
                opacity: 0.4,
                flexShrink: 0,
              }}>
                {item.year}
              </span>

              <span style={{
                fontFamily: "var(--font-sans)",
                fontSize: "16px",
                color: "var(--gold)",
                opacity: 0.6,
                flexShrink: 0,
                transition: "opacity 0.3s ease",
              }}>
                ↗
              </span>
            </div>
          ))}
          <div style={{ borderTop: "1px solid rgba(200,134,42,0.1)" }} />
        </div>
      </div>
    </section>
  );
}
