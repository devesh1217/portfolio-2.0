import { Trophy, Link as LinkIcon } from 'lucide-react';
import Image from 'next/image';

export default function Achievements() {
  const achievements = [
    {
      title: "Smart India Hackathon 2024 Winner",
      organization: "Innovation Cell, MoE, GoI",
      description: "Won the prestigious Smart India Hackathon 2024, demonstrating exceptional problem-solving skills and innovation in addressing national challenges.",
      image: "/placeholder-achievement-1.jpg",
      certificateLink: "#"
    },
    {
      title: "Winner of Inception 9.O (Competitive Programming)",
      organization: "ACM, NIT Surat",
      description: "Secured first place in a rigorous competitive programming contest, showcasing algorithmic expertise and efficient problem-solving abilities.",
      image: "/placeholder-achievement-2.jpg",
      certificateLink: null
    },
    {
      title: "Top 5 percentile in Adobe GenSolve Hackathon",
      organization: "Adobe",
      description: "Ranked in the top 5 percentile among participants in the Adobe GenSolve Hackathon, demonstrating creativity and technical excellence.",
      image: "/placeholder-achievement-3.jpg",
      certificateLink: "#"
    },
    {
      title: "First Prize in Google Winter of Code",
      organization: "GDSC NIT Surat",
      description: "Awarded first prize in Google Winter of Code for developing an innovative solution that addressed real-world challenges.",
      image: "/placeholder-achievement-4.jpg",
      certificateLink: "#"
    },
    {
      title: "Gold Medal in Spoken Sanskrit Course",
      organization: "NPTEL and IIT Kharagpur",
      description: "Received a Gold Medal for excellence in the Spoken Sanskrit Course, reflecting dedication to preserving ancient knowledge.",
      image: "/placeholder-achievement-5.jpg",
      certificateLink: "#"
    },
    {
      title: "First rank at Web Wonder Competition",
      organization: "Nexus, DoCSE, NIT Surat",
      description: "Secured first place in the Web Wonder Competition, showcasing exceptional web development skills and creative design thinking.",
      image: "/placeholder-achievement-6.jpg",
      certificateLink: "#"
    }
  ];

  return (
    <section id="achievements" className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="section-title">Achievements</h2>
        
        <div className="mt-12 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {achievements.map((achievement, index) => (
            <div 
              key={index}
              className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow"
            >
              <div className="relative h-48">
                <Image
                  src={achievement.image}
                  alt={achievement.title}
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div className="absolute bottom-0 left-0 p-4">
                  <h3 className="text-white font-bold text-lg">{achievement.title}</h3>
                  <p className="text-blue-300 text-sm">{achievement.organization}</p>
                </div>
              </div>
              
              <div className="p-4">
                <p className="text-gray-700 dark:text-gray-300 text-sm">{achievement.description}</p>
                
                {achievement.certificateLink && (
                  <a 
                    href={achievement.certificateLink}
                    className="mt-4 inline-flex items-center text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300 transition-colors"
                  >
                    <Trophy className="h-4 w-4 mr-1" />
                    <span>View Certificate</span>
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}