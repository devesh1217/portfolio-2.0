"use client"
import React, { useState, useEffect } from 'react';
import { Code, Server, Database, Terminal, Globe, Cpu, FileCode, Settings, Box, Smartphone, Layout, Layers } from 'lucide-react';
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
  SiVisualstudio,
  SiDocker,
  SiJira,
  SiJenkins,
  SiSpring,
  SiAndroid,
  SiLinux,
  SiRedis,
  SiNumpy,
  SiPandas,
  SiScikitlearn
} from 'react-icons/si';
import { DiJava } from 'react-icons/di';
import { TbBrandCpp, TbBrandVscode, TbBrandReactNative } from 'react-icons/tb';

export default function Skills() {
  const [activeTab, setActiveTab] = useState("Overview");
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768); // 768px is the md breakpoint
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const skillCategories = [
    {
      title: "Overview",
      icon: <Layout className="h-7 w-7 text-primary" />,
      skills: [
        { name: "Web Development", icon: <Globe /> },
        { name: "Android Development", icon: <Smartphone /> },
        { name: "Backend Development", icon: <Server /> },
        { name: "System Design", icon: <Layers /> },
        { name: "Machine Learning", icon: <Cpu /> },
        { name: "Database Design", icon: <Database /> },
        { name: "DevOps & CI/CD", icon: <Settings /> },
        { name: "API Development", icon: <Code /> },
      ]
    },
    {
      title: "Programming Languages",
      icon: <Code className="h-7 w-7 text-primary" />,
      skills: [
        { name: "Java", icon: <DiJava /> },
        { name: "JavaScript", icon: <SiJavascript /> },
        { name: "Python", icon: <SiPython /> },
        { name: "C", icon: <SiC /> },
        { name: "SQL", icon: <Database /> },
      ]
    },
    {
      title: "Development",
      icon: <Globe className="h-7 w-7 text-primary" />,
      skills: [
        { name: "HTML", icon: <SiHtml5 /> },
        { name: "CSS", icon: <SiCss3 /> },
        { name: "Tailwind CSS", icon: <SiTailwindcss /> },
        { name: "React", icon: <SiReact /> },
        { name: "Node.js", icon: <SiNodedotjs /> },
        { name: "Express.js", icon: <SiExpress /> },
        { name: "Next.js", icon: <SiNextdotjs /> },
        { name: "Flask", icon: <SiFlask /> },
        { name: "React Native", icon: <TbBrandReactNative /> },
        { name: "Android", icon: <SiAndroid /> },
        { name: "Spring Boot", icon: <SiSpring /> },
      ]
    },
    {
      title: "Machine Learning",
      icon: <Cpu className="h-7 w-7 text-primary" />,
      skills: [
        { name: "NumPy", icon: <SiNumpy /> },
        { name: "Pandas", icon: <SiPandas /> },
        { name: "Scikit-Learn", icon: <SiScikitlearn /> },
        { name: "Feature Engineering", icon: <Settings /> },
      ]
    },
    {
      title: "Tools & Technologies",
      icon: <Terminal className="h-7 w-7 text-primary" />,
      skills: [
        { name: "Git", icon: <SiGit /> },
        { name: "GitHub", icon: <SiGithub /> },
        { name: "VS Code", icon: <TbBrandVscode /> },
        { name: "Docker", icon: <SiDocker /> },
        { name: "Jenkins", icon: <SiJenkins /> },
        { name: "Jira", icon: <SiJira /> },
        { name: "Redis", icon: <SiRedis /> },
        { name: "Linux", icon: <SiLinux /> },
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
      title: "Coursework",
      icon: <FileCode className="h-7 w-7 text-primary" />,
      skills: [
        { name: "Data Structures", icon: <Box /> },
        { name: "Algorithms", icon: <Settings /> },
        { name: "Database Systems", icon: <Database /> },
        { name: "Operating Systems", icon: <Settings /> },
        { name: "Computer Networks", icon: <Globe /> },
        { name: "OOP", icon: <FileCode /> },
      ]
    }
  ];

  return (
    <section id="skills" className="my-16 md:my-24 md:py-2 relative">
      <div className="container mx-auto px-4">
        <h2 className="section-title text-center mb-16 md:mb-20">My Skills</h2>
        
        {/* Desktop View */}
        <div className={`${isMobile ? 'hidden' : 'block'}`}>
          {/* Tab Navigation */}
          <div className="flex flex-wrap justify-center gap-2 md:gap-4 mb-12 md:mb-16">
            <div className="flex gap-4 md:gap-6 justify-center flex-wrap">
              {skillCategories.map((category) => (
                <button
                  key={category.title}
                  onClick={() => setActiveTab(category.title)}
                  className={`
                    px-5 py-3 rounded-xl font-medium
                    flex items-center gap-2 glass-effect
                    transition-all duration-300 ease-out
                    ${activeTab === category.title ? 
                      'bg-primary/10 text-primary shadow-lg scale-105' : 
                      'hover:bg-primary/5 text-gray-700 dark:text-gray-300'}
                  `}
                >
                  {React.cloneElement(category.icon, {
                    className: 'h-5 w-5 md:h-6 md:w-6'
                  })}
                  <span className="text-sm md:text-base">{category.title}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Desktop Skills Grid */}
          <div className="relative">
            {skillCategories.map((category) => (
              <div
                key={category.title}
                className={`grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 md:gap-6 
                  transition-all duration-500 transform
                  ${activeTab === category.title ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 hidden'}`}
              >
                {category.skills.map((skill, index) => (
                  <div
                    key={index}
                    className={`
                      glass-effect rounded-xl p-6 flex flex-col items-center justify-center gap-4
                      transition-all duration-300
                      ${activeTab === category.title ? 'opacity-100 translate-y-0' : 'opacity-75 hover:opacity-100'}
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
            ))}
          </div>
        </div>

        {/* Mobile View */}
        <div className={`${isMobile ? 'block' : 'hidden'} space-y-8`}>
          {skillCategories.map((category, categoryIndex) => (
            <div 
              key={category.title}
              className="animate-slide-up glass-effect rounded-xl p-6"
              style={{ animationDelay: `${categoryIndex * 0.1}s` }}
            >
              <div className="flex items-center gap-3 mb-4">
                {React.cloneElement(category.icon, {
                  className: 'h-6 w-6 text-primary'
                })}
                <h3 className="text-lg font-medium text-primary">
                  {category.title}
                </h3>
              </div>

              <div className="grid grid-cols-2 gap-4">
                {category.skills.map((skill, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-2 p-2 rounded-lg hover:bg-primary/5 transition-colors"
                  >
                    <span className="text-xl text-primary">
                      {skill.icon}
                    </span>
                    <span className="text-sm text-gray-800 dark:text-gray-200">
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
