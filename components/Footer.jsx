"use client";

import React from 'react';
import { motion } from 'framer-motion';

export default function Footer() {
  return (
    <footer className="w-full flex flex-col font-sans">
      
      {/* TWO PANELS */}
      <div className="grid grid-cols-1 md:grid-cols-2 w-full">
        
        {/* LEFT PANEL */}
        <div className="relative overflow-hidden min-h-[600px] lg:min-h-[720px] flex items-center justify-center group cursor-pointer bg-[#1a1918]">
          {/* Background Image & Overlay Container */}
          <div className="absolute inset-0 z-0 opacity-0 group-hover:opacity-100 transition-opacity duration-[800ms] ease-in-out">
            <img 
              src="https://images.unsplash.com/photo-1559339352-11d035aa65de?q=80&w=1974&auto=format&fit=crop" 
              alt="Visit Us Background" 
              className="absolute inset-0 w-full h-full object-cover object-center transition-transform duration-[800ms] ease-[cubic-bezier(0.25,0.46,0.45,0.94)] scale-100 group-hover:scale-[1.08]"
            />
            <div className="absolute inset-0 bg-black/80 z-10"></div>
          </div>
          
          {/* Content */}
          <div className="relative z-20 text-center px-6 md:px-[80px] py-[60px] max-w-[480px]">
            <p className="text-[#DC5803] uppercase text-[11px] tracking-[0.2em] mb-4 font-bold">Find The Restaurant</p>
            <h2 className="text-white font-serif text-[48px] font-normal tracking-[0.08em] uppercase mb-5 leading-none">Visit Us</h2>
            <p className="text-white text-[14px] leading-[1.8] mb-6">
              Northern end of the Overseas Passenger Terminal, Circular Quay, Sydney NSW 2000, Australia
            </p>
            <p className="text-white font-bold text-[13px] tracking-[0.15em] uppercase mb-2">Open Hours</p>
            <p className="text-white text-[13px] leading-[1.8]">
              Mon – Thu: 10:00 am – 01:00 am<br/>
              Fri – Sun: 10:00 am – 02:00 am
            </p>
            <a href="#directions" className="inline-block mt-7 text-white/90 uppercase text-[11px] tracking-[0.2em] border-b border-[#DC5803] pb-[3px] hover:text-[#DC5803] transition-colors">
              Get Directions
            </a>
          </div>
        </div>

        {/* RIGHT PANEL */}
        <div className="relative overflow-hidden min-h-[600px] lg:min-h-[720px] flex items-center justify-center group cursor-pointer bg-[#222120]">
          {/* Background Image & Overlay Container */}
          <div className="absolute inset-0 z-0 opacity-0 group-hover:opacity-100 transition-opacity duration-[800ms] ease-in-out">
            <img 
              src="https://images.unsplash.com/photo-1550966871-3ed3cdb5ed0c?q=80&w=2070&auto=format&fit=crop" 
              alt="Reservation Background" 
              className="absolute inset-0 w-full h-full object-cover object-center transition-transform duration-[800ms] ease-[cubic-bezier(0.25,0.46,0.45,0.94)] scale-100 group-hover:scale-[1.08]"
            />
            <div className="absolute inset-0 bg-black/80 z-10"></div>
          </div>
          
          {/* Content */}
          <div className="relative z-20 text-center px-6 md:px-[80px] py-[60px] max-w-[480px]">
            <p className="text-[#DC5803] uppercase text-[11px] tracking-[0.2em] mb-4 font-bold">Book A Table</p>
            <h2 className="text-white font-serif text-[48px] font-normal tracking-[0.08em] uppercase mb-5 leading-none">Reservation</h2>
            <p className="text-white text-[14px] leading-[1.8] mb-6 max-w-[320px] mx-auto">
              Planning a romantic dinner for two or a communal meal with family or friends? Book a table now.
            </p>
            <p className="text-white font-bold text-[13px] tracking-[0.15em] uppercase mb-2">Booking</p>
            <p className="text-white text-[13px] leading-[1.8]">
              Email: booking@patiotime.com<br/>
              Call us: +39 055 1234567
            </p>
            <a href="#reservation" className="inline-block mt-7 text-white/90 uppercase text-[11px] tracking-[0.2em] border-b border-[#DC5803] pb-[3px] hover:text-[#DC5803] transition-colors">
              Online Reservation
            </a>
          </div>
        </div>

      </div>

      {/* STANDARD FOOTER */}
      <motion.div 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        className="w-full bg-[#0a0a0a] border-t border-[rgba(255,255,255,0.08)] py-16 px-6 md:px-10"
      >
        <div className="max-w-[1280px] mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="text-center md:text-left">
            <h2 className="font-serif italic text-4xl text-white mb-2">PatioTime Café</h2>
            <p className="text-white/50 text-sm">Where flavor meets harmony since 1998.</p>
          </div>
          
          <div className="flex gap-8 text-[12px] uppercase tracking-[0.15em] font-bold text-white/80">
            <a href="#home" className="hover:text-[#DC5803] transition-colors">Home</a>
            <a href="#menu" className="hover:text-[#DC5803] transition-colors">Menu</a>
            <a href="#reservation" className="hover:text-[#DC5803] transition-colors">Reservation</a>
            <a href="#contact" className="hover:text-[#DC5803] transition-colors">Contact</a>
          </div>

          <div className="flex gap-6">
            <a href="#instagram" className="text-white/50 hover:text-white transition-colors">
              <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>
            </a>
            <a href="#facebook" className="text-white/50 hover:text-white transition-colors">
              <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24"><path d="M22.675 0h-21.35c-.732 0-1.325.593-1.325 1.325v21.351c0 .731.593 1.324 1.325 1.324h11.495v-9.294h-3.128v-3.622h3.128v-2.671c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.312h3.587l-.467 3.622h-3.12v9.293h6.116c.73 0 1.323-.593 1.323-1.325v-21.35c0-.732-.593-1.325-1.325-1.325z"/></svg>
            </a>
          </div>
        </div>
        <div className="max-w-[1280px] mx-auto mt-16 text-center text-white/30 text-xs">
          &copy; {new Date().getFullYear()} PatioTime Café. All Rights Reserved.
        </div>
      </motion.div>

    </footer>
  );
}
