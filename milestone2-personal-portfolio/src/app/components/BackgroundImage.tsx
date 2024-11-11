'use client'
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

export default function BackgroundImage({ url }: { url: string }) {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const img = new Image();
    img.src = url;
    img.onload = () => setIsLoading(false);
  }, [url]);

  return (
    <div className="fixed top-0 left-0 w-full h-full -z-10">
      {isLoading && (
        <div className="absolute inset-0 bg-gray-900 animate-pulse" />
      )}
      <motion.div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        initial={{ opacity: 0 }}
        animate={{ opacity: isLoading ? 0 : 1 }}
        transition={{ duration: 0.5 }}
        style={{ backgroundImage: `url(${url})` }}
      />
      <div className="absolute inset-0 bg-gradient-overlay" />
    </div>
  );
}

