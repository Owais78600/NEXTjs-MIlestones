'use client'
import { motion } from 'framer-motion';
import Link from 'next/link';
import Navigation from './Navigation';
import { TypeAnimation } from 'react-type-animation';

export default function HomePage() {
  return (
    <div className="relative min-h-screen">
      <div 
        className="fixed top-0 left-0 w-full h-full bg-cover bg-center bg-no-repeat -z-10"
        style={{
          backgroundImage: "url('/background.jpg')",
        }}
      >
        <div className="absolute inset-0 bg-black/50"></div>
      </div>

      <Navigation />
      
      <main className="relative min-h-screen flex items-center justify-center">
        <div className="w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-center"
          >
            <div className="backdrop-blur-sm bg-white/10 p-8 rounded-2xl shadow-xl mx-auto max-w-2xl">
              <h1 className="text-4xl sm:text-6xl font-bold mb-6">
                <span className="text-white">Hey, it's</span>
                
                <TypeAnimation
                  sequence={[
                    ' Owais',
                    1000, 
                    ' Front Sales Execuitve',
                    1000,
                    ' Front-end developer',
                    1000,
                    ' Web Developer',
                    1000
                  ]}
                  wrapper="span"
                  speed={50}
                  repeat={Infinity}
                  style={{
                    background: 'linear-gradient(to right, #9b4dca, #14b8a6)',
                    backgroundClip: 'text',
                    WebkitBackgroundClip: 'text',
                    color: 'transparent',
                  }}
                />
              </h1>
              
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link 
                  href="/contact" 
                  className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-full inline-block
                           transition-all duration-300 hover:shadow-lg"
                >
                  Get in Touch
                </Link>
              </motion.div>
            </div>

            <motion.div 
              className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              <div className="w-8 h-12 border-2 border-white rounded-full flex justify-center p-2">
                <motion.div 
                  className="w-1 h-3 bg-white rounded-full"
                  initial={{ y: 0 }}
                  animate={{ y: 12 }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                />
              </div>
            </motion.div>
          </motion.div>
        </div>
      </main>
    </div>
  );
}