const Hero = () => {
  return (
    <section className="text-center py-20 px-4">
      <h2 className="text-4xl font-bold mb-4">
        Full Stack Developer
      </h2>
      <p className="text-gray-700/70 max-w-xl mx-auto mb-6">
        I build web applications using React, Node.js, Express, and MongoDB.
      </p>
      <a
        href="#projects"
        className="bg-blue-600 px-6 py-3 rounded-lg hover:bg-blue-700"
      >
        View Projects
      </a>
    </section>
  );
};

export default Hero;