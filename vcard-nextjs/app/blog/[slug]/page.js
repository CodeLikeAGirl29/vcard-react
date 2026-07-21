import Link from "next/link";
import { notFound } from "next/navigation";
import posts from "@/data/posts";
import Thumbnail from "@/components/Thumbnail";

export function generateStaticParams() {
  return posts.map((post) => ({ slug: post.slug }));
}

export function generateMetadata({ params }) {
  const post = posts.find((p) => p.slug === params.slug);
  if (!post) return {};
  return { title: `${post.title} — Blog` };
}

export default function BlogPostPage({ params }) {
  const post = posts.find((p) => p.slug === params.slug);
  if (!post) return notFound();

  return (
    <main className="min-h-screen bg-canvas py-12 px-4 sm:px-10">
      <div className="max-w-[720px] mx-auto bg-paper border border-rule overflow-hidden">
        <Thumbnail
          src={post.cover}
          alt={post.title}
          label={post.tag}
          className="w-full h-[220px] sm:h-[280px]"
        />
        <div className="px-6 py-10 sm:px-12 sm:py-14">
          <Link
            href="/"
            className="font-mono text-[11px] uppercase tracking-wider text-accent hover:underline"
          >
            ← Back to site
          </Link>

          <div className="flex items-center gap-3 mt-8 mb-3">
            <span className="font-mono text-[10px] uppercase tracking-wider text-lilac">
              {post.tag}
            </span>
            <span className="font-mono text-[10px] text-ink-soft">{post.date}</span>
          </div>

          <h1 className="font-display font-semibold text-[28px] sm:text-[32px] leading-tight mb-8">
            {post.title}
          </h1>

          <div className="flex flex-col gap-4">
            {post.body.map((paragraph, i) => (
              <p key={i} className="text-[15px] leading-relaxed text-ink">
                {paragraph}
              </p>
            ))}
          </div>

          <div className="mt-10 pt-5 border-t border-rule">
            <Link
              href="/"
              className="font-mono text-[11px] uppercase tracking-wider text-accent hover:underline"
            >
              ← Back to site
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
