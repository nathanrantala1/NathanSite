import './App.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Section from './components/Section';
import DemoReel from './components/DemoReel';
import Bio from './components/Bio';
import Works from './components/Works';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Section id="demo" title="Demo Reel">
        <DemoReel />
      </Section>
      <Section id="bio" title="Bio" fullWidth>
        <Bio />
      </Section>
      <Section id="works" title="Selected Works">
        <Works />
      </Section>
      <Section id="contact" title="Contact">
        <Contact />
      </Section>
      <Footer />
    </>
  );
}

export default App;
