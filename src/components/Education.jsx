import { GraduationCap, Award, Calendar } from 'lucide-react';

export default function Education() {
  const education = [
    {
      degree: "B.Tech CSE",
      longDegree: "B.Tech in Computer Science and Engineering",
      institute: "NIT Surat",
      longInstitute: "National Institute of Technology, Surat",
      year: "2022-Present",
      grade: "CGPA: 9.17"
    },
    {
      degree: "Higher Secondary",
      longDegree: "Higher Secondary",
      institute: "GSHSEB",
      longInstitute: "GSHSEB",
      year: "2022",
      grade: "87%"
    },
    {
      degree: "DPA (Tabla)",
      longDegree: "Diploma in Performing Arts (Tabla)",
      institute: "MSU Baroda",
      longInstitute: "The M S University of Baroda",
      year: "2021",
      grade: "Distinction"
    }
  ];

  return (
    <section id="education" className="py-16 md:py-24 relative">
      <div className="container mx-auto px-4">
        <h2 className="section-title text-center mb-16 md:mb-20">Education</h2>
        
        <div className="grid gap-6 md:gap-8 md:max-w-3/4 mx-auto">
          {education.map((edu, index) => (
            <div 
              key={index}
              className="glass-effect rounded-2xl p-2 md:p-8 transition-all duration-300 animate-slide-up hover:-translate-y-1 hover:shadow-xl border border-gray-200/20"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-center justify-between gap-4">
                <div className="flex items-center gap-2 md:gap-4">
                  <div className="flex-shrink-0">
                    <div className="p-3 sm:p-4 rounded-xl bg-primary/10 dark:bg-primary/5">
                      <GraduationCap className="h-5 w-5 sm:h-6 sm:w-6 text-primary" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-900 dark:text-gray-100">
                      <span className="sm:hidden">{edu.degree}</span>
                      <span className="hidden sm:block">{edu.longDegree}</span>
                    </h3>
                    <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400 mt-1">
                      <span className="sm:hidden">{edu.institute}</span>
                      <span className="hidden sm:block">{edu.longInstitute}</span>
                    </p>
                  </div>
                </div>
                
                <div className="flex flex-col gap-2 sm:gap-4 items-end">
                  <div className="inline-flex items-center text-gray-600 dark:text-gray-400 bg-gray-100/50 dark:bg-gray-800/50 rounded-lg px-2.5 py-1">
                    <Award className="h-3.5 w-3.5 mr-1.5 text-primary" />
                    <span className="text-xs sm:text-sm whitespace-nowrap">{edu.grade}</span>
                  </div>
                  <div className="inline-flex items-center text-gray-600 dark:text-gray-400 bg-gray-100/50 dark:bg-gray-800/50 rounded-lg px-2.5 py-1">
                    <Calendar className="h-3.5 w-3.5 mr-1.5 text-primary" />
                    <span className="text-xs sm:text-sm whitespace-nowrap">{edu.year}</span>
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