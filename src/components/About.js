export default function About() {
  const stack = [
    "TypeScript",
    "React",
    "Next.js",
    "Node.js",
    ".NET",
    "PostgreSQL",
    "MongoDB",
    "AWS",
    "Azure",
    "Docker",
  ];

  const highlights = [
    "MSc Software Engineering — Distinction",
    "Full-Stack Developer · Manchester, UK",
  ];

  return (
    <section
      id="about"
      className="relative bg-[#0d0d0d] border-t border-white/5 px-6 md:px-20 py-24 md:py-32"
    >
      <div className="max-w-5xl mx-auto">
        <p className="font-mono text-white/30 text-xs tracking-[0.3em] uppercase mb-6">
          About Me
        </p>
        <h2 className="text-4xl md:text-6xl font-bold text-white tracking-tighter leading-[1.05] mb-12">
          Full-stack developer with a{" "}
          <span className="text-white/40">product mindset.</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
          {/* Narrative */}
          <div className="md:col-span-7 text-gray-400 text-lg leading-relaxed space-y-5">
            <p>
              I'm Amirreza Tavassoli — a full-stack developer based in
              Manchester, UK, and an MSc Software Engineering graduate with
              Distinction from the University of Greater Manchester.
            </p>
            <p>
              I build products end-to-end with TypeScript, React and Next.js on
              the front-end, and Node.js and .NET on the back-end — backed by
              PostgreSQL, Azure SQL and MongoDB, deployed to AWS and Azure with
              automated testing and CI/CD.
            </p>
            <p>
              I use AI-assisted tools (Claude, OpenCode) daily to ship faster
              and more reliably, from cloud migrations to pixel-perfect
              interfaces.
            </p>
          </div>

          {/* Stack & highlights */}
          <div className="md:col-span-5">
            <h4 className="text-white text-xs uppercase tracking-[0.25em] mb-5">
              Stack
            </h4>
            <div className="flex flex-wrap gap-2.5">
              {stack.map((tech) => (
                <span
                  key={tech}
                  className="px-4 py-2 bg-white/5 border border-white/10 text-xs rounded-full text-gray-300"
                >
                  {tech}
                </span>
              ))}
            </div>

            <div className="mt-10 space-y-3">
              {highlights.map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-3 text-sm text-gray-400"
                >
                  <span className="h-px w-6 bg-white/30 flex-shrink-0" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
