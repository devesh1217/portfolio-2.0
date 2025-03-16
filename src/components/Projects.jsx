import { Github, ExternalLink, Code, X } from 'lucide-react';
import { 
  SiJavascript, SiReact, SiNodedotjs, SiMongodb, SiExpress, 
  SiNextdotjs, SiTailwindcss, SiPython, SiFlask, SiGooglecloud,
  SiJsonwebtokens, SiRedux, SiPytorch, SiNumpy, SiPandas
} from 'react-icons/si';
import Image from 'next/image';
import { useState } from 'react';
import { generateProjectImages } from '../utils/imageUtils';

export default function Projects() {
  const techStackIcons = {
    "MERN Stack": <SiMongodb className="text-gray-700 dark:text-gray-300" />,
    "JWT": <SiJsonwebtokens className="text-gray-700 dark:text-gray-300" />,
    "Google Cloud API": <SiGooglecloud className="text-gray-700 dark:text-gray-300" />,
    "Tailwind CSS": <SiTailwindcss className="text-gray-700 dark:text-gray-300" />,
    "Next.JS": <SiNextdotjs className="text-gray-700 dark:text-gray-300" />,
    "MongoDB": <SiMongodb className="text-gray-700 dark:text-gray-300" />,
    "PyTorch": <SiPytorch className="text-gray-700 dark:text-gray-300" />,
    "Flask": <SiFlask className="text-gray-700 dark:text-gray-300" />,
    "NumPy": <SiNumpy className="text-gray-700 dark:text-gray-300" />,
    "Pandas": <SiPandas className="text-gray-700 dark:text-gray-300" />,
    "Redux Toolkit": <SiRedux className="text-gray-700 dark:text-gray-300" />
  };

  const [selectedProject, setSelectedProject] = useState(null);
  
  const projects = [
    {
      title: "Web Portal of NEXUS: Official Departmental Cell of DoCSE and DoAI",
      description: [
        "Implemented secure JWT-based authentication and a user portal for 500+ active students as a one-time registration system, contributing to 13K+ monthly visits on the NEXUS website. Enhanced website SEO and performance, leading to 600+ average monthly clicks, improving visibility and user engagement.",
        "Built a custom registration system replicating Google Forms, with form creation, file uploads via Google Drive APIs, deadline management, and real-time response storage in Google Sheets reducing registration time by more than 70%. Also developed an Interview Experience Sharing Portal with admin verification, rich text editing, job details, Q&A with email notifications, and view counters.",
        "Developed a coding leaderboard for 500+ students across 4+ platforms, featuring batch-wise stats, optimized search, sorting, and insights. Created dynamic team pages, project showcases, and user profiles with tokanized password recovery, coding profile integration, and admin features like JWT authentication, form & project management, and achievement and alumni verification."
      ],
      images: generateProjectImages(1,10),
      techStack: ["MERN Stack", "JWT", "Google Cloud API", "Tailwind CSS"],
      links: {
        github: "https://github.com/Nexus-SVNIT/Nexus",
        live: "https://www.nexus-svnit.in"
      },
      date: "Feb 2025"
    },
    {
      title: "Real-Time Monitoring & Evaluation Software for Fire Department Applications",
      description: [
        "Developed a Progressive Web App with JWT-based authentication, multi-role access control, multilingual support, and a user-friendly UI for seamless Fire NOC application tracking.",
        "Implemented AI-powered automation for document verification (OCR, blur detection), geolocation-based inspection validation, optimized scheduling, and automated NOC issuance with QR-coded e-certificates.",
        "Integrated real-time monitoring & notifications with smart email/push alerts, chatbot assistance, and an employee management system to enhance efficiency and user experience."
      ],
      images: generateProjectImages(2,1),
      techStack: ["Next.JS", "JWT", "MongoDB", "PyTorch", "Flask", "NumPy", "Pandas", "Tailwind CSS", "Google Cloud API"],
      links: {
        github: "#",
        live: "#"
      },
      date: "Dec 2024"
    },
    {
      title: "Personal Expense Manager",
      description: [
        "Deployed interactive and device-responsive UI for seamless income-expense management, ensuring accessibility across various platforms. Supports user-to-user transactions to manage finances with Friends.",
        "Integrated comprehensive features including monthly and annual cumulative analysis along with category-specific charts and intuitive financial data visualization, resulting in a 25% improvement in decision making.",
        "Achieved over 60% time savings for individuals managing their household finances by providing advanced search features with multiple filters for past transactions."
      ],
      images: generateProjectImages(3,3),
      techStack: ["MERN Stack", "Redux Toolkit", "JWT"],
      links: {
        github: "https://github.com/devesh1217/MyExpenseManager",
        live: "https://my-expense-manager-devesh1217.vercel.app/"
      },
      date: "Dec 2023"
    }
  ];

  const LinkButton = ({ href, icon: Icon, children, primary = false }) => (
    <a
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
      target="_blank"
      rel="noopener noreferrer"
    >
      <div className={`
        absolute inset-0 opacity-0 group-hover:opacity-100
        ${primary ? 'bg-primary' : 'bg-primary/5 dark:bg-primary/5'}
        transition-all duration-300 transform group-hover:scale-100 scale-90
        rounded-lg
      `} />
      <Icon className="h-5 w-5 relative z-10 transition-transform duration-300 group-hover:scale-110" />
      <span className="font-medium relative z-10">{children}</span>
    </a>
  );

  // Modal Component
  const ProjectModal = ({ project, onClose }) => {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    const nextImage = () => {
      setCurrentImageIndex((prev) => 
        prev === project.images.length - 1 ? 0 : prev + 1
      );
    };

    const prevImage = () => {
      setCurrentImageIndex((prev) => 
        prev === 0 ? project.images.length - 1 : prev - 1
      );
    };

    return (
      <div 
        className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
        onClick={onClose}
      >
        <div 
          className="relative w-full max-w-4xl h-[90vh] glass-effect rounded-2xl overflow-hidden animate-slide-up"
          onClick={e => e.stopPropagation()}
        >
          <button 
            onClick={onClose}
            className="absolute right-6 top-6 p-2.5 rounded-full 
              bg-gray-100/90 dark:bg-gray-800/90 backdrop-blur-sm
              hover:bg-primary/20 dark:hover:bg-primary/20
              text-gray-700 dark:text-gray-300 hover:text-primary
              transition-all duration-300 z-10"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="h-full overflow-y-auto scrollbar-thin scrollbar-thumb-muted-foreground/50 scrollbar-track-transparent hover:scrollbar-thumb-muted-foreground/70">
            <div className="p-6 md:p-8">
              <h3 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-gray-100 mb-3">{project.title}</h3>
              <span className="text-sm text-primary block mb-6">{project.date}</span>

              <div className="relative h-64 md:h-96 group overflow-hidden">
                <div className="absolute inset-y-0 left-0 z-10 flex items-center">
                  <button onClick={prevImage} className="p-2 bg-black/30 hover:bg-black/50 text-white rounded-r-lg">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                    </svg>
                  </button>
                </div>
                <div className="absolute inset-y-0 right-0 z-10 flex items-center">
                  <button onClick={nextImage} className="p-2 bg-black/30 hover:bg-black/50 text-white rounded-l-lg">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </button>
                </div>
                <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2 z-10">
                  {project.images.map((_, idx) => (
                    <button
                      key={idx}
                      onClick={() => setCurrentImageIndex(idx)}
                      className={`w-2 h-2 rounded-full ${
                        idx === currentImageIndex ? 'bg-white' : 'bg-white/50'
                      }`}
                    />
                  ))}
                </div>
                <Image
                  src={project.images[currentImageIndex]}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>

              <div className="space-y-6 mb-8">
                {project.description.map((para, i) => (
                  <p key={i} className="text-gray-700 dark:text-gray-300 leading-relaxed text-base md:text-lg">
                    {para}
                  </p>
                ))}
              </div>

              {/* Tech Stack */}
              <div className="mb-8">
                <h4 className="font-medium text-primary flex items-center mb-3">
                  <Code className="h-4 w-4 mr-2" />
                  Tech Stack
                </h4>
                <div className="flex flex-wrap gap-2">
                  {project.techStack.map((tech, i) => (
                    <span 
                      key={i} 
                      className="px-3 py-1.5 rounded-full text-xs font-medium
                        bg-gray-600/30 text-gray-700 dark:text-gray-300 border border-gray-600/20
                        hover:bg-primary/20 hover:text-primary
                        transform hover:scale-105
                        shadow-sm hover:shadow-md hover:shadow-primary/25
                        transition-all duration-300
                        flex items-center gap-1.5"
                    >
                      {techStackIcons[tech] && (
                        <span className="text-base">{techStackIcons[tech]}</span>
                      )}
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Links */}
              <div className="flex gap-4">
                <LinkButton href={project.links.github} icon={Github}>Code</LinkButton>
                <LinkButton href={project.links.live} icon={ExternalLink} primary>Live Demo</LinkButton>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <section id="projects" className="my-16 md:my-24 md:py-2 relative">
      <div className="container mx-auto px-4">
        <h2 className="section-title text-center mb-16 md:mb-20">Projects</h2>
        
        <div className="space-y-16">
          {projects.map((project, index) => (
            <div 
              key={index} 
              className="glass-effect rounded-xl overflow-hidden animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="grid md:grid-cols-2 gap-0">
                <div className="relative h-64 md:h-96 group overflow-hidden">
                  <Image
                    src={project.images[0]}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                
                <div className="p-6 md:p-8">
                  <div className="flex justify-between items-start gap-4">
                    <h3 className="text-xl md:text-2xl font-bold text-gray-900 dark:text-gray-100">{project.title}</h3>
                    <span className="text-sm text-primary whitespace-nowrap">{project.date}</span>
                  </div>
                  
                  <div className="mt-4">
                    <p className="text-gray-700 dark:text-gray-300 text-sm md:text-base leading-relaxed">
                      {project.description[0].slice(0, 150)}...
                    </p>
                    <button
                      onClick={() => setSelectedProject(project)}
                      className="mt-2 text-primary hover:text-primary/80 font-medium text-sm flex items-center gap-1 group"
                    >
                      Show More
                      <span className="transform transition-transform group-hover:translate-x-1">→</span>
                    </button>
                  </div>
                  
                  <div className="mt-6">
                    <h4 className="font-medium text-primary flex items-center">
                      <Code className="h-4 w-4 mr-2" />
                      Tech Stack
                    </h4>
                    <div className="mt-3 flex flex-wrap gap-2">
                      {project.techStack.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="px-3 py-1.5 rounded-full text-xs font-medium
                            bg-gray-600/30 text-gray-700 dark:text-gray-300 border border-gray-600/20
                            hover:bg-primary/20 hover:text-primary
                            transform hover:scale-105
                            shadow-sm hover:shadow-md hover:shadow-primary/25
                            transition-all duration-300
                            flex items-center gap-1.5"
                        >
                          {techStackIcons[tech] && (
                            <span className="text-base">{techStackIcons[tech]}</span>
                          )}
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <div className="mt-8 flex gap-4">
                    <LinkButton href={project.links.github} icon={Github}>Code</LinkButton>
                    <LinkButton href={project.links.live} icon={ExternalLink} primary>Live Demo</LinkButton>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal */}
      {selectedProject && (
        <ProjectModal 
          project={selectedProject} 
          onClose={() => setSelectedProject(null)} 
        />
      )}
    </section>
  );
}