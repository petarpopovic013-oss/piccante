"use client";

import { motion } from "framer-motion";
import Image from "next/image";

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

const slideInLeft = {
  hidden: { opacity: 0, x: -40 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.9, ease: [0.25, 0.46, 0.45, 0.94] } }
};

const slideInRight = {
  hidden: { opacity: 0, x: 40 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.9, ease: [0.25, 0.46, 0.45, 0.94] } }
};

const lineGrow = {
  hidden: { scaleX: 0 },
  visible: { scaleX: 1, transition: { duration: 0.8, ease: "easeInOut", delay: 0.3 } }
};

const titleReveal = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } }
};

export default function MenuSection() {
  return (
    <div className="w-full bg-[#0a0a0a] text-white pt-[100px] pb-[60px]">

      {/* SECTION HEADER */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={{
          hidden: {},
          visible: { transition: { staggerChildren: 0.15, delayChildren: 0.1 } }
        }}
        className="max-w-[1280px] mx-auto px-6 md:px-10"
      >
        <div className="text-center mb-[60px]">
          <motion.div
            variants={{
              hidden: { opacity: 0 },
              visible: { opacity: 1, transition: { duration: 0.6 } }
            }}
            className="flex items-center justify-center gap-2 md:gap-4 text-[#DC5803] uppercase tracking-[0.05em] text-[14px] md:text-[18px] mb-4 font-sans font-extrabold"
          >
            <motion.span
              variants={{
                hidden: { scaleX: 0 },
                visible: { scaleX: 1, transition: { duration: 0.8, ease: "easeInOut" } }
              }}
              className="block w-[40px] md:w-[80px] h-[1px] bg-[#DC5803] origin-right"
            ></motion.span>
            <span>Preporuka Šefa Kuhinje</span>
            <motion.span
              variants={{
                hidden: { scaleX: 0 },
                visible: { scaleX: 1, transition: { duration: 0.8, ease: "easeInOut" } }
              }}
              className="block w-[40px] md:w-[80px] h-[1px] bg-[#DC5803] origin-left"
            ></motion.span>
          </motion.div>
          <motion.h2
            variants={{
              hidden: { opacity: 0, y: 30 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.9, ease: [0.25, 0.46, 0.45, 0.94] } }
            }}
            className="font-serif text-[48px] md:text-[72px] text-white font-normal mt-4 leading-tight"
          >Autorski Meni</motion.h2>
          <motion.p
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
            }}
            className="text-white/60 max-w-[580px] mx-auto mt-6 text-[16px] md:text-[18px] leading-[1.7] font-sans"
          >
            Filozofija naše kuhinje počiva na savršenom balansu najkvalitetnijih lokalnih sastojaka i besprekornoj prezentaciji. Doživite čistu umetnost na tanjiru.
          </motion.p>
        </div>
      </motion.div>

      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-80px" }}
        variants={staggerContainer}
        className="max-w-[1280px] mx-auto px-10 mb-32"
      >
        <div className="grid grid-cols-1 md:grid-cols-[1fr_1fr_1.2fr] gap-10 md:gap-6 items-start">
          <motion.div variants={imageReveal} className="hidden md:block w-full aspect-square md:mt-[60px] relative overflow-hidden group cursor-pointer">
            <Image
              src="/images/starters1.JPG"
              alt="Starter"
              fill
              className="object-cover group-hover:scale-110 transition-transform duration-[1500ms] ease-in-out"
              sizes="(max-width: 768px) 100vw, 33vw"
            />
          </motion.div>
          <motion.div variants={imageReveal} className="w-full aspect-[4/5] md:aspect-[3/4] relative overflow-hidden group cursor-pointer">
            <Image
              src="/images/starters2.JPG"
              alt="Starter 2"
              fill
              className="object-cover group-hover:scale-110 transition-transform duration-[1500ms] ease-in-out"
              sizes="(max-width: 768px) 100vw, 33vw"
            />
          </motion.div>
          <motion.div variants={slideInRight} className="flex flex-col justify-start pl-0 md:pl-8">
            <motion.h3 variants={titleReveal} className="text-[#DC5803] uppercase tracking-[0.05em] text-[21px] font-extrabold font-sans">Predjela</motion.h3>
            <motion.div variants={lineGrow} className="w-[40px] h-[2px] bg-[#DC5803] mt-3 mb-8 origin-left"></motion.div>

            <div className="flex flex-col">
              <MenuItem name="Ricco tortilja" price="1.070,00 RSD" desc="Tortilja sa piletinom, cheddarom, briem i gaudom na svežoj salati sa chilly jogurt sosom" />
              <MenuItem name="Piccante plata" price="2.880,00 RSD" desc="Daska sa pršutom, kulenom, suvim vratom, baby mocarelom, gorgonzolom i parmezanom" />
              <MenuItem name="Tatar biftek" price="3.260,00 RSD" desc="Sitno sečeni juneći file sa mešavinom začina i žumancetom" />
              <MenuItem name="Burata sa grilovanim povrćem" price="820,00 RSD" desc="Kremasta burata sa sezonskim grilovanim povrćem i maslinovim uljem" />
            </div>
          </motion.div>
        </div>
      </motion.section>

      {/* SECTION 2: Beverages */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-80px" }}
        variants={staggerContainer}
        className="max-w-[1280px] mx-auto px-10 mb-32"
      >
        <div className="grid grid-cols-1 md:grid-cols-[1.2fr_1fr_1fr] gap-10 md:gap-6 items-start">
          <motion.div variants={slideInLeft} className="flex flex-col justify-start pr-0 md:pr-8 order-2 md:order-1">
            <motion.h3 variants={titleReveal} className="text-[#DC5803] uppercase tracking-[0.05em] text-[21px] font-extrabold font-sans">Pića & Kokteli</motion.h3>
            <motion.div variants={lineGrow} className="w-[40px] h-[2px] bg-[#DC5803] mt-3 mb-8 origin-left"></motion.div>

            <div className="flex flex-col">
              <MenuItem name="Piccante Signature Koktel" price="1260,00 RSD" desc="Premium džin, liker od zove, svež krastavac, nana i limeta." />
              <MenuItem name="Klasični Martini" price="980,00 RSD" desc="Zanatska votka ili džin, suvi vermut, uz maslinu ili tvist od limuna." />
              <MenuItem name="Dimljeni Old Fashioned" price="1160,00 RSD" desc="Odabrani burbon, angostura, kora narandže i prefinjena infuzija hikori dima." />
              <MenuItem name="Ponoćna Margarita" price="1090,00 RSD" desc="Vrhunska tekila, pire od svežih kupina, limeta i prirodni agava sirup." />
            </div>
          </motion.div>

          <motion.div variants={imageReveal} className="hidden md:block w-full aspect-square md:mt-[60px] order-1 md:order-2 relative overflow-hidden group cursor-pointer">
            <Image
              src="/images/bevrages.JPG"
              alt="Cocktail"
              fill
              className="object-cover group-hover:scale-110 transition-transform duration-[1500ms] ease-in-out"
              sizes="(max-width: 768px) 100vw, 33vw"
            />
          </motion.div>
          <motion.div variants={imageReveal} className="w-full aspect-[4/5] md:aspect-[3/4] order-1 md:order-3 relative overflow-hidden group cursor-pointer">
            <Image
              src="/images/bevreges2.JPG"
              alt="Cocktail 2"
              fill
              className="object-cover group-hover:scale-110 transition-transform duration-[1500ms] ease-in-out"
              sizes="(max-width: 768px) 100vw, 33vw"
            />
          </motion.div>
        </div>
      </motion.section>

      {/* SECTION 3: Main Courses */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-80px" }}
        variants={staggerContainer}
        className="max-w-[1280px] mx-auto px-10 mb-16"
      >
        <div className="grid grid-cols-1 md:grid-cols-[1fr_1fr_1.2fr] gap-10 md:gap-6 items-start">
          <motion.div variants={imageReveal} className="hidden md:block w-full aspect-square md:mt-[60px] relative overflow-hidden group cursor-pointer">
            <Image
              src="/images/maincourses.JPG"
              alt="Steak"
              fill
              className="object-cover group-hover:scale-110 transition-transform duration-[1500ms] ease-in-out"
              sizes="(max-width: 768px) 100vw, 33vw"
            />
          </motion.div>
          <motion.div variants={imageReveal} className="w-full aspect-[4/5] md:aspect-[3/4] relative overflow-hidden group cursor-pointer">
            <Image
              src="/images/maincourses2.JPG"
              alt="Fish"
              fill
              className="object-cover group-hover:scale-110 transition-transform duration-[1500ms] ease-in-out"
              sizes="(max-width: 768px) 100vw, 33vw"
            />
          </motion.div>
          <motion.div variants={slideInRight} className="flex flex-col justify-start pl-0 md:pl-8">
            <motion.h3 variants={titleReveal} className="text-[#DC5803] uppercase tracking-[0.05em] text-[21px] font-extrabold font-sans">Glavna Jela</motion.h3>
            <motion.div variants={lineGrow} className="w-[40px] h-[2px] bg-[#DC5803] mt-3 mb-8 origin-left"></motion.div>

            <div className="flex flex-col">
              <MenuItem name="Biftek u ulju" price="3.900,00 RSD" desc="Biftek grilovan i sečen na taljatu u maslinovom ulju sa začinskim biljem, limunom i soja sosom" />
              <MenuItem name="Osso buco" price="2.340,00 RSD" desc="Juneca kolenica sa kremastom palentom i parmezanom, servirana sa gremolata sosom" />
              <MenuItem name="Juneći obrazi" price="2.100,00 RSD" desc="Sporo kuvani juneći obrazi sa češkim knedlama i raguom od pečuraka" />
              <MenuItem name="Pollo con spinaci" price="1.570,00 RSD" desc="Zapečena piletina u sosu od spanaća i sira sa aromatizovanim krompirom" />
            </div>
          </motion.div>
        </div>
      </motion.section>

      {/* CALL TO ACTIONS */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={fadeUp}
        className="max-w-[1280px] mx-auto px-10 pt-12 pb-0 flex flex-col sm:flex-row items-center justify-center gap-6"
      >
        <a href="/jelovnik" className="w-full sm:w-auto bg-[#DC5803] text-black px-[42px] py-[15px] text-[13px] uppercase tracking-[0.2em] hover:bg-white transition-colors font-extrabold duration-300 text-center inline-block">
          Pogledajte Ceo Meni
        </a>
        <a href="tel:+38169742208" className="w-full sm:w-auto border border-white/30 text-white px-[42px] py-[15px] text-[13px] uppercase tracking-[0.2em] hover:bg-white hover:text-black transition-colors font-extrabold duration-300 text-center inline-block">
          Pozovite Nas
        </a>
      </motion.div>

    </div>
  );
}

function MenuItem({ name, price, desc }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="py-[20px] border-b border-[rgba(255,255,255,0.08)] font-sans group hover:bg-white/[0.02] transition-colors duration-300 px-4 -mx-4 rounded-md cursor-default"
    >
      <div className="flex items-center gap-3 mb-1">
        <h4 className="text-white font-serif text-[22px] font-normal whitespace-nowrap group-hover:text-[#DC5803] transition-colors duration-300">{name}</h4>
        <div className="flex-1 border-b border-dashed border-[rgba(255,255,255,0.2)] group-hover:border-[#DC5803]/50 transition-colors duration-300"></div>
        <span className="text-white group-hover:text-[#DC5803] transition-colors duration-300 font-serif text-[22px] font-normal whitespace-nowrap">{price}</span>
      </div>
      <p className="text-white/60 text-[15px] mt-2">{desc}</p>
    </motion.div>
  );
}
