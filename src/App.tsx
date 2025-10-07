import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import './index.css';

const App: React.FC = () => {
  return (
    <div className="App">
      <Header />
      <main>
        <Hero />
        <Skills />
        <Projects />
        <Contact />
      </main>
      <footer className="bg-slate-800 border-t border-slate-700 py-6">
        <div className="container text-center">
          <p className="text-slate-400">
            &copy; 2024 Joshua Sibanda. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default App;