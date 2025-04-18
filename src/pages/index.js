import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Experience from '../components/Experience';
import Projects from '../components/Projects';
import About from '../components/About';
import Contact from '../components/Contact';
export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Experience />
      <Projects />
      <About />
      <Contact />
      {/* Other sections like <Hero />, <Projects /> etc. */}
    </>
  );
}
