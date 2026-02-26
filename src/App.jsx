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
