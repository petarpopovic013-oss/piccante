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
              className="text-[#DC5803] uppercase text-[11px] tracking-[0.2em] mb-4 font-bold"
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
            <a href="https://www.google.com/maps/search/?api=1&query=Bulevar+patrijarha+Pavla+22,+Novi+Sad,+Srbija" target="_blank" rel="noopener noreferrer" className="inline-block mt-7 text-white/90 uppercase text-[11px] tracking-[0.2em] border-b border-[#DC5803] pb-[3px] hover:text-[#DC5803] transition-colors">
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
              className="text-[#DC5803] uppercase text-[11px] tracking-[0.2em] mb-4 font-bold"
            >Rezervišite Vaš Sto</motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="text-white font-serif text-[48px] font-normal tracking-[0.08em] uppercase mb-5 leading-none"
            >Rezervacije</motion.h2>
            <p className="text-white text-[14px] leading-[1.8] mb-6 max-w-[320px] mx-auto">
              Planirate nezaboravnu romantičnu večeru ili ekskluzivnu proslavu sa najdražima? Osigurajte svoje mesto na vreme pozivom na naš broj.
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
          <div className="md:col-span-5 space-y-8">
            <Link href="/" className="inline-block group">
              <Image
                src="/images/picante logo.png"
                alt="Piccante Restaurant Logo"
                width={240}
                height={80}
                className="h-auto w-[240px] object-contain opacity-90 group-hover:opacity-100 transition-opacity duration-300"
              />
            </Link>
            <p className="text-white/50 text-[16px] leading-[1.8] max-w-md font-sans">
              Piccante Restaurant predstavlja sinonim za beskompromisni kvalitet i autentično kulinarsko iskustvo u srcu Novog Sada. Spajamo najfinije sastojke sa strašću za inovacijom.
            </p>
            <div className="flex gap-5 pt-2">
              <a href="#instagram" className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center text-white/50 hover:bg-[#DC5803] hover:text-white hover:border-[#DC5803] transition-all duration-300">
                <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" /></svg>
              </a>
              <a href="#facebook" className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center text-white/50 hover:bg-[#DC5803] hover:text-white hover:border-[#DC5803] transition-all duration-300">
                <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24"><path d="M22.675 0h-21.35c-.732 0-1.325.593-1.325 1.325v21.351c0 .731.593 1.324 1.325 1.324h11.495v-9.294h-3.128v-3.622h3.128v-2.671c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.312h3.587l-.467 3.622h-3.12v9.293h6.116c.73 0 1.323-.593 1.323-1.325v-21.35c0-.732-.593-1.325-1.325-1.325z" /></svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-3 space-y-8">
            <h3 className="text-white text-[13px] font-bold tracking-[0.25em] uppercase border-l-2 border-[#DC5803] pl-4">Navigacija</h3>
            <ul className="space-y-4 text-white/40 text-[13px] tracking-widest uppercase font-bold">
              <li><Link href="/" className="hover:text-white hover:pl-2 transition-all duration-300 block">NASLOVNA</Link></li>
              <li><Link href="/o-nama" className="hover:text-white hover:pl-2 transition-all duration-300 block">O NAMA</Link></li>
              <li><Link href="/jelovnik" className="hover:text-white hover:pl-2 transition-all duration-300 block">JELOVNIK</Link></li>
              <li><Link href="/kontakt" className="hover:text-white hover:pl-2 transition-all duration-300 block">KONTAKT</Link></li>
            </ul>
          </div>

          {/* Contact Column */}
          <div className="md:col-span-4 space-y-8">
            <h3 className="text-white text-[13px] font-bold tracking-[0.25em] uppercase border-l-2 border-[#DC5803] pl-4">Kontakt Info</h3>
            <div className="space-y-6">
              <div className="space-y-2">
                <p className="text-white/30 text-[11px] uppercase tracking-widest font-bold">Adresa</p>
                <p className="text-white/70 text-[15px] font-sans">Bulevar patrijarha Pavla 22,<br /> Novi Sad, Srbija</p>
              </div>
              <div className="space-y-2">
                <p className="text-white/30 text-[11px] uppercase tracking-widest font-bold">Rezervacije</p>
                <a href="tel:+38169742208" className="text-white text-2xl font-serif hover:text-[#DC5803] transition-colors block">+381 69 742208</a>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="max-w-[1280px] mx-auto mt-24 pt-10 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-6 text-white/20 text-[10px] uppercase tracking-[0.2em] font-bold">
          <p>&copy; {new Date().getFullYear()} Piccante Restaurant. Sva prava zadržana.</p>
          <div className="flex gap-10">
            <a href="#" className="hover:text-white transition-colors">Politika Privatnosti</a>
            <a href="#" className="hover:text-white transition-colors">Uslovi Korišćenja</a>
          </div>
        </div>
      </motion.div>

    </footer>
  );
}
