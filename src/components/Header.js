"use client";

import { useEffect } from "react";

export default function Header() {
  useEffect(() => {
    // Typing effect
    function runTypingEffect() {
      let text = "I am Amirreza Tavassoli.";
      let typingElement = document.getElementById("typing-text");
      let typingDelay = 130;

      function typeText(text, typingElement, delay) {
        for (let i = 0; i < text.length; i++) {
          setTimeout(() => {
            typingElement.textContent += text.charAt(i);
          }, delay * i);
        }
      }

      if (typingElement) {
        typeText(text, typingElement, typingDelay);
      }
    }

    runTypingEffect();
  }, []);

  return (
    <header className="header vh-100 text-center position-relative">
      <div className="text-container position-relative d-flex flex-column justify-content-center align-items-center h-100">
        <h5 className="text-primary fs-3 fw-bold text-uppercase">
          Hello World!
        </h5>
        <h1 id="typing-text" className="display-1 fw-bold text-white"></h1>
        <p className="roles text-white text-uppercase fs-4">
          <span>Front End Developer</span>
        </p>
        <a href="#about" className="btn btn-outline-light btn-lg mt-3">
          <div className="d-flex">
            <div className="me-3">
              <i className="fas fa-chevron-down"></i>
            </div>
            <div className="text-start">
              <span>More About Me</span>
            </div>
          </div>
        </a>
        <div className="social d-flex gap-3 position-absolute">
          <a href="#">
            <i className="fab fa-twitter fa-3x text-white"></i>
          </a>
          <a href="#">
            <i className="fab fa-instagram fa-3x text-white"></i>
          </a>
          <a href="#">
            <i className="fab fa-linkedin fa-3x text-white"></i>
          </a>
          <a href="#">
            <i className="fab fa-github fa-3x text-white"></i>
          </a>
        </div>
      </div>
    </header>
  );
}
