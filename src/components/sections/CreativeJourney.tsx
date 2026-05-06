"use client";

const SKILLS = [
  { category: "Creative",    items: ["Brand Identity", "Creative Direction", "Art Direction", "Mood Boarding", "Storyboarding", "Visual Curation"] },
  { category: "Media",       items: ["Content Strategy", "Copywriting", "Editorial", "Social Media", "Campaign Planning", "Photography Direction"] },
  { category: "Tools",       items: ["Canva Pro", "Adobe Suite", "Notion", "Figma (Basic)", "CapCut", "Lightroom"] },
  { category: "Soft Skills", items: ["Community Building", "Networking", "Pitching", "Collaboration", "Trend Forecasting", "Cultural Curation"] },
];

const HIGHLIGHTS = [
  { year: "2021 – Now", title: "Founder, Afronated",      desc: "Built a creative media collective from zero — growing a community, producing original content, and running a full editorial operation." },
  { year: "2023",       title: "Creative Direction Lead",  desc: "Led creative output for campaigns reaching thousands across West Africa and the diaspora, developing brand voice and visual language." },
  { year: "2024",       title: "Cultural Curation",        desc: "Curated a spotlight series on emerging African artists, handling end-to-end production from ideation to publication." },
  { year: "Ongoing",    title: "Open to Opportunities",    desc: "Available for creative direction, brand consulting, curation roles, and media collaborations. Let's build something meaningful." },
];

