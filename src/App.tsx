import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import Hero from "./components/Hero/Hero";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import "./index.css";
import Loader from "./components/Loader";

const App: React.FC = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading delay (or use real data fetching)
    const timer = setTimeout(() => setLoading(false), 2500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="App">
      {loading ? (
        <Loader />
      ) : (
        <>
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
        </>
      )}
    </div>
  );
};

export default App;
