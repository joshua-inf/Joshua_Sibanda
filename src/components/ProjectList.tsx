"use client";

import React, { useState, useMemo } from "react";
import Link from "next/link";
import { PROJECTS } from "../data/projectsData";

const ProjectList: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  const categories = [
    { label: "All", value: "All" },
    { label: "Websites", value: "website" },
    { label: "Web-Based Systems", value: "web-system" },
    { label: "Mobile Apps", value: "mobile-app" },
    { label: "Desktop Apps", value: "desktop-app" },
  ];

  // Filter projects based on search query and category
  const filteredProjects = useMemo(() => {
    return PROJECTS.filter((project) => {
      const matchesSearch =
        project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        project.description.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesCategory =
        selectedCategory === "All" || project.category === selectedCategory;
      return matchesSearch && matchesCategory;
    });
  }, [searchQuery, selectedCategory]);

  return (
    <div className="min-h-screen pt-28 pb-20 bg-slate-900 text-slate-100">
      <div className="container">
        {/* Navigation / Header */}
        <div className="flex flex-wrap items-center justify-between gap-4 mb-12">
          <div>
            <Link
              href="/#home"
              className="inline-flex items-center text-sm font-medium text-slate-400 hover:text-blue-400 transition-colors mb-3 group"
            >
              <span className="transform group-hover:-translate-x-1 transition-transform mr-1.5">←</span>
              Back to Home
            </Link>
            <h1 className="text-4xl md:text-5xl font-bold text-white">Project Catalog</h1>
            <p className="text-slate-400 mt-2">A comprehensive directory of my engineered solutions.</p>
          </div>
        </div>

        {/* Filter Controls */}
        <div className="flex flex-col md:flex-row gap-6 justify-between items-stretch md:items-center mb-10 pb-6 border-b border-slate-800">
          {/* Category Tabs */}
          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat.value}
                onClick={() => setSelectedCategory(cat.value)}
                className={`px-4 py-2 text-sm font-medium rounded-lg border transition-all ${
                  selectedCategory === cat.value
                    ? "bg-blue-600 border-blue-500 text-white"
                    : "bg-slate-800 border-slate-700 hover:border-slate-600 text-slate-300 hover:text-white"
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* Search Input */}
          <div className="relative max-w-sm w-full">
            <input
              type="text"
              placeholder="Search projects..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full px-4 py-2.5 pl-10 bg-slate-800 border border-slate-700 hover:border-slate-600 rounded-lg text-sm text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
            />
            <span className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400">
              🔍
            </span>
          </div>
        </div>

        {/* Projects Grid */}
        {filteredProjects.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project) => (
              <div
                key={project.id}
                className="bg-slate-800 rounded-lg overflow-hidden border border-slate-700 hover:border-blue-500 transition-all duration-300 hover:transform hover:scale-[1.02] flex flex-col h-full group"
              >
                {project.image && (
                  <div className="h-48 overflow-hidden border-b border-slate-700 select-none">
                    <img
                      src={project.image?.src || project.image}
                      alt={project.title}
                      className="w-full h-full object-cover object-top group-hover:scale-[1.04] transition-transform duration-500"
                    />
                  </div>
                )}
                <div className="p-6 flex flex-col flex-grow">
                  <div className="flex items-center justify-between mb-4">
                    <span className="px-2.5 py-0.5 bg-blue-500/10 text-blue-400 rounded-md text-xs font-semibold uppercase tracking-wider">
                      {project.category.replace("-", " ")}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-white mb-3 hover:text-blue-400 transition-colors">
                    <Link href={`/projects/${project.slug}`}>{project.title}</Link>
                  </h3>
                  <p className="text-slate-400 text-sm mb-6 leading-relaxed flex-grow line-clamp-3">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.map((tech, index) => (
                      <span
                        key={index}
                        className="px-2.5 py-1 bg-slate-700/60 text-slate-300 rounded-md text-xs font-medium border border-slate-700"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex gap-4 pt-4 border-t border-slate-700/50 mt-auto">
                    <Link
                      href={`/projects/${project.slug}`}
                      className="text-xs font-bold text-blue-400 hover:text-blue-300 transition-colors inline-flex items-center gap-1 group"
                    >
                      Explore Project Detail 
                      <span className="transform group-hover:translate-x-1 transition-transform">→</span>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-20 bg-slate-800/20 rounded-lg border border-slate-800">
            <h3 className="text-xl font-bold text-slate-300 mb-2">No projects found</h3>
            <p className="text-slate-500 max-w-md mx-auto">
              No matching projects are available in this section. Projects will appear here as soon as they are added to the directory.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProjectList;
