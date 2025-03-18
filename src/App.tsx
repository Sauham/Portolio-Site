import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Resume from './components/Resume';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Education from './components/Education';
import Contact from './components/Contact';
import Footer from './components/Footer';
import SplashCursor from './components/SplashCursor';
import ThemeToggle from './components/ThemeToggle';
import { Element } from 'react-scroll';

function App() {
  const [isDark, setIsDark] = useState(true);

  const toggleTheme = () => {
    setIsDark(!isDark);
  };

  return (
    <div className={`min-h-screen ${isDark ? 'bg-[#0a0a0a] text-white' : 'bg-gray-50 text-gray-900'}  overflow-x-auto scrollbar-hide`}>
      <SplashCursor />
      <ThemeToggle isDark={isDark} toggleTheme={toggleTheme} />
      <div className="backdrop-blur-sm">
        <Navbar isDark={isDark} />
        <Element name="home">
          <Hero isDark={isDark} />
        </Element>
        <Element name="about">
          <About isDark={isDark} />
        </Element>
        <Element name="resume">
          <Resume isDark={isDark} />
        </Element>
        <Element name="skills">
          <Skills isDark={isDark} />
        </Element>
        <Element name="projects">
          <Projects isDark={isDark} />
        </Element>
        <Element name="experience">
          <Experience isDark={isDark} />
        </Element>
        <Element name="education">
          <Education isDark={isDark} />
        </Element>
        <Element name="contact">
          <Contact isDark={isDark} />
        </Element>
        <Footer isDark={isDark} />
      </div>
    </div>
  );
}

export default App;