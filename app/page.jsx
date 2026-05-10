"use client";

import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import MenuSection from '@/components/MenuSection';
import Footer from '@/components/Footer';

export default function Home() {
  const bannerRef = useRef(null);
  
  // Parallax effect for the banner
  const { scrollYProgress } = useScroll({
    target: bannerRef,
    offset: ["start end", "end start"]
  });
  
  // Moves the image slightly up and down based on scroll
  const y = useTransform(scrollYProgress, [0, 1], ["-20%", "20%"]);

  return (
    <main className="min-h-screen bg-[#0a0a0a] overflow-x-hidden">
      <Navbar />
      
      {/* Hero section handles its own animations */}
      <Hero />
      
      {/* Menu section handles its own stagger animations */}
      <MenuSection />

      {/* Full Width Parallax Banner */}
      <section ref={bannerRef} className="w-full h-[500px] overflow-hidden relative">
        <motion.div style={{ y }} className="absolute inset-0 w-full h-[140%] -top-[20%]">
          <img
            src="https://images.pexels.com/photos/24866519/pexels-photo-24866519.jpeg"
            alt="Restaurant dining"
            className="w-full h-full object-cover object-center block"
            loading="lazy"
          />
        </motion.div>
      </section>

      {/* Quote Section with Elegant Fade In */}
      <motion.section 
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 1.2, ease: [0.25, 0.46, 0.45, 0.94] }}
        className="w-full py-[120px] px-[40px] bg-[#0a0a0a] flex items-center justify-center gap-0"
      >
        
        {/* Left Line */}
        <motion.div 
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1, delay: 0.5, ease: "easeInOut" }}
          className="w-[60px] h-[1px] bg-[rgba(255,255,255,0.3)] shrink-0 hidden md:block mx-[40px] origin-right"
        ></motion.div>

        {/* Center Content */}
        <div className="max-w-[760px] text-center flex flex-col items-center">
          <motion.span 
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, type: "spring", bounce: 0.4 }}
            className="text-[#DC5803] text-[48px] font-bold block text-center mb-4 leading-none font-serif"
          >
            &#8220;
          </motion.span>
          <p className="font-serif text-[24px] md:text-[32px] font-normal text-white leading-[1.5] text-center italic">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, delay: 0.8 }}
            className="mt-8 flex flex-col items-center"
          >
            <span className="text-white font-semibold text-[14px] font-sans uppercase tracking-[0.15em]">Betsy Ward</span>
            <span className="text-[#DC5803] text-[12px] font-bold mt-2 font-sans tracking-[0.1em] uppercase">Critic</span>
          </motion.div>
        </div>

        {/* Right Line */}
        <motion.div 
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1, delay: 0.5, ease: "easeInOut" }}
          className="w-[60px] h-[1px] bg-[rgba(255,255,255,0.3)] shrink-0 hidden md:block mx-[40px] origin-left"
        ></motion.div>

      </motion.section>

      <Footer />
    </main>
  );
}
