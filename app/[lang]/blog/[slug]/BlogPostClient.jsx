"use client";

import { motion } from 'framer-motion';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Image from 'next/image';
import Link from 'next/link';

export default function BlogPostClient({ post, lang, dict }) {
  const t = (key) => dict?.[key] || key;

  const getLocalizedHref = (path) => {
    if (lang === 'sr') return path;
    return `/${lang}${path === '/' ? '' : path}`;
  };

  return (
    <main className="min-h-screen bg-[#0a0a0a] overflow-x-hidden flex flex-col">
      <Navbar lang={lang} dict={dict} />

      <article className="flex-grow">
        {/* Hero Section */}
        <div className="relative w-full h-[400px] md:h-[500px]">
          <Image
            src={post.image}
            alt={t(post.title)}
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/60 bg-gradient-to-t from-[#0a0a0a] to-transparent"></div>
          
          <div className="absolute inset-0 flex items-center justify-center px-6 pt-[100px] md:pt-[140px]">
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="max-w-4xl text-center"
            >
              <h1 className="text-3xl md:text-5xl lg:text-6xl font-serif font-bold text-white leading-tight mb-6">
                {t(post.title)}
              </h1>
            </motion.div>
          </div>
        </div>

        {/* Content Section */}
        <div className="max-w-3xl mx-auto px-6 py-16 md:py-24">
          <Link 
            href={getLocalizedHref("/blog")} 
            className="inline-flex items-center text-[#ededed]/70 hover:text-[#C22127] transition-colors mb-12"
          >
            <svg className="w-5 h-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            {t("Nazad na sve tekstove")}
          </Link>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="prose prose-invert prose-lg max-w-none prose-headings:font-serif prose-headings:text-white prose-p:text-[#ededed]/80 prose-a:text-[#C22127]"
          >
            {post.content.map((paragraph, index) => {
              // Simple heuristic: if it's short and doesn't end with a dot, maybe it's a subtitle
              const isSubtitle = paragraph.length < 80 && !paragraph.endsWith('.') && index > 0;
              
              if (isSubtitle) {
                return (
                  <h2 key={index} className="text-2xl font-bold font-serif text-white mt-12 mb-6">
                    {t(paragraph)}
                  </h2>
                );
              }
              
              return (
                <p key={index} className="mb-6 leading-relaxed text-lg text-[#ededed]/90">
                  {t(paragraph)}
                </p>
              );
            })}
          </motion.div>
        </div>
      </article>

      <Footer lang={lang} dict={dict} />
    </main>
  );
}
