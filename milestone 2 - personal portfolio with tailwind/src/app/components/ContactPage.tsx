'use client'
import { motion } from 'framer-motion';
import Navigation from './Navigation';

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <Navigation />
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="max-w-2xl mx-auto"
        >
          <h1 className="text-4xl font-bold mb-8">Get in Touch</h1>
          <form className="space-y-6">
            <motion.div
              initial={{ x: -50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              <label className="block mb-2">Name</label>
              <input
                type="text"
                className="w-full px-4 py-2 bg-gray-800 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
              />
            </motion.div>
            <motion.div
              initial={{ x: -50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              <label className="block mb-2">Email</label>
              <input
                type="email"
                className="w-full px-4 py-2 bg-gray-800 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
              />
            </motion.div>
            <motion.div
              initial={{ x: -50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              <label className="block mb-2">Message</label>
              <textarea
                rows={6}
                className="w-full px-4 py-2 bg-gray-800 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
              />
            </motion.div>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg"
            >
              Send Message
            </motion.button>
          </form>
        </motion.div>
      </div>
    </div>
  );
}