import { useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { motion } from 'framer-motion';

gsap.registerPlugin(ScrollTrigger);

const Navbar = () => {
  useEffect(() => {
    gsap.utils.toArray('.navbar-text').forEach((el) => {
      gsap.fromTo(
        el,
        { y: 200, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1.5,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: el,
            start: 'top 80%',
            end: 'top 50%',
            scrub: false,
          },
        }
      );
    });
  }, []);

  return (
    <div className="fixed z-[999] w-full">
      <div className="max-w-screen-2xl mx-32 h-20 flex items-center justify-between text-white">
        <motion.div className="navbar-text font-title font-extrabold text-xl pl-2 pt-4">
          OpticPulse
        </motion.div>
        <div className="shadow-2xl">
          {['Home', 'About', 'Services', 'Contact'].map((item, index) => (
            <a key={index} className="navbar-text text-sm font-title mx-4 font-bold">
              {item}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
