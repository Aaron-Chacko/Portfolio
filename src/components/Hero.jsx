import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import { motion } from "framer-motion";

function Hero() {
  return (
    <section className="min-h-screen bg-black text-white flex items-center justify-center relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute w-96 h-96 bg-blue-600/20 blur-3xl rounded-full top-20 left-20"></div>
      <div className="absolute w-96 h-96 bg-purple-600/20 blur-3xl rounded-full bottom-20 right-20"></div>

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 text-center px-6 max-w-4xl"
      >
        <p className="text-blue-400 font-semibold tracking-wider uppercase mb-4">
          AI Systems & Full-Stack Developer
        </p>

        <h1 className="text-7xl md:text-8xl font-extrabold mb-6 bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
          Aaron Chacko
        </h1>

        <p className="text-xl md:text-2xl text-gray-300 mb-6">
          Building intelligent systems, full-stack applications,
          and AI-powered user experiences.
        </p>

        <div className="flex flex-wrap justify-center gap-3 mb-8">
          <span className="px-4 py-2 bg-gray-900 border border-gray-800 rounded-full">
            Samsung PRISM
          </span>

          <span className="px-4 py-2 bg-gray-900 border border-gray-800 rounded-full">
            Full-Stack Developer
          </span>

          <span className="px-4 py-2 bg-gray-900 border border-gray-800 rounded-full">
            AI Systems
          </span>
        </div>

        <div className="flex flex-wrap justify-center gap-4">
          <a
            href="#projects"
            className="bg-blue-600 hover:bg-blue-700 px-8 py-3 rounded-xl font-medium transition"
          >
            View Projects
          </a>

          <a
            href="/resume.pdf"
            target="_blank"
            rel="noreferrer"
            className="border border-gray-700 hover:bg-gray-900 px-8 py-3 rounded-xl font-medium transition"
          >
            Download Resume
          </a>
        </div>

        <div className="mt-8">
          <p className="text-green-400 mb-4">
            🟢 Open to Internships & Software Engineering Opportunities
          </p>

          <div className="flex justify-center gap-6 text-2xl text-gray-400">
            <a
              href="https://github.com/Aaron-Chacko"
              target="_blank"
              rel="noreferrer"
              className="hover:text-white transition"
            >
              <FaGithub />
            </a>

            <a
              href="https://www.linkedin.com/in/aaron-chacko/"
              target="_blank"
              rel="noreferrer"
              className="hover:text-blue-400 transition"
            >
              <FaLinkedin />
            </a>

            <a
              href="mailto:aaronchacko05@gmail.com"
              className="hover:text-red-400 transition"
            >
              <FaEnvelope />
            </a>
          </div>
        </div>
      </motion.div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-gray-500 animate-bounce">
        ↓ Scroll to Explore
      </div>
    </section>
  );
}

export default Hero;
