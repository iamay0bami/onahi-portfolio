"use client";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const PRESS = [
  { type: "Feature",   source: "Placeholder Media",   title: "The creative director redefining how Africa tells its story",       year: "2024" },
  { type: "Interview", source: "Placeholder Mag",      title: "Afronated and the new wave of African media collectives",           year: "2024" },
  { type: "Podcast",   source: "Placeholder Cast",     title: "On building a brand from culture, not capital",                     year: "2023" },
  { type: "Talk",      source: "Placeholder Forum",    title: "Creative curation as an act of cultural preservation",              year: "2023" },
  { type: "Review",    source: "Placeholder Review",   title: "Why Afronated is the platform African creatives needed",            year: "2022" },
  { type: "Panel",     source: "Placeholder Panel",    title: "Young founders shaping African creative media in 2022",             year: "2022" },
];

export default function Press() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.utils.toArray<HTMLElement>(".press-row").forEach((el, i) => {
        gsap.fromTo(el,
          { y: 24, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.62, ease: "power2.out", delay: i * 0.07,
            scrollTrigger: { trigger: el, start: "top 93%" } }
        );
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section
      id="press"
      ref={sectionRef}
      className="pinstripe"
      style={{
        background: "var(--cream)",
        position: "relative",
        padding: "clamp(80px,12vw,160px) var(--container-pad)",
      }}
    >
      <div className="wrap">
        <div style={{ marginBottom: "clamp(36px,5vw,72px)" }}>
          <h2 style={{
            fontFamily: "var(--font-serif)", fontWeight: 300,
            fontSize: "clamp(44px,6.5vw,96px)",
            lineHeight: 0.95, letterSpacing: "-0.02em", color: "var(--charcoal)",
          }}>
            <em style={{ fontStyle: "italic" }}>In the Room</em>
            <br />&amp; Spotlight
          </h2>
          <p style={{
            fontFamily: "var(--font-sans)", fontSize: "clamp(13px,1.25vw,15px)",
            fontWeight: 300, color: "var(--charcoal-soft)",
            marginTop: "14px", maxWidth: "440px", lineHeight: 1.7, opacity: 0.85,
          }}>
            Press features, podcast appearances, panel talks, and media coverage —
            placeholders ready to be updated with real links.
          </p>
        </div>

        <div>
          {PRESS.map((item, i) => (
            <div
              key={i}
              className="press-row"
              style={{
                borderTop: "1px solid rgba(28,28,26,0.1)",
                padding: "clamp(14px,2.2vw,26px) 0",
                display: "flex", alignItems: "center",
                gap: "clamp(12px,2vw,28px)",
                cursor: "pointer",
                transition: "padding-left 0.3s ease",
              }}
              onMouseEnter={e => (e.currentTarget.style.paddingLeft = "10px")}
              onMouseLeave={e => (e.currentTarget.style.paddingLeft = "0")}
            >
              {/* Type badge */}
              <span style={{
                fontFamily: "var(--font-sans)", fontSize: "10px",
                letterSpacing: "0.14em", textTransform: "uppercase",
                color: "var(--terracotta)", minWidth: "62px", flexShrink: 0, fontWeight: 400,
              }}>{item.type}</span>

              {/* Source */}
              <span style={{
                fontFamily: "var(--font-sans)", fontSize: "11px",
                letterSpacing: "0.06em", color: "var(--charcoal-soft)",
                opacity: 0.45, minWidth: "120px", flexShrink: 0,
              }}>{item.source}</span>

              {/* Title */}
              <span style={{
                fontFamily: "var(--font-serif)", fontStyle: "italic",
                fontSize: "clamp(14px,1.7vw,21px)", fontWeight: 300,
                color: "var(--charcoal)", flex: 1,
              }}>{item.title}</span>

              {/* Year */}
              <span style={{
                fontFamily: "var(--font-sans)", fontSize: "12px",
                color: "var(--charcoal-soft)", opacity: 0.35, flexShrink: 0,
              }}>{item.year}</span>

              <span style={{ color: "var(--sage-deep)", fontSize: "14px", flexShrink: 0, opacity: 0.6 }}>↗</span>
            </div>
          ))}
          <div style={{ borderTop: "1px solid rgba(28,28,26,0.1)" }} />
        </div>
      </div>
    </section>
  );
}
