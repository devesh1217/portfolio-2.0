import { Trophy, Link as LinkIcon, X, ZoomIn } from 'lucide-react';
import Image from 'next/image';
import { useState } from 'react';
import { generateImages } from '../utils/imageUtils';

export default function Achievements() {
  const [selectedAchievement, setSelectedAchievement] = useState(null);
  const [fullScreenImage, setFullScreenImage] = useState(null);

  const achievements = [
    {
      title: "First Runner Up in CTF SVNIT S1",
      organization: "IEAS & NEXUS",
      description: "Achieved 2nd place in a national-level Capture The Flag (CTF) cybersecurity competition organized by Nexus in association with ISEA. The event featured expert-led learning cohorts and intense multi-round challenges in cryptography, network security, and advanced cybersecurity. Demonstrated strong problem-solving, teamwork, and applied technical skills under pressure.",
      images: generateImages(7, 'achievements', 4),
      certificateLink: "https://drive.google.com/file/d/1OtWxRS0GIocMo-6o8veyTMV49k-VcDeK/view?usp=drive_link"
    },
    {
      title: "Smart India Hackathon 2024 Winner",
      organization: "Innovation Cell, MoE, GoI",
      description: "Won the prestigious Smart India Hackathon 2024, demonstrating exceptional problem-solving skills and innovation in addressing national challenges.",
      images: generateImages(1, 'achievements', 4),
      certificateLink: "https://drive.google.com/file/d/1yrQdkbAK_IjnFTDYxaVsv-cji-ftoJ59/view?usp=drive_link"
    },
    {
      title: "Winner of Inception 9.O (Competitive Programming)",
      organization: "ACM, NIT Surat",
      description: "Secured first place in a rigorous competitive programming contest, showcasing algorithmic expertise and efficient problem-solving abilities.",
      images: generateImages(2, 'achievements', 1),
      certificateLink: 'https://drive.google.com/file/d/1vIWURtziAcj5oI9H5VNCVdhKjcDla59o/view?usp=drive_link'
    },
    {
      title: "Top 5 percentile in Adobe GenSolve Hackathon",
      organization: "Adobe",
      description: "Ranked in the top 5 percentile among participants in the Adobe GenSolve Hackathon, demonstrating creativity and technical excellence.",
      images: generateImages(3, 'achievements', 3),
      certificateLink: "https://drive.google.com/file/d/1xS27YsiE6vk0EFJs-oWGhTyw70lJQjcX/view?usp=drive_link"
    },
    {
      title: "First Prize in Google Winter of Code",
      organization: "GDSC NIT Surat",
      description: "Awarded first prize in Google Winter of Code for developing an innovative solution that addressed real-world challenges.",
      images: generateImages(4, 'achievements', 2),
      certificateLink: "https://drive.google.com/file/d/1kx29htNSo3mgUQGCn1Y4hIPkwKyQlzSl/view?usp=drive_link"
    },
    {
      title: "Gold Medal in Spoken Sanskrit Course",
      organization: "NPTEL and IIT Kharagpur",
      description: "Received a Gold Medal for excellence in the Spoken Sanskrit Course, reflecting dedication to preserving ancient knowledge.",
      images: generateImages(5, 'achievements', 2),
      certificateLink: "https://drive.google.com/file/d/18nk7TIIjntaPF34-esKvAksa1jZQVMhH/view?usp=drive_link"
    },
    {
      title: "First rank at Web Wonder Competition",
      organization: "Nexus, DoCSE, NIT Surat",
      description: "Secured first place in the Web Wonder Competition, showcasing exceptional web development skills and creative design thinking.",
      images: generateImages(6, 'achievements', 2),
      certificateLink: "https://drive.google.com/file/d/1JJx-uvbqt2rAy14RulYbQ2Dc37XOacj7/view?usp=drive_link"
    }
  ];

  // FullScreenImage Component
  const FullScreenImage = ({ src, onClose }) => (
    <div 
      className="fixed inset-0 bg-black/90 z-[60] flex items-center justify-center p-4"
      onClick={onClose}
    >
      <button 
        onClick={onClose}
        className="absolute right-6 top-6 p-2.5 rounded-full 
          bg-gray-800/50 backdrop-blur-sm
          hover:bg-gray-700/50
          text-white
          transition-all duration-300 z-10"
      >
        <X className="w-5 h-5" />
      </button>
      <div className="relative w-full h-full max-w-[90vw] max-h-[90vh]">
        <Image
          src={src}
          alt="Full size image"
          fill
          className="object-contain"
          quality={100}
        />
      </div>
    </div>
  );

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
              transition-all duration-300 z-10 cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="p-8">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-4">{achievement.title}</h3>
            <div className="text-blue-500 dark:text-blue-400 flex items-center gap-2 mb-6">
              <Trophy className="h-5 w-5" />
              <span className="font-medium">{achievement.organization}</span>
            </div>

            <div className="relative h-[300px] rounded-xl overflow-hidden mb-6 group">
              <div className="absolute inset-y-0 left-0 z-10 flex items-center">
                <button onClick={prevImage} className="p-2 bg-black/30 hover:bg-black/50 text-white rounded-r-lg cursor-pointer">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                  </svg>
                </button>
              </div>
              <div className="absolute inset-y-0 right-0 z-10 flex items-center">
                <button onClick={nextImage} className="p-2 bg-black/30 hover:bg-black/50 text-white rounded-l-lg cursor-pointer">
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
                    className={`w-2 h-2 rounded-full cursor-pointer ${
                      idx === currentImageIndex ? 'bg-white' : 'bg-white/50'
                    }`}
                  />
                ))}
              </div>
              <button 
                onClick={() => setFullScreenImage(achievement.images[currentImageIndex])}
                className="absolute top-4 right-4 p-2 bg-black/30 hover:bg-black/50 text-white rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10 cursor-pointer"
              >
                <ZoomIn className="w-5 h-5" />
              </button>
              <Image
                src={achievement.images[currentImageIndex]}
                alt={achievement.title}
                fill
                className="object-cover transition-opacity duration-300 cursor-zoom-in"
                onClick={() => setFullScreenImage(achievement.images[currentImageIndex])}
              />
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
                target="_blank"
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
              </div>
              
              <div className="p-6">
                <h3 className="text-gray-900 dark:text-gray-100 font-bold text-lg mb-2 line-clamp-1 select-text">{achievement.title}</h3>
                <div className="text-blue-500 dark:text-blue-400 text-sm flex items-center gap-1 mb-3 select-text">
                  <Trophy className="h-4 w-4" />
                  {achievement.organization}
                </div>
                <p className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed line-clamp-2 select-text">
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
                      target="_blank"
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

      {/* Modals */}
      {selectedAchievement && (
        <AchievementModal 
          achievement={selectedAchievement} 
          onClose={() => setSelectedAchievement(null)} 
        />
      )}
      {fullScreenImage && (
        <FullScreenImage 
          src={fullScreenImage} 
          onClose={() => setFullScreenImage(null)} 
        />
      )}
    </section>
  );
}
