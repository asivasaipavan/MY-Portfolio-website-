import React from 'react';
import { User, Target, Lightbulb } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            About Me
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Passionate about technology and driven by curiosity to solve complex problems
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <div className="text-center p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <User className="text-blue-600" size={32} />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Student</h3>
            <p className="text-gray-600">
              3rd-year B.Tech Computer Science (Data Science) student with excellent academic record
            </p>
          </div>

          <div className="text-center p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
            <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Target className="text-emerald-600" size={32} />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Problem Solver</h3>
            <p className="text-gray-600">
              Strong foundation in DSA with 300+ problems solved across competitive platforms
            </p>
          </div>

          <div class="text-center p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
            <div class="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Lightbulb className="text-orange-600" size={32} />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Developer</h3>
            <p className="text-gray-600">
              Passionate about building impactful web applications and learning new technologies
            </p>
          </div>
        </div>

        <div className="bg-gradient-to-r from-blue-600 to-emerald-600 text-white p-8 rounded-2xl">
          <p className="text-lg leading-relaxed text-center">
            "I'm passionate about leveraging technology to solve real-world problems. 
            My journey in computer science has equipped me with strong analytical thinking, 
            programming skills, and a deep understanding of data science concepts. 
            I'm always eager to learn new technologies and contribute to meaningful projects."
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;