'use client';
import React, { useEffect } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import styles from './style.module.scss';
import title from '../../../../public/title.svg';

const SplashScreen = ({ onComplete }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      onComplete(); // Callback to signal completion
    }, 3000);

    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <motion.div
      className={styles.main}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <motion.div
        className={styles.box} // Use the provided styles for the box
        animate={{
          scale: [1, 2, 2, 1, 1],
          rotate: [0, 360, 180, 180, 0],
          borderRadius: ["0%", "50%", "50%", "50%", "0%"]
        }}
        transition={{
          duration: 2,
          ease: "easeInOut",
          times: [0, 0.2, 0.5, 0.8, 1],
          repeat: Infinity,
          repeatDelay: 1
        }}
      />
       <Image src={title} alt="title svg"  />
    </motion.div>
  );
};

export default SplashScreen;
