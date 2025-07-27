"use client";
import PortfolioHeader from "./PortfolioHeader";
import ProjectGrid from "./ProjectGrid";
import PortfolioCallToAction from "./PortfolioCallToAction";
import { projectsData } from "../../data/projectsData";

export default function Portfolio() {
  return (
    <section className="portfolio py-5 bg-light">
      <div className="container">
        <PortfolioHeader />
        <ProjectGrid projects={projectsData} />
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
