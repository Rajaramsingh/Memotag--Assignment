import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Traction = () => {
  const [openFaq, setOpenFaq] = useState(null);

  const metrics = [
    {
      number: '95%',
      label: 'Accuracy in early detection',
    },
    {
      number: '80%',
      label: 'Reduction in caregiver stress',
    },
    {
      number: '60%',
      label: 'Faster intervention time',
    },
    {
      number: '40%',
      label: 'Lower healthcare costs',
    },
  ];

  const faqs = [
    {
      question: "How does MemoTag work?",
      answer: "MemoTag uses advanced AI technology to monitor and analyze daily activities, providing early detection of cognitive changes and personalized support for both patients and caregivers."
    },
    {
      question: "How & Who can use MemoTag?",
      answer: "MemoTag is designed for elderly individuals, particularly those with early-stage dementia, their family members, and professional caregivers. It's easy to set up and can be used at home or in care facilities."
    },
    {
      question: "Is my data secure and private?",
      answer: "Yes, we take data security very seriously. All data is encrypted, stored securely, and complies with HIPAA regulations. We never share personal information without explicit consent."
    },
    {
      question: "What is cognitive analysis, and how can it help?",
      answer: "Cognitive analysis uses AI to track daily patterns and behaviors, helping identify subtle changes that might indicate cognitive decline. This enables earlier intervention and better care planning."
    },
    {
      question: "How much does MemoTag cost?",
      answer: "MemoTag offers flexible pricing plans starting from $XX/month. Contact us for detailed pricing information and to find the plan that best suits your needs."
    }
  ];

  return (
    <section id="traction" className="relative py-24 overflow-hidden">
      {/* Dynamic Background */}
      <div className="absolute inset-0">
        {/* Base Gradient */}
        <div className="absolute inset-0 bg-gradient-radial from-violet-50 via-fuchsia-50/80 to-purple-50/50 dark:from-violet-950 dark:via-fuchsia-900/20 dark:to-purple-900/10"></div>

        {/* DNA Double Helix */}
        <div className="absolute inset-0">
          {[...Array(5)].map((_, i) => (
            <motion.div
              key={`helix-${i}`}
              className="absolute left-0 w-full h-40"
              style={{ top: `${i * 20}%` }}
              initial={{ x: '-100%' }}
              animate={{
                x: ['-100%', '100%'],
                y: [0, 20, 0]
              }}
              transition={{
                x: {
                  duration: 20,
                  repeat: Infinity,
                  ease: "linear",
                  delay: i * 4
                },
                y: {
                  duration: 5,
                  repeat: Infinity,
                  ease: "easeInOut",
                  yoyo: true
                }
              }}
            >
              <svg className="w-full h-full" viewBox="0 0 200 50">
                <motion.path
                  d="M0,25 Q50,0 100,25 T200,25"
                  fill="none"
                  stroke="rgba(168,85,247,0.15)"
                  strokeWidth="2"
                  animate={{
                    d: [
                      "M0,25 Q50,0 100,25 T200,25",
                      "M0,25 Q50,50 100,25 T200,25",
                      "M0,25 Q50,0 100,25 T200,25"
                    ]
                  }}
                  transition={{
                    duration: 5,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                />
                <motion.path
                  d="M0,25 Q50,50 100,25 T200,25"
                  fill="none"
                  stroke="rgba(217,70,239,0.15)"
                  strokeWidth="2"
                  animate={{
                    d: [
                      "M0,25 Q50,50 100,25 T200,25",
                      "M0,25 Q50,0 100,25 T200,25",
                      "M0,25 Q50,50 100,25 T200,25"
                    ]
                  }}
                  transition={{
                    duration: 5,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                />
              </svg>
            </motion.div>
          ))}
        </div>

        {/* Pulse Waves */}
        <div className="absolute inset-0">
          {[...Array(3)].map((_, i) => (
            <motion.div
              key={`pulse-${i}`}
              className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full"
              initial={{ scale: 0.5, opacity: 0 }}
              animate={{
                scale: [0.5, 2],
                opacity: [0.5, 0]
              }}
              transition={{
                duration: 4,
                delay: i * 1.3,
                repeat: Infinity,
                ease: "easeOut"
              }}
            >
              <svg className="w-full h-full" viewBox="0 0 100 100">
                <path
                  d="M50,0 Q75,50 50,100 Q25,50 50,0"
                  fill="none"
                  stroke="rgba(192,38,211,0.1)"
                  strokeWidth="0.5"
                />
              </svg>
            </motion.div>
          ))}
        </div>

        {/* Medical Symbols */}
        <div className="absolute inset-0">
          {[...Array(8)].map((_, i) => (
            <motion.div
              key={`symbol-${i}`}
              className="absolute"
              style={{
                left: `${Math.random() * 90 + 5}%`,
                top: `${Math.random() * 90 + 5}%`,
              }}
              initial={{ scale: 0, rotate: 0 }}
              animate={{
                scale: [0.8, 1.2, 0.8],
                rotate: [0, 360],
                opacity: [0.1, 0.3, 0.1]
              }}
              transition={{
                duration: Math.random() * 5 + 10,
                delay: i * 0.5,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="rgba(192,38,211,0.15)" strokeWidth="1">
                <path d="M12,2 L12,22 M2,12 L22,12" />
              </svg>
            </motion.div>
          ))}
        </div>

        {/* Brain Network Pattern */}
        <div className="absolute inset-0">
          <svg className="w-full h-full opacity-[0.04]">
            <pattern id="brainPattern" x="0" y="0" width="50" height="50" patternUnits="userSpaceOnUse">
              <path d="M10,10 Q25,0 40,10 T25,25 T10,10" fill="none" stroke="rgb(168,85,247)" />
              <circle cx="25" cy="25" r="2" />
            </pattern>
            <motion.rect
              width="100%"
              height="100%"
              fill="url(#brainPattern)"
              animate={{
                scale: [1, 1.1, 1],
                opacity: [0.5, 1, 0.5]
              }}
              transition={{
                duration: 10,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
          </svg>
        </div>

        {/* Floating Neurons */}
        <div className="absolute inset-0">
          {[...Array(15)].map((_, i) => (
            <motion.div
              key={`neuron-${i}`}
              className="absolute w-2 h-2"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
            >
              <motion.div
                className="w-full h-full bg-fuchsia-400/20 rounded-full"
                animate={{
                  scale: [1, 1.5, 1],
                  opacity: [0.2, 0.5, 0.2],
                  boxShadow: [
                    '0 0 0 0 rgba(192,38,211,0.4)',
                    '0 0 0 10px rgba(192,38,211,0)',
                    '0 0 0 0 rgba(192,38,211,0.4)'
                  ]
                }}
                transition={{
                  duration: Math.random() * 3 + 2,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
              {[...Array(3)].map((_, j) => (
                <motion.div
                  key={`connection-${j}`}
                  className="absolute top-1/2 left-1/2 w-16 h-px bg-gradient-to-r from-fuchsia-400/20 to-transparent"
                  style={{
                    transform: `rotate(${j * 120}deg)`,
                    transformOrigin: '0 0'
                  }}
                  animate={{
                    scaleX: [0, 1, 0],
                    opacity: [0, 0.5, 0]
                  }}
                  transition={{
                    duration: 3,
                    delay: j * 1,
                    repeat: Infinity,
                    ease: "linear"
                  }}
                />
              ))}
            </motion.div>
          ))}
        </div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          {/* Left Side - Image with Circle Border */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative w-full lg:w-1/2"
          >
            <div className="relative">
              {/* Circular Border */}
              <div className="absolute -inset-4 rounded-full border-2 border-dashed border-fuchsia-200 dark:border-fuchsia-800"></div>
              
              {/* Image Container */}
              <div className="relative w-[400px] h-[400px] mx-auto overflow-hidden rounded-full border-4 border-white dark:border-gray-800 shadow-xl">
                {/* Gradient Background */}
                <div className="absolute inset-0 bg-gradient-to-br from-fuchsia-500/10 via-purple-500/10 to-violet-500/10"></div>
                
                {/* Animated Background Pattern */}
                <div className="absolute inset-0 opacity-20">
                  <svg className="w-full h-full" viewBox="0 0 100 100">
                    <defs>
                      <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor="rgba(217,70,239,0.4)" />
                        <stop offset="100%" stopColor="rgba(168,85,247,0.4)" />
                      </linearGradient>
                    </defs>
                    <motion.path
                      d="M10,50 Q30,40 50,50 T90,50"
                      stroke="url(#gradient1)"
                      strokeWidth="0.5"
                      fill="none"
                      initial={{ pathLength: 0 }}
                      animate={{ pathLength: 1 }}
                      transition={{ duration: 2, repeat: Infinity }}
                    />
                    <motion.path
                      d="M10,60 Q30,50 50,60 T90,60"
                      stroke="url(#gradient1)"
                      strokeWidth="0.5"
                      fill="none"
                      initial={{ pathLength: 0 }}
                      animate={{ pathLength: 1 }}
                      transition={{ duration: 2, delay: 0.5, repeat: Infinity }}
                    />
                  </svg>
                </div>

                {/* Central Icon */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="relative">
                    {/* Analytics Icon */}
                    <svg className="w-32 h-32 text-fuchsia-600 dark:text-fuchsia-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                      <motion.path
                        d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                        initial={{ pathLength: 0 }}
                        animate={{ pathLength: 1 }}
                        transition={{ duration: 1.5, ease: "easeInOut" }}
                      />
                    </svg>
                    
                    {/* Circular Progress */}
                    <motion.div
                      className="absolute -inset-4 border-4 border-fuchsia-500/20 rounded-full"
                      initial={{ rotate: 0 }}
                      animate={{ rotate: 360 }}
                      transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                    />
                  </div>
                </div>

                {/* Text Overlay */}
                <div className="absolute bottom-8 left-0 right-0 text-center">
                  <div className="text-2xl font-bold text-gray-800 dark:text-white">Real-time Impact</div>
                  <div className="text-sm text-gray-600 dark:text-gray-300">AI-Powered Analytics</div>
                </div>

                {/* Floating Elements */}
                {[...Array(6)].map((_, i) => (
                  <motion.div
                    key={i}
                    className="absolute w-2 h-2 bg-fuchsia-500/30 rounded-full"
                    style={{
                      left: `${Math.random() * 100}%`,
                      top: `${Math.random() * 100}%`,
                    }}
                    animate={{
                      y: [-10, 10],
                      opacity: [0.3, 0.6, 0.3],
                    }}
                    transition={{
                      duration: Math.random() * 2 + 2,
                      repeat: Infinity,
                      repeatType: "reverse",
                      delay: Math.random() * 2,
                    }}
                  />
                ))}
              </div>

              {/* Dotted Line Path */}
              <svg className="absolute top-1/2 left-full hidden lg:block" width="160" height="40" viewBox="0 0 160 40">
                <motion.path
                  d="M0,20 C60,20 100,20 160,20"
                  stroke="#D946EF"
                  strokeWidth="2"
                  strokeDasharray="4 4"
                  fill="none"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ duration: 1.5, delay: 0.5 }}
                />
              </svg>
            </div>
          </motion.div>

          {/* Right Side - Content */}
          <div className="w-full lg:w-1/2">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-left"
            >
              <span className="inline-block px-4 py-1 mb-4 text-sm font-medium bg-fuchsia-100 text-fuchsia-600 dark:bg-fuchsia-900/30 dark:text-fuchsia-400 rounded-full">
                Our Impact
              </span>
              <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-fuchsia-600 to-purple-600 dark:from-fuchsia-400 dark:to-purple-400">
                Making a Real Difference
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-300 mb-12">
                See how MemoTag is transforming dementia care with measurable results and positive outcomes
              </p>

              {/* Metrics Grid */}
              <div className="grid grid-cols-2 gap-8">
                {metrics.map((metric, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ 
                      duration: 0.5,
                      delay: index * 0.1,
                      type: "spring",
                      stiffness: 100
                    }}
                    whileHover={{ 
                      scale: 1.05,
                      transition: { duration: 0.2 }
                    }}
                    viewport={{ once: true }}
                    className="relative group"
                  >
                    {/* Card Glow Effect */}
                    <div className="absolute -inset-0.5 bg-gradient-to-r from-fuchsia-500 to-purple-500 rounded-2xl opacity-0 group-hover:opacity-20 transition duration-500 blur-xl"></div>
                    
                    {/* Card Content */}
                    <div className="relative p-6 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-2xl border border-gray-200/50 dark:border-gray-700/50 shadow-lg hover:shadow-xl transition-all duration-300">
                      <div className="text-4xl font-bold bg-gradient-to-r from-fuchsia-600 to-purple-600 bg-clip-text text-transparent mb-2">
                        {metric.number}
                      </div>
                      <div className="text-gray-600 dark:text-gray-300">
                        {metric.label}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="relative mt-24 max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="inline-block px-4 py-1 mb-4 text-sm font-medium bg-fuchsia-100 text-fuchsia-600 dark:bg-fuchsia-900/30 dark:text-fuchsia-400 rounded-full"
          >
            FAQ'S
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold mb-4"
          >
            Frequently <span className="text-gray-400">Asked</span><br />Questions
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-gray-600 dark:text-gray-300"
          >
            Find answers to the most common questions about MemoTag and how we support dementia & elder caregiving.
          </motion.p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <button
                onClick={() => setOpenFaq(openFaq === index ? null : index)}
                className="w-full text-left p-6 rounded-2xl bg-white dark:bg-gray-800 shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100 dark:border-gray-700"
              >
                <div className="flex justify-between items-center">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                    {faq.question}
                  </h3>
                  <motion.span
                    animate={{ rotate: openFaq === index ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                    className="text-fuchsia-500"
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </motion.span>
                </div>
                <AnimatePresence>
                  {openFaq === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="mt-4 text-gray-600 dark:text-gray-300"
                    >
                      {faq.answer}
                    </motion.div>
                  )}
                </AnimatePresence>
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Traction; 