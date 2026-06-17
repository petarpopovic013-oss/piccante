"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

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

export default function MenuSection({ lang = 'sr', dict }) {
  const [activeImage, setActiveImage] = useState("/images/bevrages.webp");

  const getLocalizedHref = (path) => {
    if (lang === 'sr') return path;
    if (path === '/') return `/${lang}`;
    return `/${lang}${path}`;
  };

  const getTranslation = (enStr, ruStr, srStr) => {
    return lang === 'en' ? enStr : lang === 'ru' ? ruStr : srStr;
  };

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
            <span>{getTranslation("Chef's Recommendation", "Рекомендация шеф-повара", "Preporuka Šefa Kuhinje")}</span>
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
          >{getTranslation("Seasonal Menu", "Сезонное меню", "Sezonski jelovnik")}</motion.h2>
          <motion.p
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
            }}
            className="text-white/60 max-w-[580px] mx-auto mt-6 text-[16px] md:text-[18px] leading-[1.7] font-sans"
          >
            {getTranslation(
              "Lamb, wild garlic, crispy pork belly, melted cheeses, and a delicate note of tiramisu come together in a story full of flavours, aromas, and textures. Every bite brings a seasonal character in our unique way.",
              "Баранина, черемша, хрустящая свиная грудинка, плавленые сыры и нежная нотка тирамису объединяются в историю, полную вкусов, ароматов и текстур. Каждый кусочек передает сезонный характер по-нашему.",
              "Jagnjetina, sremuš, hrskavi pork belly, topljeni sirevi i nežna nota tiramisua spajaju se u priču punih ukusa, mirisa i tekstura. Svaki zalogaj donosi sezonski karakter na naš način."
            )}
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
            <motion.h3 variants={titleReveal} className="text-[#C22127] uppercase tracking-[0.05em] text-[21px] font-extrabold font-sans">{getTranslation("Highlights", "Выделяем", "Izdvajamo")}</motion.h3>
            <motion.div variants={lineGrow} className="w-[40px] h-[2px] bg-[#C22127] mt-3 mb-8 origin-left"></motion.div>

            <div className="flex flex-col">
              <MenuItem 
                name={getTranslation("Gnocchi with lamb and wild garlic pesto", "Ньокки с бараниной и песто из черемши", "Njoke sa jagnjetinom i pestom od sremuša")}
                price="1.450,00 RSD" 
                desc={getTranslation("Tortilla with chicken, cheddar, brie and gouda on fresh salad with chilly yogurt sauce", "Тортилья с курицей, чеддером, бри и гаудой на свежем салате с соусом из йогурта с чили", "Tortilja sa piletinom, cheddarom, briem i gaudom na svežoj salati sa chilly jogurt sosom")} 
              />
              <MenuItem 
                name={getTranslation("Brioche Belly sandwich", "Сэндвич Brioche Belly", "Brioche Belly sendvič")}
                price="650,00 RSD" 
                desc={getTranslation("Buttery brioche bun, crispy pork belly, fresh green details and creamy sauce.", "Масляная булочка бриошь, хрустящая свиная грудинка, свежая зелень и сливочный соус.", "Puterasta brioche kifla, hrskavi pork belly, sveži zeleni detalji i kremasti sos.")} 
              />
              <MenuItem 
                name={getTranslation("Vulcano Pizza", "Вулканическая пицца", "Vulcano Pizza")}
                price="1150,00 RSD" 
                desc={getTranslation("Rich gourmet pizza with full filling, melted cheese and a strong volcanic flavor.", "Богатая гурманская пицца с полной начинкой, расплавленным сыром и сильным вулканическим вкусом.", "Bogata gurmanska pica sa punim filom, topljenim sirom i snažnim vulkanskim ukusom.")} 
              />
              <MenuItem 
                name={getTranslation("Tiramisu", "Тирамису", "Tiramisu")}
                price="550,00 RSD" 
                desc={getTranslation("Creamy Italian classic with ladyfingers, coffee, mascarpone cream and cocoa.", "Кремовая итальянская классика с печеньем савоярди, кофе, кремом маскарпоне и какао.", "Kremasti italijanski klasik sa piškotama, kafom, mascarpone kremom i kakaom.")} 
              />
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
            <motion.h3 variants={titleReveal} className="text-[#C22127] uppercase tracking-[0.05em] text-[21px] font-extrabold font-sans">{getTranslation("New Cocktail Menu", "Новая коктейльная карта", "Nova koktel karta")}</motion.h3>
            <motion.div variants={lineGrow} className="w-[40px] h-[2px] bg-[#C22127] mt-3 mb-8 origin-left"></motion.div>

            <div className="flex flex-col">
              <MenuItem
                name="Pornstar Martini"
                price="680,00 RSD"
                desc={getTranslation("Vanilla vodka, passion fruit puree, lime juice, passion fruit liqueur and prosecco.", "Ванильная водка, пюре из маракуйи, сок лайма, ликер из маракуйи и просекко.", "Vanilla vodka, pire od passion fruita, sok od limete, passion fruit liker i prosecco.")}
                onMouseEnter={() => setActiveImage("/images/Pornstar martini.webp")}
                onMouseLeave={() => setActiveImage("/images/bevrages.webp")}
              />
              <MenuItem
                name="Hustler"
                price="590,00 RSD"
                desc={getTranslation("Havana 3yr, Havana 7yr, passion fruit puree and lime juice.", "Гавана 3 года, Гавана 7 лет, пюре из маракуйи и сок лайма.", "Havana 3yr, Havana 7yr, pire od passion fruita i sok od limete.")}
                onMouseEnter={() => setActiveImage("/images/Hustler.webp")}
                onMouseLeave={() => setActiveImage("/images/bevrages.webp")}
              />
              <MenuItem
                name="Zarzamora"
                price="620,00 RSD"
                desc={getTranslation("Jim Beam, Olmeca Silver, lemon juice, blackberry puree, Angostura bitter and soda.", "Джим Бим, Ольмека Сильвер, лимонный сок, ежевичное пюре, Ангостура биттер и содовая.", "Jim Beam, Olmeca Silver, sok od limuna, pire od kupine, Angostura bitter i soda.")}
                onMouseEnter={() => setActiveImage("/images/Zarzamora.webp")}
                onMouseLeave={() => setActiveImage("/images/bevrages.webp")}
              />
              <MenuItem
                name="Mango Daiquiri"
                price="590,00 RSD"
                desc={getTranslation("Havana 3yr, Triple Sec, lime juice and mango puree.", "Гавана 3 года, Трипл Сек, сок лайма и пюре из манго.", "Havana 3yr, Triple Sec, sok od limete i pire od manga.")}
                onMouseEnter={() => setActiveImage("/images/Mango daiquiri.webp")}
                onMouseLeave={() => setActiveImage("/images/bevrages.webp")}
              />
            </div>
          </motion.div>

          <motion.div variants={imageReveal} className="hidden md:block w-full aspect-square md:mt-[60px] order-1 md:order-2 relative overflow-hidden group cursor-pointer">
            <AnimatePresence initial={false}>
              <motion.div
                key={activeImage}
                initial={{ opacity: 0, scale: 1.05 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.65, ease: "easeInOut" }}
                className="absolute inset-0 w-full h-full"
              >
                <Image
                  src={activeImage}
                  alt="Cocktail"
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-[1500ms] ease-in-out"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  quality={90}
                />
              </motion.div>
            </AnimatePresence>
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
            <motion.h3 variants={titleReveal} className="text-[#C22127] uppercase tracking-[0.05em] text-[21px] font-extrabold font-sans">{getTranslation("Main Courses", "Основные блюда", "Glavna Jela")}</motion.h3>
            <motion.div variants={lineGrow} className="w-[40px] h-[2px] bg-[#C22127] mt-3 mb-8 origin-left"></motion.div>

            <div className="flex flex-col">
              <MenuItem 
                name={getTranslation("Steak in oil", "Стейк в масле", "Biftek u ulju")}
                price="3.250,00 RSD" 
                desc={getTranslation("Grilled beef steak cut into tagliata in olive oil with herbs, lemon and soy sauce", "Стейк на гриле, нарезанный тальятой, в оливковом масле с травами, лимоном и соевым соусом", "Biftek grilovan i sečen na taljatu u maslinovom ulju sa začinskim biljem, limunom i soja sosom")} 
              />
              <MenuItem 
                name="Osso buco" 
                price="1950,00 RSD" 
                desc={getTranslation("Beef shank with creamy polenta and parmesan, served with gremolata sauce", "Говяжья голяшка со сливочной полентой и пармезаном, подается с соусом гремолата", "Juneca kolenica sa kremastom palentom i parmezanom, servirana sa gremolata sosom")} 
              />
              <MenuItem 
                name={getTranslation("Beef cheeks", "Говяжьи щечки", "Juneći obrazi")}
                price="1750,00 RSD" 
                desc={getTranslation("Slow-cooked beef cheeks with Czech dumplings and mushroom ragout", "Медленно приготовленные говяжьи щечки с чешскими кнедликами и грибным рагу", "Sporo kuvani juneći obrazi sa češkim knedlama i raguom od pečuraka")} 
              />
              <MenuItem 
                name="Pollo con spinaci" 
                price="1410,00 RSD" 
                desc={getTranslation("Baked chicken in spinach and cheese sauce with flavored potatoes", "Запеченная курица в соусе из шпината и сыра с ароматным картофелем", "Zapečena piletina u sosu od spanaća i sira sa aromatizovanim krompirom")} 
              />
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
        <Link href={getLocalizedHref("/jelovnik")} className="w-full sm:w-auto bg-[#C22127] text-black px-[42px] py-[15px] text-[13px] uppercase tracking-[0.2em] hover:bg-white transition-colors font-extrabold duration-300 text-center inline-block">
          {getTranslation("View Full Menu", "Посмотреть полное меню", "Pogledajte Ceo Meni")}
        </Link>
        <a href="tel:+38169742208" className="w-full sm:w-auto border border-white/30 text-white px-[42px] py-[15px] text-[13px] uppercase tracking-[0.2em] hover:bg-white hover:text-black transition-colors font-extrabold duration-300 text-center inline-block">
          {getTranslation("Call Us", "Позвоните нам", "Pozovite Nas")}
        </a>
      </motion.div>

    </div>
  );
}

function MenuItem({ name, price, desc, onMouseEnter, onMouseLeave }) {

  return (

    <motion.div

      initial={{ opacity: 0, x: -20 }}

      whileInView={{ opacity: 1, x: 0 }}

      viewport={{ once: true, margin: "-50px" }}

      transition={{ duration: 0.5, ease: "easeOut" }}

      onMouseEnter={onMouseEnter}

      onMouseLeave={onMouseLeave}

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