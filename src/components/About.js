import Image from "next/image";

export default function About() {
  return (
    <section id="about" className="about bg-light py-5">
      <div className="container">
        <div className="text-center">
          <h4 className="text-uppercase fw-bold text-primary">About Me</h4>
          <hr className="w-25 mx-auto" />
          <h2 className="mb-4">Let Me Introduce Myself.</h2>
        </div>
        <div className="about-content d-flex gap-5 align-items-center h-100">
          <Image
            src="/images/profile.jpg"
            alt="Profile picture"
            width={200}
            height={200}
            className="about-img img-fluid rounded-circle"
            style={{ objectFit: "cover" }}
          />

          <p className="lead">
            I&apos;m a self-taught front-end developer currently living in
            Uk,Bolton and pursuing a Master&apos;s degree in Software
            Engineering, with a strong focus on building interactive and
            scalable web applications. My coding journey began three years ago
            with Java, and over time, I transitioned into web technologies like
            HTML, CSS, and JavaScript—where I discovered my passion for creating
            intuitive user experiences. These days, I specialize in React and
            Next.js, using component-based architecture to build modern,
            responsive interfaces. I work with TypeScript for type-safe
            development and Redux for robust state management in complex
            applications. I&apos;ve built projects using React Router with data
            loading, integrated external APIs for real-time data, and created
            seamless user flows—from pizza ordering systems to movie discovery
            apps. I leverage tools like Tailwind CSS and CSS Modules for
            styling, and I&apos;m comfortable managing both remote and UI state
            effectively. What drives me is turning ideas into polished,
            responsive user interfaces that work flawlessly across all devices.
            I&apos;m constantly exploring new technologies and best practices to
            improve both development efficiency and user satisfaction. I&apos;m
            eager to collaborate with teams that value clean code, thoughtful
            design, and continuous growth.
          </p>
        </div>
      </div>
    </section>
  );
}
