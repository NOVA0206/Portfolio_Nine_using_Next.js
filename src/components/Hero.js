// src/components/Hero.jsx
"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useEffect, useState } from "react";
import narutoIcon from "./Jeevan.jpg";
import { default as kunai } from "./kunai.png";

export default function Hero() {
  const [text, setText] = useState("");
  const fullText = "I build web apps and craft digital experiences... DATTEBAYO!";
  const [showKunai, setShowKunai] = useState(false);
  const [showShuriken, setShowShuriken] = useState(false);

  useEffect(() => {
    let index = 0;
    const typingInterval = setInterval(() => {
      setText(fullText.slice(0, index + 1));
      index++;
      if (index === fullText.length) {
        clearInterval(typingInterval);
        setShowKunai(true);
        setTimeout(() => setShowShuriken(true), 500);
      }
    }, 50);
    return () => clearInterval(typingInterval);
  }, [fullText]);

  const introVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1, transition: { duration: 1, type: "spring", stiffness: 100 } },
  };

  const buttonVariants = {
    hover: { scale: 1.1, textShadow: "0px 0px 8px #FFD700", boxShadow: "0px 0px 8px #FFD700" },
    tap: { scale: 0.95 },
  };

  return (
    <section id="home" className="hero-section min-h-screen flex flex-col justify-center items-center text-white px-4 text-center">
      <div className="hero-background absolute inset-0 z-0"></div>

      <motion.div
        className="z-10 flex flex-col items-center"
        initial="hidden"
        animate="visible"
        variants={introVariants}
      >
        <motion.div
          className="relative inline-block"
          whileHover={{ rotate: 360, transition: { duration: 1 } }}
        >
          <Image
            src={narutoIcon}
            alt="Naruto Uzumaki Logo"
            width={100}
            height={100}
            className="mb-4 shadow-lg rounded-full"
          />
        </motion.div>
        
        <motion.h1
          className="naruto-font text-6xl md:text-8xl font-black mb-4 tracking-wider"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          Jeevan Senju
        </motion.h1>

        <motion.p
          className="text-lg md:text-xl max-w-2xl mt-4 px-4 font-light text-gray-200"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1 }}
        >
          {text}
          <span className="typing-cursor">|</span>
        </motion.p>
        
        <motion.div
          className="relative mt-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2.5, duration: 1 }}
        >
          <motion.a
            href="#contact"
            className="cta-button"
            variants={buttonVariants}
            whileHover="hover"
            whileTap="tap"
          >
            Contact Me
            <div className="ripple-effect"></div>
          </motion.a>
        </motion.div>
      </motion.div>

      {showKunai && (
        <motion.div
          className="absolute kunai-icon"
          initial={{ x: "-100vw", y: "-100vh", rotate: -180, opacity: 0 }}
          animate={{ x: 0, y: 0, rotate: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <Image src={kunai} alt="Kunai" width={70} height={70} />
        </motion.div>
      )}

      <div className="watermark absolute bottom-4 right-4 text-xs opacity-50">
        Based on Naruto Shippuden
      </div>
    </section>
  );
}