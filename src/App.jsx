import React, { useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Certificates from './components/Certificates'; // Add this import
import Contact from './components/Contact';
import Footer from './components/Footer';
// import FloatingSocial from './components/FloatingSocial'; // add new
import FloatingSocial from './components/FloatingSocial';

function App() {
  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -100px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('opacity-100', 'translate-y-0');
          entry.target.classList.remove('opacity-0', 'translate-y-10');
        }
      });
    }, observerOptions);

    document.querySelectorAll('.fade-up').forEach(el => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="bg-dark">
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      {/* <Certificates /> */}
       {/* Add this line */}
        {/* <FloatingSocial /> add new */}
        <FloatingSocial/>
      <Contact />
      <Footer />
    </div>
  );
}

export default App;