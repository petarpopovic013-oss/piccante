"use client";

import { useRef, useState, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Image from 'next/image';
import { menuData } from './menuData';

export default function Jelovnik() {
  const bannerRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: bannerRef,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ["-20%", "20%"]);

  const [activeCategory, setActiveCategory] = useState(menuData[0].name);

  // Scroll to category
  const scrollToCategory = (categoryName) => {
    setActiveCategory(categoryName);
    const element = document.getElementById(categoryName.replace(/\s+/g, '-').toLowerCase());
    if (element) {
      // Offset for fixed header (Navbar is absolute top, but category sticky bar is sticky)
      const yOffset = element.getBoundingClientRect().top + window.scrollY - 140;
      window.scrollTo({ top: yOffset, behavior: 'smooth' });
    }
  };

  // Scrollspy logic
  useEffect(() => {
    const handleScroll = () => {
      const categories = menuData.map(c => c.name);
      for (let i = categories.length - 1; i >= 0; i--) {
        const cat = categories[i];
        const element = document.getElementById(cat.replace(/\s+/g, '-').toLowerCase());
        if (element) {
          const rect = element.getBoundingClientRect();
          // Adjust threshold based on layout
          if (rect.top <= 200) {
            setActiveCategory(cat);

            // Optionally, scroll the active category button into view inside the sticky nav
            const btn = document.getElementById(`nav-btn-${cat}`);
            if (btn && btn.parentElement) {
              const navContainer = btn.parentElement.parentElement;
              // Simple center scroll logic if needed
              // navContainer.scrollTo({ left: btn.offsetLeft - navContainer.offsetWidth / 2 + btn.offsetWidth / 2, behavior: 'smooth' });
            }
            break;
          }
        }
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <main className="min-h-screen bg-[#0a0a0a] overflow-x-hidden text-[#ededed]">
      <Navbar />

      {/* Small Hero with Parallax */}
      <motion.section
        ref={bannerRef}
        className="w-full h-[60vh] min-h-[450px] relative flex items-center justify-center overflow-hidden"
      >
        <motion.div style={{ y }} className="absolute inset-0 w-full h-[140%] -top-[20%] z-0">
          <Image
            src="/images/jelovnikimage.webp"
            alt="Jelovnik Hero Background"
            fill
            className="object-cover object-center"
            priority
            quality={90}
          />
          <div className="absolute inset-0 bg-black/70 z-10" />
        </motion.div>

        <div className="relative z-20 text-center px-4 w-full max-w-[1280px] mx-auto mt-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            <h1 className="font-serif text-[42px] sm:text-6xl md:text-[85px] text-white leading-[1.1] mb-4">
              Naš <span className="text-[#C22127] italic font-normal">Jelovnik</span>
            </h1>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="w-full max-w-[800px] mx-auto"
          >
            <p className="font-sans text-[15px] md:text-[19px] text-white/90 leading-relaxed tracking-wide font-medium">
              Istražite pažljivo osmišljenu ponudu jela, pripremljenu od najkvalitetnijih sastojaka. Od laganog doručka do bogatih glavnih jela, svaki zalogaj je umetnost.
            </p>
          </motion.div>
        </div>
      </motion.section>

      {/* Sticky Navigation for Categories */}
      <div className="relative md:sticky md:top-0 z-40 bg-[#0a0a0a]/95 backdrop-blur-md border-b border-white/5 w-full shadow-lg shadow-black/20">
        <div className="max-w-[1280px] mx-auto px-3 md:px-10 py-4 md:py-5">
          <div className="flex flex-wrap justify-center gap-x-1.5 gap-y-2 md:gap-x-4 md:gap-y-4">
            {menuData.map((category) => (
              <button
                id={`nav-btn-${category.name}`}
                key={category.name}
                onClick={() => scrollToCategory(category.name)}
                className={`font-sans text-[10px] sm:text-[11px] md:text-[13px] uppercase tracking-[0.05em] sm:tracking-[0.1em] md:tracking-[0.15em] font-bold transition-all duration-300 px-2.5 py-1.5 md:px-4 md:py-2 border rounded-[2px] ${activeCategory === category.name
                    ? 'border-[#C22127] bg-[#C22127]/10 text-[#C22127]'
                    : 'border-white/10 text-white/70 hover:border-white/30 hover:text-white hover:bg-white/5'
                  }`}
              >
                {category.name}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Menu Content */}
      <section className="py-24 px-4 md:px-10 max-w-[1100px] mx-auto">
        {menuData.map((category, index) => (
          <motion.div
            key={category.name}
            id={category.name.replace(/\s+/g, '-').toLowerCase()}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="mb-28 scroll-mt-32"
          >
            {/* Category Header */}
            <div className="text-center mb-20 relative flex flex-col items-center">
              <span className="mb-4">
                <Image
                  src="/images/paprika ikonica.webp"
                  alt="Piccante ikonica"
                  width={47}
                  height={47}
                  className="object-contain"
                />
              </span>
              <h2 className="font-serif text-[44px] md:text-[64px] text-white tracking-[0.05em] leading-tight mb-2 uppercase drop-shadow-md">
                {category.name}
              </h2>
              <div className="w-16 h-[2px] bg-[#C22127] mt-3 mb-3"></div>
              {category.note && (
                <p className="font-sans text-white/60 text-[14px] italic uppercase tracking-[0.15em] mt-2">
                  {category.note}
                </p>
              )}
            </div>

            {/* Category Items */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-16 gap-y-12">
              {category.items.map((item, itemIndex) => (
                <motion.div
                  key={item.name + itemIndex}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.5, delay: (itemIndex % 4) * 0.1 }}
                  className="flex flex-col group"
                >
                  <div className="relative w-full mb-2 overflow-hidden">
                    {/* Absolute dotted line running behind everything at the baseline */}
                    <div className="absolute bottom-[3px] md:bottom-[5px] left-0 right-0 border-b-[2px] border-dotted border-white/20 z-0"></div>

                    <div className="relative z-10 flex items-end justify-between w-full gap-x-2">
                      <h3 className="font-sans font-bold text-[14px] md:text-[18px] text-white tracking-wide uppercase shrink min-w-0">
                        <span className="bg-[#0a0a0a] pr-2 inline">
                          {item.name}
                          {item.isNew && (
                            <span className="text-[9px] md:text-[10px] bg-[#C22127] text-white px-1.5 py-[1px] md:px-2 md:py-[2px] rounded-sm tracking-[0.1em] md:tracking-[0.15em] ml-2 shrink-0 inline-block align-middle relative top-[-1px]">
                              NOVO
                            </span>
                          )}
                        </span>
                      </h3>
                      <div className="font-serif text-[16px] md:text-[22px] text-[#C22127] font-bold text-right shrink-0 bg-[#0a0a0a] pl-2 self-end">
                        {item.price.includes('/') ? (
                          <div className="flex flex-col items-end gap-1 leading-[1.2] bg-[#0a0a0a]">
                            {item.price.split('/').map((p, i) => (
                              <span key={i} className="whitespace-nowrap bg-[#0a0a0a]">{p.trim()}</span>
                            ))}
                          </div>
                        ) : (
                          <span className="whitespace-nowrap bg-[#0a0a0a]">{item.price}</span>
                        )}
                      </div>
                    </div>
                  </div>
                  {item.description && (
                    <p className="font-sans text-[14px] text-[#ededed]/60 leading-[1.6] lg:pr-10 transition-colors duration-300 group-hover:text-[#ededed]/90 font-medium">
                      {item.description}
                    </p>
                  )}
                </motion.div>
              ))}
            </div>

          </motion.div>
        ))}
      </section>

      {/* Footer Quote Section (Optional, similar to homepage) */}
      <motion.section
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 1.2, ease: [0.25, 0.46, 0.45, 0.94] }}
        className="w-full py-[80px] md:py-[120px] px-[40px] bg-[#0a0a0a] flex items-center justify-center gap-0 border-t border-white/5"
      >
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
            "Gastronomija nije samo o ukusima, to je umetnost koja stvara uspomene."
          </p>
        </div>
      </motion.section>

      <Footer />
    </main>
  );
}
