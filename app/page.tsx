import Navbar from "@/components/ui/Navbar";
import Hero from "@/components/ui/sections/Hero";
import About from "@/components/ui/sections/About";
import Skills from "@/components/ui/sections/Skills";
import Projects from "@/components/ui/sections/Projects";
import Experience from "@/components/ui/sections/Experience";
import Contact from "@/components/ui/sections/Contact";
import Footer from "@/components/ui/Footer";

export default function Home() {
  return (
    <main className="page-shell">
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Experience />
      <Contact />
      <Footer />
    </main>
  );
}
