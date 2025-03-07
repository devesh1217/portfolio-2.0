import Link from 'next/link';
import { Heart } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-gray-900 text-white py-16">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-start gap-8">
          <div className="md:w-1/3">
            <Link href="/" className="font-playfair text-3xl font-bold hover:text-blue-400 transition-colors">
              Portfolio
            </Link>
            <p className="mt-4 text-gray-400 max-w-md leading-relaxed">
              Building innovative solutions while exploring the intersection of ancient wisdom and modern technology.
            </p>
          </div>
          
          <nav className="flex flex-wrap justify-start md:justify-end gap-x-12 gap-y-6">
            {['About', 'Skills', 'Education', 'Experience', 'Projects', 'Achievements', 'Contact'].map((item) => (
              <Link
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-gray-400 hover:text-blue-400 transition-colors relative after:content-[''] after:absolute after:w-full after:scale-x-0 after:h-0.5 after:bottom-0 after:left-0 after:bg-blue-400 after:transition-transform hover:after:scale-x-100"
              >
                {item}
              </Link>
            ))}
          </nav>
        </div>
        
        <div className="mt-12 pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 hover:text-gray-300 transition-colors">
            &copy; {currentYear} | All Rights Reserved
          </p>
          
          <p className="text-gray-400 flex items-center mt-4 md:mt-0 hover:text-gray-300 transition-colors">
            Made with <Heart className="h-4 w-4 mx-2 text-red-500 animate-pulse" /> using Next.js 15
          </p>
        </div>
      </div>
    </footer>
  );
}