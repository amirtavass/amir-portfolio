"use client";
import Link from "next/link";
import Image from "next/image";

export default function Portfolio() {
  const projects = [
    {
      id: 1,
      title: "GitHub Finder",
      description:
        "A React application to search and explore GitHub users and repositories with a clean, responsive interface.",
      image: "/images/site-3.png",
      liveUrl: "https://github-finder-kappa-virid.vercel.app/",
      detailsUrl: "/projects/github-finder",
      technologies: ["React", "GitHub API", "Bootstrap", "JavaScript"],
      features: [
        "User Search",
        "Repository Exploration",
        "Profile Analytics",
        "Responsive Design",
      ],
    },
    {
      id: 2,
      title: "MovieMate",
      description:
        "A movie discovery app built with React, featuring search functionality and detailed movie information.",
      image: "/images/site-2.png",
      liveUrl: "https://movie-mate-brown.vercel.app/",
      detailsUrl: "/projects/moviemate",
      technologies: ["React", "Movie API", "CSS3", "JavaScript"],
      features: ["Movie Search", "Detailed Info", "Watchlist", "Rating System"],
    },
    {
      id: 3,
      title: "Personal Portfolio",
      description:
        "My personal portfolio website built with Next.js, showcasing my projects and skills as a developer.",
      image: "/images/site-1.png",
      liveUrl: "https://amirtavassoli.ir",
      detailsUrl: "/projects/amirtavassoli",
      technologies: ["Next.js", "React", "Bootstrap", "CSS3"],
      features: [
        "Responsive Design",
        "Modern UI",
        "Project Showcase",
        "Contact Form",
      ],
    },
  ];

  return (
    <section className="portfolio py-5 bg-light">
      <div className="container">
        <div className="text-center mb-5">
          <h4 className="text-uppercase fw-bold text-primary">Portfolio</h4>
          <hr className="w-25 mx-auto" />
          <h2 className="mb-4">Check Out My Work</h2>
          <p className="lead">
            Here are my key projects showcasing my development skills with live
            demos.
          </p>
        </div>

        <div className="row g-4">
          {projects.map((project) => (
            <div key={project.id} className="col-lg-4 col-md-6 mb-4">
              <div className="project-card h-100 shadow-lg rounded-4 overflow-hidden bg-white">
                {/* Project Image */}
                <div className="project-image-container position-relative">
                  <Image
                    src={project.image}
                    alt={`${project.title} screenshot`}
                    width={400}
                    height={250}
                    className="project-image w-100"
                    style={{
                      height: "250px",
                      objectFit: "cover",
                      transition: "transform 0.3s ease",
                    }}
                  />
                  <div className="project-overlay position-absolute top-0 start-0 w-100 h-100 d-flex align-items-center justify-content-center opacity-0">
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-light btn-lg rounded-pill px-4"
                    >
                      <i className="fas fa-external-link-alt me-2"></i>
                      Live Demo
                    </a>
                  </div>
                </div>

                {/* Project Content */}
                <div className="p-4">
                  <h5 className="fw-bold mb-3 text-dark">{project.title}</h5>
                  <p className="text-muted mb-3 small">{project.description}</p>

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
                    <h6 className="small fw-bold text-dark mb-2">
                      Key Features:
                    </h6>
                    <ul className="list-unstyled small text-muted mb-0">
                      {project.features.map((feature, index) => (
                        <li key={index} className="mb-1">
                          <i className="fas fa-check text-success me-2"></i>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Action Button */}
                  <div>
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-primary w-100"
                    >
                      <i className="fas fa-external-link-alt me-2"></i>
                      View Live Demo
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-5 pt-4">
          <h4 className="mb-3">Interested in working together?</h4>
          <p className="text-muted mb-4">
            I&apos;m always open to discussing new opportunities and exciting
            projects.
          </p>
          <div className="d-flex gap-3 justify-content-center flex-wrap">
            <a href="#contact" className="btn btn-primary btn-lg px-4">
              <i className="fas fa-envelope me-2"></i>
              Get In Touch
            </a>
            <a href="#" className="btn btn-outline-primary btn-lg px-4">
              <i className="fas fa-download me-2"></i>
              Download CV
            </a>
          </div>
        </div>
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
