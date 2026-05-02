"use client";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

/**
 * THE SIGNATURE ANIMATION: a ball that drops from the hero,
 * bounces, and rolls across sections — just like olhauzhykova.com
 */
export default function FloatingBall() {
  const ballRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ball = ballRef.current;
    if (!ball) return;

    // Start position: top-right of hero
    gsap.set(ball, { x: "72vw", y: "18vh", opacity: 0 });

    // Entrance — drop in after page load
    gsap.to(ball, { opacity: 1, duration: 0.4, delay: 1.2 });

    // PHASE 1 — fall down from hero position
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: "#hero",
        start: "top top",
        end: "bottom top",
        scrub: 1.2,
      }
    });
    tl.to(ball, { y: "88vh", x: "60vw", ease: "power1.in", duration: 1 });

    // PHASE 2 — roll left across about section
    const tl2 = gsap.timeline({
      scrollTrigger: {
        trigger: "#about",
        start: "top bottom",
        end: "bottom top",
        scrub: 1.4,
      }
    });
    tl2.to(ball, { x: "10vw", y: "72vh", ease: "none", duration: 1 });

    // PHASE 3 — drift down-right in portfolio
    const tl3 = gsap.timeline({
      scrollTrigger: {
        trigger: "#portfolio",
        start: "top bottom",
        end: "bottom top",
        scrub: 1.6,
      }
    });
    tl3.to(ball, { x: "78vw", y: "60vh", ease: "none", duration: 1 });

    // PHASE 4 — settle bottom-left by contact
    const tl4 = gsap.timeline({
      scrollTrigger: {
        trigger: "#contact",
        start: "top bottom",
        end: "bottom top",
        scrub: 1.8,
      }
    });
    tl4.to(ball, { x: "8vw", y: "80vh", ease: "power1.out", duration: 1 });

    return () => ScrollTrigger.getAll().forEach(t => t.kill());
  }, []);

  return (
    <div
      id="floating-ball"
      ref={ballRef}
      aria-hidden="true"
    />
  );
}
