import BlogPostNew from "../../src/components/BlogPost";
import { getAllBlogs, getBlogBySlug, getBlogSlugs } from "../../src/utils/blogs";

export default function BlogPostPage({ post, prev, next }) {
  return <BlogPostNew post={post} prev={prev} next={next} />;
}

export async function getStaticPaths() {
  const slugs = getBlogSlugs();

  return {
    paths: slugs.map((slug) => ({
      params: { slug },
    })),
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const post = await getBlogBySlug(params.slug);

  // 404 if not found or not published
  if (!post || !post.isPublished) {
    return { notFound: true };
  }

  const allBlogs = await getAllBlogs(); // already filtered + sorted
  const i = allBlogs.findIndex((p) => p._id === post._id);

  const prev =
    i > 0
      ? { href: allBlogs[i - 1].url, title: allBlogs[i - 1].title }
      : null;

  const next =
    i < allBlogs.length - 1
      ? { href: allBlogs[i + 1].url, title: allBlogs[i + 1].title }
      : null;

  return {
    props: {
      post,
      prev,
      next,
    },
  };
}
