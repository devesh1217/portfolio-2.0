"use client";

import { motion } from "framer-motion";
import { ReactTyped } from "react-typed";
import { useState, useEffect } from "react";
import SyntaxHighlighter from "react-syntax-highlighter";
import { nightOwl } from "react-syntax-highlighter/dist/esm/styles/hljs";

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
        }, 10000); // Reduced from 100000 to 60000 for better mobile experience

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
                className="fixed inset-0 bg-[#0a1017] z-[51] overflow-y-auto min-h-screen flex flex-col justify-evenly items-center pb-20 md:pb-0"
            >
                {/* Welcome Header */}
                <motion.div
                    initial={{ y: -50, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="text-center px-2 sm:px-4"
                >
                    <h1 className="text-xl sm:text-2xl md:text-4xl lg:text-5xl font-bold text-white">
                        Welcome to My <span className="text-[#8dbbff]">Portfolio</span>
                    </h1>
                    <div className="h-4 sm:h-6 md:h-8 overflow-hidden">
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
                            className="text-xs sm:text-sm md:text-base text-gray-400 mt-1 sm:mt-2 block"
                        />
                    </div>
                </motion.div>

                <div className="w-full flex flex-col md:flex-row justify-center items-center relative overflow-hidden">
                    {/* Mobile and Desktop Layout Container */}
                    <motion.div
                        initial={{ x: isMobile ? 0 : -50, y: isMobile ? -20 : 0, opacity: 0 }}
                        animate={{ x: 0, y: 0, opacity: 1 }}
                        transition={{ duration: 0.8 }}
                        className="w-full md:w-1/2 px-2 sm:px-6 md:px-12"
                    >
                        <div className="relative w-full max-w-lg mx-auto">
                            <div className="relative bg-[#0d1726] rounded-lg overflow-hidden border border-gray-700">
                                <div className="flex items-center px-4 py-2 bg-[#0d1726] border-b border-gray-700">
                                    <div className="flex space-x-1.5">
                                        <div className="w-3 h-3 rounded-full bg-gray-500"></div>
                                        <div className="w-3 h-3 rounded-full bg-gray-500"></div>
                                        <div className="w-3 h-3 rounded-full bg-gray-500"></div>
                                    </div>
                                    <div className="ml-4 text-xs text-gray-400 font-mono">wisdom-counter.jsx</div>
                                </div>
                                <div className="h-48 sm:h-64 md:h-96 overflow-y-auto p-1 text-xs sm:text-sm" style={{ scrollbarWidth: 'thin' }}>
                                    <SyntaxHighlighter
                                        language="javascript"
                                        style={nightOwl}
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
                            className="w-16 h-px bg-gray-700 my-4"
                        ></motion.div>
                    )}

                    {/* Center logo/emblem for desktop */}
                    {(
                        <motion.div
                            initial={{ scale: 0, rotate: 180 }}
                            animate={{ scale: 1, rotate: 0 }}
                            transition={{
                                type: "spring",
                                stiffness: 200,
                                damping: 20,
                                delay: 0.4
                            }}
                            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-16 h-16 rounded-full bg-gray-800 flex items-center justify-center z-10"
                        >
                            <div className="w-14 h-14 rounded-full bg-[#0d1726] flex items-center justify-center">
                                <span className="text-gray-300 text-2xl font-bold">DM</span>
                            </div>
                        </motion.div>
                    )}

                    {/* Right side: Sanskrit wisdom */}
                    <motion.div
                        initial={{ x: isMobile ? 0 : 50, y: isMobile ? 20 : 0, opacity: 0 }}
                        animate={{ x: 0, y: 0, opacity: 1 }}
                        transition={{ duration: 0.8 }}
                        className="w-full md:w-1/2 px-2 sm:px-6 md:px-12 mb-4 md:mb-0"
                    >
                        <div className="relative w-full max-w-lg mx-auto">
                            <div className="relative bg-[#0d1726] rounded-lg h-48 sm:h-64 md:h-96 border border-gray-700 flex flex-col items-center justify-center p-3 sm:p-6 md:p-8 text-center">
                                <div className="mb-2 md:mb-3 text-gray-400 text-xs sm:text-sm uppercase tracking-widest font-light">Ancient Wisdom</div>

                                <motion.div
                                    key={currentSanskritIndex}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: -20 }}
                                    transition={{ duration: 0.5 }}
                                    className="mb-4 md:mb-8"
                                >
                                    <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-white font-[sanskrit] mb-2 md:mb-4">
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
                <div className="w-full flex flex-col items-center justify-center gap-4 px-2 sm:px-6 md:px-12 mb-4 md:mb-0">
                    {/* Welcome message */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 1.2, duration: 1 }}
                        className="text-center px-4"
                    >
                        <p className="text-xs sm:text-sm md:text-base text-gray-500">
                            Thank you for joining us. Your digital enlightenment awaits.
                        </p>
                    </motion.div>

                    {/* Bottom loading bar */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.9 }}
                        className="w-full px-2 sm:px-4"
                    >
                        <div className="max-w-xs sm:max-w-sm md:max-w-md mx-auto">
                            <div className="h-1 w-full bg-gray-800 rounded-full overflow-hidden">
                                <motion.div
                                    className="h-full bg-gray-600"
                                    style={{ width: `${loadingProgress}%` }}
                                    initial={{ width: "0%" }}
                                    animate={{ width: "100%" }}
                                    transition={{ duration: 10, ease: "linear" }}
                                />
                            </div>
                            <div className="flex justify-between mt-2 text-xs text-gray-400">
                                <span>
                                    <span className="text-gray-300">Preparing</span> your workspace...
                                </span>
                                <button
                                    onClick={() => {
                                        setShow(false);
                                        onFinish();
                                    }}
                                    className="text-gray-300 hover:text-white transition-colors duration-300"
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