import Link from 'next/link';
import { Heart } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const handleLinkClick = (e, sectionId) => {
    e.preventDefault();
    const element = document.getElementById(sectionId);
    const offset = 80;
    const bodyRect = document.body.getBoundingClientRect().top;
    const elementRect = element.getBoundingClientRect().top;
    const elementPosition = elementRect - bodyRect;
    const offsetPosition = elementPosition - offset;

    window.scrollTo({
      top: offsetPosition,
      behavior: 'smooth'
    });
  };

  return (
    <footer className="mt-16 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-gray-100/50 dark:to-gray-900/50 -z-10" />

      <div className="container mx-auto">
        <div className="glass-effect rounded-2xl p-6 sm:p-8 lg:p-12">
          <div className="flex flex-col md:flex-row justify-between items-start gap-8">
            <div className="w-full md:w-1/3 space-y-4">
              <Link href="/" className="inline-flex items-center gap-0.5 hover:gap-1.5 transition-all duration-300">
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
              <p className="text-sm sm:text-base text-gray-700 dark:text-gray-300 max-w-md leading-relaxed">
                Building innovative solutions while exploring the intersection of ancient wisdom and modern technology.
              </p>
            </div>

            <nav className="grid grid-cols-2 sm:flex sm:flex-wrap justify-start md:justify-end gap-4 sm:gap-6 lg:gap-12">
              {['About', 'Skills', 'Education', 'Experience', 'Projects', 'Achievements', 'Contact'].map((item) => (
                <Link
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  onClick={(e) => handleLinkClick(e, item.toLowerCase())}
                  className="group relative text-gray-700 dark:text-gray-300 
                    hover:text-primary transition-all duration-300
                    after:content-[''] after:absolute after:w-full after:h-0.5 
                    after:bg-primary after:left-0 after:-bottom-1
                    after:transform after:scale-x-0 after:origin-right
                    after:transition-transform after:duration-300
                    hover:after:scale-x-100 hover:after:origin-left
                    hover:translate-y-[-2px]"
                >
                  {item}
                </Link>
              ))}
            </nav>
          </div>

          <div className="mt-8 sm:mt-12 pt-6 sm:pt-8 border-t border-gray-200/20 dark:border-gray-700/20 
            flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="text-sm sm:text-base text-gray-700 dark:text-gray-300 hover:text-primary transition-colors">
              &copy; {currentYear} | All Rights Reserved
            </p>

            <p className="text-sm sm:text-base text-gray-700 dark:text-gray-300 flex items-center 
              hover:text-primary transition-colors">
              Made with <Heart className="h-4 w-4 mx-2 text-red-500 animate-pulse" /> in INDIA.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}