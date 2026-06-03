"use client";

import { motion } from 'framer-motion';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Image from 'next/image';
import Link from 'next/link';
import { blogPosts } from '@/data/blogPosts';

export default function BlogList() {
  return (
    <main className="min-h-screen bg-[#0a0a0a] overflow-x-hidden flex flex-col">
      <Navbar />

      <section className="pt-[140px] pb-12 px-6 md:px-12 flex-grow">
        <div className="max-w-7xl mx-auto">
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="mb-16 text-center"
          >
            <h1 className="text-4xl md:text-5xl font-serif font-bold text-white mb-4">
              Piccante <span className="text-[#C22127]">Blog</span>
            </h1>
            <div className="w-16 h-1 bg-[#C22127] mx-auto mb-6"></div>
            <p className="text-[#ededed]/70 text-lg max-w-2xl mx-auto">
              Priče o dobrom ukusu, kvalitetnoj hrani i uživanju u svakom zalogaju.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <motion.div
                key={post.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: index * 0.1, ease: "easeOut" }}
                className="group flex flex-col bg-[#111111] rounded-xl overflow-hidden border border-white/5 hover:border-[#C22127]/30 transition-colors duration-300"
              >
                <Link href={`/blog/${post.slug}`} className="block relative aspect-[4/3] overflow-hidden">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#111111] to-transparent opacity-60"></div>
                </Link>
                
                <div className="p-6 flex flex-col flex-grow">
                  <Link href={`/blog/${post.slug}`}>
                    <h2 className="text-xl font-bold text-white mb-3 font-serif hover:text-[#C22127] transition-colors line-clamp-2">
                      {post.title}
                    </h2>
                  </Link>
                  <p className="text-[#ededed]/80 text-sm leading-relaxed mb-6 flex-grow">
                    {post.excerpt}
                  </p>
                  
                  <Link 
                    href={`/blog/${post.slug}`}
                    className="inline-flex items-center text-sm font-bold text-white group-hover:text-[#C22127] transition-colors mt-auto"
                  >
                    Pročitaj više
                    <svg className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </section>

      <Footer />
    </main>
  );
}
