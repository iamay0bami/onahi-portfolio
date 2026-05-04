"use client";

const SERVICES = [
  { label: "Creative Direction",    desc: "End-to-end creative leadership — from concept through execution across campaigns, brands, and media." },
  { label: "Curation",             desc: "Selecting, shaping, and presenting stories and art that resonate. Culture-led, community-driven." },
  { label: "Media & Storytelling", desc: "Producing editorial content, spotlights, and narratives that amplify African voices." },
  { label: "Brand Consulting",     desc: "Helping brands discover their cultural identity and communicate it with clarity and intention." },
  { label: "Workshops",            desc: "Interactive creative sessions for teams, students, and collectives ready to think differently." },
];

export default function WhatIDo() {
  return (
    <section
      id="what"
      className="pinstripe"
      style={{
        background: "var(--sage)",
        position: "relative",
        padding: "clamp(80px,12vw,160px) var(--container-pad)",
        overflow: "hidden",
        // NO decorative semi-circular shape — clean background
      }}
    >
      {/* Removed: the faint bowl/semi-circular outline div that was here */}

      <div className="wrap">
        <div style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "clamp(40px,8vw,96px)",
          alignItems: "start",
        }} className="what-grid">

          {/* Left — big heading — CSS animated */}
          <div style={{ animation: "fadeUp 0.9s cubic-bezier(0.22,1,0.36,1) 0.1s both" }}>
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

          {/* Right — service rows — CSS animated with stagger */}
          <div style={{ paddingTop: "clamp(8px,1vw,16px)" }}>
            {SERVICES.map((s, i) => (
              <div
                key={i}
                style={{
                  borderTop: "1px solid rgba(28,28,26,0.1)",
                  padding: "clamp(14px,2vw,22px) 0",
                  display: "flex", flexDirection: "column", gap: "4px",
                  animation: `slideInLeft 0.7s cubic-bezier(0.22,1,0.36,1) ${0.15 + i * 0.08}s both`,
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