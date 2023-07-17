'use client';

import { motion } from 'framer-motion';
import { socials } from '../constants';

import styles from '../styles';
import { navVariants } from '../utils/motion';

// import list from '../constants/index';

const Navbar = () => (
  <motion.nav
    variants={navVariants}
    initial="hidden"
    whileInView="show"
    className={`${styles.xPaddings} py-8 relative`}
  >
    <div className="absolute w-[50%] inset-0 gradient-01" />
    <div className={`${styles.innerWidth} mx-auto flex justify-between gap-8`}>
      <h2 className="font-extrabold text-[24px] leading-[30.24px] text-white">
        Olaru Marius-Alexandru
      </h2>
      {/* <div>
        <button w-full flex items-center justify between font-bold text-lg rounded-lg> Menu </button>
      </div> */}
      <div className="flex gap-4">
        {socials.map((social) => (
          <a href={social.link}>
            <img
              key={social.name}
              src={social.url}
              alt={social.name}
              className="w-[24px] h-[24px] object-contain cursor-pointer"
            />
          </a>
        ))}
      </div>
    </div>
  </motion.nav>
);

export default Navbar;
