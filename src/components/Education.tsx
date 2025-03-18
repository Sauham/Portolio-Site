import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { GraduationCap, Brain } from 'lucide-react';
import SectionTitle from './SectionTitle';

const educationData = [
  {
    degree: 'B.Tech in Artificial Intelligence',
    school: 'Sage University Indore',
    period: 'September 2022 - September 2026',
    description: 'Specializing in Artificial Intelligence with a focus on machine learning, deep learning, and computer vision.',
    icon: Brain,
  },
  {
    degree: 'Higher Secondary (PCM)',
    school: 'Alpine Academy',
    period: 'June 2014 - July 2022',
    description: 'Completed CBSE board with Physics, Chemistry, and Mathematics specialization.',
    icon: GraduationCap,
  },
];

const Education = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <div className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <SectionTitle title="Education" />

      <div className="relative">
        {/* Timeline line */}
        <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-blue-500/30" />

        <div className="space-y-12">
          {educationData.map((edu, index) => (
            <div
              key={edu.school}
              className={`flex items-center ${
                index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'
              }`}
            >
              {/* Content */}
              <div className={`w-1/2 ${index % 2 === 0 ? 'pr-12 text-right' : 'pl-12'}`}>
                <div className="bg-black/30 backdrop-blur-lg rounded-lg p-6 shadow-xl">
                  <h3 className="text-xl font-semibold text-blue-400">{edu.degree}</h3>
                  <p className="text-lg font-medium">{edu.school}</p>
                  <p className="text-sm text-gray-400 mb-2">{edu.period}</p>
                  <p className="text-gray-300">{edu.description}</p>
                </div>
              </div>

              {/* Icon */}
              <div className="relative z-10">
                <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center">
                  <edu.icon className="w-6 h-6 text-white" />
                </div>
              </div>

              {/* Empty space for alignment */}
              <div className="w-1/2" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Education;