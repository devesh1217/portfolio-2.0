'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { ThemeToggle } from '@/components/ThemeToggle';
import { Menu, X } from 'lucide-react';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-500 ${
        isScrolled
          ? 'bg-white/90 backdrop-blur-md dark:bg-gray-900/90 shadow-lg'
          : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-6">
        <div className="flex h-20 items-center justify-between">
          <Link href="/" className="font-playfair text-3xl font-bold hover:text-blue-600 transition-colors">
            Portfolio
          </Link>

          {/* Mobile menu button */}
          <button
            className="block md:hidden p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>

          {/* Desktop navigation */}
          <nav className="hidden md:flex md:items-center md:space-x-8">
            {['About', 'Skills', 'Education', 'Experience', 'Projects', 'Achievements', 'Contact'].map((item) => (
              <Link
                key={item}
                href={`#${item.toLowerCase()}`}
                className="relative hover:text-blue-600 transition-colors after:content-[''] after:absolute after:w-full after:scale-x-0 after:h-0.5 after:bottom-0 after:left-0 after:bg-blue-600 after:transition-transform hover:after:scale-x-100"
              >
                {item}
              </Link>
            ))}
            <ThemeToggle />
          </nav>
        </div>

        {/* Mobile navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 bg-white dark:bg-gray-900 shadow-xl rounded-xl absolute top-20 right-4 left-4 border border-gray-200 dark:border-gray-700 transition-all duration-200">
            <nav className="flex flex-col space-y-4 px-6">
              <Link
                href="#about"
                className="hover:text-blue-600 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                About
              </Link>
              <Link
                href="#skills"
                className="hover:text-blue-600 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Skills
              </Link>
              <Link
                href="#education"
                className="hover:text-blue-600 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Education
              </Link>
              <Link
                href="#experience"
                className="hover:text-blue-600 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Experience
              </Link>
              <Link
                href="#projects"
                className="hover:text-blue-600 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Projects
              </Link>
              <Link
                href="#achievements"
                className="hover:text-blue-600 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Achievements
              </Link>
              <Link
                href="#contact"
                className="hover:text-blue-600 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </Link>
              <div className="pt-2">
                <ThemeToggle />
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}