"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function About() {
  const sectionRef = useRef<HTMLElement>(null);
  const headlineRef = useRef<HTMLDivElement>(null);
  const bioRef = useRef<HTMLDivElement>(null);
  const imagesRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(headlineRef.current,
        { y: 60, opacity: 0 },
        {
          y: 0, opacity: 1, duration: 1, ease: "power3.out",
          scrollTrigger: { trigger: headlineRef.current, start: "top 80%" }
        }
      );

      gsap.fromTo(bioRef.current,
        { y: 40, opacity: 0 },
        {
          y: 0, opacity: 1, duration: 0.9, ease: "power2.out",
          scrollTrigger: { trigger: bioRef.current, start: "top 80%" }
        }
      );

      gsap.fromTo(imagesRef.current?.children ?? [],
        { y: 60, opacity: 0, scale: 0.95 },
        {
          y: 0, opacity: 1, scale: 1, duration: 1, ease: "power3.out",
          stagger: 0.15,
          scrollTrigger: { trigger: imagesRef.current, start: "top 80%" }
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="about"
      ref={sectionRef}
      style={{
        padding: "clamp(80px, 12vw, 160px) clamp(24px, 6vw, 80px)",
        background: "var(--bg-warm)",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Decorative background glow */}
      <div style={{
        position: "absolute",
        left: "-20%",
        top: "50%",
        transform: "translateY(-50%)",
        width: "500px",
        height: "500px",
        borderRadius: "50%",
        background: "radial-gradient(circle, rgba(200,134,42,0.06) 0%, transparent 70%)",
        pointerEvents: "none",
      }} />

      <div style={{ maxWidth: "var(--container-max)", margin: "0 auto" }}>

        {/* Top row: headline + bio */}
        <div style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "clamp(40px, 8vw, 100px)",
          alignItems: "start",
          marginBottom: "clamp(60px, 10vw, 120px)",
        }} className="about-grid">
          <div ref={headlineRef}>
            <h2 style={{
              fontFamily: "var(--font-serif)",
              fontSize: "clamp(44px, 7vw, 100px)",
              lineHeight: 0.92,
              letterSpacing: "-0.02em",
              color: "var(--cream)",
            }}>
              Hi, I&apos;m{" "}
              <span style={{ fontStyle: "italic", color: "var(--gold)" }}>Onahi</span>
              .
            </h2>
            <div style={{ marginTop: "20px" }}>
              <span className="pill">Also Ona, or Nahi</span>
            </div>
          </div>

          <div ref={bioRef} style={{ paddingTop: "8px" }}>
            <p style={{
              fontFamily: "var(--font-sans)",
              fontSize: "clamp(15px, 1.5vw, 18px)",
              fontWeight: 300,
              color: "var(--cream-muted)",
              lineHeight: 1.8,
              marginBottom: "20px",
            }}>
              A Lagos-rooted Creative Director, Curator, and Media Founder with a
              deep love for African culture, music, and storytelling.
            </p>
            <p style={{
              fontFamily: "var(--font-sans)",
              fontSize: "clamp(15px, 1.5vw, 18px)",
              fontWeight: 300,
              color: "var(--cream-muted)",
              lineHeight: 1.8,
            }}>
              I am the founder of{" "}
              <span style={{ color: "var(--gold)", fontWeight: 400 }}>Afronated</span>
              {" "}— a creative media collective amplifying African voices through
              powerful storytelling, spotlight interviews, and cultural excellence.
              A big part of my life is building spaces where African creativity gets
              to be undeniable.
            </p>
          </div>
        </div>

        {/* Image pair */}
        <div
          ref={imagesRef}
          style={{
            display: "flex",
            gap: "clamp(16px, 3vw, 32px)",
            justifyContent: "center",
            alignItems: "flex-end",
            flexWrap: "wrap",
          }}
        >
          {/* Image 1 */}
          <div style={{
            width: "clamp(220px, 30vw, 400px)",
            aspectRatio: "3/4",
            borderRadius: "50% 50% 50% 50% / 40% 40% 60% 60%",
            overflow: "hidden",
            position: "relative",
            background: "linear-gradient(135deg, #1a1410 0%, #2a1f18 50%, #1a2318 100%)",
            flexShrink: 0,
          }}>
            <div style={{
              position: "absolute", inset: 0,
              display: "flex", alignItems: "center", justifyContent: "center",
              flexDirection: "column", gap: "8px",
            }}>
              <div style={{
                width: 60, height: 60, borderRadius: "50%",
                background: "rgba(200,134,42,0.2)",
                display: "flex", alignItems: "center", justifyContent: "center",
              }}>
                <span style={{ fontFamily: "var(--font-serif)", fontSize: "24px", color: "var(--gold)", fontStyle: "italic" }}>O</span>
              </div>
              <span style={{ fontFamily: "var(--font-sans)", fontSize: "11px", color: "var(--cream-muted)", opacity: 0.5, letterSpacing: "0.1em" }}>PHOTO</span>
            </div>
          </div>

          {/* Image 2 — tilted */}
          <div style={{
            width: "clamp(180px, 24vw, 320px)",
            aspectRatio: "3/4",
            borderRadius: "50% 50% 50% 50% / 40% 40% 60% 60%",
            overflow: "hidden",
            position: "relative",
            background: "linear-gradient(135deg, #201a14 0%, #1a2318 100%)",
            transform: "rotate(4deg) translateY(-20px)",
            flexShrink: 0,
          }}>
            <div style={{
              position: "absolute", inset: 0,
              display: "flex", alignItems: "center", justifyContent: "center",
              flexDirection: "column", gap: "8px",
            }}>
              <div style={{
                width: 48, height: 48, borderRadius: "50%",
                background: "rgba(181,82,46,0.2)",
                display: "flex", alignItems: "center", justifyContent: "center",
              }}>
                <span style={{ fontFamily: "var(--font-serif)", fontSize: "20px", color: "var(--terracotta)", fontStyle: "italic" }}>O</span>
              </div>
              <span style={{ fontFamily: "var(--font-sans)", fontSize: "11px", color: "var(--cream-muted)", opacity: 0.5, letterSpacing: "0.1em" }}>PHOTO</span>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @media (max-width: 768px) {
          .about-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
