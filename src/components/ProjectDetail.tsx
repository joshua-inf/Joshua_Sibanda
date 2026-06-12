import React from "react";
import Link from "next/link";
import { PROJECTS } from "../data/projectsData";

interface ProjectDetailProps {
  slug: string;
}

const ProjectDetail: React.FC<ProjectDetailProps> = ({ slug }) => {
  const project = PROJECTS.find((p) => p.slug === slug);

  if (!project) {
    return (
      <div className="min-h-screen pt-28 pb-20 bg-slate-50 dark:bg-slate-900 text-slate-900 dark:text-slate-100 flex items-center justify-center transition-colors duration-300">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">Project Not Found</h2>
          <Link
            href="/projects"
            className="px-5 py-2.5 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium transition-all"
          >
            Back to Project Catalog
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-28 pb-20 bg-slate-50 dark:bg-slate-900 text-slate-900 dark:text-slate-100 transition-colors duration-300">
      <div className="container max-w-4xl mx-auto">
        {/* Navigation */}
        <Link
          href="/projects"
          className="inline-flex items-center text-sm font-medium text-slate-500 dark:text-slate-400 hover:text-blue-650 dark:hover:text-blue-400 transition-colors mb-8 group"
        >
          <span className="transform group-hover:-translate-x-1 transition-transform mr-1.5">←</span>
          Back to Projects Catalog
        </Link>

        {/* Header Section */}
        <header className="mb-10 pb-8 border-b border-slate-200 dark:border-slate-800 transition-colors">
          <div className="flex items-center gap-3 mb-4">
            <span className="px-3 py-1 bg-blue-50 dark:bg-blue-500/10 text-blue-600 dark:text-blue-400 rounded-md text-xs font-semibold uppercase tracking-wider border border-blue-100 dark:border-blue-500/20">
              {project.category.replace("-", " ")}
            </span>
          </div>

          <h1 className="text-3xl md:text-5xl font-extrabold text-slate-900 dark:text-white leading-tight mb-6 transition-colors">
            {project.title}
          </h1>

          <div className="flex flex-wrap gap-2 mb-6">
            {project.technologies.map((tech) => (
              <span
                key={tech}
                className="px-3 py-1 bg-slate-150 dark:bg-slate-800 text-slate-600 dark:text-slate-300 rounded-md text-xs font-semibold border border-slate-200 dark:border-slate-700 transition-colors"
              >
                {tech}
              </span>
            ))}
          </div>

          {/* CTAs */}
          <div className="flex gap-4">
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noreferrer"
                className="px-5 py-2.5 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-all font-medium text-sm inline-flex items-center gap-2"
              >
                🌐 Visit Live Site
              </a>
            )}
            {project.requestDemo && (
              <Link
                href="/#contact"
                className="px-5 py-2.5 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-all font-medium text-sm inline-flex items-center gap-2"
              >
                🔑 Request a Demo
              </Link>
            )}
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noreferrer"
                className="px-5 py-2.5 bg-slate-100 hover:bg-slate-200 dark:bg-slate-850 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-200 hover:text-slate-950 dark:hover:text-white rounded-lg border border-slate-250 dark:border-slate-700 transition-all font-medium text-sm inline-flex items-center gap-2"
              >
                💻 View Source Code
              </a>
            )}
          </div>
        </header>

        {/* Main Cover Image */}
        {project.image && (
          <div className="mb-10 rounded-lg overflow-hidden border border-slate-200 dark:border-slate-850 select-none">
            <img
              src={project.image?.src || project.image}
              alt={project.title}
              className="w-full h-auto object-cover object-top max-h-[450px]"
            />
          </div>
        )}

        {/* Content Section */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          {/* Main details */}
          <div className="lg:col-span-2 space-y-8">
            <div>
              <h2 className="text-xl font-bold text-slate-900 dark:text-white mb-4">Project Overview</h2>
              <p className="text-slate-650 dark:text-slate-300 leading-relaxed text-lg whitespace-pre-line transition-colors">
                {project.longDescription || project.description}
              </p>
            </div>

            {project.features && project.features.length > 0 && (
              <div>
                <h2 className="text-xl font-bold text-slate-900 dark:text-white mb-4">Key Features & Milestones</h2>
                <ul className="space-y-3">
                  {project.features.map((feature, index) => (
                    <li key={index} className="flex gap-3 text-slate-650 dark:text-slate-300 leading-relaxed transition-colors">
                      <span className="text-blue-500 font-semibold select-none">✓</span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>

          {/* Sidebar Metadata */}
          <div className="bg-white dark:bg-slate-855 p-6 rounded-lg border border-slate-200 dark:border-slate-800 h-fit space-y-6 shadow-sm transition-colors">
            <div>
              <h3 className="text-sm font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider mb-2">Platform</h3>
              <p className="text-slate-900 dark:text-white font-medium capitalize">{project.category.replace("-", " ")}</p>
            </div>
            <div>
              <h3 className="text-sm font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider mb-2">Scope</h3>
              <p className="text-slate-900 dark:text-white font-medium">Design, Frontend, Backend & Database Architecture</p>
            </div>
          </div>
        </div>

        {/* Screenshots Gallery */}
        {project.screenshots && project.screenshots.length > 0 && (
          <div className="mt-16 pt-10 border-t border-slate-200 dark:border-slate-800 transition-colors">
            <h2 className="text-xl font-bold text-slate-900 dark:text-white mb-6">Screenshots & Walkthrough</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {project.screenshots.map((screenshot, index) => (
                <div
                  key={index}
                  className="rounded-lg overflow-hidden border border-slate-250 dark:border-slate-850 hover:border-slate-350 dark:hover:border-slate-700 transition-colors select-none"
                >
                  <img
                    src={screenshot}
                    alt={`${project.title} Screenshot ${index + 1}`}
                    className="w-full h-auto object-cover"
                  />
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProjectDetail;
