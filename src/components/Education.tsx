import React from 'react';
import { GraduationCap, Calendar, Award } from 'lucide-react';

const Education = () => {
  const educationData = [
    {
      degree: 'B.Tech in CSE (Data Science)',
      institution: 'CMR Engineering College',
      duration: '2023 – 2027',
      grade: 'CGPA: 9.00/10.0',
      description: 'Specializing in Data Science with strong foundation in computer science fundamentals',
    },
    {
      degree: 'Class 12 (Intermediate)',
      institution: 'Urbane Junior College',
      duration: '2022',
      grade: 'Percentage: 96.3%',
      description: 'Completed with distinction, laying strong foundation for higher studies',
    },
    {
      degree: 'Class 10',
      institution: 'Akshara Sree School',
      duration: '2020',
      grade: 'GPA: 10/10',
      description: 'Perfect academic performance demonstrating consistent excellence',
    },
  ];

  return (
    <section id="education" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Education
          </h2>
          <p className="text-lg text-gray-600">
            Academic journey marked by consistent excellence and dedication
          </p>
        </div>

        <div className="space-y-8">
          {educationData.map((edu, index) => (
            <div
              key={index}
              className="relative pl-8 pb-8 border-l-4 border-blue-200 last:border-l-0 last:pb-0"
            >
              <div className="absolute -left-3 top-0 w-6 h-6 bg-blue-600 rounded-full border-4 border-white shadow-lg"></div>
              
              <div className="bg-gradient-to-br from-white to-blue-50 p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="flex flex-wrap items-start justify-between mb-4">
                  <div className="flex-1 min-w-0 mr-4">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{edu.degree}</h3>
                    <div className="flex items-center gap-2 text-gray-700 mb-2">
                      <GraduationCap size={18} />
                      <span className="font-medium">{edu.institution}</span>
                    </div>
                    <div className="flex items-center gap-2 text-gray-600 mb-3">
                      <Calendar size={16} />
                      <span>{edu.duration}</span>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-2 bg-emerald-100 text-emerald-800 px-3 py-1 rounded-full font-semibold">
                    <Award size={16} />
                    {edu.grade}
                  </div>
                </div>
                
                <p className="text-gray-600 leading-relaxed">{edu.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;