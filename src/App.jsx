import React from 'react';
import ReactDOM from 'react-dom';
import { HeroSection } from './components/HeroSection';
import Navbar from './components/Navbar';

const App = () => {
  return (
    <main className="overflow-x-hidden bg-black tracking-tighter text-gray-200 antialiased">
      <Navbar />
      <HeroSection />
    </main>
  );
};

export default App;
