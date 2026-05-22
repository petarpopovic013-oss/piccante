"use client";

import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { motion } from 'framer-motion';
import { Phone, MapPin, Clock } from 'lucide-react';

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-[#0a0a0a] flex flex-col font-sans">
      <Navbar />

      <section className="flex-1 pt-[180px] pb-[80px] px-6 lg:px-10 max-w-[1280px] mx-auto w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">

          {/* Left Side: Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-5 space-y-12"
          >
            <div>
              <h1 className="font-serif text-[56px] md:text-[72px] text-white mb-6 leading-tight">Kontakt</h1>
              <p className="text-white/60 text-lg leading-relaxed">
                Dobrodošli u Piccante. Za sve informacije i rezervacije, stojimo vam na raspolaganju.
              </p>
            </div>

            <div className="space-y-8">
              {/* Phone */}
              <div className="flex items-start gap-6 group">
                <div className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center text-[#C22127] group-hover:bg-[#C22127] group-hover:text-white transition-all duration-300">
                  <Phone size={20} />
                </div>
                <div>
                  <h3 className="text-white text-[13px] font-bold tracking-[0.2em] uppercase mb-2">Rezervacije</h3>
                  <a href="tel:+38169742208" className="text-white text-2xl font-serif hover:text-[#C22127] transition-colors">
                    +381 69 742208
                  </a>
                </div>
              </div>

              {/* Address */}
              <div className="flex items-start gap-6 group">
                <div className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center text-[#C22127] group-hover:bg-[#C22127] group-hover:text-white transition-all duration-300">
                  <MapPin size={20} />
                </div>
                <div>
                  <h3 className="text-white text-[13px] font-bold tracking-[0.2em] uppercase mb-2">Adresa</h3>
                  <p className="text-white/80 text-xl font-serif leading-snug">
                    Bulevar patrijarha Pavla 22,<br /> Novi Sad, Srbija
                  </p>
                </div>
              </div>

              {/* Hours */}
              <div className="flex items-start gap-6 group">
                <div className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center text-[#C22127] group-hover:bg-[#C22127] group-hover:text-white transition-all duration-300">
                  <Clock size={20} />
                </div>
                <div>
                  <h3 className="text-white text-[13px] font-bold tracking-[0.2em] uppercase mb-2">Radno Vreme</h3>
                  <p className="text-white/80 text-xl font-serif">
                    Svaki dan: 08:00h – 23:00h
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Side: Map */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-7 w-full h-[500px] lg:h-[650px] relative rounded-lg overflow-hidden border border-white/5 shadow-2xl"
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2809.5244583162!2d19.816666676!3d45.242777779099!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x475b106969696969%3A0x6969696969696969!2sBulevar%20patrijarha%20Pavla%2022%2C%20Novi%20Sad%2C%20Srbija!5e0!3m2!1sen!2srs!4v1715793000000!5m2!1sen!2srs"
              width="100%"
              height="100%"
              style={{
                border: 0,
                filter: 'grayscale(1) invert(0.92) contrast(0.8) brightness(1.2)'
              }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
            {/* Overlay for even smoother integration */}
            <div className="absolute inset-0 pointer-events-none border-[1px] border-white/10 rounded-lg"></div>
          </motion.div>

        </div>
      </section>

      <Footer />
    </main>
  );
}
