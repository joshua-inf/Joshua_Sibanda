"use client";

import React from "react";
import Link from "next/link";

interface SkillNarrative {
  name: string;
  description: string;
  projects: { title: string; slug: string }[];
}

interface SkillCategory {
  title: string;
  description: string;
  skills: SkillNarrative[];
}

const SKILLS_DATA: SkillCategory[] = [
  {
    title: "Frontend Engineering",
    description: "Building responsive, highly interactive, and fast user interfaces using modern frameworks, semantic markup, and optimized rendering strategies.",
    skills: [
      {
        name: "Next.js & React",
        description: "Expertise in Next.js (App Router, Server-Side Rendering, Static Site Generation) and React 18/19. Focuses on performance optimization, bundle size reduction, client-side routing, and standalone production compilations.",
        projects: [
          { title: "TryBae Business Dashboard", slug: "trybae-business-dashboard" },
          { title: "inXource Payments Storefront", slug: "inxource-payments-storefront" },
          { title: "Inxource Marketing Website", slug: "inxource-marketing-website" },
          { title: "Drive Metrics Fleet Ecosystem", slug: "drive-metrics-fleet-ecosystem" },
          { title: "TechRoots Zambia Corporate Website", slug: "techroots-zambia-corporate-website" },
          { title: "Fivesphere Multi Trade Website", slug: "fivesphere-multi-trade-website" },
          { title: "Apparel Management System", slug: "apparel-management-system" }
        ]
      },
      {
        name: "React (Vite & Router)",
        description: "Experienced in constructing high-performance single page applications (SPAs) with Vite, React Router, Wouter, and state managers like TanStack Query for seamless server synchronization.",
        projects: [
          { title: "Eduroot School Management System", slug: "eduroot-school-management-system" },
          { title: "Namar Technologies Corporate Website", slug: "namar-technologies-corporate-website" },
          { title: "Transformative Healing Clinic Website", slug: "transformative-healing-clinic-website" }
        ]
      },
      {
        name: "Tailwind CSS",
        description: "Proficient in utility-first responsive styling utilizing custom design tokens, theme configurations, and fluid flex/grid structures. Incorporates Tailwind v3 and v4 to achieve minimal, sleek corporate layouts.",
        projects: [
          { title: "TryBae Business Dashboard", slug: "trybae-business-dashboard" },
          { title: "inXource Payments Storefront", slug: "inxource-payments-storefront" },
          { title: "Drive Metrics Fleet Ecosystem", slug: "drive-metrics-fleet-ecosystem" },
          { title: "Eduroot School Management System", slug: "eduroot-school-management-system" },
          { title: "TechRoots Zambia Corporate Website", slug: "techroots-zambia-corporate-website" },
          { title: "Transformative Healing Clinic Website", slug: "transformative-healing-clinic-website" },
          { title: "Fivesphere Multi Trade Website", slug: "fivesphere-multi-trade-website" },
          { title: "Apparel Management System", slug: "apparel-management-system" }
        ]
      },
      {
        name: "Framer Motion & Animate.css",
        description: "Utilizes declarative animation libraries to implement subtle micro-animations, layout transitions, modal animations, and multi-step custom sliders without compromising accessibility or rendering speed.",
        projects: [
          { title: "inXource Payments Storefront", slug: "inxource-payments-storefront" },
          { title: "Inxource Marketing Website", slug: "inxource-marketing-website" },
          { title: "Namar Technologies Corporate Website", slug: "namar-technologies-corporate-website" },
          { title: "Transformative Healing Clinic Website", slug: "transformative-healing-clinic-website" },
          { title: "Fivesphere Multi Trade Website", slug: "fivesphere-multi-trade-website" }
        ]
      }
    ]
  },
  {
    title: "Backend & System Design",
    description: "Designing secure, structured, and resilient servers, RESTful APIs, and access control schemas capable of handling heavy concurrent operations.",
    skills: [
      {
        name: "Node.js & Express",
        description: "Developing robust server-side runtimes, custom middleware pipelines, authentication gates, and API specifications matching OpenAPI standards.",
        projects: [
          { title: "Eduroot School Management System", slug: "eduroot-school-management-system" }
        ]
      },
      {
        name: "Python (FastAPI & Flask)",
        description: "Constructing high-performance web APIs and lightweight backend microservices tailored for quick data validation, service calls, and background automation.",
        projects: []
      },
      {
        name: ".NET Blazor",
        description: "Leveraging C# and .NET configurations for enterprise application layouts, incorporating strong static typing, server-side execution, and secure component models.",
        projects: []
      },
      {
        name: "APIs & Integrations",
        description: "Experienced in third-party API configurations including payment aggregators (Lenco Payments for cards and Mobile Money), email providers (Nodemailer, Mailtrap), client leads forms (EmailJS), and AI services (Groq Llama-3 integrations for automated screenings).",
        projects: [
          { title: "Eduroot School Management System", slug: "eduroot-school-management-system" },
          { title: "Namar Technologies Corporate Website", slug: "namar-technologies-corporate-website" },
          { title: "Transformative Healing Clinic Website", slug: "transformative-healing-clinic-website" }
        ]
      }
    ]
  },
  {
    title: "Databases & Data Modeling",
    description: "Designing relational database schemas, query optimization, indexing, and ORMs to ensure performant transactions and robust data constraints.",
    skills: [
      {
        name: "PostgreSQL & Supabase",
        description: "Structuring relational schemas, triggers, functions, row-level security (RLS) policies, and leveraging Supabase services (auth, storage buckets, and real-time subscription pools).",
        projects: [
          { title: "Drive Metrics Fleet Ecosystem", slug: "drive-metrics-fleet-ecosystem" },
          { title: "Eduroot School Management System", slug: "eduroot-school-management-system" }
        ]
      },
      {
        name: "MySQL & SQL",
        description: "Configuring relational databases, complex query optimization, indexing, data migrations, and managing database connections with client libraries like mysql2.",
        projects: [
          { title: "TechRoots Zambia Corporate Website", slug: "techroots-zambia-corporate-website" }
        ]
      },
      {
        name: "Drizzle ORM & Migrations",
        description: "Writing declarative TypeScript schemas and managing migrations via drizzle-kit. Enables type-safe database queries, schema synchronizations, and quick data seeding operations.",
        projects: [
          { title: "Eduroot School Management System", slug: "eduroot-school-management-system" }
        ]
      }
    ]
  },
  {
    title: "DevOps & Cloud Technologies",
    description: "Standardizing pipelines, containerizing systems, and automating deployments to cloud platforms and virtual private servers.",
    skills: [
      {
        name: "Docker & Containerization",
        description: "Writing multi-stage, secure production Dockerfiles to containerize applications (Next.js, Node.js), separating build phases, optimizing cache keys, and minimizing final image sizes.",
        projects: [
          { title: "TechRoots Zambia Corporate Website", slug: "techroots-zambia-corporate-website" },
          { title: "Drive Metrics Fleet Ecosystem", slug: "drive-metrics-fleet-ecosystem" }
        ]
      },
      {
        name: "Cloud Hosting & DevOps",
        description: "Configuring hostings on platforms like Vercel, Netlify, and self-hosted environments (Coolify on VPS). Setting up Google Cloud configurations and Cloud Build scripts for continuous delivery.",
        projects: [
          { title: "TechRoots Zambia Corporate Website", slug: "techroots-zambia-corporate-website" },
          { title: "Namar Technologies Corporate Website", slug: "namar-technologies-corporate-website" }
        ]
      },
      {
        name: "Git & CI/CD",
        description: "Leveraging Git branching workflows, merging conflicts resolution, and automating release cycles to ensure reliable production code deployments.",
        projects: [
          { title: "TryBae Business Dashboard", slug: "trybae-business-dashboard" },
          { title: "inXource Payments Storefront", slug: "inxource-payments-storefront" },
          { title: "Inxource Marketing Website", slug: "inxource-marketing-website" },
          { title: "Drive Metrics Fleet Ecosystem", slug: "drive-metrics-fleet-ecosystem" },
          { title: "Eduroot School Management System", slug: "eduroot-school-management-system" },
          { title: "Namar Technologies Corporate Website", slug: "namar-technologies-corporate-website" },
          { title: "TechRoots Zambia Corporate Website", slug: "techroots-zambia-corporate-website" },
          { title: "Transformative Healing Clinic Website", slug: "transformative-healing-clinic-website" },
          { title: "Fivesphere Multi Trade Website", slug: "fivesphere-multi-trade-website" },
          { title: "Apparel Management System", slug: "apparel-management-system" }
        ]
      }
    ]
  }
];

