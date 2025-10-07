import React from 'react';

const Hero: React.FC = () => {
  return (
    <section id="home" className="min-h-screen flex items-center pt-16">
      <div className="container">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          <div className="flex-1 text-center lg:text-left">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6">
              Hi, I'm <span className="text-blue-500">Joshua Sibanda</span>
            </h1>
            <h2 className="text-xl md:text-2xl text-slate-300 mb-8 font-semibold">
              Software Developer & Tech Enthusiast
            </h2>
            <p className="text-lg text-slate-400 mb-8 max-w-2xl leading-relaxed">
              Passionate software developer based in Zambia, specializing in building 
              web and mobile applications that solve real-world problems and enhance 
              user experiences. I love exploring new technologies, learning continuously, 
              and turning creative ideas into functional, efficient, and visually appealing applications.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <a href="#projects" className="btn btn-primary">
                View My Work
              </a>
              <a href="#contact" className="btn btn-secondary">
                Get In Touch
              </a>
            </div>
          </div>
          <div className="flex-1 flex justify-center">
            <div className="w-80 h-80 bg-slate-800 rounded-2xl border-2 border-dashed border-slate-600 flex items-center justify-center text-slate-400">
              Your Photo
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;