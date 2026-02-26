import "./App.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Skills from "./components/Skilles";
import Contact from "./components/Contact";
import About from "./components/About";
import { Analytics } from "@vercel/analytics/react";

function App() {
  return (
    <>
    <div className="fixed inset-0 -z-10">
  <div className="absolute top-0 left-0 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl"></div>
  <div className="absolute bottom-0 right-0 w-96 h-96 bg-cyan-400/20 rounded-full blur-3xl"></div>
</div>
      <Navbar />
      <Hero />
      <About />
      <Projects />

      <Skills />
      <Contact />
      <Analytics />
   
    </>
  );
}

export default App;
