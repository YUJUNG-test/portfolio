
import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Competencies from './components/Competencies';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <section id="hero">
          <Hero />
        </section>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-32 py-20">
          <section id="about">
            <About />
          </section>

          <section id="competencies">
            <Competencies />
          </section>

          <section id="projects">
            <Projects />
          </section>

          <section id="experience">
            <Experience />
          </section>

          <section id="skills">
            <Skills />
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default App;
