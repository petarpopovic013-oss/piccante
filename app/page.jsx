"use client";

import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import MenuSection from '@/components/MenuSection';
import Footer from '@/components/Footer';
import Image from 'next/image';

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
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 1.4, ease: [0.25, 0.46, 0.45, 0.94] }}
        ref={bannerRef}
        className="w-full h-[500px] overflow-hidden relative"
      >
        <motion.div style={{ y }} className="absolute inset-0 w-full h-[140%] -top-[20%]">
          <Image
            src="/images/undermenu picture.webp"
            alt="Restaurant dining"
            fill
            className="object-cover object-center block"
            loading="lazy"
            sizes="100vw"
            quality={90}
          />
        </motion.div>
      </motion.section>

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
            className="text-[#C22127] text-[48px] font-bold block text-center mb-4 leading-none font-serif"
          >
            &#8220;
          </motion.span>
          <p className="font-serif text-[24px] md:text-[32px] font-normal text-white leading-[1.5] text-center italic">
            "Piccante nije samo mesto za večeru; to je autentična kulinarska oaza u kojoj svaki zalogaj predstavlja apsolutno savršenstvo ukusa."
          </p>

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
