import React from 'react';
import { Trophy, Target, Award, TrendingUp } from 'lucide-react';

const Achievements = () => {
  const achievements = [
    {
      icon: Target,
      platform: 'LeetCode',
      description: 'Solved 100+ problems',
      metric: 'Highest Rating: 1600',
      color: 'orange',
    },
    {
      icon: Trophy,
      platform: 'CodeChef',
      description: 'Solved 200+ problems',
      metric: 'Highest Rating: 1400',
      color: 'blue',
    },
    {
      icon: Award,
      platform: 'Deloitte',
      description: 'Data Analytics Certification',
      metric: 'Professional Certification',
      color: 'emerald',
    },
  ];

  const stats = [
    { number: '300+', label: 'Problems Solved', icon: Target },
    { number: '1600', label: 'LeetCode Rating', icon: TrendingUp },
    { number: '9.00', label: 'CGPA', icon: Award },
    { number: '3', label: 'Projects Completed', icon: Trophy },
  ];

  const colorClasses = {
    orange: {
      bg: 'bg-orange-100',
      text: 'text-orange-600',
      gradient: 'from-orange-400 to-red-500',
    },
    blue: {
      bg: 'bg-blue-100',
      text: 'text-blue-600',
      gradient: 'from-blue-400 to-indigo-500',
    },
    emerald: {
      bg: 'bg-emerald-100',
      text: 'text-emerald-600',
      gradient: 'from-emerald-400 to-teal-500',
    },
  };

  return (
    <section id="achievements" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Achievements & Certifications
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Recognition of my dedication to continuous learning and problem-solving
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div
                key={index}
                className="bg-gradient-to-br from-white to-gray-50 p-6 rounded-2xl shadow-lg text-center hover:shadow-xl transition-shadow duration-300"
              >
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon className="text-blue-600" size={24} />
                </div>
                <div className="text-3xl font-bold text-gray-900 mb-2">{stat.number}</div>
                <div className="text-sm text-gray-600 font-medium">{stat.label}</div>
              </div>
            );
          })}
        </div>

        {/* Achievements Cards */}
        <div className="grid md:grid-cols-3 gap-8">
          {achievements.map((achievement, index) => {
            const Icon = achievement.icon;
            const colors = colorClasses[achievement.color as keyof typeof colorClasses];
            
            return (
              <div
                key={index}
                className="relative overflow-hidden bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${colors.gradient} opacity-5`}></div>
                
                <div className="relative p-8 text-center">
                  <div className={`w-20 h-20 ${colors.bg} rounded-2xl flex items-center justify-center mx-auto mb-6`}>
                    <Icon className={colors.text} size={32} />
                  </div>
                  
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    {achievement.platform}
                  </h3>
                  
                  <p className="text-gray-600 mb-4 leading-relaxed">
                    {achievement.description}
                  </p>
                  
                  <div className={`inline-flex items-center px-4 py-2 ${colors.bg} ${colors.text} rounded-full font-semibold text-sm`}>
                    {achievement.metric}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-12 text-center">
          <div className="bg-gradient-to-r from-blue-600 to-emerald-600 text-white p-8 rounded-2xl">
            <h3 className="text-2xl font-bold mb-4">Continuous Learning Journey</h3>
            <p className="text-lg opacity-90 max-w-3xl mx-auto leading-relaxed">
              My achievements reflect a commitment to excellence and continuous improvement. 
              From competitive programming to professional certifications, each milestone 
              represents dedication to mastering new skills and solving complex challenges.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Achievements;