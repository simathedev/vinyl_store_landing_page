import React, { useState } from 'react';
import styles from './style.module.scss';
import Image from 'next/image';
import { TbVinyl } from 'react-icons/tb';
import { FaItunesNote } from 'react-icons/fa';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

function Member({ member, setHoveredMember, hoveredMember }) {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <motion.div
      key={member.id}
      className={`${styles.teamMember} xs:w-[85%] sm:w-[90%] md:w-[90%] lg:w-[90%] xl:w-[90%] xs:flex-col sm:flex-col md:flex-row lg:flex-row xl:flex-row shadow-xl`}
      initial='hidden'
      animate={inView ? 'visible' : 'hidden'}
      variants={{
        hidden: { opacity: 0, scale: 0 },
        visible: {
          opacity: 1,
          scale: 1,
          transition: { delay: 0, duration: 0.9, ease: [0.43, 0.13, 0.23, 0.96] },
        },
      }}
      onMouseEnter={() => setHoveredMember(member.id)}
      onMouseLeave={() => setHoveredMember(null)}
      ref={ref}
    >
      <div className={styles.imageContainer}>
        <Image
          src={member.image}
          alt={member.name}
          width={250}
          height={250}
          className={`${styles.teamMemberImage} ${hoveredMember === member.id ? styles.rotateImage : ''}`}
        />
      </div>
      <div className={styles.textContainer}>
        <p className={`${styles.memberOccupation} font-bold xs:text-[14px] sm:text-[14px] md:text-[16px] lg:text-[18px] xl:text-[18px]}`}>{member.occupation}</p>
        <p className={`${styles.memberName} text-[2.7rem] mt-4`}>{member.name}</p>
        <p className={`${styles.memberDescription} py-6 xs:text-[16px] sm:text-[16px] md:text-[18px] lg:text-[22px] xl:text-[22px]`}>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit nisi vel enim suscipit! Sed nesciunt explicabo voluptates reiciendis consequuntur quidem.
        </p>
        <FaItunesNote />
        <p className={`${styles.memberTraits} xs:text-[14px] sm:text-[14px] md:text-[16px] lg:text-[18px] xl:text-[18px]`}>{member.favGenres}</p>
        <TbVinyl />
        <p className={`${styles.memberTraits} xs:text-[14px] sm:text-[14px] md:text-[16px] lg:text-[18px] xl:text-[18px]`}>{member.favAlbum}</p>
      </div>
    </motion.div>
  );
}

function Index() {
  const [hoveredMember, setHoveredMember] = useState(null);

  const teamMembers = [
    {
      id: 1,
      name: 'Thabo',
      occupation: 'CEO / Owner',
      favGenres: 'Soul & Alternative RNB',
      favAlbum: 'Black Radio III',
      image: '/images/p1.jpg',
    },
    {
      id: 2,
      name: 'Grace',
      occupation: 'CEO & Store Assistant',
      favGenres: 'Blues & Jazz',
      favAlbum: 'Batsumi',
      image: '/images/p2.jpg',
    },
    {
      id: 3,
      name: 'Enhle',
      occupation: 'Store Assistant',
      favGenres: 'Hip-Hop & Soul',
      favAlbum: 'To Pimp A Butterfly',
      image: '/images/p3.jpg',
    },
  ];

  return (
    <div className={styles.main}>
      <h1 className='xs:text-[2rem] sm:text-[2rem] md:text-[3rem] lg:text-[4rem] xl:text-[4rem]'>Meet The Team</h1>
      <p className={`${styles.description} text-[18px] xs:text-[14px] sm:text-[14px] md:text-[18px] lg:text-[20px] xl:text-[20px] w-[40%]`}>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Corporis, perspiciatis.
      </p>
      <div className={`${styles.teamMembers} gap-2 xs:flex-col sm:flex-col md:flex-row lg:flex-row xl:flex-row`}>
        {teamMembers.map((member, index) => (
          <Member
            key={member.id}
            member={member}
            setHoveredMember={setHoveredMember}
            hoveredMember={hoveredMember}
          />
        ))}
      </div>
    </div>
  );
}

export default Index;
