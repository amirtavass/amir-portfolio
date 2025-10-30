"use client";
import ProjectCard from "./ProjectCard";

export default function ProjectGrid({ projects }) {
  return (
    <div className="row g-4 justify-content-center align-items-stretch">
      {projects.map((project) => (
        <ProjectCard key={project.id} project={project} />
      ))}
    </div>
  );
}
