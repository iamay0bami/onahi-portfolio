"use client";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

export default function About() {
  const sectionRef = useRef<HTMLElement>(null);
  const hlRef      = useRef<HTMLDivElement>(null);
  const bioRef     = useRef<HTMLDivElement>(null);
  const img1Ref    = useRef<HTMLDivElement>(null);
  const img2Ref    = useRef<HTMLDivElement>(null);
  const circleRef  = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(hlRef.current,
        { y: 55, opacity: 0 },
        { y: 0, opacity: 1, duration: 1, ease: "power3.out",
          scrollTrigger: { trigger: hlRef.current, start: "top 82%" } }
      );
      gsap.fromTo(bioRef.current,
        { y: 35, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.9, ease: "power2.out",
          scrollTrigger: { trigger: bioRef.current, start: "top 82%" } }
      );
      gsap.fromTo(img1Ref.current,
        { y: 60, opacity: 0, rotate: -5 },
        { y: 0, opacity: 1, rotate: -4, duration: 1.1, ease: "power3.out",
          scrollTrigger: { trigger: img1Ref.current, start: "top 85%" } }
      );
      gsap.fromTo(img2Ref.current,
        { y: 80, opacity: 0, rotate: 3 },
        { y: 0, opacity: 1, rotate: 5, duration: 1.1, ease: "power3.out", delay: 0.12,
          scrollTrigger: { trigger: img2Ref.current, start: "top 85%" } }
      );
      gsap.fromTo(circleRef.current,
        { scale: 0.75, opacity: 0 },
        { scale: 1, opacity: 1, duration: 1.3, ease: "power3.out",
          scrollTrigger: { trigger: circleRef.current, start: "top 85%" } }
      );
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section
      id="about"
      ref={sectionRef}
      className="pinstripe"
      style={{
        background: "var(--cream-warm)",
        position: "relative",
        padding: "clamp(80px, 12vw, 160px) var(--container-pad)",
        overflow: "hidden",
      }}
    >
      <div className="wrap">

        {/* TOP — headline + bio */}
        <div style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "clamp(36px, 8vw, 96px)",
          alignItems: "start",
          marginBottom: "clamp(64px, 10vw, 120px)",
        }} className="about-top">

          <div ref={hlRef}>
            <h2 style={{
              fontFamily: "var(--font-serif)", fontWeight: 300,
              fontSize: "clamp(44px, 7vw, 96px)",
              lineHeight: 0.9, letterSpacing: "-0.02em",
              color: "var(--charcoal)",
            }}>
              Hi there, I&apos;m<br/>
              <em style={{ fontStyle: "italic" }}>Onahi.</em>
            </h2>
            <div style={{ marginTop: "20px" }}>
              <span style={{
                display: "inline-block",
                fontFamily: "var(--font-sans)", fontSize: "13px", fontWeight: 300,
                letterSpacing: "0.04em", color: "var(--charcoal-soft)",
                border: "1px solid rgba(28,28,26,0.22)",
                borderRadius: "100px", padding: "6px 16px",
              }}>Also Ona, or Nahi</span>
            </div>
          </div>

          <div ref={bioRef} style={{ paddingTop: "8px" }}>
            <p style={{
              fontFamily: "var(--font-sans)", fontSize: "clamp(14px, 1.4vw, 17px)",
              fontWeight: 300, lineHeight: 1.8, color: "var(--charcoal-soft)",
              marginBottom: "18px",
            }}>
              A Lagos-rooted creative director, curator, and media founder with a deep love
              for African culture, music, and storytelling.
            </p>
            <p style={{
              fontFamily: "var(--font-sans)", fontSize: "clamp(14px, 1.4vw, 17px)",
              fontWeight: 300, lineHeight: 1.8, color: "var(--charcoal-soft)",
            }}>
              I am the founder of{" "}
              <strong style={{ fontWeight: 500, color: "var(--charcoal)" }}>Afronated</strong>
              {" "}— a creative media collective amplifying African voices through powerful
              storytelling, spotlight interviews, and cultural excellence. A big part of my
              life is building spaces where African creativity gets to be undeniable.
            </p>
          </div>
        </div>

        {/* BOTTOM — diary-style photo pair + spinning circle */}
        <div style={{
          display: "flex",
          alignItems: "flex-end",
          justifyContent: "center",
          gap: "clamp(12px, 3vw, 32px)",
          flexWrap: "wrap",
          position: "relative",
        }}>

          {/* Green soft circle behind the photos — reference detail */}
          <div ref={circleRef} style={{
            position: "absolute",
            left: "50%", bottom: "-20px",
            transform: "translateX(-50%)",
            width: "clamp(220px, 32vw, 420px)",
            height: "clamp(220px, 32vw, 420px)",
            borderRadius: "50%",
            background: "radial-gradient(circle, rgba(184,191,168,0.6) 0%, rgba(184,191,168,0.15) 70%, transparent 100%)",
            zIndex: 0,
          }} aria-hidden="true" />

          {/* Photo 1 — larger, tilted left */}
          <div ref={img1Ref} className="photo-frame" style={{
            width: "clamp(180px, 26vw, 340px)",
            height: "clamp(240px, 34vw, 440px)",
            transform: "rotate(-4deg)",
            position: "relative", zIndex: 2,
            borderRadius: "4px",
          }}>
            {/* Placeholder — user replaces with <img> */}
            <div style={{
              width: "100%", height: "100%",
              background: "linear-gradient(160deg, #c8c4b8 0%, #b0ad9d 100%)",
              display: "flex", flexDirection: "column",
              alignItems: "center", justifyContent: "center", gap: "8px",
            }}>
              <div style={{
                width: 52, height: 52, borderRadius: "50%",
                border: "1.5px solid rgba(28,28,26,0.2)",
                display: "flex", alignItems: "center", justifyContent: "center",
              }}>
                <span style={{ fontFamily: "var(--font-serif)", fontStyle: "italic", fontSize: "22px", color: "rgba(28,28,26,0.45)" }}>O</span>
              </div>
              <span style={{ fontFamily: "var(--font-sans)", fontSize: "10px", letterSpacing: "0.1em", color: "rgba(28,28,26,0.3)", textTransform: "uppercase" }}>Photo</span>
            </div>
          </div>

          {/* Photo 2 — smaller, tilted right */}
          <div ref={img2Ref} className="photo-frame" style={{
            width: "clamp(140px, 20vw, 260px)",
            height: "clamp(180px, 26vw, 340px)",
            transform: "rotate(5deg) translateY(-18px)",
            position: "relative", zIndex: 3,
            borderRadius: "4px",
          }}>
            <div style={{
              width: "100%", height: "100%",
              background: "linear-gradient(160deg, #bfbcb2 0%, #a8a598 100%)",
              display: "flex", flexDirection: "column",
              alignItems: "center", justifyContent: "center", gap: "8px",
            }}>
              <div style={{
                width: 40, height: 40, borderRadius: "50%",
                border: "1.5px solid rgba(28,28,26,0.2)",
                display: "flex", alignItems: "center", justifyContent: "center",
              }}>
                <span style={{ fontFamily: "var(--font-serif)", fontStyle: "italic", fontSize: "17px", color: "rgba(28,28,26,0.45)" }}>O</span>
              </div>
              <span style={{ fontFamily: "var(--font-sans)", fontSize: "10px", letterSpacing: "0.1em", color: "rgba(28,28,26,0.3)", textTransform: "uppercase" }}>Photo</span>
            </div>
          </div>
        </div>
      </div>

      {/* Spinning circular text — exactly like the reference, portrait overlapping */}
      <div style={{
        position: "absolute",
        right: "clamp(20px, 5vw, 80px)", top: "50%",
        transform: "translateY(-50%)",
        width: "clamp(110px, 14vw, 180px)",
        height: "clamp(110px, 14vw, 180px)",
        zIndex: 4,
      }}>
        <svg className="spin-ccw" viewBox="0 0 180 180" style={{ width: "100%", height: "100%", opacity: 0.45 }}>
          <defs>
            <path id="abt-ring" d="M 90,90 m -68,0 a 68,68 0 1,1 136,0 a 68,68 0 1,1 -136,0" />
          </defs>
          <text style={{ fontFamily: "var(--font-sans)", fontSize: "9.5px", fill: "var(--charcoal)", letterSpacing: "4.5px" }}>
            <textPath href="#abt-ring">CREATIVE DIRECTOR · CURATOR · FOUNDER ·</textPath>
          </text>
        </svg>
      </div>

      <style jsx>{`
        @media (max-width: 768px) {
          .about-top { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
