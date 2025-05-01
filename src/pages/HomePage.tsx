import React, { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import Header from '../components/Header';
import Hero from '../components/Hero';
import FeaturedProducts from '../components/FeaturedProducts';
import Categories from '../components/Categories';
import Newsletter from '../components/Newsletter';
import Footer from '../components/Footer';
import Testimonials from '../components/Testimonials';

const HomePage: React.FC = () => {
  const controls = useAnimation();

  useEffect(() => {
    controls.start({
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" }
    });
  }, [controls]);

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={controls}
        className="w-full"
      >
        <Hero />
        <Categories />
        <FeaturedProducts />
        <Testimonials />
        <Newsletter />
        <Footer />
      </motion.div>
    </div>
  );
};

export default HomePage;
