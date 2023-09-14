import React from 'react';
import { motion } from 'framer-motion';
import cvPath from './Documents/DavidKramerCV.pdf'
const CircleImage = ({ imgSrc, link }) => {
  const transition = {
    duration: 0.3,
    ease: [0.43, 0.13, 0.23, 0.96],
  };

  const hoverStyle = {
    scale: 1.5,
    rotateY: 20,
    boxShadow: "0px 10px 20px rgba(0,0,0,0.2)"
  };

  const isExternal = link && link.length > 0;

  const handleClick = (e) => {
    if (cvPath) {
      e.preventDefault();
      window.open(cvPath, '_blank');
    }
  };

  return (
    <motion.div
      initial={false}
      whileHover={hoverStyle}
      transition={transition}
      className="rounded-full overflow-hidden relative"
      style={{
        width: '50px',
        height: '50px',
        perspective: '1000px'
      }}
    >
      <motion.img
        src={imgSrc}
        alt="User"
        className="object-cover w-full h-full"
        whileHover={{ scale: 0.85, rotateY: -20 }}
        transition={transition}
      />
      <motion.div
        className="absolute inset-0 bg-black opacity-50"
        initial={{ opacity: 0 }}
        whileHover={{ opacity: 0.5 }}
        transition={transition}
      />
      <motion.a
        href={link || '#'}
        target={isExternal ? '_blank' : undefined}
        rel="noopener noreferrer"
        className="absolute inset-0 flex justify-center items-center"
        onClick={handleClick}
        whileHover={{ scale: 0.85 }}
        transition={transition}
      />
    </motion.div>
  );
};

export default CircleImage;
