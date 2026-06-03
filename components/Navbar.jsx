"use client";

import Image from 'next/image';
import { useState } from 'react';
import { MapPin, Phone, Mail, Menu, X } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { AnimatePresence, motion } from 'framer-motion';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const navLinks = [
    { label: "NASLOVNA", href: "/" },
    { label: "O NAMA", href: "/o-nama" },
    { label: "JELOVNIK", href: "/jelovnik" },
    { label: "KARTA PIĆA", href: "/karta-pica" },
    { label: "BLOG", href: "/blog" },
    { label: "KONTAKT", href: "/kontakt" },
  ];

  return (
    <header className="absolute top-0 w-full z-50 flex flex-col text-white font-sans">
      {/* Top Info Bar - Hidden on Mobile */}
      <div className="hidden lg:flex border-b border-[rgba(255,255,255,0.08)] py-5 items-center">
        <div className="max-w-[1280px] w-full mx-auto px-6 lg:px-10 flex justify-between items-center text-[13px] font-normal">
          <div className="flex items-center space-x-2">
            <MapPin size={13} />
            <span>Bulevar patrijarha Pavla 22, Novi Sad</span>
          </div>
          <div className="flex items-center space-x-8">
            <div className="flex items-center space-x-2">
              <Phone size={13} />
              <span>+381 69 742208</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Nav */}
      <nav className="mt-6 lg:mt-2 h-[60px] max-w-[1280px] mx-auto px-6 lg:px-10 w-full flex lg:grid lg:grid-cols-[auto_1fr_auto] justify-between items-center">
        <div className="justify-self-start z-50">
          <Link href="/" className="flex items-center">
            <Image
              src="/images/picante logo.webp"
              alt="Piccante Restaurant Logo"
              width={200}
              height={70}
              className="h-[50px] lg:h-[70px] w-auto object-contain"
              priority
            />
          </Link>
        </div>

        {/* Desktop Links */}
        <div className="hidden lg:flex justify-self-center space-x-[36px] text-[14px] uppercase tracking-[0.08em] font-bold text-white items-center">
          {navLinks.map((link) => (
            <Link key={link.href} href={link.href} className="relative group pb-2">
              {link.label}
              <span className={`absolute bottom-0 left-0 w-full h-[2px] bg-[#C22127] origin-left transition-transform duration-300 ease-out ${pathname === link.href ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'}`}></span>
            </Link>
          ))}
        </div>

        {/* Desktop CTA */}
        <div className="hidden lg:block justify-self-end">
          <Link href="/kontakt" className="border-[3px] border-[rgba(255,255,255,0.7)] px-[24px] py-[10px] text-[13px] uppercase tracking-[0.15em] text-white hover:bg-white hover:text-black transition-colors font-semibold rounded-[2px]">
            REZERVACIJA
          </Link>
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
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className={`${pathname === link.href ? 'text-[#C22127]' : 'hover:text-[#C22127]'} transition-colors`}
                >
                  {link.label}
                </Link>
              ))}
              <Link href="/kontakt" onClick={() => setIsOpen(false)} className="mt-8 border-[3px] border-[#C22127] text-[#C22127] px-[32px] py-[12px] text-[14px] hover:bg-[#C22127] hover:text-black transition-colors rounded-[2px]">
                REZERVACIJA
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
