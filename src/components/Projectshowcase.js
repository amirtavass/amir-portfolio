"use client";
import React, { useEffect, useId, useRef, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { useOutsideClick } from "@/hooks/use-outside-click";
import Image from "next/image";
import { projectsData } from "@/data/projectsData";

export function ProjectShowcase() {
  const [active, setActive] = useState(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const id = useId();
  const modalRef = useRef(null);
  const prefersReducedMotion = useReducedMotion();

  // Track global window scroll instead of nested scroll
  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll(".project-section");
      let current = 0;
      sections.forEach((section, index) => {
        const rect = section.getBoundingClientRect();
        // If the section is taking up at least half the viewport, mark it active
        if (
          rect.top <= window.innerHeight / 2 &&
          rect.bottom >= window.innerHeight / 2
        ) {
          current = index;
        }
      });
      setActiveIndex(current);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Modal keyboard & body lock
  useEffect(() => {
    function onKeyDown(event) {
      if (event.key === "Escape") setActive(null);
    }
    if (active && typeof active === "object")
      document.body.style.overflow = "hidden";
    else document.body.style.overflow = "auto";
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [active]);

  useOutsideClick(modalRef, () => setActive(null));

  const scrollToProject = (index) => {
    const target = document.getElementById(`project-${index}`);
    if (target) {
      const top = target.getBoundingClientRect().top + window.scrollY;
      window.scrollTo({ top, behavior: "smooth" });
    }
  };

  const lId = (prefix, project) =>
    prefersReducedMotion ? undefined : `${prefix}-${project.id}-${id}`;

  return (
    <div id="selected-works" className="relative bg-[#0a0a0a] flex flex-col">
      {/* ── Fixed Progress Indicator (Now Clickable) ── */}
      <div className="fixed right-4 md:right-8 top-1/2 -translate-y-1/2 z-40 flex flex-col gap-4 mix-blend-difference">
        {projectsData.map((_, index) => (
          <button
            key={index}
            onClick={() => scrollToProject(index)}
            className={`font-mono text-xs transition-all duration-300 ${activeIndex === index ? "text-white scale-125 opacity-100" : "text-white/30 scale-100 opacity-50 hover:opacity-80"}`}
          >
            0{index + 1}
          </button>
        ))}
      </div>

      {/* ── Narrative Case Study Modal ── */}
      <AnimatePresence>
        {active && typeof active === "object" && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 grid place-items-center z-[100] p-0 md:p-6 bg-black/95 backdrop-blur-xl touch-none"
          >
            <motion.div
              layoutId={lId("project", active)}
              ref={modalRef}
              className="w-full h-full md:h-[95vh] max-w-6xl flex flex-col bg-[#111] md:rounded-3xl overflow-hidden shadow-2xl border border-white/10"
            >
              {/* Crisp Modal Hero Image */}
              <motion.div
                layoutId={lId("image", active)}
                className="relative h-[40vh] w-full flex-shrink-0 bg-[#050505]"
              >
                <Image
                  src={active.image}
                  alt={active.title}
                  fill
                  className="object-contain md:object-cover"
                  priority
                  sizes="(max-width: 768px) 100vw, 1200px"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#111] via-transparent to-transparent" />
              </motion.div>

              <div className="px-6 md:px-16 py-8 overflow-y-auto overscroll-contain custom-scrollbar">
                <motion.h3
                  layoutId={lId("title", active)}
                  className="font-bold text-3xl md:text-5xl text-white mb-10 tracking-tighter"
                >
                  {active.title}
                </motion.h3>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-gray-400">
                  <div className="col-span-1 flex flex-col gap-8 border-t border-white/10 pt-6">
                    <div>
                      <h4 className="text-white text-xs uppercase tracking-[0.25em] mb-4">
                        Tech Stack
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {active.technologies.map((tech) => (
                          <span
                            key={tech}
                            className="px-3 py-1 bg-white/5 border border-white/10 text-xs rounded-full text-gray-300"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                    <div className="flex flex-col gap-3">
                      <a
                        href={active.liveUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="bg-white text-black text-center px-6 py-3 rounded-full text-sm font-semibold hover:bg-gray-200 transition-colors"
                      >
                        Live Experience ↗
                      </a>
                      <a
                        href={active.githubUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="bg-transparent text-white text-center border border-white/20 px-6 py-3 rounded-full text-sm font-medium hover:bg-white/10 transition-colors"
                      >
                        Source Code
                      </a>
                    </div>
                  </div>

                  <div className="col-span-1 md:col-span-2 flex flex-col gap-10 border-t border-white/10 pt-6 pb-20">
                    <div>
                      <h4 className="text-white text-xs uppercase tracking-[0.25em] mb-4">
                        01 / The Challenge
                      </h4>
                      <p className="text-lg leading-relaxed text-gray-300">
                        {active.description}
                      </p>
                    </div>
                    {active.features && (
                      <div>
                        <h4 className="text-white text-xs uppercase tracking-[0.25em] mb-4">
                          02 / Engineering Approach
                        </h4>
                        <ul className="space-y-3 text-lg leading-relaxed text-gray-300">
                          {active.features.map((feature) => (
                            <li
                              key={feature}
                              className="flex items-start gap-3"
                            >
                              <span className="text-white/30 mt-1.5 text-sm">
                                —
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
            <motion.button
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              className="absolute top-6 right-6 md:top-10 md:right-10 bg-black/60 backdrop-blur-md border border-white/20 p-3 rounded-full text-white hover:bg-white/30 transition-colors z-10"
              onClick={() => setActive(null)}
            >
              ✕
            </motion.button>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ── Unified Flowing Sections ── */}
      {projectsData.map((project, index) => (
        <section
          key={project.id}
          id={`project-${index}`}
          className="project-section relative h-[100svh] w-full flex items-center justify-center px-6 md:px-12 py-20 border-b border-white/5"
        >
          <div className="w-full max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-10 md:gap-20">
            {/* Left: Text & Typography */}
            <div className="w-full md:w-1/2 flex flex-col order-2 md:order-1">
              <p className="font-mono text-white/30 text-xs tracking-[0.3em] uppercase mb-4">
                0{index + 1} / Featured Project
              </p>
              <motion.h3
                layoutId={lId("title", project)}
                className="text-4xl md:text-6xl font-bold text-white mb-6 tracking-tighter"
              >
                {project.title}
              </motion.h3>
              <p className="text-gray-400 text-lg md:text-xl leading-relaxed mb-8 max-w-lg">
                {project.description.slice(0, 120)}...
              </p>
              <button
                onClick={() => setActive(project)}
                className="group w-fit flex items-center gap-4 text-white text-sm uppercase tracking-[0.2em] border-b border-white/30 pb-2 hover:border-white transition-all"
              >
                <span>Explore Case Study</span>
                <span className="transform group-hover:translate-x-2 transition-transform">
                  →
                </span>
              </button>
            </div>

            {/* Right: Crisp, Contained Image Wrapper */}
            <div
              className="w-full md:w-1/2 order-1 md:order-2 cursor-pointer"
              onClick={() => setActive(project)}
            >
              <motion.div
                layoutId={lId("project", project)}
                className="relative w-full aspect-[4/3] md:aspect-video rounded-2xl md:rounded-3xl overflow-hidden bg-[#151515] shadow-2xl border border-white/10 group"
              >
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700 ease-out"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                {/* Subtle inner shadow for depth */}
                <div className="absolute inset-0 border border-white/5 rounded-2xl md:rounded-3xl pointer-events-none" />
              </motion.div>
            </div>
          </div>
        </section>
      ))}
    </div>
  );
}
