import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

interface SplitTextProps {
  children: string;
  className?: string;
  isDark?: boolean;
}

const SplitText: React.FC<SplitTextProps> = ({ children, className = '', isDark = true }) => {
  const containerRef = useRef<HTMLDivElement>(null);

  const words = children.split(' ');

  return (
    <div ref={containerRef} className={`${className}`} aria-label={children}>
      {words.map((word, wordIndex) => (
        <motion.span
          key={wordIndex}
          className="inline-block mr-[0.25em] last:mr-0"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.5,
            delay: wordIndex * 0.2,
            ease: [0.2, 0.65, 0.3, 0.9],
          }}
        >
          {word.split('').map((char, charIndex) => (
            <motion.span
              key={charIndex}
              className="inline-block"
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.3,
                delay: wordIndex * 0.2 + charIndex * 0.05,
                ease: [0.2, 0.65, 0.3, 0.9],
              }}
            >
              {char}
            </motion.span>
          ))}
        </motion.span>
      ))}
    </div>
  );
};

export default SplitText;