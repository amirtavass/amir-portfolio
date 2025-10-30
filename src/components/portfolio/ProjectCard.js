"use client";
import Link from "next/link";

export default function ProjectCard({ project }) {
  return (
    <div className="col-lg-5 col-md-6 mb-4 d-flex">
      <div className="project-card w-100 shadow-lg rounded-4 overflow-hidden bg-white d-flex flex-column">
        {/* Project Image */}
        <div className="project-image-container position-relative">
          <img
            src={project.image}
            alt={`${project.title} screenshot`}
            className="project-image w-100"
            style={{
              height: "250px",
              objectFit: "cover",
              transition: "transform 0.3s ease",
            }}
          />
          <div className="project-overlay position-absolute top-0 start-0 w-100 h-100 d-flex align-items-center justify-content-center opacity-0">
            <div className="d-flex gap-2">
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-light btn-sm rounded-pill px-3"
              >
                <i className="fas fa-external-link-alt me-2"></i>
                Live Demo
              </a>
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-outline-light btn-sm rounded-pill px-3"
              >
                <i className="fab fa-github me-2"></i>
                GitHub
              </a>
            </div>
          </div>
        </div>

        {/* Project Content */}
        <div className="p-4 d-flex flex-column flex-grow-1">
          <h5 className="fw-bold mb-3 text-dark">{project.title}</h5>
          <p className="text-muted mb-3 small flex-grow-1">
            {project.description}
          </p>

          {/* Technologies */}
          <div className="mb-3">
            <div className="d-flex flex-wrap gap-1">
              {project.technologies.map((tech, index) => (
                <span
                  key={index}
                  className="badge bg-primary bg-opacity-10 text-primary px-2 py-1 rounded-pill small"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Features */}
          <div className="mb-4">
            <h6 className="small fw-bold text-dark mb-2">Key Features:</h6>
            <ul className="list-unstyled small text-muted mb-0">
              {project.features.map((feature, index) => (
                <li key={index} className="mb-1">
                  <i className="fas fa-check text-success me-2"></i>
                  {feature}
                </li>
              ))}
            </ul>
          </div>

          {/* Action Buttons */}
          <div className="mt-auto d-flex gap-2">
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary flex-fill"
            >
              <i className="fas fa-external-link-alt me-2"></i>
              Live Demo
            </a>
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-outline-primary flex-fill"
            >
              <i className="fab fa-github me-2"></i>
              GitHub
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
