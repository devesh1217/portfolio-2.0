"use client";

import { motion } from "framer-motion";
import { ReactTyped } from "react-typed";
import { useState, useEffect } from "react";
import SyntaxHighlighter from "react-syntax-highlighter";
import { dracula } from "react-syntax-highlighter/dist/esm/styles/hljs";

const reactCode = `
import React, { useState } from 'react';

// Ancient wisdom meets modern code
const WisdomCounter = () => {
  // "योग: कर्मसु कौशलम्" - Yoga is skill in action
  const [count, setCount] = useState(0);
  
  // "अभ्यासेन तु कौन्तेय" - Through practice, O son of Kunti
  const increment = () => {
    setCount(prevCount => prevCount + 1);
  };

  return (
    <div className="wisdom-container">
      <h1>Wisdom Counter: {count}</h1>
      <button onClick={increment}>
        {/* उत्तिष्ठत जाग्रत - Arise, awake */}
        Increment
      </button>
    </div>
  );
};

export default WisdomCounter;
`;

const sanskritTexts = [
  {
    sanskrit: "योग: कर्मसु कौशलम्",
    english: "Yoga is skill in action"
  },
  {
    sanskrit: "उत्तिष्ठत जाग्रत",
    english: "Arise, awake"
  },
  {
    sanskrit: "अभ्यासेन तु कौन्तेय",
    english: "Through practice, O son of Kunti"
  },
  {
    sanskrit: "सत्यं वद, धर्मं चर",
    english: "Speak the truth, follow the dharma"
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
        }, 10000);

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
                className="fixed inset-0 flex bg-gradient-to-br from-[#0a192f] to-[#112240] z-[51] overflow-y-auto"
            >
                {/* Welcome Header */}
                <motion.div
                    initial={{ y: -50, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="absolute top-4 sm:top-6 md:top-10 left-0 right-0 text-center px-4"
                >
                    <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-sky-400 via-purple-500 to-yellow-400">
                        Welcome to Dharma Code
                    </h1>
                    <div className="h-6 sm:h-8 overflow-hidden">
                        <ReactTyped
                            strings={[
                                "Where ancient wisdom guides modern development.",
                                "Blending timeless principles with cutting-edge tech.",
                                "Your journey of code and consciousness begins here."
                            ]}
                            typeSpeed={40}
                            backSpeed={20}
                            backDelay={1500}
                            loop
                            className="text-sm sm:text-base text-gray-300 mt-2 block"
                        />
                    </div>
                </motion.div>

                <div className="w-full flex flex-col md:flex-row justify-center items-center relative overflow-hidden pt-20 md:pt-0">
                    {/* Mobile and Desktop Layout Container */}
                    <div className="w-full h-full flex flex-col md:flex-row justify-center items-center md:items-stretch">
                        {/* Left side: Code Panel */}
                        <motion.div 
                            initial={{ x: isMobile ? 0 : -50, y: isMobile ? -20 : 0, opacity: 0 }}
                            animate={{ x: 0, y: 0, opacity: 1 }}
                            transition={{ duration: 0.8 }}
                            className="w-full md:w-1/2 px-4 sm:px-8 md:px-12 pt-16 md:pt-24 mb-6 md:mb-0"
                        >
                            <div className="relative w-full max-w-lg mx-auto">
                                <div className="absolute -inset-0.5 bg-gradient-to-r from-sky-500 to-purple-500 rounded-lg blur opacity-30"></div>
                                <div className="relative bg-[#0d1b2a]/90 rounded-lg overflow-hidden border border-sky-500/20">
                                    <div className="flex items-center px-4 py-2 bg-[#0d1b2a] border-b border-sky-700/30">
                                        <div className="flex space-x-1.5">
                                            <div className="w-3 h-3 rounded-full bg-red-500"></div>
                                            <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                                            <div className="w-3 h-3 rounded-full bg-green-500"></div>
                                        </div>
                                        <div className="ml-4 text-xs text-gray-400 font-mono">wisdom-counter.jsx</div>
                                    </div>
                                    <div className="h-64 sm:h-80 md:h-96 overflow-y-auto p-1 text-xs sm:text-sm" style={{ scrollbarWidth: 'thin' }}>
                                        <SyntaxHighlighter
                                            language="javascript"
                                            style={dracula}
                                            wrapLines
                                            showLineNumbers
                                            customStyle={{
                                                background: "transparent",
                                                fontSize: "11px",
                                                scrollbarWidth: 'thin',
                                            }}
                                        >
                                            {reactCode}
                                        </SyntaxHighlighter>
                                    </div>
                                </div>
                            </div>
                        </motion.div>

                        {/* Mobile connector line */}
                        {isMobile && (
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 0.6 }}
                                className="w-16 h-px bg-gradient-to-r from-sky-500 to-yellow-400 my-4"
                            ></motion.div>
                        )}

                        {/* Center logo/emblem for desktop */}
                        {!isMobile && (
                            <motion.div
                                initial={{ scale: 0, rotate: 180 }}
                                animate={{ scale: 1, rotate: 0 }}
                                transition={{ 
                                    type: "spring", 
                                    stiffness: 200, 
                                    damping: 20, 
                                    delay: 0.4 
                                }}
                                className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-16 h-16 rounded-full bg-gradient-to-br from-sky-500 to-purple-600 flex items-center justify-center z-10 shadow-lg"
                            >
                                <div className="w-14 h-14 rounded-full bg-[#0d1b2a] flex items-center justify-center">
                                    <span className="text-white text-2xl font-bold">D</span>
                                </div>
                            </motion.div>
                        )}

                        {/* Right side: Sanskrit wisdom */}
                        <motion.div 
                            initial={{ x: isMobile ? 0 : 50, y: isMobile ? 20 : 0, opacity: 0 }}
                            animate={{ x: 0, y: 0, opacity: 1 }}
                            transition={{ duration: 0.8 }}
                            className="w-full md:w-1/2 px-4 sm:px-8 md:px-12 pb-20 md:pt-24"
                        >
                            <div className="relative w-full max-w-lg mx-auto">
                                <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-500 to-yellow-400 rounded-lg blur opacity-30"></div>
                                <div className="relative bg-[#0d1b2a]/90 rounded-lg h-64 sm:h-80 md:h-96 border border-yellow-400/20 flex flex-col items-center justify-center p-4 sm:p-6 md:p-8 text-center">
                                    <div className="mb-2 md:mb-3 text-yellow-200/70 text-xs sm:text-sm uppercase tracking-widest font-light">Ancient Wisdom</div>
                                    
                                    <motion.div
                                        key={currentSanskritIndex}
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        exit={{ opacity: 0, y: -20 }}
                                        transition={{ duration: 0.5 }}
                                        className="mb-4 md:mb-8"
                                    >
                                        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-yellow-400 font-[sanskrit] mb-2 md:mb-4">
                                            {sanskritTexts[currentSanskritIndex].sanskrit}
                                        </h2>
                                        <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-300">
                                            "{sanskritTexts[currentSanskritIndex].english}"
                                        </p>
                                    </motion.div>
                                    
                                    <div className="mt-auto">
                                        <div className="w-12 md:w-16 h-px md:h-1 bg-yellow-400/30 mx-auto mb-2 md:mb-4"></div>
                                        <p className="text-gray-400 italic text-xs sm:text-sm">
                                            Where ancient wisdom meets modern technology
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </div>

                    {/* Desktop connection line between code and wisdom */}
                    {!isMobile && (
                        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 h-px w-16 bg-gradient-to-r from-sky-500 to-yellow-400"></div>
                    )}

                    {/* Mobile logo/emblem */}
                    {isMobile && (
                        <motion.div
                            initial={{ scale: 0, rotate: 180 }}
                            animate={{ scale: 1, rotate: 0 }}
                            transition={{ 
                                type: "spring", 
                                stiffness: 200, 
                                damping: 20, 
                                delay: 0.4 
                            }}
                            className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-full bg-gradient-to-br from-sky-500 to-purple-600 flex items-center justify-center z-10 shadow-lg mb-4"
                        >
                            <div className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 rounded-full bg-[#0d1b2a] flex items-center justify-center">
                                <span className="text-white text-xl sm:text-2xl font-bold">D</span>
                            </div>
                        </motion.div>
                    )}

                    {/* Welcome message */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 1.2, duration: 1 }}
                        className="absolute bottom-24 left-0 right-0 text-center px-4"
                    >
                        <p className="text-xs sm:text-sm md:text-base text-gray-300">
                            Thank you for joining us. Your digital enlightenment awaits.
                        </p>
                    </motion.div>

                    {/* Bottom loading bar */}
                    <motion.div 
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.9 }}
                        className="absolute bottom-8 left-0 right-0 w-full px-4"
                    >
                        <div className="max-w-xs sm:max-w-sm md:max-w-md mx-auto">
                            <div className="h-1 w-full bg-gray-800 rounded-full overflow-hidden">
                                <motion.div 
                                    className="h-full bg-gradient-to-r from-sky-400 via-purple-500 to-yellow-400"
                                    style={{ width: `${loadingProgress}%` }}
                                    initial={{ width: "0%" }}
                                    animate={{ width: "100%" }}
                                    transition={{ duration: 10, ease: "linear" }}
                                />
                            </div>
                            <div className="flex justify-between mt-2 text-xs text-gray-400">
                                <span>
                                    <span className="text-sky-400">Preparing</span> your workspace...
                                </span>
                                <button
                                    onClick={() => {
                                        setShow(false);
                                        onFinish();
                                    }}
                                    className="text-purple-400 hover:text-white transition-colors duration-300"
                                >
                                    Enter Now →
                                </button>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </motion.div>
        )
    );
};

export default WelcomePage;