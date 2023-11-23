import { motion } from 'framer-motion';
import styles from './style.module.scss';
import { useState } from 'react';

export default function Button({ isActive }) {
  const [submitted, setSubmitted] = useState(false);
  

  const toggleMenu = () => {
    setSubmitted(!submitted);
  };

  return (
    <div className={styles.button}>
      <motion.div
        className={styles.slider}
        animate={{ top: isActive ? '-100%' : '0%' }}
        transition={{ duration: 0.5, type: 'tween', ease: [0.76, 0, 0.24, 1] }}
      >
        <div className={styles.el} onClick={toggleMenu}>
          <PerspectiveText label="Submit" />
        </div>
        {submitted ? (
          <div className={styles.el} onClick={toggleMenu}>
            <PerspectiveText label="Submitted!" />
          </div>
        ) : null}
      </motion.div>
    </div>
  );
}

function PerspectiveText({ label }) {
  return (
    <div className={styles.perspectiveText}>
      <p>{label}</p>
      <p>{label}</p>
    </div>
  );
}
