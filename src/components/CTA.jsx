import React from "react";
import { motion, AnimatePresence } from "framer-motion";

const PreOrderModal = ({ isModalOpen, setIsModalOpen, formData, handleChange, handleSubmit }) => {
  return (
    <AnimatePresence>
      {isModalOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 overflow-y-auto"
        >
          <div className="flex items-center justify-center min-h-screen">
            {/* Backdrop */}
            <div
              className="fixed inset-0 bg-black/50 backdrop-blur-sm"
              onClick={() => setIsModalOpen(false)}
            ></div>

            {/* Modal */}
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="relative bg-white dark:bg-gray-800 rounded-lg p-8 max-w-lg w-full z-50 shadow-lg"
            >
              <h3 className="text-2xl font-semibold mb-6 text-center text-gray-800 dark:text-white">
                Pre-Order MemoTag
              </h3>

              <form onSubmit={handleSubmit} className="space-y-4">
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your Name"
                  required
                  className="w-full px-4 py-2 rounded border dark:border-gray-600 dark:bg-gray-900 text-gray-800 dark:text-white"
                />

                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Your Email"
                  required
                  className="w-full px-4 py-2 rounded border dark:border-gray-600 dark:bg-gray-900 text-gray-800 dark:text-white"
                />

                <input
                  type="text"
                  name="organization"
                  value={formData.organization}
                  onChange={handleChange}
                  placeholder="Organization"
                  className="w-full px-4 py-2 rounded border dark:border-gray-600 dark:bg-gray-900 text-gray-800 dark:text-white"
                />

                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="Phone Number"
                  className="w-full px-4 py-2 rounded border dark:border-gray-600 dark:bg-gray-900 text-gray-800 dark:text-white"
                />

                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Message"
                  rows="4"
                  className="w-full px-4 py-2 rounded border dark:border-gray-600 dark:bg-gray-900 text-gray-800 dark:text-white"
                ></textarea>

                <div className="flex gap-4 mt-6">
                  <button
                    type="submit"
                    className="flex-1 py-2 px-4 rounded bg-emerald-600 text-white font-medium hover:bg-emerald-700 transition"
                  >
                    Submit
                  </button>

                  <button
                    type="button"
                    onClick={() => setIsModalOpen(false)}
                    className="flex-1 py-2 px-4 rounded border border-gray-300 dark:border-gray-600 text-gray-800 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 transition"
                  >
                    Cancel
                  </button>
                </div>
              </form>
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default PreOrderModal;
