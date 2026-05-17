"use client";
import React, { useEffect } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import Image from "next/image";

export function ProjectModal({ active, setActive, id, modalRef }) {
  const prefersReducedMotion = useReducedMotion();

  // Helper for Framer Motion Layout IDs
  const lId = (prefix, project) =>
    prefersReducedMotion ? undefined : `${prefix}-${project.id}-${id}`;

  // Handle Escape Key & Body Lock
  useEffect(() => {
    function onKeyDown(event) {
      if (event.key === "Escape") setActive(null);
    }

    if (active && typeof active === "object") {
      document.body.style.overflow = "hidden"; // Lock background
    } else {
      document.body.style.overflow = "auto"; // Unlock background
    }

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [active, setActive]);

  return (
    <AnimatePresence>
      {active && typeof active === "object" && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          // Removed touch-none so mobile scrolling works naturally
          className="fixed inset-0 grid place-items-center z-[100] p-0 md:p-8 bg-black/90 backdrop-blur-md"
        >
          <motion.div
            layoutId={lId("project", active)}
            ref={modalRef}
            className="w-full h-full md:h-[90vh] max-w-6xl flex flex-col bg-[#0d0d0d] md:rounded-3xl overflow-hidden shadow-2xl border border-white/10"
          >
            {/* Modal Image Header */}
            <motion.div
              layoutId={lId("image", active)}
              className="relative h-[30vh] md:h-[28vh] w-full flex-shrink-0 bg-[#050505]"
            >
              <Image
                src={active.image}
                alt={active.title}
                fill
                className="object-cover"
                priority
                sizes="(max-width: 768px) 100vw, 1200px"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0d0d0d] via-[#0d0d0d]/60 to-transparent" />
            </motion.div>

            {/* Scrollable Content Area - FIX: Added data-lenis-prevent="true" */}
            <div
              className="flex-1 overflow-y-auto overscroll-contain custom-scrollbar px-6 md:px-16 lg:px-20 py-8 md:py-10"
              data-lenis-prevent="true"
            >
              {/* FIX: Improved Title Spacing & Leading */}
              <motion.h3
                layoutId={lId("title", active)}
                className="font-bold text-4xl md:text-5xl text-white mb-6 md:mb-8 leading-tight tracking-tighter"
              >
                {active.title}
              </motion.h3>

              <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-14 text-gray-400">
                {/* Left Column: Tech Stack & Links */}
                <div className="md:col-span-5 flex flex-col gap-8 border-t border-white/10 pt-8 md:sticky md:top-0 md:self-start">
                  <div>
                    <h4 className="text-white text-xs uppercase tracking-[0.25em] mb-5">
                      Tech Stack
                    </h4>
                    <div className="flex flex-wrap gap-2.5">
                      {active.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-4 py-2 bg-white/5 border border-white/10 text-xs rounded-full text-gray-300"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* FIX: Centered Buttons with better padding and margin */}
                  <div className="flex flex-col gap-4 mt-2">
                    <a
                      href={active.liveUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="group flex justify-center items-center gap-2 bg-white text-black px-6 py-3.5 rounded-xl text-sm font-semibold hover:bg-gray-200 transition-colors"
                    >
                      <span>Live Experience</span>
                      <span className="transform group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform">
                        ↗
                      </span>
                    </a>
                    <a
                      href={active.githubUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="group flex justify-center items-center gap-2 bg-transparent text-white border border-white/20 px-6 py-3.5 rounded-xl text-sm font-medium hover:bg-white/10 transition-colors"
                    >
                      <span>Source Code</span>
                      <span className="transform group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform">
                        ↗
                      </span>
                    </a>
                  </div>
                </div>

                {/* Right Column: Narrative */}
                <div className="md:col-span-7 flex flex-col gap-10 border-t border-white/10 pt-8 pb-16">
                  <div>
                    <h4 className="text-white text-xs uppercase tracking-[0.25em] mb-5">
                      01 / The Challenge
                    </h4>
                    <p className="text-base md:text-lg leading-relaxed text-gray-300">
                      {active.description}
                    </p>
                  </div>
                  {active.features && (
                    <div>
                      <h4 className="text-white text-xs uppercase tracking-[0.25em] mb-5">
                        02 / Engineering Approach
                      </h4>
                      <ul className="space-y-4 text-base md:text-lg leading-relaxed text-gray-300">
                        {active.features.map((feature) => (
                          <li key={feature} className="flex items-start gap-4">
                            <span className="text-white/30 mt-1 text-sm">
                              ✦
                            </span>
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </motion.div>

          {/* Close Button */}
          <motion.button
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            className="absolute top-4 right-4 md:top-8 md:right-8 bg-black/60 backdrop-blur-md border border-white/20 p-3 rounded-full text-white hover:bg-white transition-colors hover:text-black z-10"
            onClick={() => setActive(null)}
          >
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="M18 6L6 18M6 6l12 12" />
            </svg>
          </motion.button>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
