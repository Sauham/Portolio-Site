import React, { useState } from 'react';
import { motion } from 'framer-motion';

const TiltedCard = ({
  imageSrc,
  altText,
  captionText,
  containerHeight = '300px',
  containerWidth = '300px',
  imageHeight = '300px',
  imageWidth = '300px',
  rotateAmplitude = 12,
  scaleOnHover = 1.2,
  showMobileWarning = false,
  showTooltip = true,
  displayOverlayContent = true,
  overlayContent,
}) => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width;
    const y = (e.clientY - rect.top) / rect.height;
    setMousePosition({ x: x - 0.5, y: y - 0.5 });
  };

  return (
    <motion.div
      className="relative"
      style={{
        height: containerHeight,
        width: containerWidth,
        perspective: '1000px',
      }}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => {
        setIsHovered(false);
        setMousePosition({ x: 0, y: 0 });
      }}
      animate={{
        rotateX: -mousePosition.y * rotateAmplitude,
        rotateY: mousePosition.x * rotateAmplitude,
        scale: isHovered ? scaleOnHover : 1,
      }}
      transition={{
        type: 'spring',
        stiffness: 300,
        damping: 30,
        mass: 0.5,
      }}
    >
      <div
        className="absolute inset-0 rounded-lg overflow-hidden"
        style={{
          transformStyle: 'preserve-3d',
          transform: 'translateZ(0)',
        }}
      >
        <img
          src={imageSrc}
          alt={altText}
          className="object-cover w-full h-full"
          style={{
            height: imageHeight,
            width: imageWidth,
          }}
        />
        {displayOverlayContent && (
          <motion.div
            className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: isHovered ? 1 : 0 }}
          >
            {overlayContent}
          </motion.div>
        )}
      </div>
      {showTooltip && (
        <motion.div
          className="absolute bottom-0 left-0 right-0 text-center p-2 bg-black bg-opacity-75 text-white rounded-b-lg"
          initial={{ opacity: 0 }}
          animate={{ opacity: isHovered ? 1 : 0 }}
        >
          {captionText}
        </motion.div>
      )}
    </motion.div>
  );
};

export default TiltedCard;