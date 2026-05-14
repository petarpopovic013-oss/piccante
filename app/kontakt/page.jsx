"use client";

import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { motion } from 'framer-motion';

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-[#0a0a0a] flex flex-col">
      <Navbar />

      <section className="flex-1 pt-[180px] pb-[120px] px-10 max-w-[1280px] mx-auto w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="font-serif text-[64px] md:text-[80px] text-white mb-8">Kontakt</h1>
          <p className="text-white/60 text-lg max-w-2xl">
            Sve rezervacije se vrše isključivo putem telefona. <br/>
            Možete nas kontaktirati na: <a href="tel:+38169742208" className="text-[#C22127] hover:underline font-bold">+381 69 742208</a>
          </p>
        </motion.div>
      </section>

      <Footer />
    </main>
  );
}
