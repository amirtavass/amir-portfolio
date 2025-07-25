export default function Contact() {
  return (
    <section id="contact" className="contact text-bg-dark bg-gradient py-5">
      <div className="container">
        <div className="row">
          <div className="col-md-8 offset-md-2">
            <div className="text-center mb-5">
              <h4 className="text-uppercase fw-bold text-primary">Contact</h4>
              <hr className="w-25 mx-auto" />
              <h2 className="mb-4">I&apos;d love to hear from you.</h2>
              <p className="lead">
                If you have any questions or would like to work together, please
                contact me with the form below.
              </p>
            </div>

            <form>
              <div className="mb-5">
                <input
                  type="text"
                  className="form-control bg-transparent border-top-0 border-start-0 border-end-0 rounded-0 border-light text-white fs-5"
                  name="name"
                  placeholder="Name"
                  style={{
                    borderBottomWidth: "2px",
                    fontSize: "1.1rem",
                    padding: "15px 5px",
                  }}
                />
              </div>
              <div className="mb-5">
                <input
                  type="email"
                  className="form-control bg-transparent border-top-0 border-start-0 border-end-0 rounded-0 border-light text-white fs-5"
                  name="email"
                  placeholder="Email"
                  style={{
                    borderBottomWidth: "2px",
                    fontSize: "1.1rem",
                    padding: "15px 5px",
                  }}
                />
              </div>
              <div className="mb-5">
                <textarea
                  className="form-control bg-transparent border-top-0 border-start-0 border-end-0 rounded-0 border-light text-white fs-5"
                  name="message"
                  placeholder="Message"
                  rows="4"
                  style={{
                    borderBottomWidth: "2px",
                    fontSize: "1.1rem",
                    padding: "8px 5px",
                    resize: "vertical",
                  }}
                ></textarea>
              </div>
              <div className="mb-5 d-grid">
                <button
                  type="submit"
                  className="btn btn-primary btn-lg fs-5 py-3"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>

        <hr className="border-light border-2 my-4" style={{ opacity: 0.3 }} />

        <div className="d-flex mt-5">
          <p className="flex-grow-1">
            Copyright &copy; 2025 | Amirreza Tavassoli
          </p>
          <div className="hstack gap-3">
            <a className="text-decoration-none" href="#">
              <i className="fab fa-twitter fa-2x text-white"></i>
            </a>
            <a className="text-decoration-none" href="#">
              <i className="fab fa-instagram fa-2x text-white"></i>
            </a>
            <a className="text-decoration-none" href="#">
              <i className="fab fa-linkedin fa-2x text-white"></i>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
