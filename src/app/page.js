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
  const [isWelcome, setIsWelcome] = useState(true);
  useEffect(() => {
    document.title = 'Home | Portfolio';
    setTimeout(() => {
      setIsWelcome(false);
    }, 5000);
  }, []);
  if(isWelcome){
    return (
      <WelcomePage />
    );
  }
  return (
    <div className="container mx-auto px-4">
      <Hero />
      <About />
      <Skills />
      <Education />
      <Experience />
      <Projects />
      <Achievements />
      <Contact />
    </div>
  );
}
