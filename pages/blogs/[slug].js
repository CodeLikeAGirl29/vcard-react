import { allBlogs } from "contentlayer/generated";
import BlogPostNew from "@/components/BlogPost";

export default function BlogPostPage({ post, prev, next }) {
  return <BlogPostNew post={post} prev={prev} next={next} />;
}

export async function getStaticPaths() {
  return {
    // Use the clean filename-only slug
    paths: allBlogs.map((p) => ({ params: { slug: p.slug } })),
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  // Find by the clean slug
  const post = allBlogs.find((p) => p.slug === params.slug);
  if (!post) return { notFound: true };

  // prev/next by date (unchanged)
  const sorted = [...allBlogs].sort(
    (a, b) => new Date(a.publishedAt) - new Date(b.publishedAt),
  );
  const i = sorted.findIndex((p) => p._id === post._id);

  const prev =
    i > 0 ? { href: sorted[i - 1].url, title: sorted[i - 1].title } : null;
  const next =
    i < sorted.length - 1
      ? { href: sorted[i + 1].url, title: sorted[i + 1].title }
      : null;

  return { props: { post, prev, next } };
}
