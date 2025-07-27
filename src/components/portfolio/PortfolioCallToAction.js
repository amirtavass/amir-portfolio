"use client";

export default function PortfolioCallToAction() {
  return (
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
  );
}
