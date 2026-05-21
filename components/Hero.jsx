"use client";

import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';
import Image from 'next/image';

const slides = [
  {
    image: '/images/hero1.JPG',
    headingTop: <span className="italic font-normal">Mesto uživanja</span>,
    headingBottom: <><span className="text-[#C22127] font-bold">u srcu</span> <span className="text-white">Novog Sada</span></>,
    subtitle: "Mesto gde se spajaju vrhunska gastronomija, bezvremenska elegancija i topla atmosfera. Stvaramo nezaboravne kulinarske uspomene od 2017. godine."
  },
  {
    image: '/images/hero2.JPG',
    headingTop: <span className="italic font-normal">Ukusi koji</span>,
    headingBottom: <><span className="text-[#C22127] font-bold">imaju</span> <span className="text-white">karakter</span></>,
    subtitle: "Dobrodošli u mesto gde svaki obrok ima svoj ritam, od doručka i poslovnog ručka do večere sa  dragim ljudima. Poznati ukusi, pažljivo odabrani sastojci i prijatna atmosfera čine Piccante restoranom u koji se rado dolazi i često vraća."
  }
];

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 7000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative w-full h-screen overflow-hidden bg-black">
      {/* Background Image Slider */}
      <AnimatePresence mode="popLayout">
        <motion.div
          key={currentSlide}
          initial={{ opacity: 0, scale: 1 }}
          animate={{ opacity: 1, scale: 1.1 }}
          exit={{ opacity: 0 }}
          transition={{
            opacity: { duration: 1.5, ease: "easeInOut" },
            scale: { duration: 15, ease: "easeOut" }
          }}
          className="absolute inset-0 z-0"
        >
          <div className="absolute inset-0 bg-black/60 z-10" />
          <Image
            src={slides[currentSlide].image}
            alt="Hero Background"
            fill
            className="object-cover object-center"
            priority={currentSlide === 0}
            quality={90}
          />
        </motion.div>
      </AnimatePresence>

      {/* Content */}
      <div className="relative z-20 h-full flex flex-col justify-center w-full max-w-[1280px] mx-auto px-4 md:px-10">
        <div className="text-left w-full lg:w-[65%]">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentSlide}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="font-serif text-[38px] sm:text-6xl md:text-[105px] leading-[1.1] md:leading-[1.05] mb-4 md:mb-6 tracking-tight text-white">
                <span className="block">{slides[currentSlide].headingTop}</span>
                <span className="block">{slides[currentSlide].headingBottom}</span>
              </h1>

              <p className="text-[14px] md:text-[19px] text-white/90 max-w-2xl leading-relaxed font-sans mb-8 md:mb-10 tracking-wide font-medium">
                {slides[currentSlide].subtitle}
              </p>

              <div className="flex items-center space-x-6 text-[12px] md:text-[13px] uppercase tracking-[0.15em] font-sans font-bold">
                <a href="/jelovnik" className="border-b-[2px] border-white pb-1 text-white hover:text-[#C22127] hover:border-[#C22127] transition-colors">
                  Jelovnik
                </a>
                <a href="tel:+38169742208" className="border-b-[2px] border-white pb-1 text-white hover:text-[#C22127] hover:border-[#C22127] transition-colors">
                  Pozovite nas
                </a>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* Slider dots */}
      <div className="absolute bottom-8 left-0 right-0 z-20 flex justify-center space-x-3">
        {slides.map((_, index) => (
          <div
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-[6px] h-[6px] rounded-full cursor-pointer transition-colors ${index === currentSlide ? 'bg-white' : 'bg-white/30 hover:bg-white/50'
              }`}
          />
        ))}
      </div>
    </section>
  );
}
