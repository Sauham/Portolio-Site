import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Download } from 'lucide-react';

const Resume = () => {
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });

  

  return (
    <motion.div
      initial={{ opacity: 0, x: 100 }}
      animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 100 }}
      transition={{ duration: 0.8 }}
      className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto"
    >
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 50 }}
        animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
        transition={{ duration: 0.5 }}
        className="text-center mb-12"
      >
        <h2 className="text-4xl font-bold mb-4">Resume</h2>
        <div className="w-20 h-1 bg-blue-500 mx-auto" />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="bg-black/30 backdrop-blur-lg rounded-lg p-8 shadow-xl max-w-4xl mx-auto"
      >
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 mb-8">
          <div>
            <h3 className="text-2xl font-semibold mb-4">Download My Resume</h3>
            <p className="text-gray-300">
              Get a detailed overview of my skills, experience, and qualifications.
            </p>
          </div>
          <a href='/Sauham_Resume.pdf'  target="_blank" rel="noopener noreferrer" download>
          <button
            className="inline-flex items-center px-6 py-3 bg-blue-600 hover:bg-blue-700 transition-colors rounded-lg text-white font-medium"
          >
            <Download className="w-5 h-5 mr-2" />
            Download Resume
          </button>
          </a>
        </div>

        <div className="border-t border-blue-500/30 pt-8">
          <h4 className="text-xl font-semibold mb-6">Quick Overview</h4>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <h5 className="text-lg font-medium text-blue-400">Education</h5>
              <p>B.Tech in Artificial Intelligence</p>
              <p className="text-sm text-gray-400">Sage University Indore</p>
            </div>
            <div className="space-y-4">
              <h5 className="text-lg font-medium text-blue-400">Current Roles</h5>
              <div>
                <p>AI/ML Engineer at SETV Global</p>
                <p className="text-sm text-gray-400">Present</p>
              </div>
              <div>
                <p>Prompt Engineer at Outlier</p>
                <p className="text-sm text-gray-400">Present</p>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default Resume;