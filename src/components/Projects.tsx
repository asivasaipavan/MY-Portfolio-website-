import React from 'react';
import { ExternalLink, Github, Globe, ListTodo, Gamepad2 } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: 'Personal Portfolio Website',
      year: '2025',
      description: 'Designed and developed a responsive portfolio website using HTML, CSS, and JavaScript. Showcased skills, education, and contact info in a clean, professional layout.',
      icon: Globe,
      technologies: ['HTML', 'CSS', 'JavaScript'],
      features: ['Responsive Design', 'Clean UI', 'Professional Layout'],
    },
    {
      title: 'To-Do List Web App',
      year: '2025',
      description: 'Built a task management application with add, delete, and mark-as-complete features. Implemented localStorage for persistent data storage.',
      icon: ListTodo,
      technologies: ['HTML', 'CSS', 'JavaScript', 'localStorage'],
      features: ['Task Management', 'Persistent Storage', 'Interactive UI'],
    },
    {
      title: 'Rock–Paper–Scissors Game',
      year: '2025',
      description: 'Developed an interactive game using HTML, CSS, and JavaScript. Implemented player vs computer logic with score tracking and random moves.',
      icon: Gamepad2,
      technologies: ['HTML', 'CSS', 'JavaScript'],
      features: ['Interactive Gameplay', 'Score Tracking', 'AI Logic'],
    },
  ];

  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Projects
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            A collection of web applications showcasing my development skills and problem-solving abilities
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => {
            const Icon = project.icon;
            return (
              <div
                key={index}
                className="group bg-gradient-to-br from-white to-gray-50 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden"
              >
                <div className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center group-hover:bg-blue-200 transition-colors">
                      <Icon className="text-blue-600" size={24} />
                    </div>
                    <span className="text-sm text-gray-500 font-medium">{project.year}</span>
                  </div>

                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                    {project.title}
                  </h3>

                  <p className="text-gray-600 mb-4 leading-relaxed">
                    {project.description}
                  </p>

                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-gray-900 mb-2">Technologies:</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="px-2 py-1 bg-blue-100 text-blue-800 text-xs font-medium rounded-full"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-gray-900 mb-2">Key Features:</h4>
                    <ul className="space-y-1">
                      {project.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="text-sm text-gray-600 flex items-center gap-2">
                          <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full"></div>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex gap-3">
                    <button className="flex-1 flex items-center justify-center gap-2 py-2 px-4 bg-gray-100 text-gray-700 font-medium rounded-lg hover:bg-gray-200 transition-colors">
                      <Github size={16} />
                      <span className="text-sm">Code</span>
                    </button>
                    <button className="flex-1 flex items-center justify-center gap-2 py-2 px-4 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors">
                      <ExternalLink size={16} />
                      <span className="text-sm">Demo</span>
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Projects;