import { GraduationCap, Award, Calendar } from 'lucide-react';

export default function Education() {
  const education = [
    {
      degree: "B.Tech in Computer Science and Engineering",
      institute: "National Institute of Technology, Surat",
      year: "2022-Present",
      grade: "CGPA: 9.17 (Current)"
    },
    {
      degree: "Higher Secondary",
      institute: "GSHSEB",
      year: "2022",
      grade: "Percentage: 87%"
    },
    {
      degree: "Diploma in Performing Arts (Tabla)",
      institute: "The M S University of Baroda",
      year: "2021",
      grade: "Distinction"
    }
  ];

  return (
    <section id="education" className="py-24 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <h2 className="section-title text-center mb-20">Education</h2>
        
        <div className="mt-12 space-y-12">
          {education.map((edu, index) => (
            <div 
              key={index}
              className="glass-effect rounded-2xl p-8 hover:translate-y-[-2px] hover:shadow-lg transition-all duration-300 animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-start space-x-8">
                <div className="flex-shrink-0 mt-1 p-3 rounded-xl bg-primary/5">
                  <GraduationCap className="h-8 w-8 text-primary" />
                </div>
                <div className="ml-6">
                  <h3 className="text-2xl font-bold text-primary dark:text-primary">
                    {edu.degree}
                  </h3>
                  <p className="text-lg text-gray-700 dark:text-gray-300 mt-2">{edu.institute}</p>
                  
                  <div className="mt-4 flex flex-wrap gap-6">
                    <div className="flex items-center text-gray-600 dark:text-gray-400">
                      <Calendar className="h-5 w-5 mr-2" />
                      <span className="text-base">{edu.year}</span>
                    </div>
                    <div className="flex items-center text-gray-600 dark:text-gray-400">
                      <Award className="h-5 w-5 mr-2" />
                      <span className="text-base">{edu.grade}</span>
                    </div>
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