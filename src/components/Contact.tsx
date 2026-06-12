"use client";

import React, { useState } from 'react';

interface FormData {
  name: string;
  email: string;
  message: string;
}

const Contact: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <section id="contact" className="py-20 bg-white dark:bg-slate-900 transition-colors duration-300">
      <div className="container">
        <h2 className="section-title">Get In Touch</h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4 transition-colors">Let's Connect</h3>
            <p className="text-lg text-slate-650 dark:text-slate-300 leading-relaxed transition-colors">
              I'm always interested in new opportunities, collaborations, 
              and discussions about technology. Whether you have a project 
              in mind or just want to say hello, feel free to reach out!
            </p>
            <div className="space-y-3 text-slate-650 dark:text-slate-300 transition-colors">
              <p className="flex items-center gap-2">
                <span>📍</span> Based in Zambia
              </p>
              <p className="flex items-center gap-2">
                <span>💼</span> Open to freelance opportunities
              </p>
              <p className="flex items-center gap-2">
                <span>🚀</span> Passionate about meaningful projects
              </p>
            </div>
          </div>
          
          <form onSubmit={handleSubmit} className="space-y-6 bg-white dark:bg-slate-800 p-8 rounded-lg border border-slate-200 dark:border-slate-700 transition-colors duration-300">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-slate-600 dark:text-slate-300 mb-2 transition-colors">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 bg-slate-50 dark:bg-slate-900 border border-slate-300 dark:border-slate-600 rounded-lg text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all transition-colors duration-300"
                placeholder="Your name"
              />
            </div>
            
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-slate-600 dark:text-slate-300 mb-2 transition-colors">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 bg-slate-50 dark:bg-slate-900 border border-slate-300 dark:border-slate-600 rounded-lg text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all transition-colors duration-300"
                placeholder="your.email@example.com"
              />
            </div>
            
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-slate-600 dark:text-slate-300 mb-2 transition-colors">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={5}
                value={formData.message}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 bg-slate-50 dark:bg-slate-900 border border-slate-300 dark:border-slate-600 rounded-lg text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all resize-vertical transition-colors duration-300"
                placeholder="Your message..."
              />
            </div>
            
            <button
              type="submit"
              className="w-full btn btn-primary"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;