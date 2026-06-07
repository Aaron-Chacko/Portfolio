import { motion } from "framer-motion";

function Skills() {
  const skills = [
    { name: "C++", size: "text-2xl" },
    { name: "React", size: "text-2xl" },
    { name: "AI & ML", size: "text-3xl" },
    { name: "Full-Stack", size: "text-3xl" },

    { name: "PyTorch", size: "text-xl" },
    { name: "Python", size: "text-xl" },
    { name: "Flask", size: "text-xl" },
    { name: "Node.js", size: "text-xl" },
    { name: "MySQL", size: "text-xl" },

    { name: "Vision Transformers", size: "text-lg" },
    { name: "BLIP", size: "text-lg" },
    { name: "Qwen", size: "text-lg" },
    { name: "SQLite", size: "text-lg" },
    { name: "Postman", size: "text-lg" },
    { name: "Linux", size: "text-lg" },
    { name: "REST APIs", size: "text-lg" },
    { name: "Java", size: "text-lg" },
    { name: "JavaScript", size: "text-lg" },
  ];

  return (
    <section
      id="skills"
      className="bg-black text-white py-24 px-6"
    >
      <motion.div
        className="max-w-6xl mx-auto"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >

        <div className="mb-16 text-center">
          <p className="text-blue-400 uppercase tracking-widest mb-2">
            Expertise
          </p>

          <h2 className="text-4xl font-bold">
            Technologies I Work With
          </h2>
        </div>

        <div className="flex flex-wrap justify-center gap-6">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              animate={{
                y: [0, -8, 0],
              }}
              transition={{
                duration: 3 + (index % 3),
                repeat: Infinity,
                ease: "easeInOut",
              }}
              whileHover={{
                scale: 1.1,
              }}
              className={`
                ${skill.size}
                bg-zinc-900
                border
                border-zinc-800
                rounded-full
                px-6
                py-3
                cursor-pointer
                transition-all
                hover:border-blue-500
                hover:shadow-[0_0_25px_rgba(59,130,246,0.25)]
              `}
            >
              {skill.name}
            </motion.div>
          ))}
        </div>

      </motion.div>
    </section>
  );
}

export default Skills;