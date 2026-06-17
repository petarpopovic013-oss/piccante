import { blogPosts } from '@/data/blogPosts';
import { notFound } from 'next/navigation';
import BlogPostClient from './BlogPostClient';
import { getDictionary } from '@/dictionaries/getDictionary';

export async function generateStaticParams() {
  const langs = ['sr', 'en', 'ru'];
  const params = [];
  for (const lang of langs) {
    for (const post of blogPosts) {
      params.push({ lang, slug: post.slug });
    }
  }
  return params;
}

export default async function BlogPost(props) {
  const params = await props.params;
  const { lang, slug } = params;
  const post = blogPosts.find((p) => p.slug === slug);
  const dict = getDictionary(lang);

  if (!post) {
    notFound();
  }

  return <BlogPostClient post={post} lang={lang} dict={dict} />;
}
