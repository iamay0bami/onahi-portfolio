"use client";

import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const projects = [
  {
    id: 1,
    name: "Afronated",
    role: "Founder · Creative Direction · Media",
    year: "2021 – Present",
    description: "A creative media collective amplifying African voices through powerful storytelling, spotlight interviews, and cultural excellence.",
    color: "#C8862A",
    bgColor: "rgba(200,134,42,0.15)",
  },
  {
    id: 2,
    name: "Campaign 02",
    role: "Creative Direction · Art Direction",
    year: "2024",
    description: "Placeholder — Creative direction and art direction for a brand identity campaign rooted in African aesthetics.",
    color: "#B5522E",
    bgColor: "rgba(181,82,46,0.15)",
  },
  {
    id: 3,
    name: "Curation Series",
    role: "Curator · Brand Strategy",
    year: "2023",
    description: "Placeholder — A curated cultural series bridging music, art, and community across Nigerian creative spaces.",
    color: "#2D4A35",
    bgColor: "rgba(45,74,53,0.2)",
  },
  {
    id: 4,
    name: "Editorial 04",
    role: "Media · Storytelling · Production",
    year: "2023",
    description: "Placeholder — Editorial storytelling project centering contemporary African youth culture and creative voices.",
    color: "#8A5C1A",
    bgColor: "rgba(138,92,26,0.15)",
  },
];

export default function Portfolio() {
  const sectionRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const previewRef = useRef<HTMLDivElement>(null);
  const [activeProject, setActiveProject] = useState<number | null>(null);
  const mousePos = useRef({ x: 0, y: 0 });
  const animFrame = useRef<number>(0);

  // Title entrance
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(titleRef.current,
        { y: 50, opacity: 0 },
        {
          y: 0, opacity: 1, duration: 1, ease: "power3.out",
          scrollTrigger: { trigger: titleRef.current, start: "top 85%" }
        }
      );

      gsap.utils.toArray<HTMLElement>(".project-item").forEach((el, i) => {
        gsap.fromTo(el,
          { x: -40, opacity: 0 },
          {
            x: 0, opacity: 1, duration: 0.8, ease: "power2.out",
            delay: i * 0.1,
            scrollTrigger: { trigger: el, start: "top 90%" }
          }
        );
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  // Cursor-following preview
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mousePos.current = { x: e.clientX, y: e.clientY };

      if (!previewRef.current) return;
      const offset = 20;
      const previewWidth = previewRef.current.offsetWidth;
      const previewHeight = previewRef.current.offsetHeight;

      let x = e.clientX + offset;
      let y = e.clientY + offset;

      if (x + previewWidth > window.innerWidth - 20) x = e.clientX - previewWidth - offset;
      if (y + previewHeight > window.innerHeight - 20) y = e.clientY - previewHeight - offset;

      gsap.to(previewRef.current, {
        left: x,
        top: y,
        duration: 0.4,
        ease: "power2.out",
      });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      const frame = animFrame.current; cancelAnimationFrame(frame);
    };
  }, []);

  const handleProjectEnter = (id: number) => {
    setActiveProject(id);
    if (previewRef.current) {
      previewRef.current.classList.add("visible");
    }
  };

  const handleProjectLeave = () => {
    setActiveProject(null);
    if (previewRef.current) {
      previewRef.current.classList.remove("visible");
    }
  };

  const activeData = projects.find((p) => p.id === activeProject);

  return (
    <section
      id="portfolio"
      ref={sectionRef}
      style={{
        padding: "clamp(80px, 12vw, 160px) clamp(24px, 6vw, 80px)",
        background: "var(--bg-dark)",
        position: "relative",
      }}
    >
      <div style={{ maxWidth: "var(--container-max)", margin: "0 auto" }}>
        <h2
          ref={titleRef}
          style={{
            fontFamily: "var(--font-serif)",
            fontSize: "clamp(13px, 1.2vw, 16px)",
            letterSpacing: "0.2em",
            textTransform: "uppercase",
            color: "var(--gold)",
            marginBottom: "clamp(40px, 6vw, 80px)",
            fontWeight: 400,
          }}
        >
          Portfolio
        </h2>

        {/* Project list */}
        <div>
          {projects.map((project) => (
            <div
              key={project.id}
              className={`project-item ${activeProject === project.id ? "active" : ""}`}
              onMouseEnter={() => handleProjectEnter(project.id)}
              onMouseLeave={handleProjectLeave}
            >
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
                <span className="project-title">{project.name}</span>
                <span style={{
                  fontFamily: "var(--font-sans)",
                  fontSize: "clamp(11px, 1vw, 13px)",
                  color: "var(--cream-muted)",
                  opacity: 0.6,
                  marginTop: "8px",
                  flexShrink: 0,
                  paddingLeft: "20px",
                }}>
                  {project.year}
                </span>
              </div>
              <span className="project-role">{project.role}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Floating preview */}
      <div
        id="project-preview"
        ref={previewRef}
        style={{
          background: activeData ? activeData.bgColor : "rgba(200,134,42,0.15)",
          border: `1px solid ${activeData?.color ?? "var(--gold)"}`,
          borderColor: `${activeData?.color ?? "var(--gold)"}40`,
        }}
      >
        <div style={{
          position: "absolute", inset: 0,
          display: "flex", flexDirection: "column",
          alignItems: "center", justifyContent: "center",
          padding: "20px", textAlign: "center", gap: "8px",
        }}>
          <span style={{
            fontFamily: "var(--font-serif)",
            fontStyle: "italic",
            fontSize: "clamp(18px, 2vw, 26px)",
            color: activeData?.color ?? "var(--gold)",
            lineHeight: 1.1,
          }}>
            {activeData?.name}
          </span>
          <span style={{
            fontFamily: "var(--font-sans)",
            fontSize: "11px",
            color: "var(--cream-muted)",
            letterSpacing: "0.05em",
            opacity: 0.7,
          }}>
            {activeData?.role}
          </span>
        </div>
      </div>
    </section>
  );
}
