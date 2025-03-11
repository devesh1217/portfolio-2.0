"use client";

import { motion } from "framer-motion";
import { ReactTyped } from "react-typed";
import { useState, useEffect } from "react";
import SyntaxHighlighter from "react-syntax-highlighter";
import { dracula } from "react-syntax-highlighter/dist/esm/styles/hljs";

const reactCode = `
import React, { useState } from 'react';

const Counter = () => {
  const [count, setCount] = useState(0);

  return (
    <div className="bg-transparent p-4 rounded-lg">
      <h1 className="text-lg font-bold">Counter: {count}</h1>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
};

export default Counter;
`;

const longSanskritText = `
सर्वे भवन्तु सुखिनः सर्वे सन्तु निरामयाः।
सर्वे भद्राणि पश्यन्तु मा कश्चिद्दुःखभाग्भवेत्॥

कर्मण्येवाधिकारस्ते मा फलेषु कदाचन।
मा कर्मफलहेतुर्भूर्मा ते सङ्गोऽस्त्वकर्मणि॥

योगस्थ: कुरु कर्माणि सङ्गं त्यक्त्वा धनञ्जय |
सिद्ध्यसिद्ध्यो: समो भूत्वा समत्वं योग उच्यते ||

युक्ताहारविहारस्य युक्तचेष्टस्य कर्मसु |
युक्तस्वप्नावबोधस्य योगो भवति दु:खहा ||

यथा दीपो निवातस्थो नेङ्गते सोपमा स्मृता |
योगिनो यतचित्तस्य युञ्जतो योगमात्मन: ||

तपस्विभ्योऽधिकोयोगी ज्ञानिभ्योऽपिमतोऽधिक:|
कर्मिभ्यश्चाधिकोयोगी तस्माद्योगीभवार्जुन||
`;

