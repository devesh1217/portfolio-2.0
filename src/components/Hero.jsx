import Image from 'next/image';
import Link from 'next/link';
import { ArrowDown } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center pt-20 pb-16">
      <div className="container mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
        <div className="order-2 md:order-1">
          <h1 className="font-playfair text-4xl md:text-6xl font-bold mb-4">
            <span className="text-gradient bg-gradient-to-r from-teal-600 to-blue-600 dark:from-teal-400 dark:to-blue-400">
              Hello, I'm
            </span>
          </h1>
          <h2 className="font-playfair text-3xl md:text-5xl font-bold mb-6">
            A Software Developer & Tech Explorer
          </h2>
          <p className="text-lg md:text-xl text-gray-700 dark:text-gray-200 mb-8 max-w-md backdrop-blur-sm">
            Building innovative solutions while exploring the intersection of ancient wisdom and modern technology.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link 
              href="#contact"
              className="btn-primary backdrop-blur-sm bg-teal-600/90 hover:bg-teal-600 dark:bg-teal-500/90 dark:hover:bg-teal-500"
            >
              Get in Touch
            </Link>
            <Link 
              href="#projects"
              className="btn-secondary backdrop-blur-sm bg-white/10 dark:bg-gray-900/20 border border-white/20 dark:border-gray-700/30"
            >
              View My Work
            </Link>
          </div>
        </div>
        
        <div className="order-1 md:order-2 flex justify-center">
          <div className="relative h-64 w-64 md:h-80 md:w-80 rounded-full overflow-hidden border-4 border-white/20 dark:border-gray-700/30 shadow-xl backdrop-blur-sm">
            <Image 
              src="/placeholder-profile.jpg" 
              alt="Portrait" 
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <Link href="#about">
          <ArrowDown className="h-8 w-8 text-blue-600 dark:text-blue-400" />
        </Link>
      </div>
    </section>
  );
}