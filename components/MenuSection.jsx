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
            className="flex items-center justify-center gap-2 md:gap-4 text-[#C22127] uppercase tracking-[0.05em] text-[14px] md:text-[18px] mb-4 font-sans font-extrabold"
          >
            <motion.span
              variants={{
                hidden: { scaleX: 0 },
                visible: { scaleX: 1, transition: { duration: 0.8, ease: "easeInOut" } }
              }}
              className="block w-[40px] md:w-[80px] h-[1px] bg-[#C22127] origin-right"
            ></motion.span>
            <span>Preporuka Šefa Kuhinje</span>
            <motion.span
              variants={{
                hidden: { scaleX: 0 },
                visible: { scaleX: 1, transition: { duration: 0.8, ease: "easeInOut" } }
              }}
              className="block w-[40px] md:w-[80px] h-[1px] bg-[#C22127] origin-left"
            ></motion.span>
          </motion.div>
          <motion.h2
            variants={{
              hidden: { opacity: 0, y: 30 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.9, ease: [0.25, 0.46, 0.45, 0.94] } }
            }}
            className="font-serif text-[48px] md:text-[72px] text-white font-normal mt-4 leading-tight"
          >Sezonski jelovnik</motion.h2>
          <motion.p
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
            }}
            className="text-white/60 max-w-[580px] mx-auto mt-6 text-[16px] md:text-[18px] leading-[1.7] font-sans"
          >
            Jagnjetina, sremuš, hrskavi pork belly, topljeni sirevi i nežna nota tiramisua spajaju se u priču punih ukusa, mirisa i tekstura. Svaki zalogaj donosi sezonski karakter na naš način.
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
              src="/images/starters1.webp"
              alt="recommendation"
              fill
              className="object-cover group-hover:scale-110 transition-transform duration-[1500ms] ease-in-out"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              quality={90}
            />
          </motion.div>
          <motion.div variants={imageReveal} className="w-full aspect-[4/5] md:aspect-[3/4] relative overflow-hidden group cursor-pointer">
            <Image
              src="/images/starters2.webp"
              alt="recommendation 2"
              fill
              className="object-cover group-hover:scale-110 transition-transform duration-[1500ms] ease-in-out"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              quality={90}
            />
          </motion.div>
          <motion.div variants={slideInRight} className="flex flex-col justify-start pl-0 md:pl-8">
            <motion.h3 variants={titleReveal} className="text-[#C22127] uppercase tracking-[0.05em] text-[21px] font-extrabold font-sans">Izdvajamo</motion.h3>
            <motion.div variants={lineGrow} className="w-[40px] h-[2px] bg-[#C22127] mt-3 mb-8 origin-left"></motion.div>

            <div className="flex flex-col">
              <MenuItem name="Njoke sa jagnjetinom i pestom od sremuša" price="1.450,00 RSD" desc="Tortilja sa piletinom, cheddarom, briem i gaudom na svežoj salati sa chilly jogurt sosom" />
              <MenuItem name="Brioche Belly sendvič" price="650,00 RSD" desc="Puterasta brioche kifla, hrskavi pork belly, sveži zeleni detalji i kremasti sos." />
              <MenuItem name="Vulcano Pizza" price="1150,00 RSD" desc="Bogata gurmanska pica sa punim filom, topljenim sirom i snažnim vulkanskim ukusom." />
              <MenuItem name="Tiramisu" price="550,00 RSD" desc="Kremasti italijanski klasik sa piškotama, kafom, mascarpone kremom i kakaom." />
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
            <motion.h3 variants={titleReveal} className="text-[#C22127] uppercase tracking-[0.05em] text-[21px] font-extrabold font-sans">Nova koktel karta</motion.h3>
            <motion.div variants={lineGrow} className="w-[40px] h-[2px] bg-[#C22127] mt-3 mb-8 origin-left"></motion.div>

            <div className="flex flex-col">
              <MenuItem name="Pornstar Martini" price="         " desc="Vanilla vodka, pire od passion fruita, sok od limete, passion fruit liker i prosecco." />
              <MenuItem name="Hustler" price="         " desc="Havana 3yr, Havana 7yr, pire od passion fruita i sok od limete." />
              <MenuItem name="Zanzamora" price="         " desc="Jim Beam, Olmeca Silver, sok od limuna, pire od kupine, Angostura bitter i soda." />
              <MenuItem name="Mango Daiquiri" price="         " desc="Havana 3yr, Triple Sec, sok od limete i pire od manga." />
            </div>
          </motion.div>

          <motion.div variants={imageReveal} className="hidden md:block w-full aspect-square md:mt-[60px] order-1 md:order-2 relative overflow-hidden group cursor-pointer">
            <Image
              src="/images/bevrages.webp"
              alt="Cocktail"
              fill
              className="object-cover group-hover:scale-110 transition-transform duration-[1500ms] ease-in-out"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              quality={90}
            />
          </motion.div>
          <motion.div variants={imageReveal} className="w-full aspect-[4/5] md:aspect-[3/4] order-1 md:order-3 relative overflow-hidden group cursor-pointer">
            <Image
              src="/images/bevreges2.webp"
              alt="Cocktail 2"
              fill
              className="object-cover group-hover:scale-110 transition-transform duration-[1500ms] ease-in-out"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              quality={90}
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
              src="/images/maincourses.webp"
              alt="Steak"
              fill
              className="object-cover group-hover:scale-110 transition-transform duration-[1500ms] ease-in-out"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              quality={90}
            />
          </motion.div>
          <motion.div variants={imageReveal} className="w-full aspect-[4/5] md:aspect-[3/4] relative overflow-hidden group cursor-pointer">
            <Image
              src="/images/maincourses2.webp"
              alt="Fish"
              fill
              className="object-cover group-hover:scale-110 transition-transform duration-[1500ms] ease-in-out"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              quality={90}
            />
          </motion.div>
          <motion.div variants={slideInRight} className="flex flex-col justify-start pl-0 md:pl-8">
            <motion.h3 variants={titleReveal} className="text-[#C22127] uppercase tracking-[0.05em] text-[21px] font-extrabold font-sans">Glavna Jela</motion.h3>
            <motion.div variants={lineGrow} className="w-[40px] h-[2px] bg-[#C22127] mt-3 mb-8 origin-left"></motion.div>

            <div className="flex flex-col">
              <MenuItem name="Biftek u ulju" price="3.250,00 RSD" desc="Biftek grilovan i sečen na taljatu u maslinovom ulju sa začinskim biljem, limunom i soja sosom" />
              <MenuItem name="Osso buco" price="1950,00 RSD" desc="Juneca kolenica sa kremastom palentom i parmezanom, servirana sa gremolata sosom" />
              <MenuItem name="Juneći obrazi" price="1750,00 RSD" desc="Sporo kuvani juneći obrazi sa češkim knedlama i raguom od pečuraka" />
              <MenuItem name="Pollo con spinaci" price="1410,00 RSD" desc="Zapečena piletina u sosu od spanaća i sira sa aromatizovanim krompirom" />
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
        <a href="/jelovnik" className="w-full sm:w-auto bg-[#C22127] text-black px-[42px] py-[15px] text-[13px] uppercase tracking-[0.2em] hover:bg-white transition-colors font-extrabold duration-300 text-center inline-block">
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

      <div className="flex items-end gap-2 md:gap-3 mb-1">

        <h4 className="text-white font-serif text-[18px] md:text-[22px] font-normal group-hover:text-[#C22127] transition-colors duration-300 leading-tight">{name}</h4>

        <div className="flex-1 min-w-[20px]"></div>

        <span className="text-white group-hover:text-[#C22127] transition-colors duration-300 font-serif text-[18px] md:text-[22px] font-normal whitespace-nowrap shrink-0">{price}</span>

      </div>

      <p className="text-white/60 text-[15px] mt-2">{desc}</p>

    </motion.div>

  );

}