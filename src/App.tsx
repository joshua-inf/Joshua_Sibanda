import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import Hero from "./components/Hero/Hero";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import BlogSection from "./components/BlogSection";
import BlogList from "./components/BlogList";
import BlogPostDetail from "./components/BlogPostDetail";
import ProjectList from "./components/ProjectList";
import ProjectDetail from "./components/ProjectDetail";
import "./index.css";
import Loader from "./components/Loader";

const App: React.FC = () => {
  const [loading, setLoading] = useState(true);
  const [currentPath, setCurrentPath] = useState(() => window.location.hash || "#home");

  useEffect(() => {
    // Simulate loading delay (or use real data fetching)
    const timer = setTimeout(() => setLoading(false), 2500);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (loading) return;

    const handleHashChange = () => {
      const hash = window.location.hash || "#home";
      setCurrentPath(hash);

      if (hash.startsWith("#/blog") || hash.startsWith("#/projects")) {
        window.scrollTo(0, 0);
      } else if (hash.startsWith("#") && !hash.includes("/")) {
        const id = hash.substring(1);
        // Add minor timeout to allow DOM to render if navigating from a different view
        setTimeout(() => {
          const targetId = id === "home" ? "home" : id;
          const element = document.getElementById(targetId);
          if (element) {
            element.scrollIntoView({ behavior: "smooth" });
          }
        }, 100);
      }
    };

    window.addEventListener("hashchange", handleHashChange);
    // Execute on initial render once loader completes
    handleHashChange();

    return () => window.removeEventListener("hashchange", handleHashChange);
  }, [loading]);

  const renderContent = () => {
    if (currentPath === "#/blog") {
      return <BlogList />;
    }

    if (currentPath.startsWith("#/blog/")) {
      const slug = currentPath.replace("#/blog/", "");
      return <BlogPostDetail slug={slug} />;
    }

    if (currentPath === "#/projects") {
      return <ProjectList />;
    }

    if (currentPath.startsWith("#/projects/")) {
      const slug = currentPath.replace("#/projects/", "");
      return <ProjectDetail slug={slug} />;
    }

    return (
      <>
        <Hero />
        <Skills />
        <Projects />
        <BlogSection />
        <Contact />
      </>
    );
  };

  return (
    <div className="App">
      {loading ? (
        <Loader />
      ) : (
        <>
          <Header />
          <main>{renderContent()}</main>
          <footer className="bg-slate-800 border-t border-slate-700 py-6">
            <div className="container text-center">
              <p className="text-slate-400">
                &copy; 2026 Joshua Sibanda. All rights reserved.
              </p>
            </div>
          </footer>
        </>
      )}
    </div>
  );
};

export default App;
