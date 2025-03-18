import React from 'react';
import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';
import { Github, Linkedin, Code2 } from 'lucide-react';
import SplitText from './SplitText';

interface HeroProps {
  isDark?: boolean;
}

const Hero: React.FC<HeroProps> = ({ isDark = true }) => {
  return (
    <div className="min-h-screen flex flex-col-reverse md:flex-row items-center justify-between px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto py-20 md:py-0">
      <div className="flex-1 pr-0 md:pr-8 text-center md:text-left mt-8 md:mt-0">
        <div className="mb-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative">
              <h1 className="text-6xl md:text-8xl font-bold mb-6 relative z-10">
                <SplitText
                  className={`inline-block ${
                    isDark ? 'text-white' : 'text-gray-900'
                  }`}
                >
                  Hi, I'm Sauham
                </SplitText>
              </h1>
              <div 
                className={`absolute inset-0 blur-2xl opacity-30 ${
                  isDark ? 'bg-blue-500' : 'bg-blue-600'
                }`}
              />
            </div>
          </motion.div>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className={`text-2xl md:text-3xl font-light mb-6 ${
              isDark ? 'text-blue-300' : 'text-blue-600'
            }`}
          >
            Nice to meet you!
          </motion.p>
        </div>

        <div className={`text-xl sm:text-2xl mb-8 ${
          isDark ? 'text-blue-400' : 'text-blue-600'
        }`}>
          <TypeAnimation
            sequence={[
              'AI Engineer',
              2000,
              'Machine Learning Developer',
              2000,
              'Full Stack Developer',
              2000,
              'Data Analyst',
              2000,
              'Data Scientist',
              2000,
            ]}
            wrapper="span"
            speed={50}
            repeat={Infinity}
          />
        </div>

        <div className="flex justify-center md:justify-start space-x-6">
          <a
            href="https://github.com/Sauham"
            target="_blank"
            rel="noopener noreferrer"
            className={`transform hover:scale-110 transition-transform ${
              isDark ? 'text-white hover:text-blue-400' : 'text-gray-900 hover:text-blue-600'
            }`}
          >
            <Github className="w-8 h-8" />
          </a>
          <a
            href="https://www.linkedin.com/in/sauham-vyas/"
            target="_blank"
            rel="noopener noreferrer"
            className={`transform hover:scale-110 transition-transform ${
              isDark ? 'text-white hover:text-blue-400' : 'text-gray-900 hover:text-blue-600'
            }`}
          >
            <Linkedin className="w-8 h-8" />
          </a>
          <a
            href="https://leetcode.com/u/Sauham_Vyas/"
            target="_blank"
            rel="noopener noreferrer"
            className={`transform hover:scale-110 transition-transform ${
              isDark ? 'text-white hover:text-blue-400' : 'text-gray-900 hover:text-blue-600'
            }`}
          >
            <Code2 className="w-8 h-8" />
          </a>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        className="relative"
      >
        <div className="w-64 h-64 md:w-96 md:h-96 relative">
          <div className={`absolute inset-0 ${isDark ? 'bg-blue-500/20' : 'bg-blue-600/20'} rounded-full animate-pulse`}></div>
          <div className={`absolute inset-4 ${isDark ? 'bg-blue-500/20' : 'bg-blue-600/20'} rounded-full animate-pulse delay-75`}></div>
          <div className={`absolute inset-8 ${isDark ? 'bg-blue-500/20' : 'bg-blue-600/20'} rounded-full animate-pulse delay-150`}></div>
          <img
            src="https://avatars.githubusercontent.com/Sauham"
            alt="Profile"
            className={`absolute inset-0 w-full h-full object-cover rounded-full border-4 ${
              isDark ? 'border-blue-500' : 'border-blue-600'
            } shadow-lg`}
          />
          <div className={`absolute -inset-4 border-2 ${
            isDark ? 'border-blue-500/50' : 'border-blue-600/50'
          } rounded-full animate-spin-slow`}></div>
        </div>
      </motion.div>
    </div>
  );
};

export default Hero;