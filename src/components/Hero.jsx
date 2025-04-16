import React, { useEffect, useRef } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import { WaitlistForm } from './WaitlistForm';
import { ThemeToggle } from './ThemeToggle';

const Hero = () => {
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <motion.section
      ref={heroRef}
      style={{ opacity }}
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-b from-white via-blue-50 to-white dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 transition-colors duration-300"
    >
      <style jsx global>{`
        @keyframes float-slow {
          0%, 100% { transform: translate(0, 0) rotate(0deg); }
          33% { transform: translate(30px, -30px) rotate(5deg); }
          66% { transform: translate(-20px, 20px) rotate(-5deg); }
        }
        .animate-float-slow {
          animation: float-slow 20s ease-in-out infinite;
        }
        .text-gradient {
          background: linear-gradient(to right, #1a365d, #3182ce, #2b6cb0);
          -webkit-background-clip: text;
          background-clip: text;
          color: transparent;
        }
        .dark .text-gradient {
          background: linear-gradient(to right, #60a5fa, #93c5fd, #3b82f6);
        }
        .btn-gradient {
          background: linear-gradient(45deg, #3182ce, #4299e1);
          background-size: 200% 200%;
          animation: gradient 5s ease infinite;
        }
        .dark .btn-gradient {
          background: linear-gradient(45deg, #60a5fa, #3b82f6);
        }
        @keyframes gradient {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        .hero-grid {
          background-image: 
            linear-gradient(to right, rgba(99,102,241,0.1) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(99,102,241,0.1) 1px, transparent 1px);
          background-size: 4rem 4rem;
        }
        .dark .hero-grid {
          background-image: 
            linear-gradient(to right, rgba(99,102,241,0.2) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(99,102,241,0.2) 1px, transparent 1px);
        }
      `}</style>

      {/* Theme Toggle */}
      <div className="absolute top-4 right-4 z-50">
        <ThemeToggle />
      </div>

      {/* Background Elements */}
      <div className="absolute inset-0 hero-grid opacity-40 dark:opacity-20"></div>
      <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 dark:from-blue-500/5 dark:to-purple-500/5 mix-blend-multiply dark:mix-blend-screen"></div>
      
      <div className="relative container mx-auto px-4 z-10">
        <div className="max-w-5xl mx-auto text-center">
          {/* Shark Tank Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-12"
          >
            <motion.a
              href="https://youtu.be/D5KKP-VaihY?si=vzJYY80HA11Hyh5n"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="relative inline-block group"
            >
              <div className="absolute -inset-2 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full opacity-25 group-hover:opacity-50 blur transition duration-300"></div>
              <div className="relative bg-white dark:bg-gray-800 rounded-full p-4 flex items-center gap-3 shadow-xl">
                <img
                  src="/images/shark-tank-india-badge.svg"
                  alt="As Seen on Shark Tank India"
                  className="w-16 h-16 transform group-hover:rotate-3 transition-transform duration-300"
                />
                <div className="text-left pr-4">
                  <p className="text-sm font-semibold bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 text-transparent bg-clip-text">
                    As Seen On
                  </p>
                  <p className="text-lg font-bold text-gray-900 dark:text-white">
                    Shark Tank India
                  </p>
                  <div className="flex items-center gap-1 text-blue-600 dark:text-blue-400 text-sm">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                    </svg>
                    <span>Watch Now</span>
                  </div>
                </div>
              </div>
            </motion.a>
          </motion.div>

          {/* Main Title */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight"
          >
            <span className="relative inline-block">
              <span className="relative z-10 text-gradient">AI-Powered</span>
              <div className="absolute -inset-2 bg-blue-200/30 dark:bg-blue-500/10 blur-2xl rounded-lg"></div>
            </span>{' '}
            <br />
            <span className="relative inline-block mt-2">
              <span className="relative z-10 text-gradient">Dementia Care</span>
              <div className="absolute -inset-2 bg-blue-200/30 dark:bg-blue-500/10 blur-2xl rounded-lg"></div>
            </span>
          </motion.h1>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-lg md:text-xl text-gray-600 dark:text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed"
          >
            Revolutionizing dementia care with AI technology. Providing real-time monitoring, early detection,
            and personalized care plans for better patient outcomes.
          </motion.p>

          {/* Waitlist Form */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mb-16"
          >
            <WaitlistForm />
          </motion.div>

          {/* Hero Image */}
          {/* <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.8 }}
            style={{ y }}
            className="mt-16 relative"
          >
            <div className="absolute -inset-4 bg-blue-500/10 dark:bg-blue-500/5 rounded-3xl blur-2xl"></div>
            <motion.img
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
              src="/images/hero-image.svg"
              alt="MemoTag Platform"
              className="relative w-full max-w-4xl mx-auto rounded-2xl shadow-2xl transform hover:rotate-1 transition-transform duration-300 dark:opacity-90"
            />
          </motion.div> */}
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-white dark:from-gray-900 to-transparent"></div>
      <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 w-1/2 h-16 bg-blue-500/10 dark:bg-blue-500/5 blur-3xl"></div>
    </motion.section>
  );
};

export default Hero;
