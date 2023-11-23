import React from 'react';
import Image from 'next/image';
import title from '../../../../public/title.svg';
import { contactDetails, links } from './data';
import styles from './style.module.scss';
import { FaTwitter,FaFacebook, FaLinkedin  } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import { Link as ScrollLink } from 'react-scroll';

function Index() {

  const footerLinks = [
    {
        title: <FaFacebook />,
        href: "/"
    },
    {
        title: <FaLinkedin />,
        href: "/"
    },
    {
        title: <AiFillInstagram />,
        href: "/"
    },
    {
        title: <FaTwitter />,
        href: "/"
    }
]

  return (
    <div className={styles.main}>
      <div className={`${styles.container} xs:flex-col sm:flex-col md:flex-col lg:flex-row xl:flex-row`}>
        <div className={styles.footerTitle}>
       {/* <h3 className='font-bold text-[1.4rem] '>Vinyl Oddyssey</h3> */}
       <Image src={title} alt="title svg" className='w-[80%]' />
      <p className=' xs:hidden sm:hidden md:hidden lg:block xl:block'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor labore cum sequi, ut atque minus quod inventore vero alias eaque, numquam nesciunt voluptas.</p>
        </div>
      {/* Mapping links separately */}
      <div className={`${styles.link}`}>
  <h3 className='font-bold text-[1.4rem] '>Links</h3>
  {links.map((link, i) => (
    <ScrollLink
    key={i}
    to={link.href} // Use the href as the target ID
    spy={true}
    smooth={true}
    duration={500}
  >
    <a key={`${i}`} href={link.href} className='  xs:text-[14px] sm:text-[14px] md:text-[16px] lg:text-[18px] xl:text-[18px]'>
      {link.title} {/* Use the 'title' property instead of 'svg' */}
    </a>
    </ScrollLink>
  ))}
</div>

      {/* Mapping footerLinks separately */}
      <div className={styles.footerlink}>
        <h3 className='font-bold text-[1.4rem]'>Social Media</h3>
        {footerLinks.map((link, i) => (
          <a key={`${i}`} href={link.href} className='xs:text-[14px] sm:text-[14px] md:text-[16px] lg:text-[18px] xl:text-[18px]'>
            {link.title}
          </a>
        ))}
      </div>
      
      <div className={styles.footerlink}>
        <h3 className='font-bold text-[1.4rem]'>Get In Touch</h3>
        {contactDetails.map((link, i) => (
          <a key={`${i}`} className='xs:text-[14px] sm:text-[14px] md:text-[16px] lg:text-[18px] xl:text-[18px]' >
            {link.title}
          </a>
        ))}
      </div>
      </div>
      <div className={styles.copyright}>
        <p className='xs:text-[14px] mb-2 sm:text-[14px] md:text-[16px] lg:text-[18px] xl:text-[18px]'>
        © Vinyl Oddyssey 2023. All Rights Reserved.
        </p>
        </div>
    </div>
  );
}

export default Index;
