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
    const [quoteIndex, setQuoteIndex] = useState(0);

    useEffect(() => {
        const timer = setTimeout(() => {
            setShow(false);
            onFinish();
        }, 10000);
        return () => clearTimeout(timer);
    }, [onFinish]);


    return (
        show && (
            <div className="fixed inset-0 flex bg-[#0a192f] z-[51]">
                <div className="w-full flex justify-center items-center relative ">
                    {/* Background Code Animation */}
                    <div className="absolute w-full md:w-1/2 h-1/2 md:h-full text-sm opacity-20 blur-[0.5px] overflow-hidden p-2 md:p-20 border-b-4 md:border-none border-sky-500 top-0 left-0">
                        <motion.div
                            className=""
                            animate={{
                                y: ["0%", "-50%"],
                                x: ["0%", "0%"]
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
                    <div className="absolute w-full h-1/2 md:h-full md:w-1/2 text-yellow-600 font-[sanskrit] leading-relaxed tracking-wider opacity-25 blur-[0.5px] overflow-hidden bottom-0 md:right-0 md:top-0 p-2 md:p-20">
                        <motion.div
                            className=""
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

                    {/* Centered Content */}
                    <div className="relative z-20 flex flex-col items-center justify-center space-y-4 md:space-y-8 px-4 md:px-8">
                        {/* Code-style greeting */}
                        <div className="text-sky-300 font-[code] text-lg sm:text-lg md:text-2xl lg:text-3xl font-semibold bg-black/45 p-4 md:p-6 rounded-xl shadow-lg backdrop-blur-sm">
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
                        </div>
                    </div>
                </div>
            </div>
        )
    );
};

export default WelcomePage;