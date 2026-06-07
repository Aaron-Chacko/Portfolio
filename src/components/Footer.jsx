function Footer() {
  return (
    <footer className="bg-black border-t border-zinc-800 py-8">
      <div className="max-w-6xl mx-auto px-6 text-center text-gray-500">
        <p>
          © {new Date().getFullYear()} Aaron Chacko. Built with React,
          Tailwind CSS, and Framer Motion.
        </p>
      </div>
    </footer>
  );
}

export default Footer;