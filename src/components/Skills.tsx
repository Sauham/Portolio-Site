import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Brain, Code, Database, Terminal, Bot, BarChart as ChartBar, Network, Globe, Server, Cloud, LineChart } from 'lucide-react';

const skillCategories = [
  {
    title: 'AI/ML',
    icon: Brain,
    skills: [
      { name: 'TensorFlow', icon: Bot },
      { name: 'PyTorch', icon: Brain },
      { name: 'Scikit-learn', icon: ChartBar },
      { name: 'OpenCV', icon: Network },
      { name: 'NLP', icon: Bot },
      { name: 'Computer Vision', icon: Network }
    ],
  },
  {
    title: 'Web Development',
    icon: Code,
    skills: [
      { name: 'React.js', icon: Code },
      { name: 'Node.js', icon: Server },
      { name: 'TypeScript', icon: Code },
      { name: 'Tailwind CSS', icon: Globe },
      { name: 'Next.js', icon: Code },
      { name: 'Express.js', icon: Server }
    ],
  },
  {
    title: 'Data Science',
    icon: Database,
    skills: [
      { name: 'Pandas', icon: ChartBar },
      { name: 'NumPy', icon: Database },
      { name: 'Data Analysis', icon: LineChart },
      { name: 'Data Visualization', icon: ChartBar },
      { name: 'SQL', icon: Database },
      { name: 'MongoDB', icon: Database }
    ],
  },
  {
    title: 'Tools & Technologies',
    icon: Terminal,
    skills: [
      { name: 'Git', icon: Code },
      { name: 'Docker', icon: Cloud },
      { name: 'AWS', icon: Cloud },
      { name: 'Linux', icon: Terminal },
      { name: 'Jupyter', icon: ChartBar },
      { name: 'VS Code', icon: Code }
    ],
  },
];

const Skills = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
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
        <h2 className="text-4xl font-bold mb-4">Skills</h2>
        <div className="w-20 h-1 bg-blue-500 mx-auto" />
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {skillCategories.map((category, index) => (
          <motion.div
            key={category.title}
            initial={{ opacity: 0, y: 50 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="bg-black/30 backdrop-blur-lg rounded-lg p-6 shadow-xl"
          >
            <div className="flex items-center mb-4">
              <category.icon className="w-6 h-6 text-blue-400 mr-2" />
              <h3 className="text-xl font-semibold">{category.title}</h3>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {category.skills.map((skill) => (
                <div
                  key={skill.name}
                  className="bg-blue-900/30 rounded-lg p-3 flex items-center justify-center transform hover:scale-105 transition-transform group"
                >
                  <skill.icon className="w-4 h-4 mr-2 text-blue-400 group-hover:text-blue-300" />
                  <span>{skill.name}</span>
                </div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default Skills;