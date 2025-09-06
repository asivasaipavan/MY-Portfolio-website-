import React from 'react';
import { Briefcase, Calendar, MapPin, CheckCircle } from 'lucide-react';

const Experience = () => {
  const achievements = [
    'Worked on front-end development projects using HTML, CSS, and JavaScript',
    'Gained hands-on experience with real-world development practices',
    'Earned an internship completion certificate'
  ];

  return (
    <section id="experience" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Work Experience
          </h2>
          <p className="text-lg text-gray-600">
            Professional experience in web development and software practices
          </p>
        </div>

        <div className="bg-gradient-to-br from-white to-gray-50 p-8 rounded-2xl shadow-xl">
          <div className="flex items-start gap-6 mb-6">
            <div className="w-16 h-16 bg-blue-100 rounded-xl flex items-center justify-center flex-shrink-0">
              <Briefcase className="text-blue-600" size={32} />
            </div>
            
            <div className="flex-1">
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Web Development Intern</h3>
              <h4 className="text-xl font-semibold text-blue-600 mb-4">Cognifyz Technologies</h4>
              
              <div className="flex flex-wrap gap-4 mb-6 text-gray-600">
                <div className="flex items-center gap-2">
                  <Calendar size={18} />
                  <span>June 2025 – July 2025</span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin size={18} />
                  <span>Remote</span>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-3">
            <h5 className="text-lg font-semibold text-gray-900 mb-4">Key Achievements:</h5>
            {achievements.map((achievement, index) => (
              <div key={index} className="flex items-start gap-3">
                <CheckCircle className="text-emerald-500 mt-1 flex-shrink-0" size={18} />
                <span className="text-gray-700 leading-relaxed">{achievement}</span>
              </div>
            ))}
          </div>

          <div className="mt-6 p-4 bg-emerald-50 border border-emerald-200 rounded-lg">
            <p className="text-emerald-800 font-medium text-center">
              🏆 Successfully completed internship with certification
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;