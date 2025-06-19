import { Briefcase, Calendar, X } from 'lucide-react';
import { useState } from 'react';

export default function Experience() {
  const [selectedExp, setSelectedExp] = useState(null);

  const experiences = [
    {
      title: "QE Intern",
      organization: "Piramal Finance",
      period: "May 2025",
      description: [
        "Built and optimized **backend dashboard APIs** using **Spring Boot** and **MongoDB** for an AI-powered API testing automation tool, enabling real-time analytics and efficient workspace and suite-level data aggregation. Enhanced performance through **indexing, API decomposition, and caching strategies**.",
        "Developed a **secure authentication client library** with support for both **SSO and external users** using **JWT** and **Redis**, enabling seamless login/signup flows and integration with **SendGrid** for email services.",
        "Implemented intelligent features like **flaky test detection** and **test suite merging** using **asynchronous cron jobs**, contributing to automation reliability. Utilized tools such as **Docker**, **Linux**, **Jenkins**, and **GitHub** for deployment, local development, and CI/CD pipelines."
      ],
      technologies: ["Linux", "Java", "Spring Boot", "MongoDB", "Redis", "Docker", "Jenkins", "n8n"]
    },
    {
      title: "Event Manager & Student Coordinator",
      organization: "Nexus Cell, NIT, Surat",
      period: "Jul 2024 - Jul 2025",
      description: [
        "Organized and executed **10+ events** by managing logistics, coordinating teams, securing approvals, and ensuring successful delivery, contributing to the overall growth of the **CSE and AI departments**."
      ]
    },
    {
      title: "Executive",
      organization: "ACM NIT, Surat",
      period: "Sept 2023 - Jul 2024",
      description: [
        "Led events, managed administration, fostered collaborations and drove **member engagement and strategic growth**."
      ]
    }
  ];

  const formatText = (text) => {
    return text.replace(/\*\*(.*?)\*\*/g, '<strong class="text-primary font-semibold">$1</strong>');
  };

  const Modal = ({ exp, onClose }) => (
    <div 
      className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
      onClick={onClose}
    >
      <div 
        className="relative w-full max-w-3xl glass-effect rounded-2xl p-6 md:p-8 animate-slide-up max-h-[90vh] overflow-y-auto"
        onClick={e => e.stopPropagation()}
      >
        <button 
          onClick={onClose}
          className="absolute right-4 top-4 p-2 rounded-full hover:bg-gray-200/20 transition-colors hover:rotate-90 duration-300 cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>

        <h3 className="text-xl md:text-2xl font-bold text-gray-900 dark:text-gray-100 mb-4">{exp.title}</h3>
        
        <div className="flex items-center gap-3 mb-4">
          <div className="p-2 rounded-lg bg-primary/10 dark:bg-primary/5">
            <Briefcase className="h-5 w-5 text-primary" />
          </div>
          <p className="text-primary dark:text-primary/90 font-medium">{exp.organization}</p>
        </div>
        
        <div className="flex items-center text-gray-600 dark:text-gray-400 mb-6 bg-gray-100/50 dark:bg-gray-800/50 rounded-lg px-3 py-1.5 w-fit">
          <Calendar className="h-4 w-4 mr-2 text-primary" />
          <span className="text-sm">{exp.period}</span>
        </div>

        {exp.technologies && (
          <div className="mb-6">
            <h4 className="text-sm font-semibold text-primary mb-2">Technologies:</h4>
            <div className="flex flex-wrap gap-2">
              {exp.technologies.map((tech, index) => (
                <span 
                  key={index}
                  className="px-2 py-1 text-xs bg-primary/10 text-primary rounded-md font-medium"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        )}
        
        <div className="space-y-4">
          {exp.description.map((point, index) => (
            <div key={index} className="flex items-start gap-3">
              <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
              <p 
                className="text-gray-700 dark:text-gray-300 text-base leading-relaxed"
                dangerouslySetInnerHTML={{ __html: formatText(point) }}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  return (
    <section id="experience" className="my-16 md:my-24 md:py-2 relative">
      <div className="container mx-auto px-4">
        <h2 className="section-title text-center mb-16 md:mb-20">Work Experience</h2>
        
        <div className="relative">
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
                    
                    <div className="text-gray-700 dark:text-gray-300 text-sm md:text-base leading-relaxed">
                      <p className="mb-2">
                        {exp.description[0].replace(/\*\*(.*?)\*\*/g, '$1').slice(0, 120)}...
                      </p>
                      <button
                        onClick={() => setSelectedExp(exp)}
                        className="inline-flex items-center gap-1 px-3 py-1 rounded-full text-primary hover:text-white bg-primary/10 hover:bg-primary dark:bg-primary/5 dark:hover:bg-primary transition-all duration-300 text-sm font-medium group hover:cursor-pointer"
                      >
                        Read More
                        <svg 
                          className="w-4 h-4 transform transition-transform duration-300 group-hover:translate-x-1" 
                          fill="none" 
                          viewBox="0 0 24 24" 
                          stroke="currentColor"
                        >
                          <path 
                            strokeLinecap="round" 
                            strokeLinejoin="round" 
                            strokeWidth={2} 
                            d="M13 7l5 5m0 0l-5 5m5-5H6" 
                          />
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      
      {/* Modal */}
      {selectedExp && (
        <Modal exp={selectedExp} onClose={() => setSelectedExp(null)} />
      )}
    </section>
  );
}
