import Link from "next/link";
import { notFound } from "next/navigation";
import posts from "@/data/posts";
import Thumbnail from "@/components/Thumbnail";
import Pullquote from "@/components/Pullquote";
import StatCallout from "@/components/StatCallout";
import BackButton from "@/components/BackButton";

export function generateStaticParams() {
  return posts.map((post) => ({ slug: post.slug }));
}

// Added async and await params
export async function generateMetadata({ params }) {
  const { slug } = await params;
  const post = posts.find((p) => p.slug === slug);
  if (!post) return {};
  return { title: `${post.title} — Blog` };
}

// Added async and await params
export default async function BlogPostPage({ params }) {
  const { slug } = await params;
  const post = posts.find((p) => p.slug === slug);

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
          <BackButton />

          <div className="flex items-center gap-3 mt-8 mb-3">
            <span className="font-mono text-[10px] uppercase tracking-wider text-lilac">
              {post.tag}
            </span>
            <span className="font-mono text-[10px] text-ink-soft">
              {post.date}
            </span>
          </div>

          <h1 className="font-display font-semibold text-[28px] sm:text-[32px] leading-tight mb-8">
            {post.title}
          </h1>

          <div className="flex flex-col gap-4">
            {post.body.map((block, i) => {
              // Plain strings render as ordinary paragraphs (backward compatible
              // with existing posts).
              if (typeof block === "string") {
                return (
                  <p key={i} className="text-[15px] leading-relaxed text-ink">
                    {block}
                  </p>
                );
              }

              // Content blocks: { type: "quote", text, cite? } or
              // { type: "stat", value, label }
              if (block.type === "quote") {
                return (
                  <Pullquote key={i} quote={block.text} cite={block.cite} />
                );
              }

              if (block.type === "stat") {
                return (
                  <StatCallout
                    key={i}
                    value={block.value}
                    label={block.label}
                  />
                );
              }

              return null;
            })}
          </div>

          <div className="mt-10 pt-5 border-t border-rule">
            <Link
              href="/"
              className="font-mono text-[11px] uppercase tracking-wider text-accent hover:underline"
            >
              ← Back
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
