import { useState } from "react";
import Navbar from "./components/layout/Navbar";
import Hero from "./components/Hero";
import About from "./components/about";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/layout/Footer";

function App() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className={darkMode ? "dark" : ""}>
      <div className=" bg-gray-100 dark:bg-gray-900 min-h-screen">
        <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
        <Hero />
        <About />
        <Projects />
        <Contact />
        <Footer />
      </div>
    </div>
  );
}

export default App;
