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

        return () => {
            clearTimeout(timer);
            clearInterval(interval);
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
                    {/* Animated particles background */}
                    <div className="absolute inset-0 opacity-30">
                        <motion.div
                            className="absolute h-2 w-2 rounded-full bg-sky-500"
                            animate={{
                                x: ["-10%", "110%"],
                                y: ["10%", "60%"],
                                opacity: [0, 1, 0]
                            }}
                            transition={{ duration: 5, repeat: Infinity, repeatType: "loop" }}
                        />
                        <motion.div
                            className="absolute h-3 w-3 rounded-full bg-purple-500"
                            animate={{
                                x: ["110%", "-10%"],
                                y: ["70%", "20%"],
                                opacity: [0, 1, 0]
                            }}
                            transition={{ duration: 7, repeat: Infinity, repeatType: "loop", delay: 0.5 }}
                        />
                        <motion.div
                            className="absolute h-2 w-2 rounded-full bg-yellow-500"
                            animate={{
                                x: ["50%", "80%"],
                                y: ["110%", "-10%"],
                                opacity: [0, 1, 0]
                            }}
                            transition={{ duration: 6, repeat: Infinity, repeatType: "loop", delay: 1 }}
                        />
                        <motion.div
                            className="absolute h-4 w-4 rounded-full bg-green-500"
                            animate={{
                                x: ["30%", "70%"],
                                y: ["-10%", "110%"],
                                opacity: [0, 1, 0]
                            }}
                            transition={{ duration: 8, repeat: Infinity, repeatType: "loop", delay: 1.5 }}
                        />
                        <motion.div
                            className="absolute h-3 w-3 rounded-full bg-red-500"
                            animate={{
                                x: ["-10%", "110%"],
                                y: ["90%", "40%"],
                                opacity: [0, 1, 0]
                            }}
                            transition={{ duration: 9, repeat: Infinity, repeatType: "loop", delay: 2 }}
                        />
                    </div>

                    {/* Background Code Animation */}
                    <div className="absolute w-full md:w-1/2 h-1/2 md:h-full text-sm opacity-15 overflow-hidden p-2 md:p-20 top-0 left-0">
                        <motion.div
                            animate={{
                                y: ["0%", "-50%"],
                            }}
                            transition={{ repeat: Infinity, duration: 25, ease: "linear" }}
                        >
                            <SyntaxHighlighter
                                language="javascript"
                                style={dracula}
                                wrapLines
                                customStyle={{
                                    background: "transparent",
                                    fontSize: "clamp(10px, 1.5vw, 16px)",
                                    padding: "clamp(8px, 2vw, 20px)",
                                }}
                            >
                                {reactCode.repeat(10)}
                            </SyntaxHighlighter>
                        </motion.div>
                    </div>

                    {/* Sanskrit Text Background */}
                    <div className="absolute w-full h-1/2 md:h-full md:w-1/2 text-yellow-500/20 font-[sanskrit] leading-relaxed tracking-wider overflow-hidden bottom-0 md:right-0 md:top-0 p-2 md:p-20">
                        <motion.div
                            animate={{
                                y: ["0%", "-100%"],
                            }}
                            transition={{ repeat: Infinity, duration: 25, ease: "linear" }}
                        >
                            <pre className="font-[sanskrit] text-center text-base sm:text-lg md:text-2xl lg:text-4xl">
                                {longSanskritText.repeat(10)}
                            </pre>
                        </motion.div>
                    </div>

                    {/* Circular glow effect */}
                    <div className="absolute inset-0 flex items-center justify-center">
                        <div className="w-96 h-96 rounded-full bg-sky-500/10 filter blur-3xl"></div>
                        <div className="absolute w-80 h-80 rounded-full bg-purple-500/10 filter blur-3xl"></div>
                    </div>

                    {/* Centered Content */}
                    <div className="relative z-20 flex flex-col items-center justify-center space-y-8 px-4 md:px-8">
                        {/* Logo or icon */}
                        <motion.div
                            initial={{ scale: 0 }}
                            animate={{ scale: 1, rotate: 360 }}
                            transition={{ duration: 1, type: "spring" }}
                            className="w-20 h-20 md:w-24 md:h-24 bg-gradient-to-br from-sky-400 to-purple-500 rounded-xl flex items-center justify-center mb-4"
                        >
                            <span className="text-white text-4xl md:text-5xl font-bold">D</span>
                        </motion.div>

                        {/* Code-style greeting */}
                        <motion.div 
                            initial={{ y: 20, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ delay: 0.5 }}
                            className="text-sky-300 font-mono text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold bg-black/50 p-4 md:p-6 rounded-xl shadow-2xl backdrop-blur-md border border-sky-500/20"
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
                            <div className="h-1 w-full bg-gray-600 rounded-full overflow-hidden">
                                <motion.div 
                                    className="h-full bg-gradient-to-r from-sky-400 via-purple-500 to-sky-400 rounded-full"
                                    style={{ width: `${loadingProgress}%` }}
                                    initial={{ width: "0%" }}
                                    animate={{ width: "100%" }}
                                    transition={{ duration: 10, ease: "linear" }}
                                />
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
                            className="text-gray-400 text-sm hover:text-white transition-colors duration-300 mt-4"
                        >
                            Skip intro →
                        </motion.button>
                    </div>
                </div>
            </motion.div>
        )
    );
};

export default WelcomePage;