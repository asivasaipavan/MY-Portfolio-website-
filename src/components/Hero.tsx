import React from 'react';
import { Mail, Phone, Github, Linkedin, Code, Award } from 'lucide-react';

const Hero = () => {
  const socialLinks = [
    { icon: Mail, href: 'mailto:238r1a67d2@gmail.com', label: 'Email' },
    { icon: Phone, href: 'tel:+917386962445', label: 'Phone' },
    { icon: Github, href: 'https://github.com/asivasaipavan', label: 'GitHub' },
    { icon: Linkedin, href: 'https://linkedin.com/in/sivasaipavan', label: 'LinkedIn' },
    { icon: Code, href: 'https://leetcode.com/u/asivasaipavan/', label: 'LeetCode' },
    { icon: Award, href: 'https://codechef.com/users/asivasaipavan', label: 'CodeChef' },
  ];

  return (
    <section className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-16">
      <div className="max-w-4xl mx-auto text-center">
        <div className="mb-8">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-4">
            Amberkar Siva Sai Pavan
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 mb-6">
            Computer Science (Data Science) Student
          </p>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto leading-relaxed">
            Enthusiastic 3rd-year B.Tech student at CMR Engineering College with strong skills 
            in Data Structures & Algorithms, web development, and problem-solving.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-4 mb-8">
          {socialLinks.map((link, index) => {
            const Icon = link.icon;
            return (
              <a
                key={index}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 bg-white rounded-lg shadow-md hover:shadow-lg transform hover:scale-105 transition-all duration-300 text-gray-700 hover:text-blue-600"
              >
                <Icon size={20} />
                <span className="font-medium">{link.label}</span>
              </a>
            );
          })}
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="px-8 py-3 bg-blue-600 text-white font-semibold rounded-lg shadow-lg hover:bg-blue-700 transform hover:scale-105 transition-all duration-300"
          >
            Get In Touch
          </button>
          <button
            onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
            className="px-8 py-3 bg-white text-blue-600 font-semibold rounded-lg shadow-lg border-2 border-blue-600 hover:bg-blue-50 transform hover:scale-105 transition-all duration-300"
          >
            View My Work
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;