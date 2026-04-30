"use client";

import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const inquiryTypes = ["General", "Creative Direction", "Curation", "Collaboration", "Speaking", "Media"];

export default function Contact() {
  const sectionRef = useRef<HTMLElement>(null);
  const emailRef = useRef<HTMLDivElement>(null);
  const formRef = useRef<HTMLDivElement>(null);
  const [inquiry, setInquiry] = useState("General");
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [sent, setSent] = useState(false);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(emailRef.current,
        { y: 60, opacity: 0 },
        {
          y: 0, opacity: 1, duration: 1, ease: "power3.out",
          scrollTrigger: { trigger: emailRef.current, start: "top 80%" }
        }
      );
      gsap.fromTo(formRef.current,
        { y: 40, opacity: 0 },
        {
          y: 0, opacity: 1, duration: 0.9, ease: "power2.out",
          scrollTrigger: { trigger: formRef.current, start: "top 85%" }
        }
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
        padding: "clamp(80px, 12vw, 160px) clamp(24px, 6vw, 80px) clamp(60px, 8vw, 100px)",
        background: "var(--bg-light)",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Dark geometric accent */}
      <div style={{
        position: "absolute",
        top: 0, left: 0, right: 0,
        height: "4px",
        background: "linear-gradient(90deg, var(--terracotta), var(--gold), var(--forest))",
      }} />

      <div style={{ maxWidth: "var(--container-max)", margin: "0 auto" }}>

        {/* Email headline */}
        <div ref={emailRef} style={{ marginBottom: "clamp(48px, 7vw, 80px)" }}>
          <a
            href="mailto:hello@onahiijeh.com"
            style={{
              fontFamily: "var(--font-serif)",
              fontSize: "clamp(28px, 5.5vw, 80px)",
              lineHeight: 1,
              letterSpacing: "-0.02em",
              color: "var(--bg-dark)",
              textDecoration: "none",
              display: "block",
              transition: "color 0.3s ease",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.color = "var(--terracotta)")}
            onMouseLeave={(e) => (e.currentTarget.style.color = "var(--bg-dark)")}
          >
            hello@onahiijeh.com
          </a>
        </div>

        {/* Form */}
        <div ref={formRef}>
          {sent ? (
            <div style={{
              fontFamily: "var(--font-serif)",
              fontStyle: "italic",
              fontSize: "clamp(24px, 3vw, 40px)",
              color: "var(--bg-dark)",
              textAlign: "center",
              padding: "60px 0",
            }}>
              Thank you — I&apos;ll be in touch shortly.
            </div>
          ) : (
            <>
              {/* Inquiry type pills */}
              <div style={{
                display: "flex",
                flexWrap: "wrap",
                gap: "10px",
                marginBottom: "clamp(28px, 4vw, 48px)",
              }}>
                {inquiryTypes.map((type) => (
                  <button
                    key={type}
                    onClick={() => setInquiry(type)}
                    style={{
                      fontFamily: "var(--font-sans)",
                      fontSize: "13px",
                      letterSpacing: "0.04em",
                      padding: "8px 18px",
                      borderRadius: "100px",
                      border: "1px solid",
                      borderColor: inquiry === type ? "var(--bg-dark)" : "rgba(10,9,7,0.2)",
                      background: inquiry === type ? "var(--bg-dark)" : "transparent",
                      color: inquiry === type ? "var(--cream)" : "var(--bg-dark)",
                      cursor: "pointer",
                      transition: "all 0.25s ease",
                    }}
                  >
                    {type}
                  </button>
                ))}
              </div>

              {/* Fields */}
              <div style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gap: "clamp(16px, 3vw, 32px)",
                marginBottom: "clamp(16px, 2vw, 24px)",
              }} className="form-grid">
                <div>
                  <input
                    type="text"
                    placeholder="Your name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="form-input"
                    style={{ color: "var(--bg-dark)", borderColor: "rgba(10,9,7,0.2)" }}
                  />
                </div>
                <div>
                  <input
                    type="email"
                    placeholder="Your email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="form-input"
                    style={{ color: "var(--bg-dark)", borderColor: "rgba(10,9,7,0.2)" }}
                  />
                </div>
              </div>

              <div style={{
                display: "flex",
                alignItems: "flex-end",
                gap: "16px",
                borderBottom: "1px solid rgba(10,9,7,0.2)",
                paddingBottom: "14px",
                marginBottom: "clamp(32px, 4vw, 48px)",
              }}>
                <input
                  type="text"
                  placeholder="How may I help you?"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  style={{
                    background: "transparent",
                    border: "none",
                    color: "var(--bg-dark)",
                    fontFamily: "var(--font-sans)",
                    fontSize: "15px",
                    fontWeight: 300,
                    flex: 1,
                    outline: "none",
                    padding: "0",
                  }}
                />
                <button
                  onClick={handleSubmit}
                  style={{
                    width: 44, height: 44, borderRadius: "50%",
                    background: "var(--bg-dark)",
                    border: "none",
                    color: "var(--cream)",
                    fontSize: "18px",
                    cursor: "pointer",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexShrink: 0,
                    transition: "background 0.3s ease, transform 0.2s ease",
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLElement).style.background = "var(--terracotta)";
                    (e.currentTarget as HTMLElement).style.transform = "scale(1.1)";
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLElement).style.background = "var(--bg-dark)";
                    (e.currentTarget as HTMLElement).style.transform = "scale(1)";
                  }}
                >
                  →
                </button>
              </div>
            </>
          )}

          {/* Social links + footer */}
          <div style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexWrap: "wrap",
            gap: "16px",
          }}>
            <div style={{ display: "flex", gap: "12px", flexWrap: "wrap" }}>
              {["Instagram ↗", "Twitter/X ↗", "LinkedIn ↗"].map((s) => (
                <a
                  key={s}
                  href="#"
                  style={{
                    fontFamily: "var(--font-sans)",
                    fontSize: "13px",
                    color: "var(--bg-dark)",
                    textDecoration: "none",
                    padding: "8px 16px",
                    borderRadius: "100px",
                    border: "1px solid rgba(10,9,7,0.25)",
                    transition: "all 0.25s ease",
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLElement).style.background = "var(--bg-dark)";
                    (e.currentTarget as HTMLElement).style.color = "var(--cream)";
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLElement).style.background = "transparent";
                    (e.currentTarget as HTMLElement).style.color = "var(--bg-dark)";
                  }}
                >
                  {s}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div style={{
        marginTop: "clamp(60px, 8vw, 100px)",
        paddingTop: "24px",
        borderTop: "1px solid rgba(10,9,7,0.15)",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        flexWrap: "wrap",
        gap: "12px",
      }}>
        <span style={{
          fontFamily: "var(--font-sans)",
          fontSize: "12px",
          color: "rgba(10,9,7,0.4)",
          letterSpacing: "0.04em",
        }}>
          Made with intention. © {new Date().getFullYear()} Onahi Ijeh
        </span>
        <span style={{
          fontFamily: "var(--font-serif)",
          fontStyle: "italic",
          fontSize: "13px",
          color: "rgba(10,9,7,0.35)",
        }}>
          Afronated
        </span>
      </div>

      <style jsx>{`
        @media (max-width: 768px) {
          .form-grid { grid-template-columns: 1fr !important; }
        }
        .form-input { color: var(--bg-dark) !important; }
        .form-input::placeholder { color: rgba(10,9,7,0.35) !important; }
        .form-input:focus { border-color: var(--terracotta) !important; }
      `}</style>
    </section>
  );
}
