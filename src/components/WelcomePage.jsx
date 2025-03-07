"use client";

import { motion } from "framer-motion";
import { ReactTyped } from "react-typed";
import { useState, useEffect } from "react";

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
      <div className="fixed inset-0 flex">
        {/* Left Side - Code Animation */}
        <div className="w-1/2 flex justify-center items-center bg-black text-green-400 font-mono">
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

        {/* Right Side - Sanskrit Text */}
        <motion.div
          className="w-1/2 flex justify-center items-center bg-gray-900 text-yellow-300 font-serif relative overflow-hidden"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2 }}
        >
          <motion.div
            className="absolute w-full text-center text-2xl"
            animate={{ y: [-100, 100], opacity: [0, 1, 0] }}
            transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
          >
            "अहं ब्रह्मास्मि"
          </motion.div>
          <motion.div
            className="absolute w-full text-center text-2xl"
            animate={{ y: [100, -100], opacity: [0, 1, 0] }}
            transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
          >
            "योगः कर्मसु कौशलम्"
          </motion.div>
        </motion.div>
      </div>
    )
  );
};

export default WelcomePage;
