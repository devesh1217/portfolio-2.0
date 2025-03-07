"use client";

import { motion } from "framer-motion";
import { ReactTyped } from "react-typed";
import { useState, useEffect } from "react";

const backgroundText = `
  The art of code is the poetry of logic. In Sanskrit, wisdom flows through the eternal verses, 
  just as in programming, logic shapes the digital world. Balance in logic, beauty in code, 
  and depth in ancient wisdom guide the modern innovator.
`;

const WelcomePage = ({ onFinish }) => {
  const [show, setShow] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShow(false);
      onFinish();
    }, 6000);
    return () => clearTimeout(timer);
  }, [onFinish]);

  return (
    show && (
      <div className="fixed h-screen w-screen top-0 left-0 inset-0 flex bg-[#0a192f] z-[51]">
        {/* Left Side - Code Animation */}
        <div className="w-1/2 flex justify-center items-center relative overflow-hidden">
          {/* Background Scrolling Text */}
          <motion.div
            className="absolute w-full h-full text-green-600 opacity-10 text-lg font-mono leading-relaxed"
            animate={{ y: ["100%", "-100%"] }}
            transition={{ repeat: Infinity, duration: 10, ease: "linear" }}
          >
            {backgroundText.repeat(10)}
          </motion.div>

          {/* Foreground Animated Text */}
          <div className="relative z-10 text-green-300 font-mono text-3xl">
            <ReactTyped
              strings={[
                `console.log("Hello World");`,
                `print("Welcome to my digital workspace");`,
                `System.out.println("Namaste!");`,
              ]}
              typeSpeed={50}
              backSpeed={30}
              loop
            />
          </div>
        </div>

        {/* Right Side - Sanskrit Text */}
        <div className="w-1/2 flex justify-center items-center relative overflow-hidden">
          {/* Background Scrolling Sanskrit Text */}
          <motion.div
            className="absolute w-full h-full text-yellow-600 opacity-10 text-xl font-serif leading-relaxed"
            animate={{ y: ["-100%", "100%"] }}
            transition={{ repeat: Infinity, duration: 10, ease: "linear" }}
          >
            {`योगः कर्मसु कौशलम्। अहं ब्रह्मास्मि। सत्यमेव जयते। `.repeat(20)}
          </motion.div>

          {/* Foreground Animated Sanskrit Greeting */}
          <motion.div
            className="relative z-10 text-yellow-300 font-serif text-4xl italic text-center"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 2 }}
          >
            "अहं ब्रह्मास्मि"
          </motion.div>
        </div>
      </div>
    )
  );
};

export default WelcomePage;
