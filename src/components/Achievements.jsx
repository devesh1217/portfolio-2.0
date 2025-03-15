import { Trophy, Link as LinkIcon, X } from 'lucide-react';
import Image from 'next/image';
import { useState } from 'react';

export default function Achievements() {
  const [selectedAchievement, setSelectedAchievement] = useState(null);

  const achievements = [
    {
      title: "Smart India Hackathon 2024 Winner",
      organization: "Innovation Cell, MoE, GoI",
      description: "Won the prestigious Smart India Hackathon 2024, demonstrating exceptional problem-solving skills and innovation in addressing national challenges.",
      images: [
        "/img/projects/p4/img1.png",
        "/img/projects/p4/img2.png",
        "/img/projects/p4/img3.png"
      ],
      certificateLink: "#"
    },
    {
      title: "Winner of Inception 9.O (Competitive Programming)",
      organization: "ACM, NIT Surat",
      description: "Secured first place in a rigorous competitive programming contest, showcasing algorithmic expertise and efficient problem-solving abilities.",
      images: [
        "/img/projects/p5/img1.png",
        "/img/projects/p5/img2.png",
        "/img/projects/p5/img3.png"
      ],
      certificateLink: null
    },
    {
      title: "Top 5 percentile in Adobe GenSolve Hackathon",
      organization: "Adobe",
      description: "Ranked in the top 5 percentile among participants in the Adobe GenSolve Hackathon, demonstrating creativity and technical excellence.",
      images: [
        "/img/projects/p6/img1.png",
        "/img/projects/p6/img2.png",
        "/img/projects/p6/img3.png"
      ],
      certificateLink: "#"
    },
    {
      title: "First Prize in Google Winter of Code",
      organization: "GDSC NIT Surat",
      description: "Awarded first prize in Google Winter of Code for developing an innovative solution that addressed real-world challenges.",
      images: [
        "/img/projects/p7/img1.png",
        "/img/projects/p7/img2.png",
        "/img/projects/p7/img3.png"
      ],
      certificateLink: "#"
    },
    {
      title: "Gold Medal in Spoken Sanskrit Course",
      organization: "NPTEL and IIT Kharagpur",
      description: "Received a Gold Medal for excellence in the Spoken Sanskrit Course, reflecting dedication to preserving ancient knowledge.",
      images: [
        "/img/projects/p8/img1.png",
        "/img/projects/p8/img2.png",
        "/img/projects/p8/img3.png"
      ],
      certificateLink: "#"
    },
    {
      title: "First rank at Web Wonder Competition",
      organization: "Nexus, DoCSE, NIT Surat",
      description: "Secured first place in the Web Wonder Competition, showcasing exceptional web development skills and creative design thinking.",
      images: [
        "/img/projects/p9/img1.png",
        "/img/projects/p9/img2.png",
        "/img/projects/p9/img3.png"
      ],
      certificateLink: "#"
    }
  ];

  // Modal Component
  const AchievementModal = ({ achievement, onClose }) => {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    const nextImage = () => {
      setCurrentImageIndex((prev) => 
        prev === achievement.images.length - 1 ? 0 : prev + 1
      );
    };

    const prevImage = () => {
      setCurrentImageIndex((prev) => 
        prev === 0 ? achievement.images.length - 1 : prev - 1
      );
    };

    return (
      <div 
        className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
        onClick={onClose}
      >
        <div 
          className="relative w-full max-w-3xl glass-effect rounded-2xl overflow-hidden animate-slide-up"
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

          <div className="p-8">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-4">{achievement.title}</h3>
            <div className="text-blue-500 dark:text-blue-400 flex items-center gap-2 mb-6">
              <Trophy className="h-5 w-5" />
              <span className="font-medium">{achievement.organization}</span>
            </div>

            <div className="relative h-[300px] rounded-xl overflow-hidden mb-6">
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
                {achievement.images.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setCurrentImageIndex(idx)}
                    className={`w-2 h-2 rounded-full ${
                      idx === currentImageIndex ? 'bg-white' : 'bg-white/50'
                    }`}
                  />
                ))}
              </div>
              <div className="relative w-full h-full">
                <Image
                  src={achievement.images[currentImageIndex]}
                  alt={achievement.title}
                  fill
                  className="object-cover transition-opacity duration-300"
                />
              </div>
            </div>

            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              {achievement.description}
            </p>

            {achievement.certificateLink && (
              <a 
                href={achievement.certificateLink}
                className="mt-6 inline-flex items-center gap-2 px-4 py-2 rounded-lg
                  bg-primary/10 dark:bg-primary/5 text-primary
                  hover:bg-primary hover:text-white
                  transition-all duration-300 text-sm font-medium group"
              >
                <Trophy className="h-4 w-4 transition-transform duration-300 group-hover:scale-110" />
                <span>View Certificate</span>
              </a>
            )}
          </div>
        </div>
      </div>
    );
  };

  return (
    <section id="achievements" className="my-16 md:my-24 md:py-2 realtive">
      <div className="container mx-auto px-4">
        <h2 className="section-title mb-16 md:mb-20">Achievements</h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {achievements.map((achievement, index) => (
            <div 
              key={index}
              className="glass-effect rounded-xl overflow-hidden hover:-translate-y-1 transition-all duration-300 animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="relative h-48 group">
                <Image
                  src={achievement.images[0]}
                  alt={achievement.title}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent opacity-90"></div>
                <div className="absolute inset-0 p-6 flex flex-col justify-end">
                  <h3 className="text-white font-bold text-lg mb-1 line-clamp-2">{achievement.title}</h3>
                  <p className="text-blue-300 text-sm flex items-center gap-1">
                    <Trophy className="h-4 w-4" />
                    {achievement.organization}
                  </p>
                </div>
              </div>
              
              <div className="p-6">
                <p className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed line-clamp-3">
                  {achievement.description}
                </p>
                
                <div className="mt-4 flex items-center justify-between">
                  <button
                    onClick={() => setSelectedAchievement(achievement)}
                    className="text-primary hover:text-primary/80 font-medium text-sm flex items-center gap-1 group hover:cursor-pointer"
                  >
                    Show More
                    <span className="transform transition-transform group-hover:translate-x-1">→</span>
                  </button>

                  {achievement.certificateLink && (
                    <a 
                      href={achievement.certificateLink}
                      className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg
                        bg-primary/10 dark:bg-primary/5 text-primary
                        hover:bg-primary hover:text-white
                        transition-all duration-300 text-sm font-medium group"
                    >
                      <Trophy className="h-4 w-4 transition-transform duration-300 group-hover:scale-110" />
                      <span>Certificate</span>
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal */}
      {selectedAchievement && (
        <AchievementModal 
          achievement={selectedAchievement} 
          onClose={() => setSelectedAchievement(null)} 
        />
      )}
    </section>
  );
}