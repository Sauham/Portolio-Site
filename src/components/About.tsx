import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const About = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <div className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 50 }}
        animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
        transition={{ duration: 0.5 }}
        className="text-center mb-12"
      >
        <h2 className="text-4xl font-bold mb-4">About Me</h2>
        <div className="w-20 h-1 bg-blue-500 mx-auto" />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="bg-black/30 backdrop-blur-lg rounded-lg p-8 shadow-xl max-w-3xl mx-auto"
      >
        <p className="text-lg leading-relaxed mb-6">
          I am a B.Tech student specializing in Artificial Intelligence at Sage University Indore, 
          with a passion for AI/ML, web development, and data analysis. My academic journey has 
          equipped me with expertise in technologies like React.js, Node.js, OpenCV, and Scikit-learn, 
          alongside a solid understanding of machine learning algorithms and exploratory data analysis techniques.
        </p>
        <p className="text-lg leading-relaxed mb-6">
          Currently, I serve as an AI/ML Engineer at SETV Global and a Prompt Engineer at Outlier, 
          where I apply my skills in NLP, Computer Vision, and AI-driven solutions. Previously, 
          I interned at CodSoft and COSMIC365.AI, gaining hands-on experience in artificial 
          intelligence and web development.
        </p>
        <p className="text-lg leading-relaxed">
          My goal is to bridge the gap between technology and impactful real-world applications. 
          With a strong technical foundation and a drive for innovation, I aim to contribute 
          meaningfully to the advancement of AI and related fields.
        </p>
      </motion.div>
    </div>
  );
};

export default About;