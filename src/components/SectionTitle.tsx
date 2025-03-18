import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import SplitText from './SplitText';

interface SectionTitleProps {
  title: string;
  isDark?: boolean;
}

const SectionTitle: React.FC<SectionTitleProps> = ({ title, isDark = true }) => {
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.5
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0 }}
      animate={inView ? { opacity: 1 } : { opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="text-center mb-16 relative z-10"
    >
      <div className={`relative ${isDark ? 'text-white' : 'text-gray-900'}`}>
        <h2 className="text-6xl font-bold relative z-10">
          <SplitText className="inline-block">
            {title}
          </SplitText>
        </h2>
        <div 
          className={`absolute inset-0 blur-xl opacity-20 ${
            isDark ? 'bg-blue-500' : 'bg-blue-600'
          }`}
        />
      </div>
      <motion.div
        initial={{ width: 0 }}
        animate={{ width: '8rem' }}
        transition={{ duration: 0.8, delay: 0.5 }}
        className={`h-1 mx-auto mt-6 ${isDark ? 'bg-blue-500' : 'bg-blue-600'}`}
      />
    </motion.div>
  );
};

export default SectionTitle;