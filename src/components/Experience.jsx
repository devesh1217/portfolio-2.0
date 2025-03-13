import { Briefcase, Calendar } from 'lucide-react';

export default function Experience() {
  const experiences = [
    {
      title: "Event Manager & Student Coordinator",
      organization: "Nexus Cell, NIT, Surat",
      period: "Jul 2024 - Present",
      description: "Organized and executed events by managing logistics, coordinating teams, securing approvals, and ensuring successful delivery, contributing to the overall growth of the CSE and AI departments."
    },
    {
      title: "Executive",
      organization: "ACM NIT, Surat",
      period: "Sept 2023 - Present",
      description: "Led events, managed administration, fostered collaborations and drove member engagement and strategic growth."
    }
  ];

  return (
    <section id="experience" className="py-16 md:py-24 relative">
      <div className="container mx-auto px-4">
        <h2 className="section-title text-center mb-16">Work Experience</h2>
        
        <div className="mt-12 relative">
          {/* Timeline line */}
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-[3px] bg-gray-600 dark:bg-gray-400 opacity-50"></div>
          
          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div 
                key={index} 
                className="relative animate-slide-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Timeline dot */}
                <div className="absolute left-0 md:left-1/2 top-0 w-5 h-5 rounded-full bg-gray-600 dark:bg-gray-400 transform translate-x-[-10px] md:translate-x-[-10px]"></div>
                
                <div className={`md:w-1/2 ${index % 2 === 0 ? 'md:pr-12 ml-8 md:ml-0' : 'md:pl-12 ml-8 md:ml-auto'}`}>
                  <div className="glass-effect rounded-xl p-6 hover:-translate-y-1 transition-all duration-300">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="p-2 rounded-lg bg-primary/10 dark:bg-primary/5">
                        <Briefcase className="h-5 w-5 text-primary" />
                      </div>
                      <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100">{exp.title}</h3>
                    </div>
                    
                    <p className="text-primary dark:text-primary/90 font-medium mb-3">{exp.organization}</p>
                    
                    <div className="flex items-center text-gray-600 dark:text-gray-400 mb-4 bg-gray-100/50 dark:bg-gray-800/50 rounded-lg px-3 py-1.5 w-fit">
                      <Calendar className="h-4 w-4 mr-2 text-primary" />
                      <span className="text-sm">{exp.period}</span>
                    </div>
                    
                    <p className="text-gray-700 dark:text-gray-300 text-sm md:text-base leading-relaxed">
                      {exp.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}