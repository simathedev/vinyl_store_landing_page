import styles from './style.module.scss';
import { motion } from 'framer-motion';
import { links, footerLinks } from './data';
import { perspective, slideIn } from "./anim";
import { Link as ScrollLink } from 'react-scroll';

export default function index() {
  return (
    <div className={styles.nav}>
       <div className={styles.body}>
        {
            links.map( (link, i) => {
                const { title, href } = link;
                return (
                    <div key={`b_${i}`} className={styles.linkContainer}>
                        <motion.div
                          href={href}
                          custom={i}
                          variants={perspective}
                          initial="initial"
                          animate="enter"
                          exit="exit"
                        >
                              <ScrollLink
              to={link.href} // Use the href as the target ID
              spy={true}
              smooth={true}
              duration={500}
            >
                            <a className='xs:text-[1.2rem] sm:text-[1.2rem] md:text-[2rem] lg:text-[2.1rem] xl:text-[2.1rem]'>
                                {title}
                            </a>
                            </ScrollLink>
                        </motion.div>
                    </div>
                )
            })
        }
       </div>
       <motion.div className={styles.footer}>
            {
                footerLinks.map( (link, i) => {
                    const { title, href } = link;
                    return (
                        <motion.a 
                            variants={slideIn}
                            custom={i} 
                            initial="initial"
                            animate="enter"
                            exit="exit"
                            key={`f_${i}`}
                        >
                            {title}
                        </motion.a>
                    )
                })
            }
       </motion.div>
    </div>
  )
}