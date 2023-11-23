import React from 'react';
import { motion } from 'framer-motion';
import styles from './style.module.scss';
import Image from 'next/image';
import { useInView } from 'react-intersection-observer';
import title from '../../../../public/title.svg';
import slogan from '../../../../public/slogan.svg';

function Index() {
  const titleVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 2, ease: 'easeOut' },
    },
  };

  const sloganVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 1, ease: 'easeOut', delay: 0.5 },
    },
  };

  const [titleRef, titleInView] = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });

  const [sloganRef, sloganInView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  return (
    <div className={styles.main}>
      {/* Set the background image using CSS */}
      <div className={styles.backgroundImage}></div>

      {/* Content on top of the background image */}
      <div className={styles.content}>
        <motion.div
          ref={titleRef}
          initial="hidden"
          animate={titleInView ? 'visible' : 'hidden'}
          variants={titleVariants}
          className='flex items-center jusitfy-center'
        >
          <Image src={title} alt="title svg" />
        </motion.div>
        <motion.div
          ref={sloganRef}
          initial="hidden"
          animate={sloganInView ? 'visible' : 'hidden'}
          variants={sloganVariants}
          className='flex items-center justify-center'
        >
          <Image src={slogan} alt="slogan svg" className="w-[70%] m-[1rem] " />
        </motion.div>
      </div>
    </div>
  );
}

export default Index;
