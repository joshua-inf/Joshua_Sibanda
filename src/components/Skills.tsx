import React from 'react';

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
    <section id="skills" className="py-20 bg-slate-800/50">
      <div className="container">
        <h2 className="section-title">Skills & Technologies</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {Object.entries(categories).map(([key, title]) => (
            <div key={key} className="bg-slate-800 rounded-xl p-6 border border-slate-700 hover:border-blue-500 transition-colors duration-300">
              <h3 className="text-xl font-semibold text-blue-400 mb-4">{title}</h3>
              <div className="flex flex-wrap gap-2">
                {getSkillsByCategory(key as Skill['category']).map((skill, index) => (
                  <span 
                    key={index}
                    className="px-3 py-1 bg-blue-500/10 text-blue-400 rounded-full text-sm font-medium border border-blue-500/20"
                  >
                    {skill.name}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;