import Link from "next/link";
import { Newspaper } from "lucide-react";
import SectionHead from "./SectionHead";
import Thumbnail from "./Thumbnail";

export default function BlogTab({ posts }) {
  return (
    <section>
      <SectionHead title="Blog" icon={Newspaper} />
      <div className="flex flex-col gap-4">
        {posts.map((post) => (
          <Link
            key={post.slug}
            href={`/blog/${post.slug}`}
            className="group border border-rule bg-card flex flex-col sm:flex-row transition-colors hover:border-accent focus-visible:border-accent overflow-hidden"
          >
            <Thumbnail
              src={post.cover}
              alt={post.title}
              label={post.tag}
              className="w-full sm:w-[160px] h-[120px] sm:h-auto shrink-0"
            />
            <div className="p-5">
              <div className="flex items-center gap-3 mb-2">
                <span className="font-mono text-[9.5px] uppercase tracking-wider text-lilac">
                  {post.tag}
                </span>
                <span className="font-mono text-[9.5px] text-ink-soft">
                  {post.date}
                </span>
              </div>
              <h3 className="font-display font-semibold text-[17px] mb-2 group-hover:text-accent transition-colors">
                {post.title}
              </h3>
              <p className="text-[13px] leading-relaxed text-ink-soft mb-3">
                {post.excerpt}
              </p>
              <div className="font-mono text-[10.5px] text-accent">
                Read more →
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
