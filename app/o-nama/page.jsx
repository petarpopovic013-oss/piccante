"use client";

import { useRef } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { motion, useScroll, useTransform } from 'framer-motion';
import Image from 'next/image';

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
};

const staggerContainer = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.1
    }
  }
};

const imageReveal = {
  hidden: { opacity: 0, scale: 1.08, y: 60 },
  visible: {
    opacity: 1, scale: 1, y: 0,
    transition: { duration: 1.2, ease: [0.25, 0.46, 0.45, 0.94] }
  }
};

const lineGrow = {
  hidden: { scaleX: 0 },
  visible: { scaleX: 1, transition: { duration: 0.8, ease: "easeInOut", delay: 0.3 } }
};

const sections = [
  {
    text: "Piccante je savremeni restoran u Novom Sadu, nastao sa idejom da svakodnevni odlazak na ručak, večeru, kafu ili piće dobije više pažnje, topline i stila. Naša kuhinja oslanja se na jela koja ljudi vole: sočno meso, bogate sosove, sveže salate, pažljivo spremljena predjela, paste, koktele i tanjire za deljenje. ",
    image: "/images/o nama 1.JPG",
    alt: "Ambijent restorana",
    imageRight: true,
  },
  {
    text: "Ipak, Piccante ne ostaje samo u okvirima poznatog. Naš jelovnik hrabro istražuje i moderne ukuse Istoka i Zapada, spajajući bliske sastojke, savremene tehnike i globalnu inspiraciju u iskustvo koje je dovoljno prijatno da mu se rado vraćate, a dovoljno posebno da ga zapamtite.",
    image: "/images/o nama 2.JPG",
    alt: "Detalji menija",
    imageRight: false,
  },
  {
    text: "Ono što Piccante čini posebnim nije samo izbor jela, već način na koji se ona pripremaju i poslužuju – sa merom, ukusom i željom da gost za stolom zaista uživa. Svaki tanjir ima svoj karakter, bilo da dolazite na lagani obrok, poslovni ručak, večeru sa prijateljima, porodično okupljanje, koktel ili rezervaciju za posebno veče.",
    image: "/images/o nama 3.JPG",
    alt: "Kulinarski specijaliteti",
    imageRight: true,
  },
  {
    text: "Verujemo da restoran nije samo mesto gde se jede. To je prostor za razgovor, susret, predah, proslavu i one trenutke koji se spontano produže jer su hrana, društvo i atmosfera na pravom mestu. Zato smo Piccante oblikovali kao restoran u kome se gost oseća prijatno, a svaki detalj – od ukusa i tanjira do ambijenta – ima svoju ulogu.",
    image: "/images/o nama 4.JPG",
    alt: "Atmosfera restorana",
    imageRight: false,
  },
  {
    text: "Na meniju se susreću poznati ukusi, savremeni detalji i inspiracija iz različitih kuhinja sveta. Piccante je mesto gde ručak može da postane predah, večera mali ritual, a običan izlazak iskustvo koje se pamti.",
    image: "/images/o nama 5.JPG",
    alt: "Gastro doživljaj",
    imageRight: true,
  }
];

function ParallaxSection({ src, alt, children, height = "500px", overlay = "bg-black/60" }) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });
  const y = useTransform(scrollYProgress, [0, 1], ["-20%", "20%"]);

  return (
    <section ref={ref} className="w-full relative overflow-hidden flex items-center justify-center" style={{ minHeight: height }}>
      <motion.div style={{ y }} className="absolute inset-0 w-full h-[140%] -top-[20%] z-0">
        <Image
          src={src}
          alt={alt}
          fill
          className="object-cover object-center block"
          loading="lazy"
          sizes="100vw"
          quality={90}
        />
      </motion.div>
      <div className={`absolute inset-0 z-10 ${overlay}`}></div>
      <div className="relative z-20 w-full">
        {children}
      </div>
    </section>
  );
}

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-[#0a0a0a] flex flex-col font-sans">
      <Navbar />

      {/* Title Section with Parallax */}
      <ParallaxSection
        src="/images/full width gore.JPG"
        alt="Piccante ambijent gore"
        height="60vh"
        overlay="bg-black/70"
      >
        <div className="max-w-[1280px] mx-auto px-6 lg:px-10 pt-[160px] md:pt-[200px] pb-20">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="text-center max-w-4xl mx-auto flex flex-col items-center"
          >
            <motion.h1 variants={fadeUp} className="font-serif text-[36px] md:text-[56px] text-white leading-tight">
              Piccante – mesto gde Novi Sad uživa u poznatim svetskim ukusima
            </motion.h1>
            <motion.div variants={lineGrow} className="w-[60px] h-[2px] bg-[#C22127] mt-8 origin-center"></motion.div>
          </motion.div>
        </div>
      </ParallaxSection>

      {/* Zig-Zag Content */}
      <div className="flex flex-col w-full">
        {sections.map((section, index) => (
          <section
            key={index}
            className={`w-full py-20 lg:py-32 ${index % 2 === 0 ? 'bg-[#121212]' : 'bg-[#0a0a0a]'}`}
          >
            <div className="max-w-[1280px] mx-auto px-6 lg:px-10">
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                variants={staggerContainer}
                className={`flex flex-col ${section.imageRight ? 'md:flex-row' : 'md:flex-row-reverse'} items-center gap-12 lg:gap-24`}
              >
                {/* Text Side */}
                <div className="flex-1 w-full flex flex-col justify-center">
                  <div className="relative py-8 lg:px-4">
                    {/* Decorative Top Dash */}
                    <div className="flex items-center mb-8">
                      <motion.div variants={lineGrow} className="w-12 h-[2px] bg-[#C22127] origin-left"></motion.div>
                    </div>

                    <motion.p variants={fadeUp} className="text-white/80 text-[16px] lg:text-[18px] leading-[2.2] font-light">
                      {section.text}
                    </motion.p>

                    {/* Decorative Bottom Dash */}
                    <motion.div variants={lineGrow} className="w-24 h-[1px] bg-white/20 mt-8 origin-left"></motion.div>
                  </div>
                </div>

                {/* Image Side */}
                <div className="flex-1 w-full relative">
                  <motion.div variants={imageReveal} className="relative aspect-[4/3] w-full overflow-hidden shadow-2xl group cursor-pointer">
                    <Image
                      src={section.image}
                      alt={section.alt}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-[1500ms] ease-in-out"
                      sizes="(max-width: 1024px) 100vw, 50vw"
                      quality={90}
                    />
                  </motion.div>
                </div>
              </motion.div>
            </div>
          </section>
        ))}
      </div>

      {/* Final Centered Row with Parallax */}
      <ParallaxSection
        src="/images/full width dole.JPG"
        alt="Piccante ambijent dole"
        height="50vh"
        overlay="bg-black/60"
      >
        <div className="max-w-[1280px] mx-auto px-6 lg:px-10 py-20">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="text-center flex flex-col items-center"
          >
            <motion.h2 variants={fadeUp} className="font-serif text-[36px] md:text-[48px] text-white italic">
              Dobro došli za sto.
            </motion.h2>
            <motion.div variants={lineGrow} className="w-[40px] h-[2px] bg-[#C22127] mt-6 origin-center"></motion.div>
          </motion.div>
        </div>
      </ParallaxSection>

      <Footer />
    </main>
  );
}
