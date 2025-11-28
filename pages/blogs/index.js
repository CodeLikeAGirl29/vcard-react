// pages/blogs/index.js
import Link from "next/link";
import { allBlogs } from "contentlayer/generated";

export default function BlogIndex() {
  const posts = allBlogs
    .filter((p) => p.isPublished)
    .sort((a, b) => new Date(b.publishedAt) - new Date(a.publishedAt));

  return (
    <div className="content blog">
      <div className="title">
        <span>Blog</span>
      </div>
      <div className="row border-line-v">
        {posts.map((p) => (
          <div key={p._id} className="col col-d-6 col-t-6 col-m-12">
            <div className="box-item">
              <div className="image">
                <Link href={p.url}>
                  <img
                    src={p.image || "/images/blog/blog1.png"}
                    alt={p.title}
                    width={500}
                    height={300}
                  />
                  <span className="info">
                    <span className="ion ion-document-text" />
                  </span>
                </Link>
              </div>
              <div className="desc">
                <Link href={p.url}>
                  <span className="date">
                    {new Date(p.publishedAt).toLocaleDateString()}
                  </span>
                </Link>
                <Link href={p.url} className="name">
                  <h4 className="text-fuchsia-400 hover:text-rose-600 text-base">
                    {p.title}
                  </h4>
                </Link>
                <div className="text">
                  <p className="text-zinc-800 text-sm">{p.description}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
        <div className="clear" />
      </div>
    </div>
  );
}
