function Navbar() {
  return (
    <nav className="fixed top-0 w-full bg-black/80 backdrop-blur-md border-b border-gray-800 z-50">
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        <h1 className="text-xl font-bold text-white">
          Aaron Chacko
        </h1>

        <ul className="flex gap-8 text-gray-300">
          <li><a href="#about">About</a></li>
          <li><a href="#experience">Experience</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;