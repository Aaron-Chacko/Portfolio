import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <nav className="fixed top-0 w-full bg-black/80 backdrop-blur-md border-b border-zinc-800 z-50">
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        <h1 className="text-lg md:text-xl font-bold text-white">
          Aaron Chacko
        </h1>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-8 text-gray-300">
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#experience">Experience</a>
          </li>
          <li>
            <a href="#projects">Projects</a>
          </li>
          <li>
            <a href="#skills">Skills</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
          
        </ul>

        {/* Mobile Button */}
        <button
          className="md:hidden text-white text-xl"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-zinc-950 border-t border-zinc-800">
          <ul className="flex flex-col text-center py-4 gap-4 text-gray-300">
            <li>
              <a href="#about" onClick={() => setIsOpen(false)}>
                About
              </a>
            </li>

            <li>
              <a href="#experience" onClick={() => setIsOpen(false)}>
                Experience
              </a>
            </li>

            <li>
              <a href="#projects" onClick={() => setIsOpen(false)}>
                Projects
              </a>
            </li>

            <li>
              <a href="#skills" onClick={() => setIsOpen(false)}>
                Skills
              </a>
            </li>

            <li>
              <a href="#contact" onClick={() => setIsOpen(false)}>
                Contact
              </a>
            </li>

          </ul>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
