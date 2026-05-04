"use client";

export default function QuoteBreak() {
  return (
    <section
      style={{
        background: "var(--cream)",
        position: "relative",
        overflow: "hidden",
        padding: "clamp(80px, 12vw, 140px) var(--container-pad)",
      }}
    >
      {/* Content wrapper — centered */}
      <div style={{
        maxWidth: "var(--container-max)", margin: "0 auto", width: "100%",
        display: "flex", flexDirection: "column", alignItems: "center",
        position: "relative", zIndex: 2,
      }}>

        {/* Top thin divider line */}
        <div style={{
          display: "flex", alignItems: "center", gap: "clamp(12px, 2.5vw, 28px)",
          width: "100%", maxWidth: "820px",
          marginBottom: "clamp(40px, 6vw, 64px)",
          animation: "fadeIn 0.8s ease 0.1s both",
        }}>
          <div style={{ flex: 1, height: "1px", background: "rgba(28,28,26,0.15)" }} />
          <span style={{
            fontFamily: "var(--font-serif)", fontStyle: "italic",
            fontSize: "11px", letterSpacing: "0.2em", textTransform: "uppercase",
            color: "rgba(28,28,26,0.35)", whiteSpace: "nowrap",
          }}>A word from Onahi</span>
          <div style={{ flex: 1, height: "1px", background: "rgba(28,28,26,0.15)" }} />
        </div>

        {/* Blockquote — elegantly styled */}
        <blockquote
          style={{
            maxWidth: "820px",
            textAlign: "center",
            margin: "0",
            padding: "0",
            border: "none",
            position: "relative",
            animation: "fadeUp 1s cubic-bezier(0.22,1,0.36,1) 0.2s both",
          }}
        >
          {/* Opening quotation mark */}
          <div aria-hidden style={{
            fontFamily: "var(--font-serif)",
            fontSize: "clamp(80px, 12vw, 140px)",
            lineHeight: 0.6,
            color: "rgba(107,117,96,0.18)",
            fontWeight: 300,
            textAlign: "center",
            marginBottom: "clamp(8px, 1.5vw, 16px)",
            userSelect: "none",
          }}>&ldquo;</div>

          <p style={{
            fontFamily: "var(--font-serif)", fontWeight: 300,
            fontSize: "clamp(20px, 2.8vw, 38px)",
            lineHeight: 1.5, letterSpacing: "-0.01em",
            color: "var(--charcoal)",
            margin: "0",
          }}>
            I turn creative ideas into visuals that live and breathe online.
            With a background in <em>music</em>, media, and youth <em>culture</em> —
            I know what <em>clicks</em>, what <em>resonates</em>, and what doesn&apos;t.
          </p>

          {/* Closing quotation mark */}
          <div aria-hidden style={{
            fontFamily: "var(--font-serif)",
            fontSize: "clamp(80px, 12vw, 140px)",
            lineHeight: 0.6,
            color: "rgba(107,117,96,0.18)",
            fontWeight: 300,
            textAlign: "center",
            marginTop: "clamp(8px, 1.5vw, 16px)",
            userSelect: "none",
          }}>&rdquo;</div>

          {/* Attribution */}
          <footer style={{
            marginTop: "clamp(20px, 3vw, 32px)",
            display: "flex", alignItems: "center", justifyContent: "center", gap: "12px",
          }}>
            <div style={{ width: "32px", height: "1px", background: "var(--sage-deep)" }} />
            <cite style={{
              fontFamily: "var(--font-sans)", fontStyle: "normal",
              fontSize: "12px", letterSpacing: "0.14em", textTransform: "uppercase",
              color: "var(--sage-deep)", fontWeight: 400,
            }}>Onahi Ijeh</cite>
            <div style={{ width: "32px", height: "1px", background: "var(--sage-deep)" }} />
          </footer>
        </blockquote>

        {/* Bottom thin divider lines — replaces the green semi-circle */}
        <div style={{
          marginTop: "clamp(48px, 7vw, 72px)",
          width: "100%", maxWidth: "820px",
          display: "flex", flexDirection: "column", gap: "8px",
          animation: "fadeIn 0.9s ease 0.35s both",
        }}>
          <div style={{ height: "1px", background: "rgba(28,28,26,0.12)" }} />
          <div style={{ height: "1px", background: "rgba(28,28,26,0.06)" }} />
        </div>

      </div>
    </section>
  );
}