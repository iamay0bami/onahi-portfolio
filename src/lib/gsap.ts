// src/lib/gsap.ts
// Import and register GSAP plugins in ONE place.
// Every component imports gsap/ScrollTrigger from here.
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export { gsap, ScrollTrigger };