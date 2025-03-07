import Image from 'next/image';
import Link from 'next/link';
import { ArrowDown } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center pt-20 pb-16">
      <div className="absolute inset-0 overflow-hidden -z-10">
        <div className="absolute inset-0 bg-gradient-to-r from-teal-50/30 to-blue-50/30 dark:from-teal-950/30 dark:to-blue-950/30"></div>
        <div className="absolute h-56 w-56 top-1/4 left-1/3 rounded-full bg-blue-200/20 dark:bg-blue-700/10 blur-3xl"></div>
        <div className="absolute h-64 w-64 bottom-1/4 right-1/3 rounded-full bg-teal-200/20 dark:bg-teal-700/10 blur-3xl"></div>
      </div>
      
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
          <p className="text-lg md:text-xl text-gray-700 dark:text-gray-300 mb-8 max-w-md">
            Building innovative solutions while exploring the intersection of ancient wisdom and modern technology.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link 
              href="#contact"
              className="btn-primary"
            >
              Get in Touch
            </Link>
            <Link 
              href="#projects"
              className="btn-secondary"
            >
              View My Work
            </Link>
          </div>
        </div>
        
        <div className="order-1 md:order-2 flex justify-center">
          <div className="relative h-64 w-64 md:h-80 md:w-80 rounded-full overflow-hidden border-4 border-blue-100 dark:border-blue-900 shadow-xl">
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