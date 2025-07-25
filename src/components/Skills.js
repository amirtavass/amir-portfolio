"use client";
import {
  FaHtml5,
  FaCss3Alt,
  FaReact,
  FaBootstrap,
  FaGitAlt,
} from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { TbBrandNextjs } from "react-icons/tb";
import { RiTailwindCssFill } from "react-icons/ri";

export default function Skills() {
  return (
    <section className="profile my-6">
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <h3 className="text-uppercase fw-bold">Profile</h3>
            <p>Key information about my background and professional journey</p>
            <ul className="list-group list-group-flush">
              <li className="list-group-item mb-3">
                <h5 className="text-transform">
                  <i className="fas fa-user text-primary"></i> Full Name:
                </h5>
                <p>Amirreza Tavassoli</p>
              </li>
              <li className="list-group-item mb-3">
                <h5 className="text-transform">
                  <i className="fas fa-calendar text-primary"></i> Birth Date:
                </h5>
                <p>August 10, 1997</p>
              </li>
              <li className="list-group-item mb-3">
                <h5 className="text-transform">
                  <i className="fas fa-building text-primary"></i> Current
                  Position:
                </h5>
                <p>Freelancer</p>
              </li>
              <li className="list-group-item mb-3">
                <h5 className="text-transform">
                  <i className="fas fa-home text-primary"></i> Website:
                </h5>
                <p>amirtavassoli.ir</p>
              </li>
              <li className="list-group-item mb-3">
                <h5 className="text-transform">
                  <i className="fas fa-envelope text-primary"></i> Email:
                </h5>
                <p>amirtavass62@gmail.com</p>
              </li>
            </ul>
          </div>

          <div className="col-md-6">
            <h3 className="text-uppercase fw-bold">Skills & Technologies</h3>
            <p>
              Modern tools and frameworks I use to create exceptional web
              experiences
            </p>

            <div className="row g-3">
              <div className="col-6">
                <div className="skill-item p-3 border rounded text-center h-100 bg-white">
                  <FaHtml5 className="text-danger mb-2" size={40} />
                  <h6 className="mb-0">HTML5</h6>
                  <small className="text-muted">Semantic & Accessible</small>
                </div>
              </div>

              <div className="col-6">
                <div className="skill-item p-3 border rounded text-center h-100 bg-white">
                  <FaCss3Alt className="text-primary mb-2" size={40} />
                  <h6 className="mb-0">CSS3</h6>
                  <small className="text-muted">Responsive Design</small>
                </div>
              </div>

              <div className="col-6">
                <div className="skill-item p-3 border rounded text-center h-100 bg-white">
                  <IoLogoJavascript className="text-warning mb-2" size={40} />
                  <h6 className="mb-0">JavaScript</h6>
                  <small className="text-muted">ES6+ & Modern JS</small>
                </div>
              </div>

              <div className="col-6">
                <div className="skill-item p-3 border rounded text-center h-100 bg-white">
                  <FaReact className="text-info mb-2" size={40} />
                  <h6 className="mb-0">React</h6>
                  <small className="text-muted">Hooks & Components</small>
                </div>
              </div>

              <div className="col-6">
                <div className="skill-item p-3 border rounded text-center h-100 bg-white">
                  <TbBrandNextjs className="text-dark mb-2" size={40} />
                  <h6 className="mb-0">Next.js</h6>
                  <small className="text-muted">Full-Stack React</small>
                </div>
              </div>

              <div className="col-6">
                <div className="skill-item p-3 border rounded text-center h-100 bg-white">
                  <FaBootstrap
                    style={{ color: "#7952b3" }}
                    className="mb-2"
                    size={40}
                  />
                  <h6 className="mb-0">Bootstrap</h6>
                  <small className="text-muted">UI Framework</small>
                </div>
              </div>

              <div className="col-6">
                <div className="skill-item p-3 border rounded text-center h-100 bg-white">
                  <FaGitAlt className="text-danger mb-2" size={40} />
                  <h6 className="mb-0">Git</h6>
                  <small className="text-muted">Version Control</small>
                </div>
              </div>

              <div className="col-6">
                <div className="skill-item p-3 border rounded text-center h-100 bg-white">
                  <RiTailwindCssFill className="text-success mb-2" size={40} />
                  <h6 className="mb-0">Tailwind</h6>
                  <small className="text-muted">Utility-First CSS</small>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row mt-5 text-center">
          <div className="col-12">
            <a
              href="#contact"
              className="btn btn-outline-dark btn-lg text-uppercase px-5 mx-3 my-2"
            >
              Contact Me
            </a>
            <a
              href="#"
              className="btn btn-dark btn-lg text-uppercase px-5 mx-3 my-2"
            >
              Download CV
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
