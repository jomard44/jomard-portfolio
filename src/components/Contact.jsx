const Contact = () => {
  return (
    <section id="contact" className="py-20 px-4 text-center">
      <h2 className="text-3xl font-bold mb-6">Contact</h2>

      <p className="text-gray-700/70 mb-4">
        Feel free to reach out for opportunities or collaborations.
      </p>

      <div className="space-y-2">
        <p>Email: jomardali44@gmail.com</p>
        <p>
          LinkedIn:{" "}
          <a
            href="https://www.linkedin.com/in/jomard-ali-9912b81b2/"
            target="_blank"
            className="text-blue-400 underline"
          >
            linkedin.com/in/jomard ali
          </a>
        </p>
        <p>
          GitHub:{" "}
          <a
            href="https://github.com/jomard44"
            target="_blank"
            className="text-blue-400 underline"
          >
            github.com/jomard44
          </a>
        </p>
      </div>
    </section>
  );
};

export default Contact;