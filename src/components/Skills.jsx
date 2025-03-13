"use client"
import React, { useState } from 'react';
import { Code, Server, Database, Terminal, Globe, Cpu, FileCode, Settings, Box } from 'lucide-react';
import { 
  SiJavascript, 
  SiPython, 
  SiJava, 
  SiC, 
  SiMysql, 
  SiPostgresql, 
  SiMongodb,
  SiHtml5, 
  SiCss3, 
  SiReact, 
  SiNodedotjs, 
  SiNextdotjs, 
  SiTailwindcss, 
  SiExpress, 
  SiFlask, 
  SiGit, 
  SiGithub, 
  SiVisualstudio, // Changed from SiVisualstudiocode
  SiDocker 
} from 'react-icons/si';
import { DiJava } from 'react-icons/di';
import { TbBrandCpp, TbBrandVscode } from 'react-icons/tb'; // Add TbBrandVscode

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState(null);

  const skillCategories = [
    {
      title: "Programming Languages",
      icon: <Code className="h-7 w-7 text-primary" />,
      skills: [
        { name: "JavaScript", icon: <SiJavascript /> },
        { name: "Python", icon: <SiPython /> },
        { name: "Java", icon: <DiJava /> },
        { name: "C/C++", icon: <TbBrandCpp /> },
      ]
    },
    {
      title: "Web Development",
      icon: <Globe className="h-7 w-7 text-primary" />,
      skills: [
        { name: "HTML", icon: <SiHtml5 /> },
        { name: "CSS", icon: <SiCss3 /> },
        { name: "React", icon: <SiReact /> },
        { name: "Next.js", icon: <SiNextdotjs /> },
        { name: "Node.js", icon: <SiNodedotjs /> },
        { name: "Express", icon: <SiExpress /> },
        { name: "Tailwind", icon: <SiTailwindcss /> },
        { name: "Flask", icon: <SiFlask /> },
      ]
    },
    {
      title: "Database Management",
      icon: <Database className="h-7 w-7 text-primary" />,
      skills: [
        { name: "MySQL", icon: <SiMysql /> },
        { name: "PostgreSQL", icon: <SiPostgresql /> },
        { name: "MongoDB", icon: <SiMongodb /> },
      ]
    },
    {
      title: "Tools & Technologies",
      icon: <Terminal className="h-7 w-7 text-primary" />,
      skills: [
        { name: "Git", icon: <SiGit /> },
        { name: "GitHub", icon: <SiGithub /> },
        { name: "VS Code", icon: <TbBrandVscode /> }, // Use TbBrandVscode instead
        { name: "Docker", icon: <SiDocker /> },
      ]
    },
    {
      title: "Core CS",
      icon: <Cpu className="h-7 w-7 text-primary" />,
      skills: [
        { name: "DSA", icon: <Box /> },
        { name: "DBMS", icon: <Database /> },
        { name: "OS", icon: <Settings /> },
        { name: "Networks", icon: <Globe /> },
        { name: "OOP", icon: <FileCode /> },
      ]
    }
  ];

  return (
    <section id="skills" className="py-16 md:py-24 relative">
      <div className="container mx-auto px-4">
        <h2 className="section-title text-center mb-16 md:mb-20">My Skills</h2>
        
        <div className="space-y-12 md:space-y-16">
          {skillCategories.map((category, categoryIndex) => (
            <div 
              key={category.title}
              className="animate-slide-up"
              style={{ animationDelay: `${categoryIndex * 0.1}s` }}
            >
              <div 
                className="flex items-center gap-3 mb-6 cursor-pointer group"
                onClick={() => setActiveCategory(activeCategory === category.title ? null : category.title)}
              >
                <div className={`
                  p-3 rounded-xl transition-all duration-300
                  ${activeCategory === category.title ? 
                    'bg-primary/10 text-primary scale-110' : 
                    'bg-primary/5 text-gray-700 dark:text-gray-300 group-hover:bg-primary/10 group-hover:text-primary'
                  }
                `}>
                  {React.cloneElement(category.icon, {
                    className: 'h-6 w-6 md:h-7 md:w-7'
                  })}
                </div>
                <h3 className={`
                  text-lg md:text-xl font-medium transition-colors
                  ${activeCategory === category.title ? 
                    'text-primary' : 
                    'text-gray-800 dark:text-gray-200 group-hover:text-primary'
                  }
                `}>
                  {category.title}
                </h3>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 md:gap-6">
                {category.skills.map((skill, index) => (
                  <div
                    key={index}
                    className={`
                      glass-effect rounded-xl p-6 flex flex-col items-center justify-center gap-4
                      transition-all duration-300
                      ${activeCategory === category.title ? 'opacity-100 translate-y-0' : 'opacity-75 hover:opacity-100'}
                      hover:shadow-xl hover:-translate-y-1
                    `}
                  >
                    <span className="text-3xl md:text-4xl text-primary transition-transform duration-300 hover:scale-110">
                      {skill.icon}
                    </span>
                    <span className="font-medium text-center text-gray-800 dark:text-gray-200 text-sm md:text-base">
                      {skill.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}