const WelcomePage = ({ onFinish }) => {
    const [show, setShow] = useState(true);
    const [loadingProgress, setLoadingProgress] = useState(0);
    const [highlightedSanskritIndex, setHighlightedSanskritIndex] = useState(0);
    const [highlightedCodeLine, setHighlightedCodeLine] = useState(0);

    // Split Sanskrit text into individual verses
    const sanskritVerses = longSanskritText.trim().split('\n\n');
    const codeLines = reactCode.split('\n').filter(line => line.trim() !== '');

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

        // Sanskrit highlight interval
        const sanskritInterval = setInterval(() => {
            setHighlightedSanskritIndex(prev => (prev + 1) % sanskritVerses.length);
        }, 2000);

        // Code highlight interval
        const codeInterval = setInterval(() => {
            setHighlightedCodeLine(prev => (prev + 1) % codeLines.length);
        }, 1000);

        return () => {
            clearTimeout(timer);
            clearInterval(interval);
            clearInterval(sanskritInterval);
            clearInterval(codeInterval);
        };
    }, [onFinish, sanskritVerses.length, codeLines.length]);

    return (
        show && (
            <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="fixed inset-0 flex bg-gradient-to-br from-[#0a192f] to-[#112240] z-[51]"
            >
                <div className="w-full flex justify-center items-center relative overflow-hidden">
                    {/* Animated particles background */}
                    <div className="absolute inset-0 opacity-30">
                        {[...Array(20)].map((_, i) => (
                            <motion.div
                                key={i}
                                className={`absolute h-${Math.floor(Math.random() * 3) + 1} w-${Math.floor(Math.random() * 3) + 1} rounded-full`}
                                style={{
                                    backgroundColor: `hsl(${Math.floor(Math.random() * 360)}, 70%, 70%)`,
                                    left: `${Math.floor(Math.random() * 100)}%`,
                                    top: `${Math.floor(Math.random() * 100)}%`,
                                }}
                                animate={{
                                    x: [
                                        Math.random() * 50 - 25,
                                        Math.random() * 50 - 25,
                                        Math.random() * 50 - 25
                                    ],
                                    y: [
                                        Math.random() * 50 - 25,
                                        Math.random() * 50 - 25,
                                        Math.random() * 50 - 25
                                    ],
                                    opacity: [0.3, 0.8, 0.3]
                                }}
                                transition={{
                                    duration: Math.random() * 5 + 5,
                                    repeat: Infinity,
                                    repeatType: "reverse"
                                }}
                            />
                        ))}
                    </div>

                    {/* Code Background - Three Columns for more dynamic appearance */}
                    <div className="absolute inset-0 overflow-hidden opacity-20">
                        <div className="absolute w-1/3 h-screen left-0 top-0 overflow-hidden">
                            <motion.div
                                animate={{
                                    y: ["0%", "-50%"],
                                }}
                                transition={{ repeat: Infinity, duration: 30, ease: "linear" }}
                            >
                                <div className="relative p-4">
                                    {codeLines.map((line, index) => (
                                        <div 
                                            key={index} 
                                            className={`font-mono text-sm ${index === highlightedCodeLine ? 'text-sky-300 bg-sky-900/30' : 'text-gray-400'} transition-colors duration-300 py-1`}
                                        >
                                            {line}
                                        </div>
                                    ))}
                                    {codeLines.map((line, index) => (
                                        <div 
                                            key={`repeat-${index}`} 
                                            className={`font-mono text-sm ${(index + codeLines.length) % codeLines.length === highlightedCodeLine ? 'text-sky-300 bg-sky-900/30' : 'text-gray-400'} transition-colors duration-300 py-1`}
                                        >
                                            {line}
                                        </div>
                                    ))}
                                </div>
                            </motion.div>
                        </div>

                        <div className="absolute w-1/3 h-screen left-1/3 top-0 overflow-hidden">
                            <motion.div
                                animate={{
                                    y: ["-30%", "0%"],
                                }}
                                transition={{ repeat: Infinity, duration: 35, ease: "linear" }}
                            >
                                <div className="relative p-4">
                                    {codeLines.map((line, index) => (
                                        <div 
                                            key={`col2-${index}`} 
                                            className={`font-mono text-sm ${(index + 3) % codeLines.length === highlightedCodeLine ? 'text-purple-300 bg-purple-900/30' : 'text-gray-400'} transition-colors duration-300 py-1`}
                                        >
                                            {line}
                                        </div>
                                    ))}
                                    {codeLines.map((line, index) => (
                                        <div 
                                            key={`col2-repeat-${index}`} 
                                            className={`font-mono text-sm ${(index + codeLines.length + 3) % codeLines.length === highlightedCodeLine ? 'text-purple-300 bg-purple-900/30' : 'text-gray-400'} transition-colors duration-300 py-1`}
                                        >
                                            {line}
                                        </div>
                                    ))}
                                </div>
                            </motion.div>
                        </div>

                        <div className="absolute w-1/3 h-screen left-2/3 top-0 overflow-hidden">
                            <motion.div
                                animate={{
                                    y: ["-10%", "-60%"],
                                }}
                                transition={{ repeat: Infinity, duration: 25, ease: "linear" }}
                            >
                                <div className="relative p-4">
                                    {codeLines.map((line, index) => (
                                        <div 
                                            key={`col3-${index}`} 
                                            className={`font-mono text-sm ${(index + 6) % codeLines.length === highlightedCodeLine ? 'text-green-300 bg-green-900/30' : 'text-gray-400'} transition-colors duration-300 py-1`}
                                        >
                                            {line}
                                        </div>
                                    ))}
                                    {codeLines.map((line, index) => (
                                        <div 
                                            key={`col3-repeat-${index}`} 
                                            className={`font-mono text-sm ${(index + codeLines.length + 6) % codeLines.length === highlightedCodeLine ? 'text-green-300 bg-green-900/30' : 'text-gray-400'} transition-colors duration-300 py-1`}
                                        >
                                            {line}
                                        </div>
                                    ))}
                                </div>
                            </motion.div>
                        </div>
                    </div>

                    {/* Sanskrit Text Floating Background */}
                    <div className="absolute inset-0 overflow-hidden">
                        {sanskritVerses.map((verse, index) => (
                            <motion.div
                                key={index}
                                className={`absolute font-serif text-lg md:text-2xl transition-all duration-1000 ${
                                    index === highlightedSanskritIndex 
                                        ? 'text-yellow-400/80 scale-110' 
                                        : 'text-yellow-500/10 scale-100'
                                }`}
                                style={{
                                    left: `${10 + (index % 3) * 30}%`,
                                    top: `${15 + (index % 4) * 20}%`,
                                    transform: `rotate(${(index % 2) * 3 - 1.5}deg)`,
                                }}
                                animate={{
                                    x: [0, 10, -10, 0],
                                    y: [0, -10, 10, 0],
                                }}
                                transition={{
                                    duration: 10 + index,
                                    repeat: Infinity,
                                    ease: "easeInOut"
                                }}
                            >
                                {verse}
                            </motion.div>
                        ))}
                    </div>

                    {/* Circular glow effect */}
                    <div className="absolute inset-0 flex items-center justify-center">
                        <motion.div 
                            className="w-96 h-96 rounded-full bg-sky-500/10 filter blur-3xl"
                            animate={{ scale: [1, 1.1, 1] }}
                            transition={{ duration: 5, repeat: Infinity }}
                        ></motion.div>
                        <motion.div 
                            className="absolute w-80 h-80 rounded-full bg-purple-500/10 filter blur-3xl"
                            animate={{ scale: [1.1, 1, 1.1] }}
                            transition={{ duration: 5, repeat: Infinity }}
                        ></motion.div>
                    </div>

                    {/* Binary data streams - Matrix style */}
                    <div className="absolute inset-0 overflow-hidden">
                        {[...Array(5)].map((_, i) => (
                            <motion.div
                                key={`stream-${i}`}
                                className="absolute w-6 overflow-hidden text-center"
                                style={{
                                    left: `${20 * i}%`,
                                    top: "-20%",
                                    fontSize: "10px",
                                    color: "rgba(80, 200, 120, 0.3)",
                                    fontFamily: "monospace"
                                }}
                                animate={{ y: ["0%", "120%"] }}
                                transition={{
                                    duration: 8 + i * 2,
                                    repeat: Infinity,
                                    ease: "linear"
                                }}
                            >
                                {[...Array(30)].map((_, j) => (
                                    <div key={j}>
                                        {Math.random() > 0.5 ? "1" : "0"}
                                    </div>
                                ))}
                            </motion.div>
                        ))}
                    </div>

                    {/* Centered Content */}
                    <div className="relative z-20 flex flex-col items-center justify-center space-y-8 px-4 md:px-8">
                        {/* Logo or icon */}
                        <motion.div
                            initial={{ scale: 0 }}
                            animate={{ scale: 1, rotate: 360 }}
                            transition={{ duration: 1, type: "spring" }}
                            className="w-20 h-20 md:w-24 md:h-24 bg-gradient-to-br from-sky-400 to-purple-500 rounded-xl flex items-center justify-center mb-4 shadow-lg shadow-purple-500/30"
                        >
                            <span className="text-white text-4xl md:text-5xl font-bold">D</span>
                        </motion.div>

                        {/* Code-style greeting */}
                        <motion.div 
                            initial={{ y: 20, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ delay: 0.5 }}
                            className="text-sky-300 font-mono text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold bg-black/50 p-6 rounded-xl shadow-2xl backdrop-blur-md border border-sky-500/20"
                        >
                            <ReactTyped
                                strings={[
                                    `console.log("सुस्वागतम्");`,
                                    `print("Welcome to my digital workspace");`,
                                    `System.out.println("Namaste!");`,
                                ]}
                                typeSpeed={100}
                                backSpeed={30}
                                loop
                            />
                        </motion.div>

                        {/* Loading bar */}
                        <motion.div 
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.8 }}
                            className="w-full max-w-md mx-auto mt-8"
                        >
                            <div className="h-2 w-full bg-gray-800 rounded-full overflow-hidden shadow-inner">
                                <motion.div 
                                    className="h-full bg-gradient-to-r from-sky-400 via-purple-500 to-sky-400 rounded-full relative"
                                    style={{ width: `${loadingProgress}%` }}
                                    initial={{ width: "0%" }}
                                    animate={{ width: "100%" }}
                                    transition={{ duration: 10, ease: "linear" }}
                                >
                                    <div className="absolute inset-0 bg-white/20 bg-[length:10px_10px] bg-[0_0] animate-[gradient_1s_linear_infinite] bg-[repeating-linear-gradient(45deg,transparent,transparent_5px,rgba(255,255,255,0.1)_5px,rgba(255,255,255,0.1)_10px)]"></div>
                                </motion.div>
                            </div>
                            <div className="flex justify-between mt-2 text-xs text-gray-400">
                                <span>Loading experience</span>
                                <span>{loadingProgress}%</span>
                            </div>
                        </motion.div>

                        {/* Skip button */}
                        <motion.button
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 1.2 }}
                            onClick={() => {
                                setShow(false);
                                onFinish();
                            }}
                            className="text-gray-400 text-sm hover:text-white transition-colors duration-300 mt-4 flex items-center gap-1 hover:gap-2 px-3 py-1 rounded-full hover:bg-white/5"
                        >
                            Skip intro 
                            <span className="transition-all duration-300">→</span>
                        </motion.button>
                    </div>
                </div>
            </motion.div>
        )
    );
};

export default WelcomePage;