'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { ThemeToggle } from '@/components/ThemeToggle';
import { Menu, X } from 'lucide-react';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
      
      // Update active section based on scroll position
      const sections = document.querySelectorAll('section[id]');
      const scrollPosition = window.scrollY + 100;

      sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
          setActiveSection(section.getAttribute('id'));
        }
      });
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLinkClick = (e, sectionId) => {
    e.preventDefault();
    const element = document.getElementById(sectionId);
    const offset = 80; // Height of fixed header
    const bodyRect = document.body.getBoundingClientRect().top;
    const elementRect = element.getBoundingClientRect().top;
    const elementPosition = elementRect - bodyRect;
    const offsetPosition = elementPosition - offset;

    window.scrollTo({
      top: offsetPosition,
      behavior: 'smooth'
    });
    
    setIsMenuOpen(false);
  };

  const NavLink = ({ item, mobile = false }) => (
    <Link
      key={item}
      href={`#${item.toLowerCase()}`}
      onClick={(e) => handleLinkClick(e, item.toLowerCase())}
      className={`
        relative group transition-all duration-300 py-1
        ${mobile ? 'text-lg' : ''} 
        ${activeSection === item.toLowerCase() 
          ? 'text-primary font-medium' 
          : 'text-gray-700 dark:text-gray-300 hover:text-primary'}
      `}
    >
      {item}
      <span className={`
        absolute left-0 -bottom-0.5 w-full h-0.5
        bg-gradient-to-r from-blue-600 to-blue-400
        origin-right scale-x-0 transition-transform duration-300 ease-out
        group-hover:origin-left group-hover:scale-x-100
        ${activeSection === item.toLowerCase() ? '!origin-left !scale-x-100' : ''}
      `} />
    </Link>
  );

  return (
    <header className={`sticky top-0 z-50 transition-all duration-500 ${
      isScrolled ? 'glass-effect shadow-lg' : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-6 sm:px-8 lg:px-12">
        <div className="flex h-16 sm:h-20 items-center justify-between">
          <Link href="/" className="group flex items-center gap-0.5 hover:gap-1.5 transition-all duration-300">
            <div className="flex items-baseline">
              <span className="font-playfair text-2xl sm:text-3xl font-bold bg-gradient-to-r from-blue-500 to-blue-300 bg-clip-text text-transparent">
                Dev
              </span>
              <span className="font-code text-xl sm:text-2xl text-gray-600 dark:text-gray-400">
                esh
              </span>
            </div>
            <div className="flex items-baseline">
              <span className="font-playfair text-2xl sm:text-3xl font-bold bg-gradient-to-r from-blue-500 to-blue-300 bg-clip-text text-transparent">
                Me
              </span>
              <span className="font-code text-xl sm:text-2xl text-gray-600 dark:text-gray-400">
                hta
              </span>
            </div>
          </Link>

          <div className="flex items-center gap-2 sm:gap-4">
            {/* <ThemeToggle className="mr-2" /> */}
            <button
              className="block md:hidden p-2 rounded-lg 
                bg-gray-400/10 text-gray-700 dark:text-gray-300
                hover:bg-primary/20 hover:text-primary
                transition-all duration-300"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="h-5 w-5 sm:h-6 sm:w-6" /> : <Menu className="h-5 w-5 sm:h-6 sm:w-6" />}
            </button>
          </div>

          <nav className="hidden md:flex md:items-center md:space-x-4 lg:space-x-8">
            {['About', 'Skills', 'Education', 'Experience', 'Projects', 'Achievements', 'Contact']
              .map((item) => <NavLink key={item} item={item} />)}
          </nav>
        </div>

        {isMenuOpen && (
          <div className="md:hidden glass-effect rounded-xl absolute top-16 sm:top-20 right-4 left-4 
            animate-slide-up shadow-lg border border-gray-200/20 dark:border-gray-700/20">
            <nav className="flex flex-col space-y-4 p-4 sm:p-6">
              {['About', 'Skills', 'Education', 'Experience', 'Projects', 'Achievements', 'Contact']
                .map((item) => <NavLink key={item} item={item} mobile />)}
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}