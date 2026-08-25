import React from 'react'
import About from "./components/About";
import BackToTop from "./components/BackToTop";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import { navLinks } from "./data/portfolioData";
import { useScrollSpy } from "./hooks/useScrollSpy";
import { useTheme } from "./hooks/useTheme";
const App = () => {
   const { toggleTheme } = useTheme();
   const sectionIds = navLinks.map(({ id }) => id);
   const { activeSection, scrolled, showBackToTop } = useScrollSpy(sectionIds);
   return <>
  <Navbar
        activeSection={activeSection}
        scrolled={scrolled}
        onToggleTheme={toggleTheme}
      />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </main>
      <Footer />
      <BackToTop visible={showBackToTop} />
    </>
 
}

export default App