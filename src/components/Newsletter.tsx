import React, { useState, useEffect, useRef } from 'react';
import { motion, useAnimation, useInView } from 'framer-motion';

const Newsletter: React.FC = () => {
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
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

  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" }
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      // Simulation d'envoi
      setTimeout(() => {
        setIsSubmitted(true);
        setEmail('');
      }, 500);
    }
  };

  return (
    <section className="py-16 bg-gradient-to-r from-red-600 to-red-800 text-white overflow-hidden">
      <motion.div
        ref={ref}
        variants={containerVariants}
        initial="hidden"
        animate={controls}
        className="container mx-auto px-4"
      >
        <div className="max-w-4xl mx-auto text-center">
          <motion.div variants={itemVariants} className="mb-2">
            <svg className="w-12 h-12 mx-auto text-white opacity-80" fill="currentColor" viewBox="0 0 20 20">
              <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
              <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
            </svg>
          </motion.div>
          
          <motion.h2 
            variants={itemVariants}
            className="text-3xl md:text-4xl font-bold mb-4"
          >
            Restez informé des dernières tendances
          </motion.h2>
          
          <motion.p 
            variants={itemVariants}
            className="text-lg text-white/90 mb-8 max-w-2xl mx-auto"
          >
            Inscrivez-vous à notre newsletter pour recevoir en avant-première nos nouvelles collections, 
            promotions exclusives et conseils mode personnalisés.
          </motion.p>
          
          <motion.form 
            variants={itemVariants}
            onSubmit={handleSubmit}
            className="flex flex-col sm:flex-row gap-3 max-w-xl mx-auto"
          >
            <div className="flex-1 relative">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Votre adresse email"
                className="w-full px-6 py-4 rounded-full text-gray-800 focus:outline-none focus:ring-2 focus:ring-red-400 transition-all duration-300"
                required
              />
              
              {isSubmitted && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="absolute -bottom-8 left-0 text-sm text-white"
                >
                  Merci pour votre inscription !
                </motion.div>
              )}
            </div>
            
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              type="submit"
              className="bg-white text-red-600 font-bold px-8 py-4 rounded-full shadow-lg hover:bg-gray-100 transition-all duration-300"
            >
              S'inscrire
            </motion.button>
          </motion.form>
          
          <motion.p 
            variants={itemVariants}
            className="text-sm text-white/70 mt-6"
          >
            En vous inscrivant, vous acceptez de recevoir nos emails et confirmez avoir lu notre politique de confidentialité.
          </motion.p>
        </div>
        
        {/* Animated Shapes */}
        <motion.div
          className="absolute -top-16 -left-16 w-64 h-64 bg-white opacity-10 rounded-full blur-3xl"
          animate={{
            y: [0, 30, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            repeatType: "reverse"
          }}
        />
        
        <motion.div
          className="absolute -bottom-32 -right-32 w-96 h-96 bg-yellow-500 opacity-10 rounded-full blur-3xl"
          animate={{
            y: [0, -40, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            repeatType: "reverse",
            delay: 1
          }}
        />
      </motion.div>
    </section>
  );
};

export default Newsletter;
