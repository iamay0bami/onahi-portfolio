"use client";

export default function QuoteBreak() {
  const quote = `I turn creative ideas into visuals that live and breathe online. With a background in music, media, and youth culture — I know what clicks, what resonates, and what doesn't.`;

  return (
    <section
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
      {/* Quote text — CSS animated */}
      <div style={{
        maxWidth: "var(--container-max)", margin: "0 auto", width: "100%",
        position: "relative", zIndex: 2,
        animation: "fadeUp 1s cubic-bezier(0.22,1,0.36,1) 0.1s both",
      }}>
        <p style={{
          fontFamily: "var(--font-serif)", fontWeight: 300,
          fontSize: "clamp(22px, 3.4vw, 44px)",
          lineHeight: 1.45, letterSpacing: "-0.01em",
          color: "var(--charcoal)", textAlign: "center", maxWidth: "820px",
          margin: "0 auto",
        }}>
          {quote.split(" ").map((word, i) => (
            <span key={i} style={{ display: "inline-block", marginRight: "0.28em" }}>
              {word.includes("clicks") || word.includes("resonates") || word.includes("music") || word.includes("culture")
                ? <em>{word}</em>
                : word
              }
            </span>
          ))}
        </p>
      </div>

      {/* THE BOWL / ARC SHAPE — CSS animated */}
      <div style={{
        position: "relative", zIndex: 1,
        marginTop: "clamp(48px, 8vw, 80px)",
        display: "flex", justifyContent: "center",
        animation: "fadeUp 1.3s cubic-bezier(0.22,1,0.36,1) 0.2s both",
      }}>
        <div style={{
          width: "clamp(320px, 70vw, 900px)",
          height: "clamp(120px, 20vw, 280px)",
          borderRadius: "0 0 50% 50% / 0 0 100% 100%",
          background: "var(--sage)",
          position: "relative",
          overflow: "hidden",
        }}>
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