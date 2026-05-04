"use client";
import { useEffect, useRef } from "react";
import { gsap, ScrollTrigger } from "@/lib/gsap";

const SERVICES = [
  { label: "Creative Direction",    desc: "End-to-end creative leadership — from concept through execution across campaigns, brands, and media." },
  { label: "Curation",             desc: "Selecting, shaping, and presenting stories and art that resonate. Culture-led, community-driven." },
  { label: "Media & Storytelling", desc: "Producing editorial content, spotlights, and narratives that amplify African voices." },
  { label: "Brand Consulting",     desc: "Helping brands discover their cultural identity and communicate it with clarity and intention." },
  { label: "Workshops",            desc: "Interactive creative sessions for teams, students, and collectives ready to think differently." },
];

export default function WhatIDo() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      const ctx = gsap.context(() => {
        gsap.utils.toArray<HTMLElement>(".what-row").forEach((el, i) => {
          gsap.fromTo(el,
            { x: -28, opacity: 0 },
            { x: 0, opacity: 1, duration: 0.7, ease: "power2.out", delay: i * 0.08,
              scrollTrigger: { trigger: el, start: "top 92%", once: true } }
          );
        });
        ScrollTrigger.refresh();
      }, sectionRef);

      return () => ctx.revert();
    }, 300);

    return () => clearTimeout(timer);
  }, []);

  return (
    <section
      id="what"
      ref={sectionRef}
      className="pinstripe"
      style={{
        background: "var(--sage)",
        position: "relative",
        padding: "clamp(80px,12vw,160px) var(--container-pad)",
        overflow: "hidden",
      }}
    >
      <div aria-hidden style={{
        position: "absolute",
        top: "50%", left: "50%",
        transform: "translate(-50%, -50%)",
        width: "clamp(500px, 72vw, 960px)",
        height: "clamp(250px, 36vw, 480px)",
        borderRadius: "0 0 50% 50% / 0 0 100% 100%",
        border: "1px solid rgba(28,28,26,0.08)",
        pointerEvents: "none",
      }} />

      <div className="wrap">
        <div style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "clamp(40px,8vw,96px)",
          alignItems: "start",
        }} className="what-grid">

          {/* Left — big heading */}
          <div className="what-row">
            <p style={{
              fontFamily: "var(--font-sans)", fontSize: "11px",
              letterSpacing: "0.22em", textTransform: "uppercase",
              color: "var(--sage-deep)", marginBottom: "14px", fontWeight: 300,
            }}>Let&apos;s see how I may help you</p>
            <h2 style={{
              fontFamily: "var(--font-serif)", fontWeight: 300,
              fontSize: "clamp(48px,7.5vw,108px)",
              lineHeight: 0.9, letterSpacing: "-0.025em",
              color: "var(--charcoal)",
            }}>
              What I<br/>
              <em style={{ fontStyle: "italic" }}>Do</em>
            </h2>
          </div>

          {/* Right — service rows */}
          <div style={{ paddingTop: "clamp(8px,1vw,16px)" }}>
            {SERVICES.map((s, i) => (
              <div
                key={i}
                className="what-row"
                style={{
                  borderTop: "1px solid rgba(28,28,26,0.1)",
                  padding: "clamp(14px,2vw,22px) 0",
                  display: "flex", flexDirection: "column", gap: "4px",
                }}
              >
                <div style={{
                  display: "flex", justifyContent: "space-between", alignItems: "baseline",
                }}>
                  <span style={{
                    fontFamily: "var(--font-serif)", fontStyle: "italic",
                    fontSize: "clamp(18px,2vw,26px)", fontWeight: 300,
                    color: "var(--charcoal)",
                  }}>{s.label}</span>
                  <span style={{
                    fontFamily: "var(--font-sans)", fontSize: "13px",
                    color: "var(--sage-deep)", opacity: 0.7,
                  }}>↗</span>
                </div>
                <p style={{
                  fontFamily: "var(--font-sans)", fontSize: "clamp(12px,1.1vw,14px)",
                  fontWeight: 300, color: "var(--charcoal-soft)", lineHeight: 1.6, opacity: 0.85,
                }}>{s.desc}</p>
              </div>
            ))}
            <div style={{ borderTop: "1px solid rgba(28,28,26,0.1)" }} />
          </div>
        </div>
      </div>

      <style jsx>{`
        @media (max-width: 768px) { .what-grid { grid-template-columns: 1fr !important; } }
      `}</style>
    </section>
  );
}