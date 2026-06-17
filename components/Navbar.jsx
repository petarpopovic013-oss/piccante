"use client";

import Image from 'next/image';
import { useState } from 'react';
import { MapPin, Phone, Menu, X } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { AnimatePresence, motion } from 'framer-motion';

export default function Navbar({ lang = 'sr', dict }) {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const t = (key) => dict?.[key] || key;

  const getLocalizedHref = (path) => {
    if (lang === 'sr') return path;
    if (path === '/') return `/${lang}`;
    return `/${lang}${path}`;
  };

  const navLinks = [
    { label: t("NASLOVNA"), href: "/" },
    { label: t("O NAMA"), href: "/o-nama" },
    { label: t("JELOVNIK"), href: "/jelovnik" },
    { label: t("KARTA PIĆA"), href: "/karta-pica" },
    { label: t("BLOG"), href: "/blog" },
    { label: t("KONTAKT"), href: "/kontakt" },
  ];

  const getCleanPath = () => {
    let clean = pathname.replace(/^\/(en|ru|sr)/, '');
    return clean === '' ? '/' : clean;
  };

  const cleanPath = getCleanPath();

  return (
    <header className="absolute top-0 w-full z-50 flex flex-col text-white font-sans">
      {/* Top Info Bar - Hidden on Mobile */}
      <div className="hidden lg:flex border-b border-[rgba(255,255,255,0.08)] py-5 items-center">
        <div className="max-w-[1280px] w-full mx-auto px-6 lg:px-10 flex justify-between items-center text-[13px] font-normal">
          <div className="flex items-center space-x-2">
            <MapPin size={13} />
            <span>{t("Bulevar patrijarha Pavla 22, Novi Sad")}</span>
          </div>
          <div className="flex items-center space-x-8">
            <div className="flex items-center space-x-2">
              <Phone size={13} />
              <span>{t("+381 69 742208")}</span>
            </div>
            {/* Language Switcher Desktop */}
            <div className="flex items-center space-x-2 text-[12px] font-bold uppercase tracking-widest">
              <Link href={cleanPath} className={lang === 'sr' ? 'text-[#C22127]' : 'hover:text-[#C22127] transition-colors'}>SR</Link>
              <span className="text-[rgba(255,255,255,0.3)]">|</span>
              <Link href={`/en${cleanPath === '/' ? '' : cleanPath}`} className={lang === 'en' ? 'text-[#C22127]' : 'hover:text-[#C22127] transition-colors'}>EN</Link>
              <span className="text-[rgba(255,255,255,0.3)]">|</span>
              <Link href={`/ru${cleanPath === '/' ? '' : cleanPath}`} className={lang === 'ru' ? 'text-[#C22127]' : 'hover:text-[#C22127] transition-colors'}>RU</Link>
            </div>
          </div>
        </div>
      </div>

      {/* Main Nav */}
      <nav className="mt-6 lg:mt-2 h-[60px] max-w-[1280px] mx-auto px-6 lg:px-10 w-full flex lg:grid lg:grid-cols-[auto_1fr_auto] justify-between items-center">
        <div className="justify-self-start z-50">
          <Link href={getLocalizedHref("/")} className="flex items-center">
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
          {navLinks.map((link) => {
            const localizedHref = getLocalizedHref(link.href);
            return (
              <Link key={link.href} href={localizedHref} className="relative group pb-2">
                {link.label}
                <span className={`absolute bottom-0 left-0 w-full h-[2px] bg-[#C22127] origin-left transition-transform duration-300 ease-out ${pathname === localizedHref ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'}`}></span>
              </Link>
            );
          })}
        </div>

        {/* Desktop CTA */}
        <div className="hidden lg:block justify-self-end">
          <Link href={getLocalizedHref("/kontakt")} className="border-[3px] border-[rgba(255,255,255,0.7)] px-[24px] py-[10px] text-[13px] uppercase tracking-[0.15em] text-white hover:bg-white hover:text-black transition-colors font-semibold rounded-[2px]">
            {t("REZERVACIJA")}
          </Link>
        </div>

        {/* Mobile Hamburger Icon */}
        <div className="lg:hidden z-50 flex items-center space-x-4">
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
              {/* Language Switcher Mobile */}
              <div className="flex items-center space-x-4 mb-4 text-[16px] font-bold uppercase tracking-widest">
                <Link href={cleanPath} onClick={() => setIsOpen(false)} className={lang === 'sr' ? 'text-[#C22127]' : 'hover:text-[#C22127] transition-colors'}>SR</Link>
                <span className="text-[rgba(255,255,255,0.3)]">|</span>
                <Link href={`/en${cleanPath === '/' ? '' : cleanPath}`} onClick={() => setIsOpen(false)} className={lang === 'en' ? 'text-[#C22127]' : 'hover:text-[#C22127] transition-colors'}>EN</Link>
                <span className="text-[rgba(255,255,255,0.3)]">|</span>
                <Link href={`/ru${cleanPath === '/' ? '' : cleanPath}`} onClick={() => setIsOpen(false)} className={lang === 'ru' ? 'text-[#C22127]' : 'hover:text-[#C22127] transition-colors'}>RU</Link>
              </div>

              {navLinks.map((link) => {
                const localizedHref = getLocalizedHref(link.href);
                return (
                  <Link
                    key={link.href}
                    href={localizedHref}
                    onClick={() => setIsOpen(false)}
                    className={`${pathname === localizedHref ? 'text-[#C22127]' : 'hover:text-[#C22127]'} transition-colors`}
                  >
                    {link.label}
                  </Link>
                );
              })}
              <Link href={getLocalizedHref("/kontakt")} onClick={() => setIsOpen(false)} className="mt-8 border-[3px] border-[#C22127] text-[#C22127] px-[32px] py-[12px] text-[14px] hover:bg-[#C22127] hover:text-black transition-colors rounded-[2px]">
                {t("REZERVACIJA")}
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
