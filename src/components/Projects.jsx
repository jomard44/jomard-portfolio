const ProjectCard = ({ title, desc, tech, link, live }) => {
  return (
    <div className="bg-white/5 border border-white/10 backdrop-blur-md rounded-2xl p-6">
    <div className="bg-gray-300/30 p-6 rounded-xl">
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p className="text-gray-700/70 mb-3">{desc}</p>
      <p className="text-sm text-blue-500 mb-3">{tech}</p>
      <a href={link} target="_blank" className="underline hover:text-blue-400">
        View Code
      </a>
      {live && (
        <a
          href={live}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-blue-400 px-5 py-1 ml-4 rounded hover:text-white"
        >
          Live Demo
        </a>
      )}
    </div>
    </div>
  );
};

const Projects = () => {
  return (
    <section id="projects" className="py-20 px-4 max-w-6xl mx-auto">
      <h2 className="text-3xl font-bold mb-10 text-center">Projects</h2>

      <div className="grid md:grid-cols-2 gap-8">
        <ProjectCard
          title="Job Tracking App"
          desc="Full-stack application to manage job applications with authentication and CRUD operations."
          tech="React, Node.js, Express, MongoDB"
          link="https://github.com/jomard44/job-tracker-backend"
          live="https://trackmyjobapp.com"
        />

        <ProjectCard
          title="Gym Management System (In Progress)"
          desc="App for trainers to manage clients and workout programs."
          tech="React, Node.js, MongoDB"
          link="https://github.com/jomard44/Gym-Trainer-CRM"
        />

        <ProjectCard
          title="Weather App"
          desc="Weather application that fetches real-time data from an external API. Users can search for a city and view temperature, conditions, humidity, wind, and feels-like data."
          tech="React, API, JavaScript, CSS"
          link="https://github.com/jomard44/weather-app"
          live="https://weather-app-three-gules-32.vercel.app"
        />
      </div>
    </section>
  );
};

export default Projects;
