import React, { useEffect, useRef } from 'react';
import { motion, useAnimation, useInView } from 'framer-motion';

const Hero: React.FC = () => {
  const controls = useAnimation();
  const ref = useRef(null);
  const inView = useInView(ref, {
    once: true,
    amount: 0.2,
  });

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [controls, inView]);

  const heroVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
        staggerChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  return (
    <motion.section
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={heroVariants}
      className="relative h-screen flex items-center overflow-hidden"
    >
      {/* Background Image with Parallax Effect */}
      <motion.div
        className="absolute inset-0 z-0"
        initial={{ scale: 1.1 }}
        animate={{ scale: 1 }}
        transition={{ duration: 10, ease: "easeOut" }}
      >
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ 
            backgroundImage: "url('https://images.pexels.com/photos/5709661/pexels-photo-5709661.jpeg?auto=compress&cs=tinysrgb&w=1600')",
            filter: "brightness(0.7)"
          }}
        />
      </motion.div>

      <div className="container mx-auto px-4 z-10 relative">
        <div className="max-w-xl">
          <motion.h1 
            variants={itemVariants}
            className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight"
          >
            Découvrez Notre <span className="text-red-500">Nouvelle Collection</span>
          </motion.h1>
          
          <motion.p 
            variants={itemVariants}
            className="text-xl text-white mb-8 leading-relaxed"
          >
            Des vêtements et accessoires tendance pour tous les styles. Qualité exceptionnelle, design unique.
          </motion.p>
          
          <motion.div 
            variants={itemVariants}
            className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-8 rounded-full transition-all duration-300 shadow-lg"
            >
              Acheter Maintenant
            </motion.button>
            
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-transparent hover:bg-white/10 text-white border-2 border-white font-bold py-3 px-8 rounded-full transition-all duration-300"
            >
              Voir la Collection
            </motion.button>
          </motion.div>
        </div>
      </div>

      {/* Floating Elements Animation */}
      <motion.div
        className="absolute -bottom-16 right-10 md:right-40 w-64 h-64 bg-red-500 rounded-full opacity-20 blur-3xl"
        animate={{
          y: [0, -30, 0],
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          repeatType: "reverse"
        }}
      />
      
      <motion.div
        className="absolute top-40 right-20 w-32 h-32 bg-yellow-500 rounded-full opacity-20 blur-3xl"
        animate={{
          y: [0, 30, 0],
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          repeatType: "reverse",
          delay: 1
        }}
      />
    </motion.section>
  );
};

export default Hero;