const SkillsDetail: React.FC = () => {
  return (
    <div className="min-h-screen pt-28 pb-20 bg-slate-50 dark:bg-slate-900 text-slate-900 dark:text-slate-100 transition-colors duration-300">
      <div className="container max-w-5xl mx-auto">
        {/* Navigation & Header */}
        <div className="mb-12">
          <Link
            href="/#skills"
            className="inline-flex items-center text-sm font-medium text-slate-500 dark:text-slate-400 hover:text-blue-650 dark:hover:text-blue-400 transition-colors mb-3 group"
          >
            <span className="transform group-hover:-translate-x-1 transition-transform mr-1.5">←</span>
            Back to Home
          </Link>
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white transition-colors">Skills Narrative</h1>
          <p className="text-slate-600 dark:text-slate-400 mt-2 transition-colors">
            An in-depth guide to my technical expertise, capabilities, and practical deployments.
          </p>
        </div>

        {/* Skill Categories Section */}
        <div className="space-y-16">
          {SKILLS_DATA.map((cat, cIdx) => (
            <section
              key={cIdx}
              className="p-8 bg-white dark:bg-slate-850 rounded-lg border border-slate-200 dark:border-slate-800 transition-colors duration-300"
            >
              <div className="mb-8">
                <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-2 transition-colors">{cat.title}</h2>
                <p className="text-slate-600 dark:text-slate-400 text-sm max-w-3xl leading-relaxed transition-colors">
                  {cat.description}
                </p>
              </div>

              {/* Individual Skills list */}
              <div className="space-y-8 divide-y divide-slate-200 dark:divide-slate-800">
                {cat.skills.map((skill, sIdx) => (
                  <div
                    key={sIdx}
                    className={`pt-6 ${sIdx === 0 ? "pt-0 border-t-0" : ""}`}
                  >
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                      {/* Name */}
                      <div className="md:col-span-1">
                        <h3 className="text-lg font-semibold text-blue-600 dark:text-blue-400 transition-colors">
                          {skill.name}
                        </h3>
                      </div>

                      {/* Details & Project links */}
                      <div className="md:col-span-2 space-y-4">
                        <p className="text-slate-650 dark:text-slate-300 text-sm leading-relaxed transition-colors">
                          {skill.description}
                        </p>

                        {/* Associated Projects */}
                        {skill.projects.length > 0 && (
                          <div className="pt-2">
                            <span className="text-xs font-semibold text-slate-550 dark:text-slate-400 uppercase tracking-wider block mb-2 transition-colors">
                              Incorporated In:
                            </span>
                            <div className="flex flex-wrap gap-2">
                              {skill.projects.map((proj, pIdx) => (
                                <Link
                                  key={pIdx}
                                  href={`/projects/${proj.slug}`}
                                  className="px-2.5 py-1 bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-xs font-medium text-slate-700 dark:text-slate-300 hover:text-slate-950 dark:hover:text-white rounded-md border border-slate-200 dark:border-slate-700 transition-colors"
                                >
                                  💼 {proj.title}
                                </Link>
                              ))}
                            </div>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SkillsDetail;
