import Navbar from "@/components/sections/Navbar";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Projects from "@/components/sections/Projects";
import Experience from "@/components/sections/Experience";
import Skills from "@/components/sections/Skills";
import Resume from "@/components/sections/Resume";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/sections/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <div className="paper-wrapper">
        <main>
          <Hero />
          <About />
          <Projects />
          <Experience />
          <Skills />
          <Resume />
          <Contact />
          <Footer />
        </main>
      </div>
    </>
  );
}
