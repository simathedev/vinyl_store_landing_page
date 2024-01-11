import React from 'react';
import { motion } from 'framer-motion';
import styles from './style.module.scss';
import { recordDetails } from './data';
import Image from 'next/image';
import { useInView } from 'react-intersection-observer';

// Record component
function Record({ record }) {
  const hoverEffect = {
    hover: {
      scale: 1.05,
      transition: { duration: 0.3 },
    },
  };

  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  return (
    <motion.div
      className={`${styles.records} flex flex-col items-center justify-center`}
      //ref={ref}
      initial="hidden"
      //animate={inView ? 'visible' : 'hidden'}
      whileInView="visible"
      variants={hoverEffect}
      whileHover="hover"
    >
      <motion.div
        className="w-full"
        variants={{ hidden: { opacity: 0, scale: 0 }, visible: { opacity: 1, scale: 1 } }}
      >
        <Image src={record.image} alt={record.name} width={250} height={250} className="object-cover w-full" />
      </motion.div>
      <motion.div
        className="my-4 xs:h-[60px] sm:h-[60px] md:h-[80px] lg:h-[80px] xl:h-[80px] w-full text-center"
        variants={{ hidden: { opacity: 0 }, visible: { opacity: 1 } }}
      >
        <p className="text-lg font-semibold">{record.name}</p>
        <p className="text-sm">{record.artist}</p>
      </motion.div>
    </motion.div>
  );
}

// Index component
function Index() {
  const stagger = {
    hidden: { opacity: 0, scale: 0 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: [0.43, 0.23, 0.23, 0.43],
      },
    },
  };

  const fadeInVariant = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, delay: 0.2, ease: 'easeInOut' } },
  };

  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });

  const groupedRecords = recordDetails.reduce((grouped, record) => {
    const category = record.category;

    if (!grouped[category]) {
      grouped[category] = [];
    }

    grouped[category].push(record);
    return grouped;
  }, {});

  return (
    <motion.div 
    //ref={ref} 
    initial="hidden" 
   // animate={inView ? "visible" : "hidden"} 
   whileInView="visible"
    variants={fadeInVariant} 
    className={styles.products}
    >
      <h1>Records</h1>
      {/* ... */}
      <div className={`${styles.vinyl} w-full sm:w-3/4 md:w-full lg:w-3/4 xl:w-3/4`}>
        {Object.entries(groupedRecords).map(([category, records]) => (
          <div key={category} className={styles.category}>
            <h2 className={styles.category}>{category}</h2>
            <motion.div
              className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-2"
              initial="hidden"
              //animate="visible"
              whileInView="visible"
              variants={{ visible: stagger }}
            >
              {records.map((record) => (
                <Record key={record.id} record={record} />
              ))}
            </motion.div>
          </div>
        ))}
      </div>
    </motion.div>
  );
}

export default Index;
