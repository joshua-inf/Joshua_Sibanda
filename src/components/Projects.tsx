import React from 'react';


export interface Project {
  id: number;
  title: string;
  description: string;
  technologies: string[];
  githubUrl?: string;
  liveUrl?: string;
  image?: string;
}

const Projects: React.FC = () => {
  const projects: Project[] = [
    {
      id: 1,
      title: "E-Commerce Platform",
      description: "A full-stack e-commerce solution with React frontend and Node.js backend, featuring user authentication, product management, and payment integration.",
      technologies: ["React", "Node.js", "Express", "MySQL", "Tailwind CSS"],
      githubUrl: "#",
      liveUrl: "#"
    },
    {
      id: 2,
      title: "Task Management App", 
      description: "A collaborative task management application with real-time updates, team collaboration features, and progress tracking.",
      technologies: ["Next.js", "Python FastAPI", "PostgreSQL", "Docker"],
      githubUrl: "#",
      liveUrl: "#"
    },
    {
      id: 3,
      title: "Weather Dashboard",
      description: "A responsive weather application providing real-time weather data and forecasts with interactive maps and location-based services.",
      technologies: ["React", "Vite", "REST API", "Tailwind CSS"],
      githubUrl: "#",
      liveUrl: "#"
    }
  ];

  return (
    <section id="projects" className="py-20">
      <div className="container">
        <h2 className="section-title">Featured Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div 
              key={project.id}
              className="bg-slate-800 rounded-xl overflow-hidden border border-slate-700 hover:border-blue-500 transition-all duration-300 hover:transform hover:scale-105 group"
            >
              <div className="h-48 bg-slate-700 flex items-center justify-center text-slate-400 group-hover:text-blue-400 transition-colors">
                Project Image
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-white mb-3">{project.title}</h3>
                <p className="text-slate-400 mb-4 leading-relaxed">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, index) => (
                    <span 
                      key={index}
                      className="px-3 py-1 bg-slate-700 text-slate-300 rounded-full text-xs font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex gap-4">
                  {project.githubUrl && (
                    <a 
                      href={project.githubUrl}
                      className="text-blue-400 hover:text-blue-300 transition-colors font-medium"
                    >
                      GitHub
                    </a>
                  )}
                  {project.liveUrl && (
                    <a 
                      href={project.liveUrl}
                      className="text-blue-400 hover:text-blue-300 transition-colors font-medium"
                    >
                      Live Demo
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;