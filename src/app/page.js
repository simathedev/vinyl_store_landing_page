'use client';
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { AnimatePresence } from 'framer-motion';
import styles from './page.module.css';
import About from './components/About';
import Products from './components/Products';
import Team from './components/Team';
import Question from './components/Question';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Main from './components/Main';
import SplashScreen from './components/SplashScreen';
import Header from './components/Header';
import { useInView } from 'react-intersection-observer';

export default function Home() {
  const [showMain, setShowMain] = useState(false);

  const handleSplashComplete = () => {
    setShowMain(true);
  };
  useEffect(() => {
    // Simulate a delay before showing the main component
    const timer = setTimeout(() => {
      setShowMain(true);
    }, 3000); // Adjust the duration as needed (3000 = 3 seconds)

    return () => clearTimeout(timer);
  }, []);

  return (
    <main className={styles.main}>
      <AnimatePresence exit={{ opacity: 0 }}>
      {!showMain ? (
       <SplashScreen onComplete={handleSplashComplete} />
      ) : (
        <>
        <Header/>
        <div id="main">
        <Main />
        </div>
        <div id="about">
        <About />
        </div>
        <div id="products">
        <Products />
        </div>
        <div id="team">
        <Team />
        </div>
        <div id="questions">
        <Question />
        </div>
        <div id="contact">
        <Contact />
        </div>         
        <Footer id='footer'/>
        </>
      )}
      </AnimatePresence>
    </main>
  )
}
