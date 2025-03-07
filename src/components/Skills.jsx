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
  const [activeTab, setActiveTab] = useState("Programming Languages");
  const [hoveredTab, setHoveredTab] = useState(null);

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
    <section id="skills" className="py-24 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <h2 className="section-title text-center mb-20">My Skills</h2>
        
        {/* Tab Navigation */}
        <div className="flex flex-wrap justify-center gap-2 md:gap-4 mb-16 relative">
          <div className="w-full overflow-x-auto pb-4 mb-4 hide-scrollbar">
            <div className="flex gap-5 md:gap-4 justify-center md:justify-center min-w-max px-4">
              {skillCategories.map((category) => (
                <button
                  key={category.title}
                  onClick={() => setActiveTab(category.title)}
                  onMouseEnter={() => setHoveredTab(category.title)}
                  onMouseLeave={() => setHoveredTab(null)}
                  className={`
                    px-6 py-3 rounded-xl font-medium transition-all duration-300 
                    flex justify-center items-center tab-indicator w-fit
                    ${activeTab === category.title ? 
                      'bg-primary/10 text-primary shadow-lg active' : 
                      'bg-primary/5 hover:bg-primary/10 text-foreground dark:text-gray-300'}
                    ${hoveredTab === category.title ? 'scale-105' : 'scale-100'}
                  `}
                >
                  <span className={`w-7 h-7 transition-transform duration-300 mr-2
                    ${activeTab === category.title ? 'scale-110' : 'scale-100'}
                    ${hoveredTab === category.title ? 'rotate-12' : 'rotate-0'}
                  `}>
                    {category.icon}
                  </span>
                  <span className="whitespace-nowrap">{category.title}</span>
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Active Tab Content */}
        {skillCategories.map((category) => (
          <div
            key={category.title}
            className={`grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 tab-slide-enter
              ${activeTab === category.title ? 'block' : 'hidden'}`}
          >
            {category.skills.map((skill, index) => (
              <div
                key={index}
                className="glass-effect rounded-xl p-6 flex flex-col items-center justify-center gap-4 
                  hover:scale-105 transition-all duration-300 group cursor-pointer"
              >
                <span className="text-4xl text-primary transition-transform duration-300 group-hover:scale-110">
                  {skill.icon}
                </span>
                <span className="font-medium text-center group-hover:text-primary transition-colors">
                  {skill.name}
                </span>
              </div>
            ))}
          </div>
        ))}
      </div>
    </section>
  );
}