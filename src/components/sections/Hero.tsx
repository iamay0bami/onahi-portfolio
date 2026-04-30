"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";

export default function Hero() {
  const containerRef = useRef<HTMLElement>(null);
  const firstNameRef = useRef<HTMLDivElement>(null);
  const lastNameRef = useRef<HTMLDivElement>(null);
  const subtitleRef = useRef<HTMLDivElement>(null);
  const circleRef = useRef<HTMLDivElement>(null);
  const spinRef = useRef<SVGSVGElement>(null);
  const scrollHintRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ delay: 0.2 });

      // Organic circle entrance
      tl.fromTo(circleRef.current,
        { scale: 0.6, opacity: 0 },
        { scale: 1, opacity: 1, duration: 1.4, ease: "power3.out" }
      );

      // First name
      tl.fromTo(firstNameRef.current,
        { y: 80, opacity: 0, clipPath: "inset(0 0 100% 0)" },
        { y: 0, opacity: 1, clipPath: "inset(0 0 0% 0)", duration: 1.0, ease: "power4.out" },
        "-=0.9"
      );

      // Last name
      tl.fromTo(lastNameRef.current,
        { y: 80, opacity: 0, clipPath: "inset(0 0 100% 0)" },
        { y: 0, opacity: 1, clipPath: "inset(0 0 0% 0)", duration: 1.0, ease: "power4.out" },
        "-=0.75"
      );

      // Subtitle
      tl.fromTo(subtitleRef.current,
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8, ease: "power2.out" },
        "-=0.4"
      );

      // Scroll hint
      tl.fromTo(scrollHintRef.current,
        { opacity: 0 },
        { opacity: 1, duration: 0.6 },
        "-=0.2"
      );

      // Floating animation on circle
      gsap.to(circleRef.current, {
        y: -20,
        duration: 4,
        ease: "sine.inOut",
        yoyo: true,
        repeat: -1,
      });

      // Scroll hint pulse
      gsap.to(scrollHintRef.current, {
        y: 8,
        duration: 1.5,
        ease: "sine.inOut",
        yoyo: true,
        repeat: -1,
      });

    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="hero"
      ref={containerRef}
      style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        position: "relative",
        overflow: "hidden",
        padding: "120px clamp(24px, 6vw, 80px) 80px",
      }}
    >
      {/* Background gradient */}
      <div style={{
        position: "absolute",
        inset: 0,
        background: "radial-gradient(ellipse 80% 60% at 60% 50%, rgba(181,82,46,0.08) 0%, transparent 70%)",
        pointerEvents: "none",
      }} />

      {/* Organic decorative circle */}
      <div
        ref={circleRef}
        style={{
          position: "absolute",
          right: "clamp(-100px, -5vw, -60px)",
          top: "50%",
          transform: "translateY(-50%)",
          width: "clamp(320px, 45vw, 680px)",
          height: "clamp(320px, 45vw, 680px)",
          borderRadius: "60% 40% 70% 30% / 50% 60% 40% 50%",
          background: "linear-gradient(135deg, rgba(181,82,46,0.18) 0%, rgba(45,74,53,0.14) 50%, rgba(200,134,42,0.1) 100%)",
          filter: "blur(1px)",
        }}
      />

      {/* Spinning circular text */}
      <div
        style={{
          position: "absolute",
          right: "clamp(40px, 8vw, 120px)",
          top: "50%",
          transform: "translateY(-50%)",
          width: "clamp(140px, 16vw, 220px)",
          height: "clamp(140px, 16vw, 220px)",
        }}
      >
        <svg
          ref={spinRef}
          className="spin-slow"
          viewBox="0 0 220 220"
          style={{ width: "100%", height: "100%", opacity: 0.5 }}
        >
          <defs>
            <path
              id="circle-path"
              d="M 110,110 m -80,0 a 80,80 0 1,1 160,0 a 80,80 0 1,1 -160,0"
            />
          </defs>
          <text
            style={{
              fontFamily: "var(--font-sans)",
              fontSize: "11px",
              fill: "var(--gold)",
              letterSpacing: "4px",
            }}
          >
            <textPath href="#circle-path">
              CREATIVE DIRECTION · CURATION · AFRONATED ·
            </textPath>
          </text>
        </svg>
      </div>

      {/* Main content */}
      <div style={{
        position: "relative",
        zIndex: 2,
        maxWidth: "var(--container-max)",
        margin: "0 auto",
        width: "100%",
      }}>
        <div
          ref={firstNameRef}
          style={{
            fontFamily: "var(--font-serif)",
            fontSize: "clamp(80px, 14vw, 220px)",
            lineHeight: 0.88,
            letterSpacing: "-0.03em",
            color: "var(--cream)",
            willChange: "transform",
          }}
        >
          Onahi
        </div>

        <div
          ref={lastNameRef}
          style={{
            fontFamily: "var(--font-serif)",
            fontStyle: "italic",
            fontSize: "clamp(80px, 14vw, 220px)",
            lineHeight: 0.88,
            letterSpacing: "-0.02em",
            color: "var(--gold)",
            marginTop: "clamp(4px, 0.5vw, 12px)",
            willChange: "transform",
          }}
        >
          Ijeh.
        </div>

        <div
          ref={subtitleRef}
          style={{
            marginTop: "clamp(28px, 4vw, 48px)",
            display: "flex",
            alignItems: "center",
            gap: "clamp(12px, 2vw, 24px)",
            flexWrap: "wrap",
          }}
        >
          <p style={{
            fontFamily: "var(--font-sans)",
            fontSize: "clamp(14px, 1.5vw, 18px)",
            fontWeight: 300,
            color: "var(--cream-muted)",
            maxWidth: "460px",
            lineHeight: 1.7,
          }}>
            I turn creative ideas into visuals that live and breathe online.
            With a background in music, media, and youth culture — I know what
            clicks, what resonates, and what doesn&apos;t.
          </p>

          <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
            <span className="pill">Founder, Afronated</span>
            <span className="pill" style={{ fontSize: "12px" }}>Lagos-rooted · Globally minded</span>
          </div>
        </div>
      </div>

      {/* Scroll hint */}
      <div
        ref={scrollHintRef}
        style={{
          position: "absolute",
          bottom: "40px",
          left: "50%",
          transform: "translateX(-50%)",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "8px",
        }}
      >
        <span style={{
          fontFamily: "var(--font-sans)",
          fontSize: "11px",
          letterSpacing: "0.15em",
          color: "var(--cream-muted)",
          textTransform: "uppercase",
          opacity: 0.6,
        }}>Scroll</span>
        <div style={{
          width: "1px",
          height: "48px",
          background: "linear-gradient(to bottom, var(--gold), transparent)",
        }} />
      </div>
    </section>
  );
}
