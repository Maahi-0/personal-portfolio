import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Experience from "./components/Experience";
import Certificates from "./components/Certificates";
import Education from "./components/Education";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import StarryBackground from "./components/StarryBackground";

function App() {
  return (
    <div className="bg-[#050b18] min-h-screen text-white font-sans selection:bg-blue-500/30 selection:text-blue-200">
      <StarryBackground />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Experience />
        <Certificates />
        <Education />
        <Skills />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
