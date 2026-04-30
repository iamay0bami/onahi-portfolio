import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Portfolio from "@/components/sections/Portfolio";
import Afronated from "@/components/sections/Afronated";
import Values from "@/components/sections/Values";
import Press from "@/components/sections/Press";
import Contact from "@/components/sections/Contact";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <About />
      <Portfolio />
      <Afronated />
      <Values />
      <Press />
      <Contact />
    </main>
  );
}
