"use client";

import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
};

export default function MenuSection() {
  return (
    <div className="w-full bg-[#0a0a0a] text-white pt-[100px] pb-[60px]">
      
      {/* SECTION HEADER */}
      <motion.div 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={fadeUp}
        className="max-w-[1280px] mx-auto px-6 md:px-10"
      >
        <div className="text-center mb-[60px]">
          <div className="flex items-center justify-center gap-2 md:gap-4 text-[#DC5803] uppercase tracking-[0.05em] text-[14px] md:text-[18px] mb-4 font-sans font-extrabold">
            <span className="block w-[40px] md:w-[80px] h-[1px] bg-[#DC5803]"></span>
            <span>Chef's Recommended</span>
            <span className="block w-[40px] md:w-[80px] h-[1px] bg-[#DC5803]"></span>
          </div>
          <h2 className="font-serif text-[48px] md:text-[72px] text-white font-normal mt-4 leading-tight">Selected Menus</h2>
          <p className="text-white/60 max-w-[580px] mx-auto mt-6 text-[16px] md:text-[18px] leading-[1.7] font-sans">
            We serve food, harmony, and laughter. Making delicious food and providing a wonderful eating experience since 1998.
          </p>
        </div>
      </motion.div>

      {/* SECTION 1: Starters */}
      <motion.section 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={fadeUp}
        className="max-w-[1280px] mx-auto px-10 mb-32"
      >
        <div className="grid grid-cols-1 md:grid-cols-[1fr_1fr_1.2fr] gap-10 md:gap-6 items-start">
          <div className="hidden md:block w-full aspect-square md:mt-[60px]">
            <img 
              src="https://images.unsplash.com/photo-1546069901-ba9599a7e63c?q=80&w=1780&auto=format&fit=crop" 
              alt="Starter" 
              className="w-full h-full object-cover"
            />
          </div>
          <div className="w-full aspect-[4/5] md:aspect-[3/4]">
            <img 
              src="https://images.unsplash.com/photo-1473093295043-cdd812d0e601?q=80&w=2070&auto=format&fit=crop" 
              alt="Starter 2" 
              className="w-full h-full object-cover"
            />
          </div>
          <div className="flex flex-col justify-start pl-0 md:pl-8">
            <h3 className="text-[#DC5803] uppercase tracking-[0.05em] text-[21px] font-extrabold font-sans">Starters</h3>
            <div className="w-[40px] h-[2px] bg-[#DC5803] mt-3 mb-8"></div>
            
            <div className="flex flex-col">
              <MenuItem name="Purple Corn Tostada" price="36" desc="Ricotta, goat cheese, beetroot and datterini." />
              <MenuItem name="Bruno's Scribble" price="30" desc="Culatello, Spalla Cotta, Mortadella, Culacciona." />
              <MenuItem name="Fresh Oysters Dozen" price="59" desc="Our selection of fresh oysters, limes." />
              <MenuItem name="Wild Mushroom Arancini" price="18" desc="Porcini purée, parmesan, basil." />
            </div>
          </div>
        </div>
      </motion.section>

      {/* SECTION 2: Beverages */}
      <motion.section 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={fadeUp}
        className="max-w-[1280px] mx-auto px-10 mb-32"
      >
        <div className="grid grid-cols-1 md:grid-cols-[1.2fr_1fr_1fr] gap-10 md:gap-6 items-start">
          <div className="flex flex-col justify-start pr-0 md:pr-8 order-2 md:order-1">
            <h3 className="text-[#DC5803] uppercase tracking-[0.05em] text-[21px] font-extrabold font-sans">Beverages</h3>
            <div className="w-[40px] h-[2px] bg-[#DC5803] mt-3 mb-8"></div>
            
            <div className="flex flex-col">
              <MenuItem name="Patio's Signature" price="16" desc="Gin, elderflower, cucumber, mint, lime." />
              <MenuItem name="Classic Martini" price="18" desc="Vodka or Gin, vermouth, olive or twist." />
              <MenuItem name="Smoked Old Fashioned" price="22" desc="Bourbon, angostura, orange peel, hickory smoke." />
              <MenuItem name="Midnight Margarita" price="17" desc="Tequila, blackberry purée, lime, agave." />
            </div>
          </div>

          <div className="hidden md:block w-full aspect-square md:mt-[60px] order-1 md:order-2">
            <img 
              src="https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?q=80&w=2070&auto=format&fit=crop" 
              alt="Cocktail" 
              className="w-full h-full object-cover"
            />
          </div>
          <div className="w-full aspect-[4/5] md:aspect-[3/4] order-1 md:order-3">
            <img 
              src="https://images.unsplash.com/photo-1536935338788-846bb9981813?q=80&w=1986&auto=format&fit=crop" 
              alt="Cocktail 2" 
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </motion.section>

      {/* SECTION 3: Main Courses */}
      <motion.section 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={fadeUp}
        className="max-w-[1280px] mx-auto px-10 mb-16"
      >
        <div className="grid grid-cols-1 md:grid-cols-[1fr_1fr_1.2fr] gap-10 md:gap-6 items-start">
          <div className="hidden md:block w-full aspect-square md:mt-[60px]">
            <img 
              src="https://images.unsplash.com/photo-1600891964092-4316c288032e?q=80&w=2070&auto=format&fit=crop" 
              alt="Steak" 
              className="w-full h-full object-cover"
            />
          </div>
          <div className="w-full aspect-[4/5] md:aspect-[3/4]">
            <img 
              src="https://images.unsplash.com/photo-1555939594-58d7cb561ad1?q=80&w=1974&auto=format&fit=crop" 
              alt="Fish" 
              className="w-full h-full object-cover"
            />
          </div>
          <div className="flex flex-col justify-start pl-0 md:pl-8">
            <h3 className="text-[#DC5803] uppercase tracking-[0.05em] text-[21px] font-extrabold font-sans">Main Courses</h3>
            <div className="w-[40px] h-[2px] bg-[#DC5803] mt-3 mb-8"></div>
            
            <div className="flex flex-col">
              <MenuItem name="Dry-Aged Ribeye 12oz" price="65" desc="Pommes purée, roasted garlic, red wine jus." />
              <MenuItem name="Pan-Seared Halibut" price="48" desc="Sweet corn risotto, asparagus, lemon butter." />
              <MenuItem name="Herb-Crusted Lamb Rack" price="55" desc="Root vegetables, mint gremolata, lamb jus." />
              <MenuItem name="Wild Mushroom Risotto" price="36" desc="Arborio rice, truffle oil, aged parmesan." />
            </div>
          </div>
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
        <button className="w-full sm:w-auto bg-[#DC5803] text-black px-[42px] py-[15px] text-[13px] uppercase tracking-[0.2em] hover:bg-white transition-colors font-extrabold duration-300">
          View Full Menu
        </button>
        <button className="w-full sm:w-auto border border-white/30 text-white px-[42px] py-[15px] text-[13px] uppercase tracking-[0.2em] hover:bg-white hover:text-black transition-colors font-extrabold duration-300">
          Book Table
        </button>
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
        <span className="text-white group-hover:text-[#DC5803] transition-colors duration-300 font-serif text-[22px] font-normal whitespace-nowrap">${price}</span>
      </div>
      <p className="text-white/60 text-[15px] mt-2">{desc}</p>
    </motion.div>
  );
}
