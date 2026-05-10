"use client";

import { useState } from 'react';
import { MapPin, Phone, Mail, Menu, X } from 'lucide-react';
import Link from 'next/link';
import { AnimatePresence, motion } from 'framer-motion';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="absolute top-0 w-full z-50 flex flex-col text-white font-sans">
      {/* Top Info Bar - Hidden on Mobile */}
      <div className="hidden lg:flex border-b border-[rgba(255,255,255,0.08)] py-5 items-center">
        <div className="max-w-[1280px] w-full mx-auto px-6 lg:px-10 flex justify-between items-center text-[13px] font-normal">
          <div className="flex items-center space-x-2">
            <MapPin size={13} />
            <span>Silk St, Barbican, London EC2Y 8DS, UK</span>
          </div>
          <div className="flex items-center space-x-8">
            <div className="flex items-center space-x-2">
              <Phone size={13} />
              <span>+39-055-123456</span>
            </div>
            <div className="flex items-center space-x-2">
              <Mail size={13} />
              <span>booking@patiotime.com</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Nav */}
      <nav className="mt-6 lg:mt-2 h-[60px] max-w-[1280px] mx-auto px-6 lg:px-10 w-full flex lg:grid lg:grid-cols-[auto_1fr_auto] justify-between items-center">
        <div className="justify-self-start z-50">
          <Link href="/" className="font-serif italic text-[48px] lg:text-[57px] leading-none text-white">P.</Link>
        </div>
        
        {/* Desktop Links */}
        <div className="hidden lg:flex justify-self-center space-x-[36px] text-[14px] uppercase tracking-[0.08em] font-bold text-white items-center">
          <Link href="#home" className="relative group pb-2">
            Home
            <span className="absolute bottom-0 left-0 w-full h-[2px] bg-[#DC5803] origin-left scale-x-100 transition-transform duration-300 ease-out"></span>
          </Link>
          <Link href="#about" className="relative group pb-2">
            About
            <span className="absolute bottom-0 left-0 w-full h-[2px] bg-[#DC5803] origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-out"></span>
          </Link>
          <Link href="#menu" className="relative group pb-2">
            Our Menu
            <span className="absolute bottom-0 left-0 w-full h-[2px] bg-[#DC5803] origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-out"></span>
          </Link>
          <Link href="#reservation" className="relative group pb-2">
            Reservation
            <span className="absolute bottom-0 left-0 w-full h-[2px] bg-[#DC5803] origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-out"></span>
          </Link>
          <Link href="#contact" className="relative group pb-2">
            Contact
            <span className="absolute bottom-0 left-0 w-full h-[2px] bg-[#DC5803] origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-out"></span>
          </Link>
          <Link href="#news" className="relative group pb-2">
            Latest News
            <span className="absolute bottom-0 left-0 w-full h-[2px] bg-[#DC5803] origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-out"></span>
          </Link>
        </div>

        {/* Desktop CTA */}
        <div className="hidden lg:block justify-self-end">
          <a href="#reservation" className="border-[3px] border-[rgba(255,255,255,0.7)] px-[24px] py-[10px] text-[13px] uppercase tracking-[0.15em] text-white hover:bg-white hover:text-black transition-colors font-semibold rounded-[2px]">
            Find A Table
          </a>
        </div>

        {/* Mobile Hamburger Icon */}
        <div className="lg:hidden z-50">
          <button onClick={() => setIsOpen(!isOpen)} className="text-white p-2">
            {isOpen ? <X size={32} /> : <Menu size={32} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 bg-[#0a0a0a] z-40 flex flex-col items-center justify-center pt-20 h-screen"
          >
            <div className="flex flex-col items-center space-y-8 text-[18px] uppercase tracking-[0.15em] font-bold text-white">
              <Link href="#home" onClick={() => setIsOpen(false)} className="hover:text-[#DC5803] transition-colors">Home</Link>
              <Link href="#about" onClick={() => setIsOpen(false)} className="hover:text-[#DC5803] transition-colors">About</Link>
              <Link href="#menu" onClick={() => setIsOpen(false)} className="hover:text-[#DC5803] transition-colors">Our Menu</Link>
              <Link href="#reservation" onClick={() => setIsOpen(false)} className="hover:text-[#DC5803] transition-colors">Reservation</Link>
              <Link href="#contact" onClick={() => setIsOpen(false)} className="hover:text-[#DC5803] transition-colors">Contact</Link>
              <Link href="#news" onClick={() => setIsOpen(false)} className="hover:text-[#DC5803] transition-colors">Latest News</Link>
              <a href="#reservation" onClick={() => setIsOpen(false)} className="mt-8 border-[3px] border-[#DC5803] text-[#DC5803] px-[32px] py-[12px] text-[14px] hover:bg-[#DC5803] hover:text-black transition-colors rounded-[2px]">
                Find A Table
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
