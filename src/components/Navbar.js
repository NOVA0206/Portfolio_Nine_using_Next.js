// A Naruto-themed, animated, and interactive Navbar component
"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useEffect, useState } from "react";
import { FaDragon } from "react-icons/fa"; // Importing Naruto-themed icons
import { FiMenu, FiX } from "react-icons/fi";

const sections = ["home", "about", "skills", "projects", "contact"];

const navVariants = {
  hidden: { y: -100, opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { type: "spring", stiffness: 120 } },
};

const mobileMenuVariants = {
  open: {
    clipPath: "circle(150% at 90% -10%)", // "Explosion" effect
    transition: { type: "spring", stiffness: 200, damping: 20 },
  },
  closed: {
    clipPath: "circle(20px at 90% -10%)",
    transition: { type: "spring", stiffness: 400, damping: 40 },
  },
};

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("home");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPos = window.scrollY;
      setScrolled(scrollPos > 50);

      sections.forEach((sec) => {
        const el = document.getElementById(sec);
        if (el && scrollPos >= el.offsetTop - 100) {
          setActive(sec);
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      variants={navVariants}
      initial="hidden"
      animate="visible"
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-slate-900/80 backdrop-blur-sm shadow-xl py-2"
          : "bg-transparent py-4"
      }`}
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6">
        <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
          <Link
            href="#home"
            className={`text-2xl font-bold font-['Chakra_Petch'] ${
              scrolled ? "text-red-500" : "text-yellow-400"
            } transition-colors duration-300 flex items-center gap-2`}
          >
            <FaDragon /> Jeevan Jadhav <span className="hidden sm:inline">火影</span>
          </Link>
        </motion.div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          {sections.map((sec) => (
            <motion.div
              key={sec}
              whileHover={{ scale: 1.1, y: -5 }}
              transition={{ type: "spring", stiffness: 400 }}
            >
              <Link
                href={`#${sec}`}
                className={`font-['Chakra_Petch'] text-lg relative group transition duration-300 ${
                  active === sec
                    ? "text-red-500"
                    : scrolled
                    ? "text-slate-300"
                    : "text-slate-800"
                }`}
              >
                {sec.charAt(0).toUpperCase() + sec.slice(1)}
                {/* Chakra Aura Effect */}
                {active === sec && (
                  <motion.div
                    layoutId="underline"
                    className="absolute inset-0 bg-red-500/30 rounded-full blur-md opacity-70"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: "spring", stiffness: 200, damping: 10 }}
                  />
                )}
                {/* Underline on hover */}
                <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-red-500 transition-all duration-300 group-hover:w-full" />
              </Link>
            </motion.div>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <motion.div
            whileHover={{ rotate: 90 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => setOpen(!open)}
            className={`p-2 rounded-full cursor-pointer transition-colors duration-300 ${
              scrolled ? "text-red-500 bg-slate-800" : "text-slate-800 bg-transparent"
            }`}
          >
            {open ? <FiX size={24} /> : <FiMenu size={24} />}
          </motion.div>
        </div>
      </div>

      {/* Mobile Menu - "Fireball Jutsu" effect */}
      <motion.div
        variants={mobileMenuVariants}
        animate={open ? "open" : "closed"}
        className="fixed top-0 right-0 h-screen w-2/3 bg-slate-900/95 backdrop-blur-md shadow-2xl md:hidden flex flex-col items-center justify-center space-y-8"
      >
        <div className="absolute top-8 right-8 cursor-pointer text-red-500" onClick={() => setOpen(false)}>
          <FiX size={32} />
        </div>
        {sections.map((sec, index) => (
          <motion.div
            key={sec}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 + index * 0.1 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <Link
              href={`#${sec}`}
              className="text-white text-3xl font-['Chakra_Petch'] hover:text-red-500 transition-colors"
              onClick={() => setOpen(false)}
            >
              {sec.charAt(0).toUpperCase() + sec.slice(1)}
            </Link>
          </motion.div>
        ))}
      </motion.div>
    </motion.nav>
  );
}