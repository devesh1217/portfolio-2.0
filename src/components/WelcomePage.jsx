"use client";

import { motion } from "framer-motion";
import { ReactTyped } from "react-typed";
import { useState, useEffect } from "react";
import SyntaxHighlighter from "react-syntax-highlighter";
import { nightOwl } from "react-syntax-highlighter/dist/esm/styles/hljs";

const reactCode = `
// Modern Full Stack Development with Ancient Wisdom
import { useState, useEffect } from 'react';
import { NextAuth } from 'next-auth';
import { MongoClient } from 'mongodb';
import { Analytics } from '@vercel/analytics';

// "विद्या ददाति विनयम्" - Knowledge gives humility
const FullStackDeveloper = () => {
  const [skills, setSkills] = useState({
    frontend: ['React', 'Next.js', 'TailwindCSS'],
    backend: ['Node.js', 'Express', 'MongoDB'],
    devops: ['Docker', 'AWS', 'CI/CD'],
    ai: ['PyTorch', 'TensorFlow', 'Computer Vision']
  });

  // "योग: कर्मसु कौशलम्" - Excellence in action
  const deployProject = async () => {
    try {
      await setupDatabase();
      await configureAuth();
      await optimizePerformance();
      return 'Project deployed successfully!';
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div className="developer-portfolio">
      <h1>Full Stack Developer</h1>
      <p>Bridging Modern Tech with Timeless Wisdom</p>
    </div>
  );
};

export default FullStackDeveloper;
`;

const sanskritTexts = [
    {
        sanskrit: "विद्या ददाति विनयम्",
        english: "Knowledge gives humility",
        section: "About"
    },
    {
        sanskrit: "योग: कर्मसु कौशलम्",
        english: "Excellence in action is yoga",
        section: "Skills"
    },
    {
        sanskrit: "धीरं सर्वत्र वर्धते",
        english: "The persistent one prospers everywhere",
        section: "Experience"
    },
    {
        sanskrit: "आरम्भगुर्वी क्षयिणी क्रमेण",
        english: "Difficult at start, but eases with persistence",
        section: "Projects"
    },
    {
        sanskrit: "उद्योगिनं पुरुषसिंहमुपैति लक्ष्मी:",
        english: "Success comes to those who dare to act",
        section: "Achievements"
    }
];

