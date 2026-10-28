import Nav from './components/Nav';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Reveal from './components/Reveal';


  function App() {
    return (
      <div id="top" className="min-h-screen text-ink font-body">
        <Nav />
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Skills />
        <Contact />
      </div>
    );
  }

export default App;
