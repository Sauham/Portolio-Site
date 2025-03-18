import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ExternalLink, Github, Brain, Database, LineChart, Bot } from 'lucide-react';
import TiltedCard from './TiltedCard';
import SectionTitle from './SectionTitle';

const projects = [
  {
    title: 'Data Extraction and Sentiment Analysis',
    description: 'This script extracts text content from a list of URLs, processes the text, and performs sentiment analysis. The output is saved as an Excel file with sentiment scores.',
    url: 'https://github.com/Sauham/Data-Extraction-from-URLs',
    tags: ['Python', 'Spacy', 'NLP', 'CSV'],
    image: 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3',
    icon: Bot
  },
  {
    title: 'Document Chat Application',
    description: 'AI-powered RAG-based Chatbot using LangChain, LlamaIndex, and OpenAI APIs, enabling efficient retrieval-augmented generation (RAG) for answering document-based queries.',
    url: 'https://github.com/Sauham/Document-RAG-Chat-Application',
    tags: ['LangChain', 'LlamaIndex', 'OpenAI', 'RAG'],
    image: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5',
    icon: Bot
  },
  {
    title: 'Fetus Location and Organ Detection',
    description: 'Object detection pipeline using YOLOv8 and Roboflow datasets for identifying fetal organs. Features automated data handling and optimized detection using Ultralytics and OpenCV.',
    url: 'https://github.com/Sauham/CV-Projects',
    tags: ['YOLOv8', 'OpenCV', 'Computer Vision', 'Object Detection'],
    image: 'https://images.unsplash.com/photo-1576086213369-97a306d36557',
    icon: Brain
  },
  {
    title: 'Multi Agent System',
    description: 'AI Use Case Generator that automates market research and GenAI use case generation using CrewAI, LangChain, and Streamlit, leveraging AI agents to analyze industry trends.',
    url: 'https://github.com/Sauham/Multi-Agent-System',
    tags: ['CrewAI', 'LangChain', 'Streamlit', 'AI Agents'],
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71',
    icon: Database
  },
  {
    title: 'Stock Market Prediction',
    description: 'Machine learning-based stock price prediction using ARIMA and Gradient Boosting Regressor. Utilizes yfinance for data fetching and implements comprehensive analysis using Python.',
    url: 'https://github.com/Sauham/stock-market-prediction',
    tags: ['Machine Learning', 'ARIMA', 'Python', 'Data Analysis'],
    image: 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3',
    icon: LineChart
  }
];

const Projects = ({ isDark = true }) => {
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });

  return (
    <div className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <SectionTitle title="Projects" isDark={isDark} />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {projects.map((project, index) => (
          <motion.div
            key={project.title}
            initial={{ opacity: 0, y: 50 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            ref={index === 0 ? ref : undefined}
            className={`bg-opacity-30 backdrop-blur-lg rounded-lg overflow-hidden ${
              isDark ? 'bg-black/30' : 'bg-white/70'
            }`}
          >
            <div className="relative h-48">
              <div className="absolute inset-0">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
                <div className={`absolute inset-0 ${
                  isDark ? 'bg-black/50' : 'bg-white/50'
                }`} />
              </div>
              <div className="absolute top-4 right-4">
                <project.icon className={`w-8 h-8 ${
                  isDark ? 'text-blue-400' : 'text-blue-600'
                }`} />
              </div>
            </div>

            <div className="p-6">
              <h3 className={`text-xl font-semibold mb-3 ${
                isDark ? 'text-white' : 'text-gray-900'
              }`}>
                {project.title}
              </h3>
              <p className={`text-sm mb-4 ${
                isDark ? 'text-gray-300' : 'text-gray-600'
              }`}>
                {project.description}
              </p>
              <div className="space-y-4">
                <div className="flex flex-wrap gap-2">
                  {project.tags.map(tag => (
                    <span
                      key={tag}
                      className={`text-xs px-2 py-1 rounded ${
                        isDark
                          ? 'bg-blue-500/20 text-blue-300'
                          : 'bg-blue-100 text-blue-600'
                      }`}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <a
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`inline-flex items-center justify-center w-full px-4 py-2 rounded-lg text-white font-medium transition-all duration-300 group ${
                    isDark
                      ? 'bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-500 hover:to-blue-600'
                      : 'bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-400 hover:to-blue-500'
                  }`}
                >
                  <Github className="w-5 h-5 mr-2" />
                  <span>View Project</span>
                  <ExternalLink className="w-4 h-4 ml-2 opacity-0 group-hover:opacity-100 transform translate-x-[-10px] group-hover:translate-x-0 transition-all" />
                </a>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Projects;