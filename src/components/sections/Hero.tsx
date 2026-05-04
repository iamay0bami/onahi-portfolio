"use client";
import { useEffect, useRef } from "react";
import { gsap } from "@/lib/gsap";
import FloatingBall from "@/components/layout/FloatingBall";

export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const firstName  = useRef<HTMLDivElement>(null);
  const lastName   = useRef<HTMLDivElement>(null);
  const subRef     = useRef<HTMLDivElement>(null);
  const photoRef   = useRef<HTMLDivElement>(null);
  const scrollRef  = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ delay: 0.3 });

      tl.fromTo(firstName.current,
        { y: 70, opacity: 0, clipPath: "inset(0 0 100% 0)" },
        { y: 0, opacity: 1, clipPath: "inset(0 0 0% 0)", duration: 1.1, ease: "power4.out" }
      )
      .fromTo(lastName.current,
        { y: 70, opacity: 0, clipPath: "inset(0 0 100% 0)" },
        { y: 0, opacity: 1, clipPath: "inset(0 0 0% 0)", duration: 1.1, ease: "power4.out" },
        "-=0.75"
      )
      .fromTo(subRef.current,
        { y: 28, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.9, ease: "power2.out" },
        "-=0.45"
      )
      .fromTo(photoRef.current,
        { x: 60, opacity: 0, rotate: 4 },
        { x: 0, opacity: 1, rotate: 3, duration: 1.1, ease: "power3.out" },
        "-=0.65"
      )
      .fromTo(scrollRef.current,
        { opacity: 0 },
        { opacity: 1, duration: 0.6 },
        "-=0.3"
      );

      gsap.to(scrollRef.current, {
        y: 7, duration: 1.6, ease: "sine.inOut", yoyo: true, repeat: -1,
      });

      gsap.to(photoRef.current, {
        y: -8, duration: 3, ease: "sine.inOut", yoyo: true, repeat: -1, delay: 1.5,
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="hero"
      ref={sectionRef}
      className="pinstripe"
      style={{
        minHeight: "100vh",
        background: "var(--sage)",
        position: "relative",
        overflow: "hidden",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        padding: "120px var(--container-pad) 140px",
      }}
    >
      {/* Organic textured circle */}
      <div style={{
        position: "absolute",
        top: "50%", left: "50%",
        transform: "translate(-18%, -50%)",
        width: "clamp(260px, 40vw, 560px)",
        height: "clamp(260px, 40vw, 560px)",
        borderRadius: "50%",
        zIndex: 0,
        backgroundImage: `
          radial-gradient(circle at 40% 40%, rgba(80,90,70,0.6), rgba(100,110,85,0.35) 60%, transparent 85%),
          url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='400'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3CfeColorMatrix type='saturate' values='0'/%3E%3C/filter%3E%3Crect width='400' height='400' filter='url(%23n)' opacity='0.4'/%3E%3C/svg%3E")
        `,
        backgroundSize: "cover",
        backgroundBlendMode: "multiply",
      }} aria-hidden="true" />

      {/* Main content grid */}
      <div style={{
        position: "relative", zIndex: 2,
        maxWidth: "var(--container-max)", margin: "0 auto", width: "100%",
        display: "grid",
        gridTemplateColumns: "1fr auto",
        gap: "clamp(24px, 4vw, 56px)",
        alignItems: "center",
      }} className="hero-grid">

        {/* LEFT — Name + quote */}
        <div>
          <div ref={firstName} style={{
            fontFamily: "var(--font-serif)", fontWeight: 300,
            fontSize: "clamp(70px, 12vw, 190px)",
            lineHeight: 0.88, letterSpacing: "-0.025em",
            color: "var(--charcoal)",
          }}>Onahi</div>

          <div ref={lastName} style={{
            fontFamily: "var(--font-serif)", fontWeight: 300, fontStyle: "italic",
            fontSize: "clamp(70px, 12vw, 190px)",
            lineHeight: 0.88, letterSpacing: "-0.02em",
            color: "var(--charcoal)",
            marginTop: "clamp(4px, 0.5vw, 10px)",
          }}>Ijeh.</div>

          <div ref={subRef} style={{
            marginTop: "clamp(22px, 3.5vw, 40px)",
            maxWidth: "480px",
          }}>
            <p style={{
              fontFamily: "var(--font-serif)", fontStyle: "italic",
              fontSize: "clamp(16px, 1.8vw, 22px)",
              fontWeight: 300, lineHeight: 1.55,
              color: "var(--charcoal-soft)",
            }}>
              At the heart of <em style={{ fontStyle: "normal", fontWeight: 500 }}>Culture</em> is
              an opportunity to{" "}
              <em style={{ fontStyle: "italic" }}>tell stories.</em>
            </p>
            <div style={{
              width: "56px", height: "2px", marginTop: "14px",
              background: "var(--sage-deep)",
            }} />
          </div>
        </div>

        {/* RIGHT — Headshot / diary photo */}
        <div
          ref={photoRef}
          className="hero-photo-wrap"
          style={{ flexShrink: 0, transform: "rotate(3deg)" }}
        >
          <div className="photo-frame" style={{
            width: "clamp(140px, 18vw, 240px)",
            height: "clamp(190px, 24vw, 320px)",
            borderRadius: "3px",
            position: "relative",
          }}>
            <div style={{
              width: "100%", height: "100%",
              background: "linear-gradient(165deg, #c9c5b8 0%, #b5b2a3 50%, #a8a496 100%)",
              display: "flex", flexDirection: "column",
              alignItems: "center", justifyContent: "center", gap: "10px",
            }}>
              <svg width="44" height="54" viewBox="0 0 44 54" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ opacity: 0.3 }}>
                <ellipse cx="22" cy="16" rx="12" ry="14" fill="rgba(28,28,26,0.6)" />
                <path d="M2 52c0-11 9-20 20-20s20 9 20 20" stroke="rgba(28,28,26,0.6)" strokeWidth="1.5" fill="none" />
              </svg>
              <span style={{
                fontFamily: "var(--font-sans)", fontSize: "9px",
                letterSpacing: "0.14em", textTransform: "uppercase",
                color: "rgba(28,28,26,0.3)",
              }}>Headshot</span>
            </div>

            <div style={{
              position: "absolute", bottom: -10, left: "50%",
              transform: "translateX(-50%) rotate(-2deg)",
              background: "var(--cream)",
              padding: "3px 10px",
              fontFamily: "var(--font-serif)", fontStyle: "italic",
              fontSize: "11px", color: "rgba(28,28,26,0.55)",
              boxShadow: "0 1px 4px rgba(0,0,0,0.08)",
              whiteSpace: "nowrap",
            }}>Onahi ✦</div>
          </div>
        </div>
      </div>

      <FloatingBall />

      {/* Scroll indicator */}
      <div ref={scrollRef} style={{
        position: "absolute", bottom: "36px", left: "50%",
        transform: "translateX(-50%)",
        display: "flex", flexDirection: "column", alignItems: "center", gap: "8px",
        zIndex: 5,
      }}>
        <span style={{
          fontFamily: "var(--font-sans)", fontSize: "10px",
          letterSpacing: "0.18em", color: "var(--sage-deep)",
          textTransform: "uppercase", opacity: 0.7,
        }}>Scroll</span>
        <div style={{
          width: "1px", height: "44px",
          background: "linear-gradient(to bottom, var(--charcoal), transparent)",
        }} />
      </div>

      <style jsx>{`
        @media (max-width: 768px) {
          .hero-grid { grid-template-columns: 1fr !important; }
          .hero-photo-wrap { display: none !important; }
        }
      `}</style>
    </section>
  );
}