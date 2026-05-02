"use client";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

/**
 * The transitional quote section — the big cream/bowl section
 * from the reference site that appears between hero and about.
 * This is the "At the heart of Design is an opportunity to problem solve" section.
 * Adapted for Onahi.
 */
export default function QuoteBreak() {
  const sectionRef = useRef<HTMLElement>(null);
  const quoteRef   = useRef<HTMLDivElement>(null);
  const bowlRef    = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Bowl/arc rises from bottom — the signature morphing shape
      gsap.fromTo(bowlRef.current,
        { y: 80, opacity: 0 },
        { y: 0, opacity: 1, duration: 1.3, ease: "power3.out",
          scrollTrigger: { trigger: sectionRef.current, start: "top 80%" } }
      );

      // Quote words stagger in
      const words = quoteRef.current?.querySelectorAll<HTMLSpanElement>(".w");
      if (words) {
        gsap.fromTo(words,
          { y: 22, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.7, ease: "power2.out", stagger: 0.05,
            scrollTrigger: { trigger: quoteRef.current, start: "top 80%" } }
        );
      }
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  const quote = `I turn creative ideas into visuals that live and breathe online. With a background in music, media, and youth culture — I know what clicks, what resonates, and what doesn't.`;

  return (
    <section
      ref={sectionRef}
      style={{
        background: "var(--cream)",
        position: "relative",
        overflow: "hidden",
        padding: "clamp(64px, 10vw, 120px) var(--container-pad) 0",
        minHeight: "clamp(380px, 55vw, 580px)",
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-start",
      }}
    >
      {/* Quote text */}
      <div ref={quoteRef} style={{
        maxWidth: "var(--container-max)", margin: "0 auto", width: "100%",
        position: "relative", zIndex: 2,
      }}>
        <p style={{
          fontFamily: "var(--font-serif)", fontWeight: 300,
          fontSize: "clamp(22px, 3.4vw, 44px)",
          lineHeight: 1.45, letterSpacing: "-0.01em",
          color: "var(--charcoal)", textAlign: "center", maxWidth: "820px",
          margin: "0 auto",
        }}>
          {quote.split(" ").map((word, i) => (
            <span key={i} className="w" style={{ display: "inline-block", marginRight: "0.28em" }}>
              {word.includes("clicks") || word.includes("resonates") || word.includes("music") || word.includes("culture")
                ? <em>{word}</em>
                : word
              }
            </span>
          ))}
        </p>
      </div>

      {/* THE BOWL / ARC SHAPE — exact reference detail */}
      <div ref={bowlRef} style={{
        position: "relative", zIndex: 1,
        marginTop: "clamp(48px, 8vw, 80px)",
        display: "flex", justifyContent: "center",
      }}>
        <div style={{
          width: "clamp(320px, 70vw, 900px)",
          height: "clamp(120px, 20vw, 280px)",
          borderRadius: "0 0 50% 50% / 0 0 100% 100%",
          background: "var(--sage)",
          position: "relative",
          overflow: "hidden",
        }}>
          {/* Reflection inside the bowl */}
          <div style={{
            position: "absolute",
            bottom: 0, left: "50%", transform: "translateX(-50%)",
            width: "70%", height: "50%",
            borderRadius: "0 0 50% 50% / 0 0 100% 100%",
            background: "rgba(184,191,168,0.4)",
          }} />
        </div>
      </div>
    </section>
  );
}
