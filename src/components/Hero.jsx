import Image from 'next/image';
import Link from 'next/link';
import { ArrowDown, Mail, Briefcase } from 'lucide-react';

export default function Hero() {
  const LinkButton = ({ href, icon: Icon, children, primary = false }) => (
    <Link
      href={href}
      className={`
        group flex items-center gap-2 px-4 py-2.5 rounded-lg
        relative overflow-hidden
        ${primary ? 
          'bg-primary/10 text-primary hover:text-white dark:bg-primary/5' : 
          'text-gray-700 dark:text-gray-300 hover:text-primary dark:hover:text-primary'
        }
        transition-all duration-300
      `}
    >
      <div className={`
        absolute inset-0 opacity-0 group-hover:opacity-100
        ${primary ? 'bg-primary' : 'bg-primary/5 dark:bg-primary/5'}
        transition-all duration-300 transform group-hover:scale-100 scale-90
        rounded-lg
      `} />
      <Icon className="h-5 w-5 relative z-10 transition-transform duration-300 group-hover:scale-110" />
      <span className="font-medium relative z-10">{children}</span>
    </Link>
  );

  return (
    <section className="relative min-h-[90vh] flex items-center md:pt-20 pb-16">
      <div className="container mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
        <div className="order-2 md:order-1">
          <h2 className="font-playfair text-3xl md:text-5xl font-bold mb-6">
            नमस्ते & Hello, I'm
          </h2>
          <h1 className="font-playfair text-4xl md:text-6xl font-bold mb-4">
            <span className="text-gradient bg-gradient-to-r from-teal-700 to-blue-700 dark:from-teal-700 dark:to-blue-500">
              Devesh Chetan Mehta
            </span>
          </h1>
          <h2 className="font-playfair text-3xl md:text-5xl font-bold mb-6">
            A Software Developer & Tech Explorer
          </h2>
          <p className="text-lg md:text-xl text-gray-700 dark:text-gray-200 mb-8 max-w-md backdrop-blur-sm">
            Building innovative solutions while exploring the intersection of ancient wisdom and modern technology.
          </p>
          <div className="flex flex-wrap gap-4">
            <LinkButton href="#contact" icon={Mail} primary>
              Get in Touch
            </LinkButton>
            <LinkButton href="#projects" icon={Briefcase}>
              View My Work
            </LinkButton>
          </div>
        </div>

        <div className="order-1 md:order-2 flex justify-center">
          <div className="relative h-64 w-64 md:h-80 md:w-80 rounded-full overflow-hidden border-4 border-white/20 dark:border-gray-700/30 shadow-xl backdrop-blur-sm">
            <Image
              src="/img/profile.jpg"
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