const Navbar = () => {
  return (
    <nav className="flex justify-between items-center p-6 max-w-6xl mx-auto bg-gray-300/30 w-full">
      <h1 className="text-xl font-bold">Jomard</h1>
      <div className="space-x-6 text-gray-700/70">
        <a href="#projects" className="hover:text-black">
          Projects
        </a>
        <a href="#skills" className="hover:text-black">
          Skills
        </a>
        <a href="#contact" className="hover:text-black">
          Contact
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
