import React from "react";
import { PROJECTS } from "../data/projectsData";
import { Globe, Database, Smartphone, Monitor } from "lucide-react";

const Projects: React.FC = () => {
  // Take first 3 projects for homepage if they exist
  const featuredProjects = PROJECTS.slice(0, 3);

  const capabilities = [
    {
      Icon: Globe,
      title: "Websites",
      desc: "Responsive, high-performance landing pages, portfolios, and corporate web presences built with modern SEO best practices.",
    },
    {
      Icon: Database,
      title: "Web-Based Systems",
      desc: "Scalable full-stack applications, administration dashboards, custom portals, and secure cloud API integrations.",
    },
    {
      Icon: Smartphone,
      title: "Mobile Apps",
      desc: "Clean, responsive mobile application layouts built for seamless native performance and interactive experiences.",
    },
    {
      Icon: Monitor,
      title: "Desktop Apps",
      desc: "Resource-efficient, cross-platform local client software designed for smooth performance and high reliability.",
    },
  ];

  return (
    <section id="projects" className="py-20">
      <div className="container">
        {featuredProjects.length > 0 ? (
          <>
            <div className="flex flex-col md:flex-row justify-between items-center mb-12">
              <div>
                <h2 className="text-4xl font-bold text-white mb-2">Featured Projects</h2>
                <p className="text-slate-400">Some of my recent applications and system designs.</p>
              </div>
              <a
                href="#/projects"
                className="mt-4 md:mt-0 px-5 py-2.5 bg-slate-800 hover:bg-slate-700 text-slate-200 hover:text-white rounded-lg border border-slate-700 hover:border-blue-500 transition-all font-medium text-sm text-center"
              >
                View Project Directory
              </a>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {featuredProjects.map((project) => (
                <div
                  key={project.id}
                  className="bg-slate-800 rounded-lg overflow-hidden border border-slate-700 hover:border-blue-500 transition-all duration-300 hover:transform hover:scale-[1.02] flex flex-col h-full group"
                >
                  {project.image && (
                    <div className="h-48 overflow-hidden border-b border-slate-700 select-none">
                      <img
                        src={project.image}
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
                      <a href={`#/projects/${project.slug}`}>{project.title}</a>
                    </h3>
                    <p className="text-slate-400 text-sm mb-6 leading-relaxed flex-grow line-clamp-3">
                      {project.description}
                    </p>

                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.technologies.slice(0, 4).map((tech, index) => (
                        <span
                          key={index}
                          className="px-2.5 py-1 bg-slate-700/60 text-slate-300 rounded-md text-xs font-medium border border-slate-700"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    <div className="flex gap-4 pt-4 border-t border-slate-700/50 mt-auto">
                      <a
                        href={`#/projects/${project.slug}`}
                        className="text-xs font-bold text-blue-400 hover:text-blue-300 transition-colors inline-flex items-center gap-1 group"
                      >
                        Explore Project 
                        <span className="transform group-hover:translate-x-1 transition-transform">→</span>
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </>
        ) : (
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-4">Featured Work</h2>
              <p className="text-lg text-slate-400 max-w-2xl mx-auto">
                I engineer software across multiple platforms. Here are the core areas of my development expertise.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              {capabilities.map(({ Icon, title, desc }) => (
                <div
                  key={title}
                  className="bg-slate-800/80 p-6 rounded-lg border border-slate-700/60 flex gap-4 hover:border-blue-500 transition-colors duration-300"
                >
                  <div className="p-3 bg-blue-500/10 rounded-lg text-blue-400 h-fit border border-blue-500/20">
                    <Icon size={24} />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-white mb-2">{title}</h3>
                    <p className="text-slate-400 text-sm leading-relaxed">{desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="text-center bg-slate-800/20 p-8 rounded-lg border border-slate-800 max-w-2xl mx-auto">
              <h3 className="text-lg font-bold text-slate-300 mb-2">Projects Directory Under Construction</h3>
              <p className="text-sm text-slate-500 mb-6">
                My portfolio projects database is currently being populated. You can browse the dedicated catalog page or check back soon for live links and case studies.
              </p>
              <a
                href="#/projects"
                className="inline-flex px-5 py-2.5 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-all font-medium text-sm text-center"
              >
                Browse Projects Catalog
              </a>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Projects;