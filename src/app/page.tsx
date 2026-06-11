import React from "react";
import Hero from "../components/Hero/Hero";
import Skills from "../components/Skills";
import Projects from "../components/Projects";
import BlogSection from "../components/BlogSection";
import Contact from "../components/Contact";

export default function Home() {
  return (
    <>
      <Hero />
      <Skills />
      <Projects />
      <BlogSection />
      <Contact />
    </>
  );
}
