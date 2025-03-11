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
                className="fixed inset-0 flex bg-gradient-to-br from-[#0a192f] to-[#112240] z-[51]"
            >
                <div className="w-full flex justify-center items-center relative overflow-hidden">
                    {/* Left side: Code Panel */}
                    <motion.div 
                        initial={{ x: -50, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ duration: 0.8 }}
                        className="absolute left-0 h-full w-1/2 flex items-center justify-center overflow-hidden px-4 md:px-12"
                    >
                        <div className="relative w-full max-w-lg">
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
                                <div className="h-96 overflow-y-auto p-1 text-sm" style={{ scrollbarWidth: 'thin' }}>
                                    <SyntaxHighlighter
                                        language="javascript"
                                        style={dracula}
                                        wrapLines
                                        showLineNumbers
                                        customStyle={{
                                            background: "transparent",
                                            fontSize: "12px",
                                            scrollbarWidth: 'thin',
                                        }}
                                    >
                                        {reactCode}
                                    </SyntaxHighlighter>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Right side: Sanskrit wisdom */}
                    <motion.div 
                        initial={{ x: 50, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ duration: 0.8 }}
                        className="absolute right-0 h-full w-1/2 flex items-center justify-center overflow-hidden px-4 md:px-12"
                    >
                        <div className="relative w-full max-w-lg">
                            <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-500 to-yellow-400 rounded-lg blur opacity-30"></div>
                            <div className="relative bg-[#0d1b2a]/90 rounded-lg h-96 border border-yellow-400/20 flex flex-col items-center justify-center p-8 text-center">
                                <div className="mb-3 text-yellow-200/70 text-sm uppercase tracking-widest font-light">Ancient Wisdom</div>
                                
                                <motion.div
                                    key={currentSanskritIndex}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: -20 }}
                                    transition={{ duration: 0.5 }}
                                    className="mb-8"
                                >
                                    <h2 className="text-4xl md:text-5xl text-yellow-400 font-[sanskrit] mb-4">
                                        {sanskritTexts[currentSanskritIndex].sanskrit}
                                    </h2>
                                    <p className="text-lg md:text-xl text-gray-300">
                                        "{sanskritTexts[currentSanskritIndex].english}"
                                    </p>
                                </motion.div>
                                
                                <div className="mt-auto">
                                    <div className="w-16 h-1 bg-yellow-400/30 mx-auto mb-4"></div>
                                    <p className="text-gray-400 italic text-sm">
                                        Where ancient wisdom meets modern technology
                                    </p>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Connection line between code and wisdom */}
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 h-px w-16 bg-gradient-to-r from-sky-500 to-yellow-400"></div>

                    {/* Center logo/emblem */}
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

                    {/* Bottom loading bar */}
                    <motion.div 
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.9 }}
                        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 w-full max-w-md px-4"
                    >
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
                            <span>Loading digital workspace</span>
                            <button
                                onClick={() => {
                                    setShow(false);
                                    onFinish();
                                }}
                                className="text-gray-400 hover:text-white transition-colors duration-300"
                            >
                                Skip →
                            </button>
                        </div>
                    </motion.div>
                </div>
            </motion.div>
        )
    );
};

export default WelcomePage;