function Experience() {
  const experiences = [
    {
      year: "2025 - Present",
      company: "Samsung PRISM",
      role: "Research Intern",
      description:
        "Developing multimodal AI systems for personalized image retrieval using Vision Transformers, BLIP, and LLM-powered ranking pipelines.",
    },
    {
      year: "2025",
      company: "Tenet Networks",
      role: "Full-Stack Intern",
      description:
        "Built a MERN-based device management system with MySQL, REST APIs, activity logging, and reporting capabilities.",
    },
    {
      year: "2024",
      company: "Capital Maharaja Group",
      role: "Front-End Intern",
      description:
        "Converted Figma designs into a production-ready React platform with responsive UI and component-driven architecture.",
    },
  ];

  return (
    <section
      id="experience"
      className="bg-black text-white py-24 px-6"
    >
      <div className="max-w-5xl mx-auto">

        <h2 className="text-4xl font-bold mb-16">
          Experience
        </h2>

        <div className="relative border-l border-zinc-800 ml-4">

          {experiences.map((exp, index) => (
            <div
              key={index}
              className="mb-12 ml-8"
            >
              <div className="absolute w-4 h-4 bg-blue-500 rounded-full -left-2 mt-2"></div>

              <p className="text-blue-400 text-sm mb-2">
                {exp.year}
              </p>

              <h3 className="text-2xl font-semibold">
                {exp.company}
              </h3>

              <p className="text-gray-400 mb-3">
                {exp.role}
              </p>

              <p className="text-gray-500 leading-relaxed">
                {exp.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default Experience;