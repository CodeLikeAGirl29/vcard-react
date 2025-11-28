import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { remark } from "remark";
import html from "remark-html";
import remarkGfm from "remark-gfm";

const blogsDirectory = path.join(process.cwd(), "content", "blogs");

// Get all slugs from /content/blogs/*.md
export function getBlogSlugs() {
  return fs
    .readdirSync(blogsDirectory)
    .filter((file) => file.endsWith(".md"))
    .map((file) => file.replace(/\.md$/, ""));
}

// Read a single markdown file and return a post object
export async function getBlogBySlug(slug) {
  const fullPath = path.join(blogsDirectory, `${slug}.md`);
  const fileContents = fs.readFileSync(fullPath, "utf8");

  const { data, content } = matter(fileContents);

  // Convert markdown to HTML
  const processedContent = await remark()
    .use(remarkGfm)
    .use(html)
    .process(content);

  const contentHtml = processedContent.toString();

  return {
    _id: slug,
    slug,
    title: data.title || slug,
    description: data.description || "",
    author: data.author || "",
    publishedAt: data.publishedAt || data.date || null,
    updatedAt: data.updatedAt || null,
    isPublished: data.isPublished !== false, // default: true
    tags: data.tags || [],
    image: data.image || null,

    // IMPORTANT: this matches /blogs/[slug].js
    url: `/blogs/${slug}`,

    body: {
      html: contentHtml,
    },

    // keep any other frontmatter if you need it later
    ...data,
  };
}

// Get all posts and sort by date (oldest → newest)
export async function getAllBlogs() {
  const slugs = getBlogSlugs();
  const posts = await Promise.all(slugs.map((slug) => getBlogBySlug(slug)));

  // Only include published posts
  const published = posts.filter((post) => post.isPublished);

  return published.sort((a, b) => {
    const da = a.publishedAt ? new Date(a.publishedAt) : 0;
    const db = b.publishedAt ? new Date(b.publishedAt) : 0;
    return da - db;
  });
}
