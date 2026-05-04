"use client";
import { useEffect, useRef, useState } from "react";
import { gsap } from "@/lib/gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const INQUIRY_TYPES = ["General", "Creative Direction", "Curation", "Collaboration", "Brand Work", "Media"];

export default function Contact() {
  const sectionRef  = useRef<HTMLElement>(null);
  const emailRef    = useRef<HTMLAnchorElement>(null);
  const formRef     = useRef<HTMLDivElement>(null);
  const [inquiry, setInquiry] = useState("General");
  const [form, setForm]       = useState({ name: "", email: "", message: "" });
  const [sent, setSent]       = useState(false);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(emailRef.current,
        { y: 50, opacity: 0 },
        { y: 0, opacity: 1, duration: 1, ease: "power3.out",
          scrollTrigger: { trigger: emailRef.current, start: "top 82%" } }
      );
      gsap.fromTo(formRef.current,
        { y: 36, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.9, ease: "power2.out",
          scrollTrigger: { trigger: formRef.current, start: "top 85%" } }
      );
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  const handleSubmit = (e: React.MouseEvent) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <section
      id="contact"
      ref={sectionRef}
      style={{
        background: "var(--off-white)",
        position: "relative",
        padding: "clamp(80px,12vw,160px) var(--container-pad) clamp(56px,8vw,96px)",
        overflow: "hidden",
      }}
    >
      <style>{`
        @media (max-width: 768px) {
          .form-row { grid-template-columns: 1fr !important; }
        }
      `}</style>

      {/* Pinstripe */}
      <div style={{
        position: "absolute", inset: 0,
        background: "repeating-linear-gradient(90deg, transparent, transparent 38px, rgba(0,0,0,0.03) 38px, rgba(0,0,0,0.03) 39px)",
        pointerEvents: "none",
      }} />

      {/* Top accent bar */}
      <div style={{
        position: "absolute", top: 0, left: 0, right: 0, height: "4px",
        background: "linear-gradient(90deg, var(--terracotta), var(--gold), var(--sage-deep))",
      }} />

      <div className="wrap">
        {/* Big email */}
        <a
          ref={emailRef}
          href="mailto:hello@onahiijeh.com"
          style={{
            display: "block",
            fontFamily: "var(--font-serif)", fontWeight: 300,
            fontSize: "clamp(22px,4.5vw,68px)",
            lineHeight: 1.05, letterSpacing: "-0.02em",
            color: "var(--charcoal)", textDecoration: "none",
            marginBottom: "clamp(40px,6vw,72px)",
            transition: "color 0.3s ease",
            wordBreak: "break-all",
          }}
          onMouseEnter={e => (e.currentTarget.style.color = "var(--terracotta)")}
          onMouseLeave={e => (e.currentTarget.style.color = "var(--charcoal)")}
        >
          hello@onahiijeh.com
        </a>

        {/* Form */}
        <div ref={formRef}>
          {sent ? (
            <p style={{
              fontFamily: "var(--font-serif)", fontStyle: "italic", fontWeight: 300,
              fontSize: "clamp(22px,2.8vw,36px)", color: "var(--charcoal)",
              textAlign: "center", padding: "56px 0",
            }}>
              Thank you — I&apos;ll be in touch shortly.
            </p>
          ) : (
            <>
              {/* Inquiry type pills */}
              <div style={{ display: "flex", flexWrap: "wrap", gap: "8px", marginBottom: "clamp(24px,3.5vw,44px)" }}>
                {INQUIRY_TYPES.map(type => (
                  <button
                    key={type}
                    onClick={() => setInquiry(type)}
                    style={{
                      fontFamily: "var(--font-sans)", fontSize: "12px",
                      letterSpacing: "0.04em", padding: "7px 16px",
                      borderRadius: "100px", border: "1px solid",
                      borderColor: inquiry === type ? "var(--charcoal)" : "rgba(28,28,26,0.18)",
                      background: inquiry === type ? "var(--charcoal)" : "transparent",
                      color: inquiry === type ? "var(--off-white)" : "var(--charcoal)",
                      cursor: "pointer", transition: "all 0.22s ease",
                    }}
                  >
                    {type}
                  </button>
                ))}
              </div>

              {/* Name + email row */}
              <div
                className="form-row"
                style={{
                  display: "grid", gridTemplateColumns: "1fr 1fr",
                  gap: "clamp(14px,2.5vw,28px)",
                  marginBottom: "clamp(12px,1.5vw,18px)",
                }}
              >
                <input
                  type="text" placeholder="Your name"
                  value={form.name}
                  onChange={e => setForm({ ...form, name: e.target.value })}
                  className="field"
                />
                <input
                  type="email" placeholder="Your email"
                  value={form.email}
                  onChange={e => setForm({ ...form, email: e.target.value })}
                  className="field"
                />
              </div>

              {/* Message + submit */}
              <div style={{
                display: "flex", alignItems: "flex-end", gap: "14px",
                borderBottom: "1px solid rgba(28,28,26,0.18)",
                paddingBottom: "13px", marginBottom: "clamp(28px,4vw,44px)",
              }}>
                <input
                  type="text" placeholder="How may I help you?"
                  value={form.message}
                  onChange={e => setForm({ ...form, message: e.target.value })}
                  style={{
                    background: "transparent", border: "none",
                    fontFamily: "var(--font-sans)", fontSize: "14px", fontWeight: 300,
                    color: "var(--charcoal)", flex: 1, outline: "none", padding: "0",
                  }}
                />
                <button
                  onClick={handleSubmit}
                  style={{
                    width: 42, height: 42, borderRadius: "50%",
                    background: "var(--charcoal)", border: "none",
                    color: "var(--off-white)", fontSize: "16px",
                    cursor: "pointer", flexShrink: 0,
                    display: "flex", alignItems: "center", justifyContent: "center",
                    transition: "background 0.25s ease, transform 0.2s ease",
                  }}
                  onMouseEnter={e => {
                    (e.currentTarget as HTMLElement).style.background = "var(--terracotta)";
                    (e.currentTarget as HTMLElement).style.transform = "scale(1.08)";
                  }}
                  onMouseLeave={e => {
                    (e.currentTarget as HTMLElement).style.background = "var(--charcoal)";
                    (e.currentTarget as HTMLElement).style.transform = "scale(1)";
                  }}
                  aria-label="Send"
                >
                  →
                </button>
              </div>
            </>
          )}

          {/* Socials */}
          <div style={{ display: "flex", gap: "10px", flexWrap: "wrap" }}>
            {[
              { label: "Instagram ↗", url: "https://www.instagram.com/onahiijeh" },
              { label: "Twitter/X ↗",  url: "https://x.com/shee_nahi" },
              { label: "TikTok ↗",    url: "https://www.tiktok.com/@not.ur.nans" },
              { label: "Afronated ↗", url: "https://afronated.com" },
            ].map(s => (
              <a
                key={s.label}
                href={s.url}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  fontFamily: "var(--font-sans)", fontSize: "12px",
                  color: "var(--charcoal)", textDecoration: "none",
                  padding: "7px 15px", borderRadius: "100px",
                  border: "1px solid rgba(28,28,26,0.2)",
                  transition: "all 0.22s ease",
                }}
                onMouseEnter={e => {
                  (e.currentTarget as HTMLElement).style.background = "var(--charcoal)";
                  (e.currentTarget as HTMLElement).style.color = "var(--off-white)";
                }}
                onMouseLeave={e => {
                  (e.currentTarget as HTMLElement).style.background = "transparent";
                  (e.currentTarget as HTMLElement).style.color = "var(--charcoal)";
                }}
              >
                {s.label}
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="wrap" style={{ marginTop: "clamp(56px,8vw,96px)" }}>
        <div style={{
          borderTop: "1px solid rgba(28,28,26,0.12)",
          paddingTop: "22px",
          display: "flex", justifyContent: "space-between",
          alignItems: "center", flexWrap: "wrap", gap: "10px",
        }}>
          <span style={{
            fontFamily: "var(--font-sans)", fontSize: "11px",
            color: "rgba(28,28,26,0.35)", letterSpacing: "0.04em",
          }}>
            Made with intention. © {new Date().getFullYear()} Onahi Ijeh
          </span>
          <span style={{
            fontFamily: "var(--font-serif)", fontStyle: "italic", fontSize: "12px",
            color: "rgba(28,28,26,0.3)",
          }}>
            Afronated
          </span>
        </div>
      </div>
    </section>
  );
}