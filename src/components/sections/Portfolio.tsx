"use client";
import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const PROJECTS = [
  { id: 1, name: "Afronated",        role: "Founder · Creative Direction · Media", year: "2021 – Present", color: "var(--sage-deep)" },
  { id: 2, name: "Campaign 02",      role: "Creative Direction · Art Direction",    year: "2024",           color: "var(--terracotta)" },
  { id: 3, name: "Curation Series",  role: "Curator · Brand Strategy",              year: "2023",           color: "var(--sage-deep)" },
  { id: 4, name: "Editorial 04",     role: "Media · Storytelling · Production",     year: "2023",           color: "var(--gold)" },
  { id: 5, name: "Project 05",       role: "Creative Direction",                    year: "2022",           color: "var(--rose)" },
];

export default function Portfolio() {
  const sectionRef = useRef<HTMLElement>(null);
  const titleRef   = useRef<HTMLHeadingElement>(null);
  const previewRef = useRef<HTMLDivElement>(null);
  const [activeId, setActiveId] = useState<number | null>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(titleRef.current,
        { y: 40, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.9, ease: "power3.out",
          scrollTrigger: { trigger: titleRef.current, start: "top 85%" } }
      );
      gsap.utils.toArray<HTMLElement>(".project-row").forEach((el, i) => {
        gsap.fromTo(el,
          { x: -36, opacity: 0 },
          { x: 0, opacity: 1, duration: 0.75, ease: "power2.out", delay: i * 0.09,
            scrollTrigger: { trigger: el, start: "top 92%" } }
        );
      });
    }, sectionRef);

    // Cursor-following preview
    const onMove = (e: MouseEvent) => {
      if (!previewRef.current) return;
      const pw = previewRef.current.offsetWidth;
      const ph = previewRef.current.offsetHeight;
      let x = e.clientX + 22, y = e.clientY + 22;
      if (x + pw > window.innerWidth - 16)  x = e.clientX - pw - 22;
      if (y + ph > window.innerHeight - 16) y = e.clientY - ph - 22;
      gsap.to(previewRef.current, { left: x, top: y, duration: 0.38, ease: "power2.out" });
    };
    window.addEventListener("mousemove", onMove);
    return () => { ctx.revert(); window.removeEventListener("mousemove", onMove); };
  }, []);

  const active = PROJECTS.find(p => p.id === activeId);

  return (
    <section
      id="portfolio"
      ref={sectionRef}
      className="pinstripe"
      style={{ background: "var(--sage)", position: "relative", padding: "clamp(80px,12vw,160px) var(--container-pad)" }}
    >
      <div className="wrap">
        <h2 ref={titleRef} style={{
          fontFamily: "var(--font-sans)", fontSize: "clamp(11px,1vw,14px)",
          letterSpacing: "0.22em", textTransform: "uppercase",
          color: "var(--charcoal-soft)", marginBottom: "clamp(36px,5vw,72px)", fontWeight: 300,
        }}>
          Portfolio
        </h2>

        {PROJECTS.map(p => (
          <div
            key={p.id}
            className="project-row"
            onMouseEnter={() => { setActiveId(p.id); previewRef.current?.classList.add("show"); }}
            onMouseLeave={() => { setActiveId(null); previewRef.current?.classList.remove("show"); }}
          >
            <div>
              <span className="proj-name">{p.name}</span>
              <span className="proj-role">{p.role}</span>
            </div>
            <span style={{
              fontFamily: "var(--font-sans)", fontSize: "clamp(10px,0.9vw,12px)",
              color: "var(--sage-deep)", letterSpacing: "0.06em", flexShrink: 0,
            }}>{p.year}</span>
          </div>
        ))}
      </div>

      {/* Cursor-following circular preview */}
      <div
        id="proj-preview"
        ref={previewRef}
        style={{
          background: active ? `${active.color}22` : "rgba(107,117,96,0.12)",
          border: `1px solid ${active?.color ?? "var(--sage-deep)"}44`,
        }}
      >
        <div style={{
          position: "absolute", inset: 0,
          display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center",
          gap: "6px", padding: "16px",
        }}>
          {/* Photo placeholder inside preview */}
          <div style={{
            width: "70%", height: "60%",
            background: "rgba(28,28,26,0.06)",
            borderRadius: "4px",
            display: "flex", alignItems: "center", justifyContent: "center",
          }}>
            <span style={{ fontFamily: "var(--font-serif)", fontStyle: "italic", fontSize: "28px", color: "rgba(28,28,26,0.2)" }}>O</span>
          </div>
          <span style={{
            fontFamily: "var(--font-serif)", fontStyle: "italic",
            fontSize: "clamp(14px,1.5vw,18px)", color: "var(--charcoal)", textAlign: "center",
          }}>{active?.name}</span>
        </div>
      </div>
    </section>
  );
}
