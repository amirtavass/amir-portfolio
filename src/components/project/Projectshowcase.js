"use client";
import React, { useEffect, useId, useRef, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { useOutsideClick } from "@/hooks/use-outside-click";
import Image from "next/image";
import { projectsData } from "@/data/projectsData";
import { ProjectModal } from "./ProjectModal"; // Importing your new separated file!

export function ProjectShowcase() {
  const [active, setActive] = useState(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const id = useId();
  const modalRef = useRef(null);
  const prefersReducedMotion = useReducedMotion();

  useOutsideClick(modalRef, () => setActive(null));

  // Track global window scroll for the sidebar numbers
  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll(".project-section");
      let current = 0;
      sections.forEach((section, index) => {
        const rect = section.getBoundingClientRect();
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
      {/* ── Fixed Progress Indicator ── */}
      <div className="fixed right-4 md:right-8 top-1/2 -translate-y-1/2 z-40 flex flex-col gap-4 mix-blend-difference hidden md:flex">
        {projectsData.map((_, index) => (
          <button
            key={index}
            onClick={() => scrollToProject(index)}
            className={`font-mono text-xs transition-all duration-300 ${
              activeIndex === index
                ? "text-white scale-125 opacity-100"
                : "text-white/30 scale-100 opacity-50 hover:opacity-80"
            }`}
          >
            0{index + 1}
          </button>
        ))}
      </div>

      {/* ── The Cleanly Separated Modal ── */}
      <ProjectModal
        active={active}
        setActive={setActive}
        id={id}
        modalRef={modalRef}
      />

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

            {/* Right: Crisp Image Wrapper */}
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
                <div className="absolute inset-0 border border-white/5 rounded-2xl md:rounded-3xl pointer-events-none" />
              </motion.div>
            </div>
          </div>
        </section>
      ))}
    </div>
  );
}
