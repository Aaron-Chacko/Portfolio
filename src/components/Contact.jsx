import { FaGithub, FaLinkedin, FaEnvelope, FaFileAlt } from "react-icons/fa";
import { motion } from "framer-motion";

function Contact() {
  return (
    <section
      id="contact"
      className="bg-black text-white py-32 px-6"
    >
      <motion.div
        className="max-w-4xl mx-auto text-center"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >

        <p className="text-blue-400 uppercase tracking-widest mb-3">
          Contact
        </p>

        <h2 className="text-5xl font-bold mb-6">
          Let's Connect 
        </h2>

        <p className="text-gray-400 text-lg max-w-2xl mx-auto mb-12">
          Whether it's software engineering, AI research,
          full-stack development, or an exciting project,
          I'd love to connect.
        </p>

        <div className="flex flex-wrap justify-center gap-4">

          <a
            href="mailto:aaronchacko05@gmail.com"
            className="bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-xl flex items-center gap-2 transition"
          >
            <FaEnvelope />
            Email Me
          </a>

          <a
            href="https://www.linkedin.com/in/aaron-chacko/"
            target="_blank"
            rel="noreferrer"
            className="border border-zinc-700 hover:border-blue-500 px-6 py-3 rounded-xl flex items-center gap-2 transition"
          >
            <FaLinkedin />
            LinkedIn
          </a>

          <a
            href="https://github.com/Aaron-Chacko"
            target="_blank"
            rel="noreferrer"
            className="border border-zinc-700 hover:border-blue-500 px-6 py-3 rounded-xl flex items-center gap-2 transition"
          >
            <FaGithub />
            GitHub
          </a>

          <a
            href="/resume.pdf"
            target="_blank"
            rel="noreferrer"
            className="border border-zinc-700 hover:border-blue-500 px-6 py-3 rounded-xl flex items-center gap-2 transition"
          >
            <FaFileAlt />
            Resume
          </a>

        </div>

      </motion.div>
    </section>
  );
}

export default Contact;