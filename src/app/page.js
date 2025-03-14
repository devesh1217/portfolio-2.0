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
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { smoothScrollTo } from '@/utils/scroll';

export default function Home() {
  const [showMainContent, setShowMainContent] = useState(false);
  const [initialHash, setInitialHash] = useState('');

  useEffect(() => {
    if (typeof window !== 'undefined') {
      setInitialHash(window.location.hash);
    }
  }, []);

  const handleWelcomeFinish = () => {
    setShowMainContent(true);
    if (initialHash) {
      const sectionId = initialHash.replace('#', '');
      setTimeout(() => {
        smoothScrollTo(sectionId);
      }, 100);
    }
  };

  return (
    <div className="" role="document">
      {!showMainContent && <WelcomePage onFinish={handleWelcomeFinish} />}
      {showMainContent && (
        <>
          <Header />
          <div className='container mx-auto px-2 md:px-24'>
            <article itemScope itemType="http://schema.org/Person">
              <meta itemProp="name" content="Devesh Mehta" />
              <Hero />
              <About />
              <Skills />
              <Education />
              <Experience />
              <Projects />
              <Achievements />
              <Contact />
            </article>
          </div>
          <Footer />
        </>
      )}
    </div>
  );
}