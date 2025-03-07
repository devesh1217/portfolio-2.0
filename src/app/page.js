"use client";
import Hero from '@/components/Hero';
import About from '@/components/About';
import Skills from '@/components/Skills';
import Education from '@/components/Education';
import Experience from '@/components/Experience';
import Projects from '@/components/Projects';
import Achievements from '@/components/Achievements';
import Contact from '@/components/Contact';
import { useEffect, useState } from 'react';
import WelcomePage from '@/components/WelcomePage';

export default function Home() {
  const [showMainContent, setShowMainContent] = useState(false);

  return (
    <div className="container mx-auto px-4">
      {!showMainContent && <WelcomePage onFinish={() => setShowMainContent(true)} />}
      {showMainContent && (
        <>
          <Hero />
          <About />
          <Skills />
          <Education />
          <Experience />
          <Projects />
          <Achievements />
          <Contact />
        </>
      )}
    </div>
  );
}
