'use client';
import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion';
import Button from './Button';
import styles from './style.module.scss';
import Nav from './Nav';

const menu = {
    open: {
        width: "480px",
        height: "650px",
        top: "-25px",
        right: "-25px",
        transition: { duration: 0.75, type: "tween", ease: [0.76, 0, 0.24, 1]}
    },
    closed: {
        width: "100px",
        height: "40px",
        top: "0px",
        right: "0px",
        transition: { duration: 0.75, delay: 0.35, type: "tween", ease: [0.76, 0, 0.24, 1]}
    }
}

if (typeof window !== 'undefined') {
if (window.innerWidth < 768) { // Assuming sm is below 768px
    menu.open.width = "70vw";
    menu.open.height = "80vh";
}

if (window.innerWidth < 480) { // Assuming xs is below 480px
    menu.open.width = "70vw";
    menu.open.height = "80vh";
}
}

export default function Index() {
    const [isActive, setIsActive] = useState(false);

    return (
        <div className={styles.header}>
            <motion.div 
                className={`${styles.menu} `}
                variants={menu}
                animate={isActive ? "open" : "closed"}
                initial="closed"
            >
                <AnimatePresence>
                    {isActive && <Nav />}
                </AnimatePresence>
            </motion.div>
            <Button isActive={isActive} toggleMenu={() => {setIsActive(!isActive)}}/>
        </div>
    )
}