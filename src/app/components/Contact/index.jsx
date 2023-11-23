import React, {useState} from 'react';
import styles from './style.module.scss'; // Import a CSS module for styling
import { FaEnvelope,FaPhoneAlt } from "react-icons/fa";
import{FaLocationDot} from "react-icons/fa6";
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Button from './Button';

function Index() {
  const [isActive, setIsActive] = useState(false);
  const contactDetails = [
    { 
        id: 1,
        name: 'location',
        data:'3 Oak Lane, Sandton, 2196',
        image: <FaLocationDot/> 
    },
    { 
    id: 2,
    name: ' phone',
    data:'0116789900',
    image: <FaPhoneAlt/>
     },
    { 
    id: 3,
    name: 'email',
    data:'hello@vinylodyssey.co.za',
    image:  <FaEnvelope/>
    },
   
]

const fadeInVariant = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, delay:0.2, ease: 'easeInOut' } },
};

const { ref, inView } = useInView({
  triggerOnce: true,
  threshold: 0.3, // Adjust this threshold as needed
});

  return (
    <motion.div ref={ref} initial="hidden" animate={inView ? "visible" : "hidden"} variants={fadeInVariant} className={styles.main}>
           <h1>Reach us</h1>
        <div className={styles.contactInfo}>
        <p className='w-[60%] my-8 xs:text-[16px] sm:text-[16px] md:text-[18px] lg:text-[22px] xl:text-[22px]'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consequatur, ab!
        </p>
        {contactDetails.map((contact) => (
            <div key={contact.id} className={styles.contactDetails}>
             {contact.image}
             <p className='xs:text-[16px] sm:text-[16px] md:text-[22px] lg:text-[22px] xl:text-[22px]'>{contact.data}</p>
            </div>
          ))}
        </div>
    <div className={`${styles.container} xs:w-[80%] sm:w-[80%] md:w-[70%] lg:w-[60%] xl:w-[60%]`}>
      <div className={styles.formContainer}>
        <form className={`${styles.form} xs:text-[16px] sm:text-[16px] md:text-[22px] lg:text-[24px] xl:text-[24px]`}>
          <div className={`${styles.formGroup}`}>
            <label htmlFor="name">Name:</label>
            <input type="text" id="name" name="name" />
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="surname">Surname:</label>
            <input type="text" id="surname" name="surname" />
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="email">Email Address:</label>
            <input type="email" id="email" name="email" />
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="subject">Subject:</label>
            <input type="text" id="subject" name="subject" />
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="message">Message:</label>
            <textarea id="message" name="message" rows="4" />
          </div>
          <div className={styles.buttonDiv}>
          <button type="submit" className={`${styles.submitButton} xs:text-[1rem] sm:text-[1rem] md:text-[1.3rem] lg:text-[1.4rem] xl:text-[1.4rem]`}>
            Submit
        </button>
        {/*<Button isActive={isActive} toggleMenu={() => {setIsActive(!isActive)}}/>*/}
          </div>
        </form>
      </div>
    </div>
    </motion.div>
  );
}

export default Index;
