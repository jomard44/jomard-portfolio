const Hero = () => {
  return (
    <section className="text-center py-24 px-4 max-w-4xl mx-auto">
     <img
  src="/profile.jpeg"
  className="w-48 h-48 rounded-full mx-auto object-cover border-4 border-slate-700 mb-6"
/>

      <h2 className="text-4xl md:text-5xl font-bold mb-4">
        Hi, I’m Jomard
      </h2>

      <p className="text-xl text-gray-700/70 mb-4">
        Full Stack Developer
      </p>

      <p className="text-gray-700/70 mb-6">
        I build web applications using React, Node.js, and MongoDB. 
        I enjoy solving problems and turning ideas into real applications.
      </p>

      <div className="flex justify-center gap-4">
        <a
          href="#projects"
          className="bg-blue-600 px-6 py-3 rounded-lg hover:bg-blue-700"
        >
          View Projects
        </a>

        <a
          href="https://github.com/jomard44"
          target="_blank"
          className="border border-gray-600 px-6 py-3 rounded-lg hover:bg-slate-800 hover:text-white"
        >
          GitHub
        </a>
      </div>
    </section>
  );
};

export default Hero;