import React from 'react';
import { motion } from 'framer-motion';

const Problem = () => {
  const stats = [
    { number: '50M', label: 'People worldwide living with dementia' },
    { number: '10M', label: 'New cases diagnosed each year' },
    { number: '60%', label: 'Of dementia cases go undiagnosed' },
    { number: '1 in 3', label: 'Seniors die with dementia' }
  ];

  const challenges = [
    'Limited access to early diagnosis and intervention',
    'High caregiver burden and stress',
    'Lack of real-time monitoring and support',
    'Difficulty in tracking patient progress'
  ];

  const partners = [
    { name: "G-Care", logo: "/images/partners/g-care.svg" },
    { name: "Masters' Union", logo: "/images/partners/masters-union.svg" },
    { name: "I-Venture@ISB", logo: "/images/partners/isb.svg" },
    { name: "Procohat", logo: "/images/partners/procohat.svg" },
    { name: "EMC", logo: "/images/partners/emc.svg" }
  ];

  const duplicatedPartners = [...partners, ...partners];

  return (
    <section id="problem" className="relative py-32 overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]">
        <div className="absolute inset-0 bg-gradient-to-b from-white via-transparent to-white"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section with Gradient Text */}
        <div className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="inline-block"
          >
            <span className="text-sm font-medium bg-gradient-to-r from-blue-600 to-purple-600 text-transparent bg-clip-text uppercase tracking-wider mb-4 block">
              Understanding the Challenge
            </span>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 text-transparent bg-clip-text">
              The Growing Challenge of
              <br />
              <span className="text-blue-600">Dementia Care</span>
            </h2>
          </motion.div>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-gray-600 text-lg sm:text-xl max-w-3xl mx-auto"
          >
            Dementia care presents significant challenges for caregivers and healthcare systems worldwide
          </motion.p>
        </div>

        {/* Statistics with 3D Cards */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-24"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ 
                duration: 0.6,
                delay: index * 0.1,
                type: "spring",
                stiffness: 100
              }}
              whileHover={{ 
                y: -5,
                transition: { duration: 0.2 }
              }}
              viewport={{ once: true }}
              className="group relative"
            >
              <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl blur opacity-25 group-hover:opacity-50 transition duration-500"></div>
              <div className="relative bg-white rounded-2xl p-8 shadow-xl">
                <div className="text-4xl sm:text-5xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 text-transparent bg-clip-text mb-3">
                  {stat.number}
                </div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Challenges Section with Glass Effect */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="relative mb-32"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-purple-600/10 rounded-3xl blur-3xl"></div>
          <div className="relative bg-white/80 backdrop-blur-xl rounded-3xl p-8 lg:p-12 border border-gray-200/50">
            <h3 className="text-2xl sm:text-3xl font-bold text-center mb-12 bg-gradient-to-r from-gray-900 to-gray-800 text-transparent bg-clip-text">
              Key Challenges
            </h3>
            <div className="grid md:grid-cols-2 gap-8">
              {challenges.map((challenge, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-start space-x-4 p-6 rounded-xl bg-white/50 border border-gray-100 hover:border-blue-200 transition-all duration-300"
                >
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 flex items-center justify-center">
                    <svg
                      className="w-6 h-6 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                      />
                    </svg>
                  </div>
                  <div className="flex-1">
                    <p className="text-gray-700 text-lg leading-relaxed">{challenge}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Partners Section with Modern Slider */}
        <div className="text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <span className="text-sm font-medium bg-gradient-to-r from-blue-600 to-purple-600 text-transparent bg-clip-text uppercase tracking-wider mb-4 block">
              Our Partners
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold mb-6">
              <span className="text-blue-600">Trusted</span> by Leading Eldercare
              <br />
              Providers Worldwide
            </h2>
            <p className="text-gray-600 text-lg max-w-3xl mx-auto">
              MemoTag partners with top eldercare facilities, hospitals & neurologists to deliver the
              most advanced dementia care solutions across the globe.
            </p>
          </motion.div>

          <div className="relative">
            {/* Gradient Overlays */}
            <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-white to-transparent z-10"></div>
            <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-white to-transparent z-10"></div>
            
            {/* Infinite Slider */}
            <div className="relative overflow-hidden py-12">
              <motion.div
                initial={{ x: 0 }}
                animate={{ x: "-50%" }}
                transition={{
                  duration: 30,
                  repeat: Infinity,
                  ease: "linear"
                }}
                className="flex items-center space-x-24 whitespace-nowrap"
              >
                {duplicatedPartners.map((partner, index) => (
                  <motion.div
                    key={`${partner.name}-${index}`}
                    whileHover={{ scale: 1.05 }}
                    className="flex-shrink-0 group"
                  >
                    <img
                      src={partner.logo}
                      alt={partner.name}
                      className="h-16 w-auto filter grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-500"
                    />
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Problem;
