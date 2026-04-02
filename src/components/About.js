import Image from "next/image";

export default function About() {
  return (
    <section id="about" className="about py-5 bg-white">
      <div className="container py-md-5">
        {/* Section Header */}
        <div className="text-center mb-5">
          <h6
            className="text-uppercase fw-bold text-primary"
            style={{ letterSpacing: "2px" }}
          >
            About Me
          </h6>
          <h2 className="display-6 fw-bold mb-3">Let Me Introduce Myself</h2>
          <div
            className="mx-auto bg-primary rounded"
            style={{ width: "60px", height: "4px" }}
          ></div>
        </div>

        <div className="row align-items-center gx-lg-5 mt-4">
          {/* Left Column: Styled Image Treatment */}
          <div className="col-lg-5 mb-5 mb-lg-0">
            <div
              className="position-relative mx-auto"
              style={{ maxWidth: "400px" }}
            >
              {/* Decorative background block */}
              <div
                className="position-absolute bg-light rounded-4 w-100 h-100"
                style={{
                  top: "20px",
                  left: "-20px",
                  zIndex: 0,
                  border: "2px solid #e9ecef",
                }}
              ></div>

              {/* Main Image */}
              <div className="rounded-4 overflow-hidden shadow-lg position-relative z-1 bg-white p-2">
                <Image
                  src="/images/profile.jpg"
                  alt="Amirreza Tavassoli"
                  width={400}
                  height={450}
                  className="img-fluid rounded-3 w-100 object-fit-cover"
                  style={{ minHeight: "450px" }}
                />
              </div>
            </div>
          </div>

          {/* Right Column: Chunked Bio */}
          <div className="col-lg-7">
            <h3 className="fw-bold mb-3 text-dark">
              Front-End Developer & <br className="d-none d-md-block" />
              Software Engineering Student
            </h3>

            <p className="lead text-muted mb-5 fs-5">
              I'm a self-taught developer based in Bolton, UK, passionate about
              transforming complex problems into elegant, intuitive web
              experiences.
            </p>

            {/* Journey Section */}
            <div className="d-flex mb-4">
              <div className="text-primary me-4 mt-1">
                <i className="fas fa-laptop-code fa-2x"></i>
              </div>
              <div>
                <h5 className="fw-bold text-dark mb-2">My Journey</h5>
                <p className="text-secondary" style={{ lineHeight: "1.7" }}>
                  Starting with Java three years ago, I discovered my true
                  calling in web technologies. Today, I specialize in the React
                  ecosystem (Next.js, Redux) and use TypeScript to ensure
                  robust, type-safe development.
                </p>
              </div>
            </div>

            {/* Focus Section */}
            <div className="d-flex mb-4">
              <div className="text-primary me-4 mt-1">
                <i className="fas fa-layer-group fa-2x"></i>
              </div>
              <div>
                <h5 className="fw-bold text-dark mb-2">What I Do</h5>
                <p className="text-secondary" style={{ lineHeight: "1.7" }}>
                  From building seamless pizza ordering systems to dynamic movie
                  discovery apps, I leverage modern tools to create polished,
                  responsive interfaces that work flawlessly across all devices.
                </p>
              </div>
            </div>

            {/* Quick Info Pills */}
            <div className="d-flex flex-wrap gap-3 mt-4 pt-3 border-top">
              <span className="badge bg-light text-dark border px-3 py-2 rounded-pill shadow-sm fs-6 fw-normal">
                <i className="fas fa-map-marker-alt text-primary me-2"></i>{" "}
                Bolton, UK
              </span>
              <span className="badge bg-light text-dark border px-3 py-2 rounded-pill shadow-sm fs-6 fw-normal">
                <i className="fas fa-graduation-cap text-primary me-2"></i> MSc
                Student
              </span>
              <span className="badge bg-light text-dark border px-3 py-2 rounded-pill shadow-sm fs-6 fw-normal">
                <i className="fas fa-rocket text-primary me-2"></i> Open to Work
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
