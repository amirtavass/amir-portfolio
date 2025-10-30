"use client";
import PortfolioHeader from "./PortfolioHeader";
import ProjectGrid from "./ProjectGrid";
import PortfolioCallToAction from "./PortfolioCallToAction";
import { projectsData } from "../../data/projectsData";

export default function Portfolio() {
  // Split projects into two categories
  const fullStackProjects = projectsData.slice(0, 2); // GitHub Finder & MovieMate
  const reactNextProjects = projectsData.slice(2, 4); // Personal Portfolio & Arman Portfolio

  return (
    <section className="portfolio py-5 bg-light">
      <div className="container">
        <PortfolioHeader />

        {/* Full Stack Projects Section */}
        <div className="mb-5">
          <div className="text-center mb-4">
            <h3 className="fw-bold text-dark">Full Stack Applications</h3>
            <p className="text-muted">
              Here are my 2 full-stack projects showcasing my front-end
              development skills with live hosting and custom domains.
            </p>
          </div>
          <ProjectGrid projects={fullStackProjects} />
        </div>

        {/* React/Next.js Projects Section */}
        <div className="mb-5">
          <div className="text-center mb-4">
            <h3 className="fw-bold text-dark">
              React,Next.js & TypeScript Showcases
            </h3>
            <p className="text-muted">
              Additional projects demonstrating React fundamentals, Next.js
              features, and modern styling with CSS modules and Tailwind CSS.
            </p>
          </div>
          <ProjectGrid projects={reactNextProjects} />
        </div>

        <PortfolioCallToAction />
      </div>

      <style jsx>{`
        .project-card {
          transition: all 0.3s ease;
          border: none;
        }

        .project-card:hover {
          transform: translateY(-10px);
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.15) !important;
        }

        .project-card:hover .project-overlay {
          opacity: 1 !important;
          background: rgba(0, 0, 0, 0.8);
        }

        .project-card:hover .project-image {
          transform: scale(1.05);
        }

        .project-image-container {
          overflow: hidden;
        }

        .badge {
          font-size: 0.75rem;
        }

        @media (max-width: 768px) {
          .project-card:hover {
            transform: none;
          }

          .project-overlay {
            opacity: 1 !important;
            background: linear-gradient(
              to top,
              rgba(0, 0, 0, 0.8),
              transparent
            ) !important;
            align-items: flex-end !important;
            padding-bottom: 1rem;
          }
        }
      `}</style>
    </section>
  );
}
