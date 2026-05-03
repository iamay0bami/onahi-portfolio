import Navbar          from "@/components/layout/Navbar";
import Hero            from "@/components/sections/Hero";
import QuoteBreak      from "@/components/sections/QuoteBreak";
import About           from "@/components/sections/About";
import Portfolio       from "@/components/sections/Portfolio";
import Afronated       from "@/components/sections/Afronated";
import Values          from "@/components/sections/Values";
import WhatIDo         from "@/components/sections/WhatIDo";
import CreativeJourney from "@/components/sections/CreativeJourney";
import Contact         from "@/components/sections/Contact";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <QuoteBreak />
      <About />
      <Portfolio />
      <Afronated />
      <Values />
      <WhatIDo />
      <CreativeJourney />
      <Contact />
    </main>
  );
}