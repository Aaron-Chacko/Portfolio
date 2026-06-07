import { motion } from "framer-motion";

function Projects() {
  const projects = [
    {
      title: "GitHub Repository Analytics Platform",
      description:
        "Cloud-hosted analytics platform that ingests live GitHub API data and evaluates repository health using normalized scoring, contributor analytics, commit velocity, and language insights.",
      tech: ["Flask", "GitHub API", "Matplotlib"],
      github:
        "https://github.com/Aaron-Chacko/GitHub-Project-Intelligence-Tool",
      demo: "https://github-project-intelligence-tool.onrender.com/",
    },
    {
      title: "Non-Contact Friction Simulator",
      description:
        "Interactive physics simulator modeling drag and magnetic interaction forces with real-time visualization and configurable system parameters.",
      tech: ["React", "Chart.js", "Physics"],
      github: "https://github.com/Aaron-Chacko/non-contact-friction-simulation",
      demo: "https://friction-sim.vercel.app/",
    },
    {
      title: "Text-Based Adventure Game",
      description:
        "Branching narrative game engine with SQLite-powered persistence, dynamic decision trees, and multiple save slots.",
      tech: ["Java", "SQLite"],
      github: "https://github.com/Aaron-Chacko/Text-Based-Adventure-Game",
      demo: null,
    },
  ];

  return (
    <section id="projects" className="bg-black text-white py-24 px-6">
      <motion.div
        className="max-w-6xl mx-auto"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <div className="mb-16">
          <p className="text-blue-400 uppercase tracking-widest mb-2">
            Portfolio
          </p>

          <h2 className="text-4xl font-bold">Featured Projects</h2>
        </div>

        {/* Featured Project */}
        <div
          className="
            bg-gradient-to-br
            from-zinc-900
            to-zinc-950
            border border-blue-500/20
            rounded-3xl
            p-10
            mb-10
            shadow-[0_0_40px_rgba(59,130,246,0.1)]
            "
        >
          <p className="text-blue-400 mb-3">Featured Project</p>

          <h3 className="text-3xl font-bold mb-4">
            Personalized Image Ranking System
          </h3>

          <p className="text-gray-400 mb-6">
            Multimodal AI system that ranks personal gallery images using Vision
            Transformers, BLIP-generated captions, event clustering, location
            metadata, and LLM-powered relevance scoring to deliver personalized
            content discovery.
          </p>

          <div className="flex flex-wrap gap-3">
            <span className="bg-zinc-800 px-3 py-1 rounded-full">
              Vision Transformer
            </span>

            <span className="bg-zinc-800 px-3 py-1 rounded-full">BLIP</span>

            <span className="bg-zinc-800 px-3 py-1 rounded-full">Qwen</span>

            <span className="bg-zinc-800 px-3 py-1 rounded-full">PyTorch</span>
          </div>
        </div>

        {/* Other Projects */}
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="
                bg-zinc-900
                border border-zinc-800
                rounded-2xl
                p-6
                transition-all
                duration-300
                hover:-translate-y-2
                hover:border-blue-500/50
                hover:shadow-[0_0_30px_rgba(59,130,246,0.15)]
                "
            >
              <h3 className="text-2xl font-semibold mb-4">{project.title}</h3>

              <p className="text-gray-400 mb-5">{project.description}</p>

              <div className="flex flex-wrap gap-2 mb-6">
                {project.tech.map((item) => (
                  <span
                    key={item}
                    className="
                    bg-zinc-800
                    text-gray-300
                    px-3
                    py-1
                    rounded-full
                    text-sm
                    border
                    border-zinc-700
                    "
                  >
                    {item}
                  </span>
                ))}
              </div>

              <div className="flex gap-4">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noreferrer"
                  className="text-blue-400 hover:text-blue-300"
                >
                  GitHub
                </a>

                {project.demo && (
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noreferrer"
                    className="text-purple-400 hover:text-purple-300"
                  >
                    Live Demo
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}

export default Projects;
