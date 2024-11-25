import { PROFILE } from '../constants';
import profilePic from '../assets/nazHeroPic.jpg';
import { motion } from 'framer-motion';

export const HeroSection = () => {
  return (
    <div
      className="relative flex min-h-screen items-end justify-center"
      id="hero"
      aria-label="Hero Section">
      <motion.img
        src={profilePic}
        alt={PROFILE.name}
        className="absolute inset-0 z-10 h-full w-full object-cover"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      />
      <motion.div
        className="absolute inset-0 z-10 bg-gradient-to-b from-transparent to-black"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      />
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1 }}
        className="z-20 mx-4 max-w-3xl pb-20">
        <h1 className="text-5xl font-semibold uppercase tracking-wide md:text-7xl">
          {PROFILE.name}
        </h1>
        <p className="pt-2 font-semibold">{PROFILE.info}</p>
      </motion.div>
    </div>
  );
};
