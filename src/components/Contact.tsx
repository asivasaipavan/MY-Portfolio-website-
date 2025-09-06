import React from 'react';
import { Mail, Phone, Github, Linkedin, Code, Award, MapPin, Send } from 'lucide-react';

const Contact = () => {
  const contactMethods = [
    {
      icon: Mail,
      label: 'Email',
      value: '238r1a67d2@gmail.com',
      href: 'mailto:238r1a67d2@gmail.com',
      color: 'blue',
    },
    {
      icon: Phone,
      label: 'Phone',
      value: '+91 7386962445',
      href: 'tel:+917386962445',
      color: 'emerald',
    },
    {
      icon: MapPin,
      label: 'Location',
      value: 'Hyderabad, India',
      href: '#',
      color: 'purple',
    },
  ];

  const socialLinks = [
    {
      icon: Github,
      label: 'GitHub',
      href: 'https://github.com/asivasaipavan',
      color: 'gray',
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      href: 'https://linkedin.com/in/sivasaipavan',
      color: 'blue',
    },
    {
      icon: Code,
      label: 'LeetCode',
      href: 'https://leetcode.com/u/asivasaipavan/',
      color: 'orange',
    },
    {
      icon: Award,
      label: 'CodeChef',
      href: 'https://codechef.com/users/asivasaipavan',
      color: 'brown',
    },
  ];

  const colorClasses = {
    blue: 'bg-blue-100 text-blue-600 hover:bg-blue-200',
    emerald: 'bg-emerald-100 text-emerald-600 hover:bg-emerald-200',
    purple: 'bg-purple-100 text-purple-600 hover:bg-purple-200',
    gray: 'bg-gray-100 text-gray-700 hover:bg-gray-200',
    orange: 'bg-orange-100 text-orange-600 hover:bg-orange-200',
    brown: 'bg-amber-100 text-amber-700 hover:bg-amber-200',
  };

  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Get In Touch
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            I'm always open to discussing new opportunities, collaborations, or just having a chat about technology
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-8">Let's Connect</h3>
            
            <div className="space-y-6 mb-8">
              {contactMethods.map((method, index) => {
                const Icon = method.icon;
                const colorClass = colorClasses[method.color as keyof typeof colorClasses];
                
                return (
                  <a
                    key={index}
                    href={method.href}
                    className="flex items-center gap-4 p-4 bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1"
                  >
                    <div className={`w-12 h-12 ${colorClass} rounded-xl flex items-center justify-center transition-colors`}>
                      <Icon size={24} />
                    </div>
                    <div>
                      <div className="font-semibold text-gray-900">{method.label}</div>
                      <div className="text-gray-600">{method.value}</div>
                    </div>
                  </a>
                );
              })}
            </div>

            <div>
              <h4 className="text-lg font-semibold text-gray-900 mb-4">Find me on</h4>
              <div className="flex flex-wrap gap-3">
                {socialLinks.map((link, index) => {
                  const Icon = link.icon;
                  const colorClass = colorClasses[link.color as keyof typeof colorClasses];
                  
                  return (
                    <a
                      key={index}
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`flex items-center gap-2 px-4 py-2 ${colorClass} rounded-lg font-medium transition-all duration-300 transform hover:scale-105`}
                    >
                      <Icon size={18} />
                      {link.label}
                    </a>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white p-8 rounded-2xl shadow-lg">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Send a Message</h3>
            
            <form className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                  placeholder="Enter your name"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                  Your Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                  placeholder="Enter your email"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={5}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 resize-none"
                  placeholder="Your message..."
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-gradient-to-r from-blue-600 to-emerald-600 text-white font-semibold py-3 px-6 rounded-lg hover:from-blue-700 hover:to-emerald-700 transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2"
              >
                <Send size={20} />
                Send Message
              </button>
            </form>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-16 pt-8 border-t border-gray-200 text-center">
          <p className="text-gray-600">
            © 2025 Amberkar Siva Sai Pavan. All rights reserved.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contact;