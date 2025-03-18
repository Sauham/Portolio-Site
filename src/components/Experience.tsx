import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Briefcase, Brain, Code, Database } from 'lucide-react';
import SectionTitle from './SectionTitle';

const experiences = [
  {
    company: 'Aicerts.ai',
    position: 'Prompt Engineer',
    period: 'March 2025- present ',
    description: 'Engineered and optimized complex prompts for Large Language Models (LLMs) like GPT-4 and Claude, enhancing response accuracy and contextual relevance by 30% for AI-driven automation solutions.',
    icon: Briefcase,
  },
  {
    company: 'SETV Global',
    position: 'AI/ML Engineer',
    period: 'November 2024- February 2025 ',
    description: 'Working on AI-driven solutions, focusing on NLP and Computer Vision applications.',
    icon: Brain,
  },
  {
    company: 'Outlier',
    position: 'Prompt Engineer',
    period: 'October 2024- January 2025',
    description: 'Developing and optimizing prompts for large language models and AI applications.',
    icon: Brain,
  },
  {
    company: 'CodSoft',
    position: 'AI/ML Intern',
    period: 'July 2024- September 2024',
    description: 'Worked on machine learning projects and gained hands-on experience with AI technologies.',
    icon: Database,
  },
  {
    company: 'COSMIC365.AI',
    position: 'Web Development Intern',
    period: ' May 2024- July 2024',
    description: 'Developed web applications using modern technologies and frameworks.',
    icon: Code,
  },
];

const Experience = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <div className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <SectionTitle title="Experience" />

      <div className="relative">
        {/* Timeline line */}
        <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-blue-500/30" />

        <div className="space-y-12">
          {experiences.map((exp, index) => (
            <div
              key={exp.company}
              className={`flex items-center ${
                index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'
              }`}
            >
              {/* Content */}
              <div className={`w-1/2 ${index % 2 === 0 ? 'pr-12 text-right' : 'pl-12'}`}>
                <div className="bg-black/30 backdrop-blur-lg rounded-lg p-6 shadow-xl">
                  <h3 className="text-xl font-semibold text-blue-400">{exp.position}</h3>
                  <p className="text-lg font-medium">{exp.company}</p>
                  <p className="text-sm text-gray-400 mb-2">{exp.period}</p>
                  <p className="text-gray-300">{exp.description}</p>
                </div>
              </div>

              {/* Icon */}
              <div className="relative z-10">
                <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center">
                  <exp.icon className="w-6 h-6 text-white" />
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

export default Experience;