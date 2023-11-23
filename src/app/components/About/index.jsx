import React from 'react';
import styles from './style.module.scss';
import Image from 'next/image';
import aboutSVG from '../../../../public/images/about.svg';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

function Index() {
  const fadeInVariant = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, delay:0.2, ease: 'easeInOut' } },
  };
  
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.5, 
  });
  return (

    <motion.div ref={ref} initial="hidden" animate={inView ? "visible" : "hidden"} variants={fadeInVariant}  className={`${styles.about} flex flex-col my-[4rem] w-[90%]`}>
        {/**<div className={styles.backgroundImage} /> */}  
        <Image src={aboutSVG} alt="title svg" className="xs:hidden sm:hidden md:block lg:block xl:block" /> 
        <div className={`${styles.aboutContainer} flex flex-col items-center absolute xs:left-6 sm:left-6 md:top-0 md:left-12 lg:top-12 xl:top-12 md:w-[70%] lg:w-[70%] xl:w-[70%] sm:w-full xs:w-full`}>
        <h1 className={` xs:text-[3rem] sm:text-[3rem] md:text-[4rem] lg:text-[4rem] xl:text-[4rem] xs:my-[1rem] sm:my-[1rem] md:my-[2rem] lg:my-[2rem] xl:my-[2rem]`}>About</h1>
        <div className={`${styles.paragraph} xs:text-[10px] w-[full] `}>
        <p className={`${styles.description} xs:w-[80%] sm:w-[70%] md:w-[70%] lg:w-[50%] xl:w-[50%] xs:text-[12px] sm:text-[14px] md:text-[16px] lg:text-[16px] xl:text-[16px]`}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae esse, omnis atque vel molestias dicta molestiae similique eum reprehenderit minima nemo veritatis obcaecati iste fugiat quidem rem! Dicta beatae, rerum explicabo dolores voluptates provident facere tenetur amet inventore in illo nam vel fugiat sunt obcaecati sed.</p>
        <p className={`${styles.description} xs:w-[80%] sm:w-[70%] md:w-[70%] lg:w-[50%] xl:w-[50%] xs:text-[12px] sm:text-[14px] md:text-[16px] lg:text-[16px] xl:text-[16px]`}>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nemo alias ratione et fuga a voluptates enim cupiditate ipsam odit doloribus, unde eius. Laudantium harum vitae distinctio maiores veritatis quaerat, possimus pariatur labore ad esse recusandae aspernatur nam repudiandae quae exercitationem tempore sint.</p>
        </div>
    </div>
    </motion.div>
  )
}

export default Index