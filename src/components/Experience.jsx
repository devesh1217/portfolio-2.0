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
    <section id="experience" className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="section-title">Work Experience</h2>
        
        <div className="mt-12 relative">
          {/* Timeline line */}
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-blue-200 dark:bg-blue-800 transform md:translate-x-[-0.5px]"></div>
          
          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div key={index} className="relative">
                {/* Timeline dot */}
                <div className="absolute left-0 md:left-1/2 top-0 w-4 h-4 rounded-full bg-blue-500 dark:bg-blue-400 transform translate-x-[-8px] md:translate-x-[-8px]"></div>
                
                <div className={`md:w-1/2 ${index % 2 === 0 ? 'md:pr-12 ml-6 md:ml-0' : 'md:pl-12 ml-6 md:ml-auto'}`}>
                  <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
                    <h3 className="text-xl font-bold">{exp.title}</h3>
                    <p className="text-blue-600 dark:text-blue-400 mt-1">{exp.organization}</p>
                    
                    <div className="mt-3 flex items-center text-gray-600 dark:text-gray-400">
                      <Calendar className="h-4 w-4 mr-1" />
                      <span>{exp.period}</span>
                    </div>
                    
                    <p className="mt-4 text-gray-700 dark:text-gray-300">{exp.description}</p>
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