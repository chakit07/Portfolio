import { useEffect, useState } from "react";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Resume from "./components/Resume";
import Skills from "./components/Skills";
import SectionWrapper from "./components/Wrapper/SectionWrapper";

function App() {
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");

  useEffect(() => {
    document.documentElement.classList.toggle("dark", theme === "dark");
    localStorage.setItem("theme", theme);
  }, [theme]);

  return (
    <div
      className="min-h-screen 
      bg-gradient-to-br from-blue-100 via-white to-purple-100
      dark:from-gray-900 dark:via-gray-800 dark:to-gray-900
      text-gray-900 dark:text-gray-100"
    >
      <Navbar theme={theme} setTheme={setTheme} />

      <SectionWrapper id="home">
        <Hero />
      </SectionWrapper>

      <SectionWrapper id="about">
        <About />
      </SectionWrapper>

      <SectionWrapper id="skills">
        <Skills />
      </SectionWrapper>

      <SectionWrapper id="projects">
        <Projects />
      </SectionWrapper>

      <SectionWrapper id="resume">
        <Resume />
      </SectionWrapper>

      <SectionWrapper id="contact">
        <Contact />
      </SectionWrapper>

      <Footer />
    </div>
  );
}

export default App;
