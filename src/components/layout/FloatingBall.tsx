"use client";
import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

/**
 * THE SIGNATURE ANIMATION — exactly like olhauzhykova.com:
 * Ball sits in a U-shaped bowl on the hero, shifts left/right on cursor hover,
 * then on scroll rolls out and drops into the next bowl in the About section.
 */
export default function FloatingBall() {
  const ballRef = useRef<HTMLDivElement>(null);
  const bowl1Ref = useRef<HTMLDivElement>(null); // hero bowl
  const bowl2Ref = useRef<HTMLDivElement>(null); // about section bowl
  const animating = useRef(false);
  const [inBowl, setInBowl] = useState(true);

  useEffect(() => {
    const ball = ballRef.current;
    const bowl1 = bowl1Ref.current;
    if (!ball || !bowl1) return;

    // Position ball inside bowl1 initially (centered at bottom of bowl)
    const placeBallInBowl = (bowl: HTMLElement, b: HTMLElement) => {
      const rect = bowl.getBoundingClientRect();
      const scrollTop = window.scrollY;
      const bSize = b.offsetWidth;
      gsap.set(b, {
        left: rect.left + rect.width / 2 - bSize / 2,
        top: rect.top + scrollTop + rect.height * 0.52 - bSize / 2,
        opacity: 1,
      });
    };

    placeBallInBowl(bowl1, ball);

    // ─── CURSOR PROXIMITY — ball shifts inside bowl ───
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    let cursorX = 0;
    const onMouseMove = (e: MouseEvent) => {
      if (!inBowl || animating.current) return;
      const rect = bowl1.getBoundingClientRect();
      const bowlCenterX = rect.left + rect.width / 2;
      const dist = e.clientX - bowlCenterX;
      const maxShift = rect.width * 0.28;
      const shift = Math.max(-maxShift, Math.min(maxShift, dist * 0.35));
      cursorX = shift;
      gsap.to(ball, {
        x: shift,
        duration: 0.6,
        ease: "power2.out",
        overwrite: "auto",
      });
    };
    window.addEventListener("mousemove", onMouseMove);

    // ─── SCROLL — ball rolls out of bowl1, drops into bowl2 ───
    ScrollTrigger.create({
      trigger: "#hero",
      start: "bottom 60%",
      onEnter: () => {
        if (animating.current) return;
        animating.current = true;
        setInBowl(false);

        const bowl2 = bowl2Ref.current;
        if (!bowl2) return;

        const rect2 = bowl2.getBoundingClientRect();
        const scrollTop2 = window.scrollY;
        const bSize = ball.offsetWidth;

        // 1. Roll to edge of bowl1 then drop off
        gsap.timeline()
          .to(ball, {
            x: 120, y: 40, rotation: 180,
            duration: 0.55, ease: "power1.in",
          })
          // 2. Free fall
          .to(ball, {
            y: "+=300", x: 80, rotation: 360, opacity: 0.85,
            duration: 0.45, ease: "power2.in",
          })
          // 3. Teleport near bowl2 (off screen briefly)
          .set(ball, {
            left: rect2.left + rect2.width / 2 - bSize / 2,
            top: rect2.top + scrollTop2 - 100,
            x: 0, y: 0, rotation: 0, opacity: 0,
          })
          // 4. Drop into bowl2
          .to(ball, {
            top: rect2.top + scrollTop2 + rect2.height * 0.48 - bSize / 2,
            opacity: 1, duration: 0.5, ease: "bounce.out",
          })
          // 5. Settle wobble in bowl2
          .to(ball, {
            x: -12, duration: 0.22, ease: "power1.out",
          })
          .to(ball, {
            x: 8, duration: 0.18, ease: "power1.out",
          })
          .to(ball, {
            x: 0, duration: 0.22, ease: "power1.out",
            onComplete: () => { animating.current = false; },
          });
      },
      onLeaveBack: () => {
        // Roll back into bowl1
        animating.current = true;
        setInBowl(true);
        const rect = bowl1.getBoundingClientRect();
        const scrollTop = window.scrollY;
        const bSize = ball.offsetWidth;
        gsap.timeline()
          .to(ball, { opacity: 0, duration: 0.2 })
          .set(ball, {
            left: rect.left + rect.width / 2 - bSize / 2,
            top: rect.top + scrollTop + rect.height * 0.52 - bSize / 2,
            x: 0, y: 0, rotation: 0,
          })
          .to(ball, {
            opacity: 1, duration: 0.4, ease: "power2.out",
            onComplete: () => { animating.current = false; },
          });
      },
    });

    // Reposition on resize
    const onResize = () => {
      if (inBowl) placeBallInBowl(bowl1, ball);
    };
    window.addEventListener("resize", onResize);

    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("resize", onResize);
      ScrollTrigger.getAll().forEach(t => t.kill());
    };
  }, [inBowl]);

  return (
    <>
      {/* The ball itself — fixed positioned, managed by GSAP */}
      <div
        id="floating-ball"
        ref={ballRef}
        aria-hidden="true"
        style={{
          position: "absolute",
          width: "clamp(36px, 4vw, 52px)",
          height: "clamp(36px, 4vw, 52px)",
          borderRadius: "50%",
          background: "radial-gradient(circle at 35% 32%, #7a8870, #4a5442 60%, #2e3329)",
          boxShadow: "inset -3px -3px 7px rgba(0,0,0,0.25), inset 2px 2px 5px rgba(255,255,255,0.18), 0 4px 12px rgba(0,0,0,0.2)",
          zIndex: 60,
          willChange: "transform, top, left",
          pointerEvents: "none",
        }}
      />

      {/* Bowl 1 — sits at the bottom of the Hero section */}
      <div
        id="hero-bowl"
        ref={bowl1Ref}
        aria-hidden="true"
        style={{
          position: "absolute",
          bottom: "clamp(40px, 8vw, 80px)",
          left: "50%",
          transform: "translateX(-50%)",
          width: "clamp(200px, 28vw, 340px)",
          height: "clamp(80px, 11vw, 140px)",
          borderRadius: "0 0 50% 50% / 0 0 100% 100%",
          border: "1px solid rgba(28,28,26,0.15)",
          borderTop: "none",
          background: "rgba(184,191,168,0.18)",
          backdropFilter: "blur(2px)",
          zIndex: 3,
          overflow: "hidden",
          pointerEvents: "none",
        }}
      >
        {/* Inner sheen */}
        <div style={{
          position: "absolute",
          bottom: 0, left: "50%", transform: "translateX(-50%)",
          width: "60%", height: "45%",
          borderRadius: "0 0 50% 50% / 0 0 100% 100%",
          background: "rgba(255,255,255,0.08)",
        }} />
      </div>

      {/* Bowl 2 — sits in the About section, revealed when ball drops */}
      <div
        id="about-bowl"
        ref={bowl2Ref}
        aria-hidden="true"
        style={{
          position: "absolute",
          top: "clamp(60px, 10vw, 100px)",
          right: "clamp(20px, 6vw, 80px)",
          width: "clamp(160px, 22vw, 280px)",
          height: "clamp(64px, 9vw, 110px)",
          borderRadius: "0 0 50% 50% / 0 0 100% 100%",
          border: "1px solid rgba(28,28,26,0.1)",
          borderTop: "none",
          background: "rgba(242,237,228,0.3)",
          backdropFilter: "blur(2px)",
          zIndex: 3,
          overflow: "hidden",
          pointerEvents: "none",
        }}
      >
        <div style={{
          position: "absolute",
          bottom: 0, left: "50%", transform: "translateX(-50%)",
          width: "55%", height: "40%",
          borderRadius: "0 0 50% 50% / 0 0 100% 100%",
          background: "rgba(255,255,255,0.1)",
        }} />
      </div>
    </>
  );
}