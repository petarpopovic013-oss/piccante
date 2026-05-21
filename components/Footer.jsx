"use client";

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="w-full flex flex-col font-sans">

      {/* TWO PANELS */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-80px" }}
        variants={{
          hidden: {},
          visible: { transition: { staggerChildren: 0.2 } }
        }}
        className="grid grid-cols-1 md:grid-cols-2 w-full"
      >

        {/* LEFT PANEL */}
        <motion.div
          variants={{
            hidden: { opacity: 0, y: 80 },
            visible: { opacity: 1, y: 0, transition: { duration: 1, ease: [0.25, 0.46, 0.45, 0.94] } }
          }}
          className="relative overflow-hidden min-h-[600px] lg:min-h-[720px] flex items-center justify-center group cursor-pointer bg-[#1a1918]"
        >
          {/* Background Image & Overlay Container */}
          <div className="absolute inset-0 z-0 opacity-0 group-hover:opacity-100 transition-opacity duration-[800ms] ease-in-out will-change-[opacity]">
            <Image
              src="/images/visitus hover.JPG"
              alt="Visit Us Background"
              fill
              className="object-cover object-center transition-transform duration-[800ms] ease-[cubic-bezier(0.25,0.46,0.45,0.94)] scale-100 group-hover:scale-[1.08]"
              sizes="50vw"
            />
            <div className="absolute inset-0 bg-black/80 z-10"></div>
          </div>

          {/* Content */}
          <div className="relative z-20 text-center px-6 md:px-[80px] py-[60px] max-w-[480px]">
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="text-[#C22127] uppercase text-[11px] tracking-[0.2em] mb-4 font-bold"
            >Pronađite Naš Restoran</motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-white font-serif text-[48px] font-normal tracking-[0.08em] uppercase mb-5 leading-none"
            >Posetite Nas</motion.h2>
            <p className="text-white text-[14px] leading-[1.8] mb-6">
              Bulevar patrijarha Pavla 22, Novi Sad
            </p>
            <p className="text-white font-bold text-[13px] tracking-[0.15em] uppercase mb-2">Radno Vreme</p>
            <p className="text-white text-[13px] leading-[1.8]">
              Svaki dan: 08:00h – 23:00h
            </p>
            <a href="https://www.google.com/maps/search/?api=1&query=Bulevar+patrijarha+Pavla+22,+Novi+Sad,+Srbija" target="_blank" rel="noopener noreferrer" className="inline-block mt-7 text-white/90 uppercase text-[11px] tracking-[0.2em] border-b border-[#C22127] pb-[3px] hover:text-[#C22127] transition-colors">
              Prikaži Mapu
            </a>
          </div>
        </motion.div>

        {/* RIGHT PANEL */}
        <motion.div
          variants={{
            hidden: { opacity: 0, y: 80 },
            visible: { opacity: 1, y: 0, transition: { duration: 1, ease: [0.25, 0.46, 0.45, 0.94] } }
          }}
          className="relative overflow-hidden min-h-[600px] lg:min-h-[720px] flex items-center justify-center group cursor-pointer bg-[#222120]"
        >
          {/* Background Image & Overlay Container */}
          <div className="absolute inset-0 z-0 opacity-0 group-hover:opacity-100 transition-opacity duration-[800ms] ease-in-out will-change-[opacity]">
            <Image
              src="/images/reservation hover.JPG"
              alt="Reservation Background"
              fill
              className="object-cover object-center transition-transform duration-[800ms] ease-[cubic-bezier(0.25,0.46,0.45,0.94)] scale-100 group-hover:scale-[1.08]"
              sizes="50vw"
            />
            <div className="absolute inset-0 bg-black/80 z-10"></div>
          </div>

          {/* Content */}
          <div className="relative z-20 text-center px-6 md:px-[80px] py-[60px] max-w-[480px]">
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.5 }}
              className="text-[#C22127] uppercase text-[11px] tracking-[0.2em] mb-4 font-bold"
            >Rezervišite Vaš Sto</motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="text-white font-serif text-[48px] font-normal tracking-[0.08em] uppercase mb-5 leading-none"
            >Rezervacije</motion.h2>
            <p className="text-white text-[14px] leading-[1.8] mb-6 max-w-[320px] mx-auto">
              Planirate nezaboravnu romantičnu večeru ili poseban trenutak sa najdražima? Osigurajte svoje mesto na vreme pozivom na naš broj.
            </p>
            <p className="text-white font-bold text-[13px] tracking-[0.15em] uppercase mb-2">Kontakt za Rezervacije</p>
            <p className="text-white text-[13px] leading-[1.8]">
              Telefon: +381 69 742208
            </p>
          </div>
        </motion.div>

      </motion.div>

      {/* STANDARD FOOTER */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        className="w-full bg-[#0a0a0a] border-t border-[rgba(255,255,255,0.08)] py-24 px-6 md:px-10"
      >
        <div className="max-w-[1280px] mx-auto grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-16">

          {/* Brand Column */}
          <div className="md:col-span-5 space-y-8 flex flex-col items-center md:items-start text-center md:text-left">
            <Link href="/" className="inline-block group">
              <Image
                src="/images/picante logo.png"
                alt="Piccante Restaurant Logo"
                width={168}
                height={56}
                className="h-auto w-[168px] object-contain opacity-90 group-hover:opacity-100 transition-opacity duration-300"
              />
            </Link>
            <p className="text-white/50 text-[16px] leading-[1.8] max-w-md font-sans">
              Piccante Restaurant predstavlja sinonim za beskompromisni kvalitet i autentično kulinarsko iskustvo u srcu Novog Sada. Spajamo najfinije sastojke sa strašću za inovacijom.
            </p>
            <div className="flex gap-5 pt-2">
              <a href="https://www.instagram.com/piccante.ns/" target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center group hover:bg-[#C22127] hover:border-[#C22127] transition-all duration-300">
                <Image
                  src="https://icons.veryicon.com/png/o/miscellaneous/offerino-icons/instagram-53.png"
                  alt="Instagram"
                  width={30}
                  height={30}
                  className="w-30 h-30 object-contain opacity-50 group-hover:opacity-100 group-hover:invert-0 invert transition-all duration-300"
                />
              </a>
              <a href="https://www.facebook.com/piccante.ns/" target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center group hover:bg-[#C22127] hover:border-[#C22127] transition-all duration-300">
                <Image
                  src="https://icons.veryicon.com/png/o/leisure/crisp-app-icon-library-v3/facebook-135.png"
                  alt="Instagram"
                  width={30}
                  height={30}
                  className="w-30 h-30 object-contain opacity-50 group-hover:opacity-100 group-hover:invert-0 invert transition-all duration-300"
                />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-3 space-y-8">
            <h3 className="text-white text-[13px] font-bold tracking-[0.25em] uppercase border-l-2 border-[#C22127] pl-4">Navigacija</h3>
            <ul className="space-y-4 text-white/40 text-[13px] tracking-widest uppercase font-bold">
              <li><Link href="/" className="hover:text-white hover:pl-2 transition-all duration-300 block">NASLOVNA</Link></li>
              <li><Link href="/o-nama" className="hover:text-white hover:pl-2 transition-all duration-300 block">O NAMA</Link></li>
              <li><Link href="/jelovnik" className="hover:text-white hover:pl-2 transition-all duration-300 block">JELOVNIK</Link></li>
              <li><Link href="/kontakt" className="hover:text-white hover:pl-2 transition-all duration-300 block">KONTAKT</Link></li>
            </ul>
          </div>

          {/* Contact Column */}
          <div className="md:col-span-4 space-y-8">
            <h3 className="text-white text-[13px] font-bold tracking-[0.25em] uppercase border-l-2 border-[#C22127] pl-4">Kontakt Info</h3>
            <div className="space-y-6">
              <div className="space-y-2">
                <p className="text-white/30 text-[11px] uppercase tracking-widest font-bold">Adresa</p>
                <p className="text-white/70 text-[15px] font-sans">Bulevar patrijarha Pavla 22,<br /> Novi Sad, Srbija</p>
              </div>
              <div className="space-y-2">
                <p className="text-white/30 text-[11px] uppercase tracking-widest font-bold">Rezervacije</p>
                <a href="tel:+38169742208" className="text-white text-2xl font-serif hover:text-[#C22127] transition-colors block">+381 69 742208</a>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="max-w-[1280px] mx-auto mt-24 pt-10 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-6 text-white/20 text-[10px] uppercase tracking-[0.2em] font-bold">
          <p>&copy; {new Date().getFullYear()} Piccante Restaurant. Sva prava zadržana.</p>
          <p>Developed by Petar Popović</p>
        </div>
      </motion.div>

    </footer>
  );
}
