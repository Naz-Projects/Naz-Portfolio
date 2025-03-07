import React from 'react';
import { HeroSection } from './components/HeroSection';
import Navbar from './components/Navbar';
import About from './components/About';
import Projects from './components/Projects';
import Card from './components/Card';
import Skills from './components/Skills';
import AchievementShowcase from './components/AchievementShowcase';
import Testimonials from './components/Testimonials';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';
const App = () => {
  return (
    <main className="overflow-x-hidden bg-black tracking-tighter text-gray-200 antialiased">
      <Navbar />
      <HeroSection />
      <About />
      <Projects />
      <Card />
      <Skills />

      {/* <Testimonials /> */}
      <ContactForm />
      <Footer />
    </main>
  );
};

export default App;
