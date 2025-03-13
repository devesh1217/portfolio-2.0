import { FaLightbulb, FaPuzzlePiece, FaRocket, FaUsers } from 'react-icons/fa';
import { BsBook } from 'react-icons/bs';
import { LuBrainCircuit } from 'react-icons/lu';

export default function About() {
  const cards = [
    { title: 'Innovator', icon: FaLightbulb, description: 'Turning creative ideas into reality' },
    { title: 'Problem Solver', icon: FaPuzzlePiece, description: 'Finding elegant solutions to complex challenges' },
    { title: 'Tech Explorer', icon: FaRocket, description: 'Always learning and staying current' },
    { title: 'Leader', icon: FaUsers, description: 'Guiding teams to achieve excellence' }
  ];

  return (
    <section id="about" className="py-16 md:py-24 relative">
      <div className="container mx-auto px-4">
        <h2 className="section-title text-center mb-16 md:mb-20">About Me</h2>
        
        <div className="grid md:grid-cols-2 gap-8 md:gap-20 items-stretch mt-6">
          <div className="prose prose-lg dark:prose-invert max-w-none animate-slide-up glass-effect p-6 md:p-8 lg:p-10 rounded-2xl">
            <div className="flex items-center gap-4 mb-6 md:mb-8">
              <BsBook className="w-6 h-6 md:w-8 md:h-8 text-primary" />
              <h3 className="text-xl md:text-2xl lg:text-3xl font-playfair tracking-tight text-gray-900 dark:text-gray-100 m-0">
                Engineering Meets Philosophy
              </h3>
            </div>
            
            <div className="space-y-4 md:space-y-6">
              <p className="text-sm md:text-base lg:text-lg text-gray-700 dark:text-gray-300 leading-relaxed text-justify">
                I'm a software developer with a unique perspective shaped by my interest in ancient texts and Sanskrit. My approach to problem-solving combines cutting-edge technology with timeless wisdom.
              </p>
              <p className="text-sm md:text-base lg:text-lg text-gray-700 dark:text-gray-300 leading-relaxed text-justify">
                As a graduate from NIT Surat with a B.Tech in Computer Science and Engineering, I bring a solid technical foundation to my work. My education in performing arts (Tabla) has taught me discipline, patience, and the art of composition, qualities that enhance my approach to software development.
              </p>
              <p className="text-sm md:text-base lg:text-lg text-gray-700 dark:text-gray-300 leading-relaxed text-justify">
                I believe in creating solutions that not only solve technical challenges but also consider the human experience and long-term impact. This holistic approach guides all my projects and collaborations.
              </p>
            </div>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-8 h-full">
            {cards.map(({ title, icon: Icon, description }, index) => (
              <div 
                key={title}
                className="glass-effect rounded-2xl p-6 md:p-8 text-center group hover:shadow-xl transition-all duration-300 animate-slide-up hover:-translate-y-1 flex flex-col justify-between h-full"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex flex-col items-center flex-1">
                  <div className="p-3 rounded-full bg-primary/10 dark:bg-primary/5 mb-4 group-hover:scale-110 transition-transform duration-300">
                    <Icon className="w-6 h-6 text-primary" />
                  </div>
                  <h4 className="font-bold text-lg md:text-xl mb-3 text-gray-900 dark:text-gray-100 group-hover:text-primary transition-colors">
                    {title}
                  </h4>
                  <p className="text-gray-600 dark:text-gray-400 text-sm md:text-base">
                    {description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}