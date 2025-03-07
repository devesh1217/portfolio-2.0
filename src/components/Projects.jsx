import { Github, ExternalLink, Code } from 'lucide-react';
import Image from 'next/image';

export default function Projects() {
  const projects = [
    {
      title: "Web Portal of NEXUS: Official Departmental Cell of DoCSE and DoAI",
      description: [
        "Implemented secure JWT-based authentication and a user portal for 500+ active students as a one-time registration system, contributing to 13K+ monthly visits on the NEXUS website. Enhanced website SEO and performance, leading to 600+ average monthly clicks, improving visibility and user engagement.",
        "Built a custom registration system replicating Google Forms, with form creation, file uploads via Google Drive APIs, deadline management, and real-time response storage in Google Sheets reducing registration time by more than 70%. Also developed an Interview Experience Sharing Portal with admin verification, rich text editing, job details, Q&A with email notifications, and view counters.",
        "Developed a coding leaderboard for 500+ students across 4+ platforms, featuring batch-wise stats, optimized search, sorting, and insights. Created dynamic team pages, project showcases, and user profiles with tokanized password recovery, coding profile integration, and admin features like JWT authentication, form & project management, and achievement and alumni verification."
      ],
      image: "/placeholder-project-1.jpg",
      techStack: ["MERN Stack", "JWT", "Google Cloud API", "Tailwind CSS"],
      links: {
        github: "#",
        live: "#"
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
      image: "/placeholder-project-2.jpg",
      techStack: ["Next.JS", "JWT", "MongoDB", "PyTorch", "Flask", "NumPy", "Pandas", "Tailwind CSS", "Google Cloud APIs"],
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
      image: "/placeholder-project-3.jpg",
      techStack: ["MERN Stack", "Redux Toolkit", "JWT"],
      links: {
        github: "#",
        live: "#"
      },
      date: "Dec 2023"
    }
  ];

  return (
    <section id="projects" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <h2 className="section-title">Projects</h2>
        
        <div className="mt-12 space-y-16">
          {projects.map((project, index) => (
            <div key={index} className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden">
              <div className="grid md:grid-cols-2 gap-0">
                <div className="relative h-64 md:h-full">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover"
                  />
                </div>
                
                <div className="p-6 md:p-8">
                  <div className="flex justify-between items-start">
                    <h3 className="text-2xl font-bold">{project.title}</h3>
                    <span className="text-sm text-gray-600 dark:text-gray-400">{project.date}</span>
                  </div>
                  
                  <div className="mt-4 space-y-3">
                    {project.description.map((paragraph, i) => (
                      <p key={i} className="text-gray-700 dark:text-gray-300 text-sm">{paragraph}</p>
                    ))}
                  </div>
                  
                  <div className="mt-6">
                    <h4 className="font-medium text-blue-600 dark:text-blue-400 flex items-center">
                      <Code className="h-4 w-4 mr-1" />
                      Tech Stack
                    </h4>
                    <div className="mt-2 flex flex-wrap gap-2">
                      {project.techStack.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="px-2 py-1 bg-blue-100 dark:bg-blue-900/50 text-blue-800 dark:text-blue-200 rounded-full text-xs"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <div className="mt-8 flex space-x-4">
                    <a
                      href={project.links.github}
                      className="flex items-center text-gray-700 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400 transition-colors"
                    >
                      <Github className="h-5 w-5 mr-1" />
                      <span>Code</span>
                    </a>
                    <a
                      href={project.links.live}
                      className="flex items-center text-gray-700 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400 transition-colors"
                    >
                      <ExternalLink className="h-5 w-5 mr-1" />
                      <span>Live Demo</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}