export default function CreativeJourney() {
  return (
    <section
      id="journey"
      className="pinstripe"
      style={{
        background: "var(--cream)",
        position: "relative",
        padding: "clamp(80px,12vw,160px) var(--container-pad)",
        overflow: "hidden",
      }}
    >
      {/* Floating diary photo — hidden on mobile, stays put (no animation) */}
      <div className="journey-photo" style={{
        position: "absolute",
        top: "clamp(30px, 5vw, 60px)",
        right: "clamp(16px, 4vw, 56px)",
        zIndex: 5,
        transform: "rotate(5deg)",
        animation: "fadeIn 1s ease 0.2s both",
      }}>
        {/* Coral/rose pin */}
        <div style={{
          position: "absolute", top: "-24px", left: "52%",
          transform: "translateX(-50%) rotate(3deg)", zIndex: 10,
          filter: "drop-shadow(0 4px 8px rgba(0,0,0,0.28))",
        }}>
          <svg width="24" height="38" viewBox="0 0 24 38" fill="none">
            <ellipse cx="12" cy="19" rx="6" ry="1.6" fill="rgba(0,0,0,0.15)" />
            <path d="M 11.5 17 L 11.5 36 Q 12 38 12.5 36 L 12.5 17 Z" fill="#C4957A" opacity="0.85" />
            <circle cx="12" cy="10" r="9.5" fill="#C4957A" />
            <circle cx="12" cy="10" r="9.5" stroke="rgba(0,0,0,0.18)" strokeWidth="1" fill="none" />
            <ellipse cx="9" cy="7" rx="4.2" ry="3" fill="rgba(255,255,255,0.26)" />
            <circle cx="8.2" cy="6.4" r="1.3" fill="rgba(255,255,255,0.4)" />
          </svg>
        </div>

        {/* Crop marks */}
        <svg aria-hidden="true" width="14" height="14" viewBox="0 0 14 14" fill="none"
          style={{ position: "absolute", top: "-8px", left: "-8px", opacity: 0.18, zIndex: 12 }}>
          <path d="M 0 8 L 0 0 L 8 0" stroke="var(--charcoal)" strokeWidth="1" strokeLinecap="round" fill="none" />
        </svg>
        <svg aria-hidden="true" width="14" height="14" viewBox="0 0 14 14" fill="none"
          style={{ position: "absolute", top: "-8px", right: "-8px", opacity: 0.18, zIndex: 12 }}>
          <path d="M 6 0 L 14 0 L 14 8" stroke="var(--charcoal)" strokeWidth="1" strokeLinecap="round" fill="none" />
        </svg>
        <svg aria-hidden="true" width="14" height="14" viewBox="0 0 14 14" fill="none"
          style={{ position: "absolute", bottom: "-8px", left: "-8px", opacity: 0.18, zIndex: 12 }}>
          <path d="M 0 6 L 0 14 L 8 14" stroke="var(--charcoal)" strokeWidth="1" strokeLinecap="round" fill="none" />
        </svg>
        <svg aria-hidden="true" width="14" height="14" viewBox="0 0 14 14" fill="none"
          style={{ position: "absolute", bottom: "-8px", right: "-8px", opacity: 0.18, zIndex: 12 }}>
          <path d="M 6 14 L 14 14 L 14 6" stroke="var(--charcoal)" strokeWidth="1" strokeLinecap="round" fill="none" />
        </svg>

        <div className="photo-frame" style={{
          width: "clamp(100px, 12vw, 155px)",
          height: "clamp(130px, 16vw, 200px)",
          borderRadius: "3px",
        }}>
          <div style={{
            width: "100%", height: "78%",
            background: "linear-gradient(140deg, #c8bfb0 0%, #b8af9e 100%)",
            display: "flex", alignItems: "center", justifyContent: "center",
          }}>
            <span style={{ fontFamily: "var(--font-serif)", fontStyle: "italic", fontSize: "18px", color: "rgba(28,28,26,0.22)" }}>✦</span>
          </div>
          <div style={{
            height: "22%", background: "rgba(255,255,255,0.65)",
            display: "flex", alignItems: "center", justifyContent: "center",
          }}>
            <span style={{ fontFamily: "var(--font-serif)", fontStyle: "italic", fontSize: "8px", color: "rgba(28,28,26,0.32)" }}>Behind the scenes</span>
          </div>
        </div>
      </div>

      {/* Postmark stamp — bottom left */}
      <div aria-hidden="true" style={{
        position: "absolute",
        bottom: "clamp(40px, 6vw, 72px)",
        left: "clamp(20px, 3vw, 44px)",
        zIndex: 2, opacity: 0.10,
        pointerEvents: "none",
        transform: "rotate(-15deg)",
      }}>
        <svg width="96" height="96" viewBox="0 0 96 96" fill="none">
          <circle cx="48" cy="48" r="44" stroke="var(--charcoal)" strokeWidth="1.3" fill="none" strokeDasharray="4 2.5" />
          <circle cx="48" cy="48" r="34" stroke="var(--charcoal)" strokeWidth="0.8" fill="none" />
          <defs>
            <path id="jrny-stamp" d="M 48,48 m -26,0 a 26,26 0 1,1 52,0 a 26,26 0 1,1 -52,0" />
          </defs>
          <text style={{ fontFamily: "var(--font-sans)", fontSize: "6.5px", letterSpacing: "2.8px", fill: "var(--charcoal)" }}>
            <textPath href="#jrny-stamp">CREATIVE JOURNEY · 2021–NOW ·</textPath>
          </text>
          <text x="48" y="44" textAnchor="middle" style={{ fontFamily: "var(--font-serif)", fontStyle: "italic", fontSize: "8px", fill: "var(--charcoal)" }}>Onahi</text>
          <text x="48" y="54" textAnchor="middle" style={{ fontFamily: "var(--font-sans)", fontSize: "5px", letterSpacing: "2px", fill: "var(--charcoal)" }}>LAGOS</text>
        </svg>
      </div>

      <div className="wrap">

        {/* Section header */}
        <div style={{ marginBottom: "clamp(48px,7vw,88px)", animation: "fadeUp 0.9s cubic-bezier(0.22,1,0.36,1) 0.1s both" }}>
          <span style={{
            display: "block",
            fontFamily: "var(--font-sans)", fontSize: "11px",
            letterSpacing: "0.22em", textTransform: "uppercase",
            color: "var(--terracotta)", marginBottom: "14px", fontWeight: 300,
          }}>Where I&apos;ve been &amp; where I&apos;m going</span>
          <h2 style={{
            fontFamily: "var(--font-serif)", fontWeight: 300,
            fontSize: "clamp(44px,6.5vw,96px)",
            lineHeight: 0.95, letterSpacing: "-0.02em", color: "var(--charcoal)",
          }}>
            Creative<br/>
            <em style={{ fontStyle: "italic" }}>Journey</em>
          </h2>
        </div>

        {/* Timeline highlights */}
        <div style={{ marginBottom: "clamp(56px,8vw,96px)" }}>
          {HIGHLIGHTS.map((h, i) => (
            <div
              key={i}
              style={{
                borderTop: "1px solid rgba(28,28,26,0.1)",
                padding: "clamp(16px,2.5vw,28px) 0",
                display: "grid",
                gridTemplateColumns: "clamp(70px,10vw,120px) 1fr",
                gap: "clamp(16px,3vw,40px)",
                alignItems: "start",
                animation: `slideInLeft 0.7s cubic-bezier(0.22,1,0.36,1) ${0.1 + i * 0.08}s both`,
              }}
            >
              <span style={{
                fontFamily: "var(--font-sans)", fontSize: "clamp(10px,1vw,12px)",
                letterSpacing: "0.06em", color: "var(--terracotta)",
                fontWeight: 400, paddingTop: "4px",
              }}>{h.year}</span>
              <div>
                <div style={{
                  fontFamily: "var(--font-serif)", fontStyle: "italic",
                  fontSize: "clamp(18px,2.2vw,28px)", fontWeight: 300,
                  color: "var(--charcoal)", marginBottom: "6px",
                }}>{h.title}</div>
                <p style={{
                  fontFamily: "var(--font-sans)", fontSize: "clamp(12px,1.15vw,14px)",
                  fontWeight: 300, color: "var(--charcoal-soft)",
                  lineHeight: 1.65, opacity: 0.85, maxWidth: "560px",
                }}>{h.desc}</p>
              </div>
            </div>
          ))}
          <div style={{ borderTop: "1px solid rgba(28,28,26,0.1)" }} />
        </div>

        {/* Skills grid */}
        <div style={{ marginBottom: "clamp(12px,2vw,20px)", animation: "fadeUp 0.8s ease 0.15s both" }}>
          <span style={{
            fontFamily: "var(--font-sans)", fontSize: "11px",
            letterSpacing: "0.2em", textTransform: "uppercase",
            color: "var(--sage-deep)", fontWeight: 300,
            display: "block", marginBottom: "clamp(22px,3vw,36px)",
          }}>Skill Set</span>
        </div>
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(200px,1fr))",
          gap: "clamp(14px,2vw,24px)",
        }}>
          {SKILLS.map((group, gi) => (
            <div
              key={gi}
              className="val-card"
              style={{
                flexDirection: "column", alignItems: "flex-start", gap: "12px",
                animation: `fadeUp 0.75s cubic-bezier(0.22,1,0.36,1) ${0.2 + gi * 0.08}s both`,
              }}
            >
              <span style={{
                fontFamily: "var(--font-sans)", fontSize: "10px",
                letterSpacing: "0.18em", textTransform: "uppercase",
                color: gi % 2 === 0 ? "var(--sage-deep)" : "var(--terracotta)",
                fontWeight: 400,
              }}>{group.category}</span>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "6px" }}>
                {group.items.map((skill, si) => (
                  <span key={si} style={{
                    fontFamily: "var(--font-sans)", fontSize: "12px",
                    fontWeight: 300, color: "var(--charcoal-soft)",
                    background: "rgba(28,28,26,0.05)",
                    borderRadius: "100px", padding: "3px 10px",
                    border: "1px solid rgba(28,28,26,0.08)",
                  }}>{skill}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        @media (max-width: 768px) {
          /* Hide diary photo on mobile — it overlaps the header */
          .journey-photo { display: none !important; }
        }
        @media (min-width: 769px) and (max-width: 1024px) {
          .journey-photo {
            top: 20px !important;
            right: 16px !important;
          }
        }
      `}</style>
    </section>
  );
}