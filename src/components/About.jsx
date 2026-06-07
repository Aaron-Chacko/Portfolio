function About() {
  return (
    <section
      id="about"
      className="bg-black text-white py-24 px-6"
    >
      <div className="max-w-6xl mx-auto">

        <h2 className="text-4xl font-bold mb-16">
          About Me
        </h2>

        <div className="grid md:grid-cols-2 gap-12 items-start">

          {/* Left Side */}
          <div>
            <p className="text-lg text-gray-300 leading-relaxed">
              I'm Aaron, a Computer Science student at SRM Institute of
              Science and Technology focused on building intelligent
              software systems.
            </p>

            <p className="text-lg text-gray-400 leading-relaxed mt-6">
              My work sits at the intersection of AI and full-stack
              engineering. From developing multimodal image retrieval
              pipelines at Samsung PRISM to building enterprise software
              and analytics tools, I enjoy transforming complex ideas
              into products that solve real-world problems.
            </p>

            <p className="text-lg text-gray-400 leading-relaxed mt-6">
              I'm particularly interested in machine learning, computer
              vision, backend systems, and bringing AI applications into
              production environments.
            </p>
          </div>

          {/* Right Side */}
          <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-8">
            <h3 className="text-xl font-semibold mb-6">
              Quick Facts
            </h3>

            <div className="space-y-4 text-gray-300">
              <p>🎓 SRM IST</p>
              <p>💼 3 Internships</p>
              <p>🤖 AI & Machine Learning</p>
              <p>🌐 Full-Stack Development</p>
              <p>📍 Chennai, India</p>
            </div>
          </div>

        </div>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-6 mt-20 text-center">

          <div>
            <h3 className="text-4xl font-bold text-blue-400">
              12K+
            </h3>
            <p className="text-gray-500 mt-2">
              Images Processed
            </p>
          </div>

          <div>
            <h3 className="text-4xl font-bold text-purple-400">
              3
            </h3>
            <p className="text-gray-500 mt-2">
              Internships
            </p>
          </div>

          <div>
            <h3 className="text-4xl font-bold text-cyan-400">
              AI + FS
            </h3>
            <p className="text-gray-500 mt-2">
              Core Focus
            </p>
          </div>

        </div>

      </div>
    </section>
  );
}

export default About;