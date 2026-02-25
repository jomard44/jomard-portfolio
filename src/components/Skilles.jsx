const Skills = () => {
  return (
    <section id="skills" className="py-20 px-4 bg-gray-300/30 ">
      <h2 className="text-3xl font-bold mb-10 text-center">Skills</h2>

      <div className="flex flex-wrap justify-center gap-4 max-w-3xl mx-auto">
        {[
          "JavaScript",
          "React",
          "Node.js",
          "Express",
          "MongoDB",
          "SQL",
          "REST APIs",
          "Git"
        ].map((skill) => (
          <span
            key={skill}
            className="bg-gray-300/30 px-4 py-2 rounded-lg"
          >
            {skill}
          </span>
        ))}
      </div>
    </section>
  );
};

export default Skills;