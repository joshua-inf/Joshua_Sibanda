import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="fixed top-0 w-full bg-slate-900/95 backdrop-blur-sm border-b border-slate-700 z-50">
      <nav className="container flex justify-between items-center py-4">
        <div className="logo">
          <h2 className="text-xl font-bold text-white">Joshua Sibanda</h2>
        </div>
        <ul className="hidden md:flex space-x-8">
          <li><a href="#home" className="text-slate-300 hover:text-blue-400 transition-colors duration-300 font-medium">Home</a></li>
          <li><a href="#skills" className="text-slate-300 hover:text-blue-400 transition-colors duration-300 font-medium">Skills</a></li>
          <li><a href="#projects" className="text-slate-300 hover:text-blue-400 transition-colors duration-300 font-medium">Projects</a></li>
          <li><a href="#contact" className="text-slate-300 hover:text-blue-400 transition-colors duration-300 font-medium">Contact</a></li>
        </ul>
        <button className="md:hidden text-slate-300">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </nav>
    </header>
  );
};

export default Header;