const WelcomePage = ({ onFinish }) => {
    const [show, setShow] = useState(true);
    const [loadingProgress, setLoadingProgress] = useState(0);
    const [currentSanskritIndex, setCurrentSanskritIndex] = useState(0);
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        // Check if we're in a browser environment before using window
        if (typeof window !== "undefined") {
            // Initial check for mobile
            setIsMobile(window.innerWidth < 768);

            // Add resize listener
            const handleResize = () => {
                setIsMobile(window.innerWidth < 768);
            };

            window.addEventListener('resize', handleResize);
            return () => window.removeEventListener('resize', handleResize);
        }
    }, []);

    useEffect(() => {
        const timer = setTimeout(() => {
            setShow(false);
            onFinish();
        }, 8000); // Reduced from 100000 to 60000 for better mobile experience

        // Progress animation
        const interval = setInterval(() => {
            setLoadingProgress(prev => {
                if (prev >= 100) {
                    clearInterval(interval);
                    return 100;
                }
                return prev + 1;
            });
        }, 100);

        // Sanskrit quote rotation
        const quoteInterval = setInterval(() => {
            setCurrentSanskritIndex(prev => (prev + 1) % sanskritTexts.length);
        }, 2500);

        return () => {
            clearTimeout(timer);
            clearInterval(interval);
            clearInterval(quoteInterval);
        };
    }, [onFinish]);

    return (
        show && (
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="fixed inset-0 z-[51] overflow-y-auto min-h-screen flex flex-col justify-evenly items-center pb-20 md:pb-0"
            >
                {/* Background Elements - Matching main website */}
                <div className="fixed inset-0 overflow-hidden -z-10">
                    <div className="absolute inset-0 bg-gradient-to-r from-teal-100/10 to-blue-100/10 dark:from-teal-950/20 dark:to-blue-950/20"></div>
                    <div className="absolute h-56 w-56 top-1/4 left-1/3 rounded-full bg-blue-100/10 dark:bg-blue-900/5 blur-3xl"></div>
                    <div className="absolute h-64 w-64 bottom-1/4 right-1/3 rounded-full bg-teal-100/10 dark:bg-teal-900/5 blur-3xl"></div>
                </div>

                {/* Welcome Header with enhanced animation */}
                <motion.div
                    initial={{ y: -50, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="text-center px-4 relative"
                >
                    <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-48 h-48 bg-gradient-to-r from-primary/10 to-teal-500/10 rounded-full blur-3xl"></div>
                    <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-gray-900 to-gray-600 dark:from-white dark:to-gray-300 bg-clip-text text-transparent">
                        Welcome to My <span className="text-primary">Portfolio</span>
                    </h1>
                    <div className="h-8 sm:h-10 md:h-12 overflow-hidden mt-4">
                        <ReactTyped
                            strings={[
                                // "Where ancient wisdom guides modern development.",
                                "Blending timeless principles with cutting-edge tech.",
                                // "Your journey of code and consciousness begins here."
                            ]}
                            typeSpeed={40}
                            backSpeed={20}
                            backDelay={1500}
                            className="text-sm sm:text-base md:text-lg text-gray-600 dark:text-gray-400 block"
                        />
                    </div>
                </motion.div>

                <div className="w-full flex flex-col md:flex-row justify-center items-center relative overflow-hidden px-4 md:px-8 lg:px-16 gap-4">
                    {/* Code Display and Sanskrit sections remain the same but with enhanced glass effect */}
                    <motion.div
                        initial={{ x: isMobile ? 0 : -50, y: isMobile ? -20 : 0, opacity: 0 }}
                        animate={{ x: 0, y: 0, opacity: 1 }}
                        transition={{ duration: 0.8 }}
                        className="w-full md:w-1/2 px-2 sm:px-6 md:px-12"
                    >
                        <div className="relative w-full max-w-lg mx-auto">
                            <div className="relative glass-effect backdrop-blur-xl rounded-lg overflow-hidden border border-gray-200/10 dark:border-gray-700/30 shadow-xl">
                                <div className="flex items-center bg-white/5 dark:bg-zinc-950/50 px-4 py-2 border-b border-gray-700">
                                    <div className="flex space-x-1.5">
                                        <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                                        <div className="w-3 h-3 rounded-full bg-green-500"></div>
                                        <div className="w-3 h-3 rounded-full bg-red-500"></div>
                                    </div>
                                    <div className="ml-4 text-xs text-gray-400 font-mono">Portfolio.jsx</div>
                                </div>
                                <div 
                                    className="h-48 sm:h-64 md:h-96 overflow-y-auto p-1 text-xs sm:text-sm scrollbar-thin" 
                                    style={{ 
                                        scrollbarWidth: 'thin',
                                        scrollbarColor: 'rgba(150,150,150, 0.5) transparent',
                                    }}
                                >
                                    <SyntaxHighlighter
                                        language="javascript"
                                        style={nightOwl}
                                        wrapLines
                                        showLineNumbers
                                        customStyle={{
                                            background: "transparent",
                                            fontSize: "11px",
                                        }}
                                    >
                                        {reactCode}
                                    </SyntaxHighlighter>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Center logo with enhanced animation */}
                    <motion.div
                        initial={{ scale: 0, rotate: 180 }}
                        animate={{ scale: 1, rotate: 0 }}
                        transition={{
                            type: "spring",
                            stiffness: 200,
                            damping: 20,
                            delay: 0.4
                        }}
                        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-20 h-20 rounded-full bg-white/5 dark:bg-gray-950/50 backdrop-blur-md flex items-center justify-center z-10 shadow-2xl border border-gray-200/10 dark:border-gray-700/30"
                    >
                        <div className="w-16 h-16 rounded-full bg-white dark:bg-gray-900 flex items-center justify-center border-2 border-primary/30">
                            <span className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-teal-500 bg-clip-text text-transparent">DM</span>
                        </div>
                    </motion.div>

                    {/* Sanskrit Wisdom section with enhanced glass effect */}
                    <motion.div
                        initial={{ x: isMobile ? 0 : 50, y: isMobile ? 20 : 0, opacity: 0 }}
                        animate={{ x: 0, y: 0, opacity: 1 }}
                        transition={{ duration: 0.8 }}
                        className="w-full md:w-1/2 px-2 sm:px-6 md:px-12 mb-4 md:mb-0"
                    >
                        <div className="relative w-full max-w-lg mx-auto">
                            <div className="relative glass-effect backdrop-blur-xl rounded-lg border border-gray-200/10 dark:border-gray-700/30 shadow-xl h-48 sm:h-64 md:h-96  flex flex-col justify-evenly items-center text-center py-10">
                                <div className="mb-2 md:mb-3 text-gray-400 text-xs sm:text-sm uppercase tracking-widest font-light">Ancient Wisdom</div>

                                <motion.div
                                    key={currentSanskritIndex}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: -20 }}
                                    transition={{ duration: 0.5 }}
                                    className="mb-4 md:mb-8 shadow"
                                >
                                    <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-amber-300 font-[sanskrit] mb-2 md:mb-4">
                                        {sanskritTexts[currentSanskritIndex].sanskrit}
                                    </h2>
                                    <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-400">
                                        "{sanskritTexts[currentSanskritIndex].english}"
                                    </p>
                                </motion.div>

                                <div className="mt-auto">
                                    <div className="w-12 md:w-16 h-px md:h-1 bg-gray-700 mx-auto mb-2 md:mb-4"></div>
                                    <p className="text-gray-500 italic text-xs sm:text-sm">
                                        Where ancient wisdom meets modern technology
                                    </p>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>

                {/* Bottom section with enhanced loading bar */}
                <div className="w-full flex flex-col items-center justify-center gap-4 px-4">
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 1.2, duration: 1 }}
                        className="text-center"
                    >
                        <p className="text-sm md:text-base text-gray-600 dark:text-gray-400">
                            Thank you for joining us. Your digital enlightenment awaits.
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.9 }}
                        className="w-full max-w-md mx-auto px-4"
                    >
                        <div className="h-1.5 w-full bg-white/5 dark:bg-gray-950/50 rounded-full overflow-hidden border border-gray-200/10 dark:border-gray-700/30">
                            <motion.div
                                className="h-full bg-gradient-to-r from-blue-500 to-teal-500"
                                style={{ width: `${loadingProgress}%` }}
                                initial={{ width: "0%" }}
                                animate={{ width: "100%" }}
                                transition={{ duration: 8, ease: "linear" }}
                            />
                        </div>
                        <div className="flex justify-between mt-3 text-sm">
                            <span className="text-gray-600 dark:text-gray-400">
                                <span className="text-primary">Preparing</span> your experience...
                            </span>
                            <button
                                onClick={() => {
                                    setShow(false);
                                    onFinish();
                                }}
                                className="text-primary hover:text-teal-500 transition-colors duration:300 flex items-center gap-1 group"
                            >
                                Enter Now
                                <span className="transform transition-transform group-hover:translate-x-1">→</span>
                            </button>
                        </div>
                    </motion.div>
                </div>
            </motion.div>
        )
    );
};

export default WelcomePage;