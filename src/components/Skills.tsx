import React from 'react';
import Link from 'next/link';

type Skill = {
  name: string;
  category: 'frontend' | 'backend' | 'database' | 'tool';
};

const Skills: React.FC = () => {
  const skills: Skill[] = [
    // Frontend
    { name: 'React', category: 'frontend' },
    { name: 'Tailwind CSS', category: 'frontend' },
    { name: 'Vite', category: 'frontend' },
    { name: 'Next.js', category: 'frontend' },
    
    // Backend
    { name: 'Node.js', category: 'backend' },
    { name: 'Express', category: 'backend' },
    { name: 'Python FastAPI', category: 'backend' },
    { name: 'Flask', category: 'backend' },
    { name: '.NET Blazor', category: 'backend' },
    
    // Databases
    { name: 'MySQL', category: 'database' },
    { name: 'Supabase', category: 'database' },
    { name: 'PostgreSQL', category: 'database' },
    
    // Tools
    { name: 'Git', category: 'tool' },
    { name: 'Docker', category: 'tool' },
    { name: 'REST APIs', category: 'tool' },
    { name: 'Google Cloud', category: 'tool' },
  ];

  const categories = {
    frontend: 'Frontend',
    backend: 'Backend', 
    database: 'Databases',
    tool: 'Tools & Technologies'
  };

  const getSkillsByCategory = (category: Skill['category']) => {
    return skills.filter(skill => skill.category === category);
  };

  return (
    <section id="skills" className="py-20 bg-slate-100/50 dark:bg-slate-800/50 transition-colors duration-300">
      <div className="container">
        <h2 className="section-title">Skills & Technologies</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {Object.entries(categories).map(([key, title]) => (
            <div key={key} className="bg-white dark:bg-slate-800 rounded-lg p-6 border border-slate-200 dark:border-slate-700 hover:border-blue-500 transition-colors duration-300">
              <h3 className="text-xl font-semibold text-blue-600 dark:text-blue-400 mb-4">{title}</h3>
              <div className="flex flex-wrap gap-2">
                {getSkillsByCategory(key as Skill['category']).map((skill, index) => (
                  <span 
                    key={index}
                    className="px-3 py-1 bg-blue-550/5 dark:bg-blue-500/10 text-blue-600 dark:text-blue-400 rounded-md text-sm font-medium border border-blue-100 dark:border-blue-500/20 transition-colors duration-300"
                  >
                    {skill.name}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Link
            href="/skills"
            className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors inline-flex items-center gap-2 group"
          >
            Explore Detailed Skills Narrative
            <span className="transform group-hover:translate-x-1 transition-transform">→</span>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Skills;