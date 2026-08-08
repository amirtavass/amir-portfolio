"use client";
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { FaLinkedin, FaGithub, FaChevronDown } from "react-icons/fa";

export function HeroSection() {
  const [isMounted, setIsMounted] = useState(false);

  // Typewriter State
  const phrases = [
    "Engineering cinematic digital experiences.",
    "Building scalable React architectures.",
    "Developing high-performance full-stack systems.",
  ];
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [showCursor, setShowCursor] = useState(true);

  // Fix Next.js Hydration
  useEffect(() => {
    setIsMounted(true);
  }, []);

  // Blinking Cursor Effect
  useEffect(() => {
    const cursorInterval = setInterval(() => {
      setShowCursor((prev) => !prev);
    }, 500);
    return () => clearInterval(cursorInterval);
  }, []);

  // Looping Typewriter Logic
  useEffect(() => {
    if (!isMounted) return;

    const currentPhrase = phrases[phraseIndex];
    let typingSpeed = isDeleting ? 30 : 60;

    if (!isDeleting && charIndex === currentPhrase.length) {
      setTimeout(() => setIsDeleting(true), 2500);
      return;
    }

    if (isDeleting && charIndex === 0) {
      setIsDeleting(false);
      setPhraseIndex((prev) => (prev + 1) % phrases.length);
      return;
    }

    const timeout = setTimeout(() => {
      setCharIndex((prev) => prev + (isDeleting ? -1 : 1));
    }, typingSpeed);

    return () => clearTimeout(timeout);
  }, [charIndex, isDeleting, phraseIndex, isMounted]);

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 32 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 1.2, ease: [0.16, 1, 0.3, 1] },
    },
  };

  return (
    <section className="relative h-[100svh] w-full flex flex-col items-start justify-center bg-[#0d0d0d] overflow-hidden px-6 md:px-20">
      {/* Grain overlay for texture */}
      <div
        className="absolute inset-0 z-0 pointer-events-none opacity-[0.035]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
          backgroundRepeat: "repeat",
          backgroundSize: "128px 128px",
        }}
      />

      {/* Subtle radial spotlight */}
      <div
        className="absolute inset-0 z-0 pointer-events-none opacity-0"
        style={{
          background:
            "radial-gradient(ellipse 60% 50% at 30% 50%, rgba(255,255,255,0.07) 0%, transparent 70%)",
          animation: "spotlight 2s ease 0.75s 1 forwards",
        }}
      />

      {/* Thin horizontal rule at bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-white/10 z-10" />

      {/* Corner label */}
      <div className="absolute top-8 right-8 md:right-20 z-10 font-mono text-white/20 text-xs tracking-[0.3em] uppercase">
        Portfolio — 2026
      </div>

      {/* Main content */}
      <motion.div
        className="z-10 max-w-4xl mt-12 md:mt-0"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div
          variants={itemVariants}
          className="flex items-center gap-5 mb-12 md:mb-20"
        >
          <div className="w-6 h-px bg-white/40 " />
          <span className="font-mono text-white/40 text-xs tracking-[0.3em] uppercase">
            Full Stack Developer
          </span>
        </motion.div>

        <motion.h1
          variants={itemVariants}
          className="text-[clamp(3rem,10vw,7rem)] font-bold text-white tracking-tighter leading-[0.9] mt-5 mb-6"
        >
          Amirreza
          <br />
          <span className="text-white/30">Tavassoli.</span>
        </motion.h1>

        {/* The Looping Typewriter Container */}
        <motion.div
          variants={itemVariants}
          className="text-xl md:text-3xl text-gray-400 font-light tracking-wide mb-14 leading-relaxed max-w-2xl min-h-[60px] md:min-h-[80px]"
        >
          {isMounted && (
            <span>
              {phrases[phraseIndex].substring(0, charIndex)}
              <span
                className={`text-white ${showCursor ? "opacity-100" : "opacity-0"} transition-opacity duration-100`}
              >
                |
              </span>
            </span>
          )}
        </motion.div>

        {/* Upgraded "More About Me" CTA Button */}
        <motion.div
          variants={itemVariants}
          className="flex items-center mt-8 pb-20 md:pb-0"
        >
          <a
            href="#selected-works"
            className="group flex items-center gap-4 px-6 py-3 border border-white/10 rounded-full text-white text-sm uppercase tracking-[0.2em] hover:bg-white/10 hover:border-white/30 transition-all duration-300"
          >
            <div className="flex items-center justify-center bg-white/10 rounded-full p-2 group-hover:bg-white/20 transition-colors">
              <FaChevronDown className="animate-bounce" size={12} />
            </div>
            <span>More About Me</span>
          </a>
        </motion.div>
      </motion.div>

      {/* Bottom-left: Upgraded Social Icons */}
      <div className="absolute bottom-8 left-6 md:bottom-2 md:left-20 z-10 flex gap-6">
        <a
          href="https://www.linkedin.com/in/amir-tavassoli-8b3163218/"
          target="_blank"
          rel="noreferrer"
          className="text-white/30 hover:text-white transition-colors duration-300 hover:scale-110 transform"
          aria-label="LinkedIn"
        >
          <FaLinkedin size={26} />
        </a>
        <a
          href="https://github.com/amirtavass"
          target="_blank"
          rel="noreferrer"
          className="text-white/30 hover:text-white transition-colors duration-300 hover:scale-110 transform"
          aria-label="GitHub"
        >
          <FaGithub size={26} />
        </a>
      </div>
    </section>
  );
}
