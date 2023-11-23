'use client';
import React, { useState } from 'react';
import styles from './style.module.scss';
import { BsChevronDown, BsChevronRight } from 'react-icons/bs';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

function Index() {
  // Array of questions and answers
  const data = [
    { question: 'What is the condition of the vinyl records you sell?', answer: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore eos natus nemo ad laboriosam atque quasi dicta dolorum molestiae culpa.' },
    { question: 'Do you offer international shipping for vinyl records?', answer: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore eos natus nemo ad laboriosam atque quasi dicta dolorum molestiae culpa.' },
    { question: 'Can I request a specific vinyl record that is not listed on your website?', answer: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore eos natus nemo ad laboriosam atque quasi dicta dolorum molestiae culpa.' },
    { question: 'What genres of music do you specialize in?', answer: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore eos natus nemo ad laboriosam atque quasi dicta dolorum molestiae culpa.' },
    { question: 'How do you handle returns or exchanges for vinyl records?',
     answer: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore eos natus nemo ad laboriosam atque quasi dicta dolorum molestiae culpa.' },
  ];
  // State to keep track of the selected question
  const [selectedQuestion, setSelectedQuestion] = useState(null);

  const fadeInVariant = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, delay:0.2, ease: 'easeInOut' } },
  };
  
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.3, // Adjust this threshold as needed
  });

  // Function to toggle the selected question
  const toggleQuestion = (index) => {
    setSelectedQuestion(selectedQuestion === index ? null : index);
  };

  return (
    <motion.div ref={ref} initial="hidden" animate={inView ? "visible" : "hidden"} variants={fadeInVariant} className={styles.main}>

      <h1 className='mb-[2.4rem] xs:text-[2rem] sm:text-[2rem] md:text-[3rem] lg:text-[4rem] xl:text-[4rem]'>Frequently Asked Questions</h1>
      {/* Map through the data array and render questions and answers */}
      {data.map((item, index) => (
        <div key={index} className={`${styles.question} w-[70%] xs:w-[70%] sm:w-[70%] md:w-[60%] lg:w-[70%] xl:w-[70%] `} onClick={() => toggleQuestion(index)}>
          <div className={styles.questionDiv}>
            {selectedQuestion === index ? <BsChevronDown /> : <BsChevronRight />}
          <h3 className='text-[18px] xs:text-[14px] sm:text-[14px] md:text-[18px] lg:text-[20px] xl:text-[20px]'>{item.question}</h3>
          </div>
          {/* Show the answer if the question is selected */}
          {selectedQuestion === index && <p className={`${styles.answer} text-[18px] xs:text-[14px] sm:text-[14px] md:text-[18px] lg:text-[20px] xl:text-[20px]`}>{item.answer}</p>}
        </div>
      ))}
    </motion.div>
  );
}

export default Index;
