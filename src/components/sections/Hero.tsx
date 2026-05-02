"use client";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";

export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const firstName = useRef<HTMLDivElement>(null);
  const lastName  = useRef<HTMLDivElement>(null);
  const subRef    = useRef<HTMLDivElement>(null);
  const scrollRef = useRef<HTMLDivElement>(null);

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
      .fromTo(scrollRef.current,
        { opacity: 0 },
        { opacity: 1, duration: 0.6 },
        "-=0.2"
      );

      // Scroll hint bob
      gsap.to(scrollRef.current, { y: 7, duration: 1.6, ease: "sine.inOut", yoyo: true, repeat: -1 });

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
        padding: "120px var(--container-pad) 80px",
      }}
    >
      {/* The organic textured circle behind the name — key reference detail */}
      <div style={{
        position: "absolute",
        top: "50%", left: "50%",
        transform: "translate(-18%, -50%)",
        width: "clamp(260px, 40vw, 560px)",
        height: "clamp(260px, 40vw, 560px)",
        borderRadius: "50%",
        background: [
          "radial-gradient(circle at 40% 40%,",
          "rgba(107,117,96,0.55) 0%,",
          "rgba(107,117,96,0.3) 50%,",
          "rgba(90,100,80,0.15) 100%)",
        ].join(" "),
        filter: "blur(0px)",
        zIndex: 0,
        backgroundImage: `
          radial-gradient(circle at 40% 40%, rgba(80,90,70,0.6), rgba(100,110,85,0.35) 60%, transparent 85%),
          url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='400'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3CfeColorMatrix type='saturate' values='0'/%3E%3C/filter%3E%3Crect width='400' height='400' filter='url(%23n)' opacity='0.4'/%3E%3C/svg%3E")
        `,
        backgroundSize: "cover",
        backgroundBlendMode: "multiply",
      }} aria-hidden="true" />

      {/* Name stack */}
      <div style={{ position: "relative", zIndex: 2, maxWidth: "var(--container-max)", margin: "0 auto", width: "100%" }}>
        <div ref={firstName} style={{
          fontFamily: "var(--font-serif)", fontWeight: 300,
          fontSize: "clamp(76px, 13vw, 200px)",
          lineHeight: 0.88, letterSpacing: "-0.025em",
          color: "var(--charcoal)",
        }}>Onahi</div>

        <div ref={lastName} style={{
          fontFamily: "var(--font-serif)", fontWeight: 300, fontStyle: "italic",
          fontSize: "clamp(76px, 13vw, 200px)",
          lineHeight: 0.88, letterSpacing: "-0.02em",
          color: "var(--charcoal)",
          marginTop: "clamp(4px, 0.5vw, 10px)",
        }}>Ijeh.</div>

        {/* Quote beneath the name — mirrors the reference's second-screen quote */}
        <div ref={subRef} style={{
          marginTop: "clamp(24px, 4vw, 44px)",
          maxWidth: "500px",
        }}>
          <p style={{
            fontFamily: "var(--font-serif)", fontStyle: "italic",
            fontSize: "clamp(17px, 2vw, 23px)",
            fontWeight: 300, lineHeight: 1.55,
            color: "var(--charcoal-soft)",
          }}>
            At the heart of <em style={{ fontStyle: "normal", fontWeight: 500 }}>Culture</em> is
            an opportunity to{" "}
            <em style={{ fontStyle: "italic" }}>tell stories.</em>
          </p>
          <div style={{
            width: "60px", height: "2px", marginTop: "16px",
            background: "var(--sage-deep)",
          }} />
        </div>
      </div>

      {/* Scroll indicator */}
      <div ref={scrollRef} style={{
        position: "absolute", bottom: "36px", left: "50%", transform: "translateX(-50%)",
        display: "flex", flexDirection: "column", alignItems: "center", gap: "8px",
      }}>
        <span style={{ fontFamily: "var(--font-sans)", fontSize: "10px", letterSpacing: "0.18em", color: "var(--sage-deep)", textTransform: "uppercase", opacity: 0.7 }}>Scroll</span>
        <div style={{ width: "1px", height: "44px", background: "linear-gradient(to bottom, var(--charcoal), transparent)" }} />
      </div>
    </section>
  );
}
