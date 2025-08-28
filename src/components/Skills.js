"use client";

import { motion } from "framer-motion";
import { FaCss3Alt, FaHtml5, FaJsSquare, FaReact } from 'react-icons/fa'; // Placeholder for icon library

// Data structure for Jutsu (Skills)
const jutsu = [
  { name: "Fire Style: React Jutsu", level: 90, icon: <FaReact /> },
  { name: "Shadow Clone: Next.js", level: 85, icon: <FaJsSquare /> },
  { name: "Chidori: JavaScript", level: 95, icon: <FaHtml5 /> },
  { name: "Eight Gates: CSS/Tailwind", level: 90, icon: <FaCss3Alt /> },
];

// Animation variants for staggered reveal
const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2, // Stagger children animations by 0.2 seconds
    },
  },
};

// Animation variants for each Jutsu item
const itemVariants = {
  hidden: { opacity: 0, y: 50, scale: 0.9 },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      type: "spring", // Use a spring animation for a "bouncy" feel
      stiffness: 100,
      damping: 10,
    },
  },
};

export default function JutsuMastery() {
  return (
    <section 
      id="jutsu-mastery" 
      className="relative min-h-screen flex flex-col justify-center items-center py-20 px-4 bg-gray-900 text-white overflow-hidden font-sans"
    >
      {/* Background with subtle ninja-scroll and floating particles effect */}
      <div 
        className="absolute inset-0 bg-cover bg-center opacity-20" 
        style={{ backgroundImage: "url('https://wallpapers.com/images/high/naruto-shippuden-1920-x-1080-hd-1l3s88q1cst4r9h4.jpg')" }} 
      />
      <div className="absolute inset-0 bg-black/60 z-10" />
      
      {/* Main content container with shadow and z-index */}
      <motion.div
        className="relative z-20 max-w-2xl mx-auto space-y-8 p-8 bg-black/50 backdrop-blur-sm rounded-3xl border-2 border-red-800 shadow-[0_0_50px_rgba(255,0,0,0.5)] transition-all duration-300"
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
      >
        <motion.h2
          className="text-6xl font-extrabold text-center text-red-500 tracking-widest leading-tight"
          initial={{ y: -50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, type: "spring", stiffness: 120 }}
        >
          My Jutsu Mastery
        </motion.h2>

        <motion.p 
          className="text-lg text-gray-300 text-center mb-10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          Harnessing the power of the digital shinobi world.
        </motion.p>
        
        <motion.div
          className="space-y-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          {jutsu.map((jutsuItem) => (
            <motion.div
              key={jutsuItem.name}
              className="group relative flex flex-col items-start gap-2 p-5 bg-white/5 rounded-xl border border-white/10 overflow-hidden cursor-pointer hover:bg-white/10 transition-colors duration-300"
              variants={itemVariants}
              whileHover={{ 
                scale: 1.05, 
                boxShadow: "0 0 20px rgba(255, 80, 0, 0.7)", // Glowing hover effect
                borderColor: "#FF5000",
                transition: { type: "spring", stiffness: 200 },
              }}
            >
              {/* Skill name and icon */}
              <div className="flex items-center gap-4 text-xl font-bold text-red-400 group-hover:text-red-300 transition-colors duration-300">
                {/* Icon placeholder - integrate with React Icons */}
                <div className="text-3xl text-orange-400 group-hover:animate-pulse">
                  {jutsuItem.icon}
                </div>
                <h3>{jutsuItem.name}</h3>
              </div>
              
              {/* Skill level and progress bar */}
              <div className="w-full flex items-center gap-4">
                <span className="text-sm font-semibold text-gray-400">{jutsuItem.level}%</span>
                <div className="relative w-full bg-red-950 rounded-full h-3 overflow-hidden">
                  <motion.div
                    className="h-full rounded-full bg-gradient-to-r from-orange-500 to-red-600 shadow-[0_0_15px_rgba(255,80,0,0.8)]"
                    initial={{ width: 0 }}
                    whileInView={{ 
                      width: `${jutsuItem.level}%`, 
                      transition: { 
                        duration: 1.5, 
                        ease: "easeInOut",
                        delay: 0.5,
                      }
                    }}
                    viewport={{ once: true }}
                  />
                  {/* Subtle particle or chakra effect on the progress bar */}
                  <div className="absolute inset-y-0 right-0 w-1/4 bg-white/10 blur-sm rounded-full animate-pulse opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}