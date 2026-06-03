const fs = require('fs');

const text = fs.readFileSync('./Blog/blog_temp.txt', 'utf-8');

const posts = [];
let currentPost = null;

const lines = text.split('\n');
let idCounter = 1;

for (let i = 0; i < lines.length; i++) {
  const line = lines[i].trim();
  if (!line) continue;

  // Match title like "1. PICA U NOVOM SADU: Kako izabrati ukus koji prija i za ručak i za večeru"
  const titleMatch = line.match(/^\d+\.\s+(.*)/);
  if (titleMatch) {
    if (currentPost) {
      posts.push(currentPost);
    }
    const fullTitle = titleMatch[1];
    
    // Create slug from title
    const slug = fullTitle
      .toLowerCase()
      .replace(/č/g, 'c')
      .replace(/ć/g, 'c')
      .replace(/ž/g, 'z')
      .replace(/š/g, 's')
      .replace(/đ/g, 'dj')
      .replace(/[^a-z0-9]+/g, '-')
      .replace(/^-|-$/g, '');

    currentPost = {
      id: idCounter,
      slug: slug,
      title: fullTitle,
      excerpt: '',
      content: [],
      image: `/images/blog/blog-${idCounter}.webp`,
      date: `2024-03-${idCounter.toString().padStart(2, '0')}` // Just placeholder dates
    };
    idCounter++;
  } else {
    if (currentPost) {
      if (!currentPost.excerpt && line.length > 50) {
        currentPost.excerpt = line.substring(0, 120) + '...';
      }
      currentPost.content.push(line);
    }
  }
}

if (currentPost) {
  posts.push(currentPost);
}

const fileContent = `export const blogPosts = ${JSON.stringify(posts, null, 2)};`;

fs.writeFileSync('./data/blogPosts.js', fileContent);
console.log('Successfully created data/blogPosts.js');
