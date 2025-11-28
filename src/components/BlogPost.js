// src/components/BlogPost.js
"use client";
import ActiveSection from "../activeSection";
import BlogPostLayout from "./BlogPostLayout";

const BlogPostNew = ({ post = null, prev = null, next = null }) => {
  if (!post) return <div className="content">Post not found.</div>;

  const tags = Array.isArray(post.tags) ? post.tags : [];
  const firstCategory = tags.length ? [tags[0]] : [];

  return (
    <div
      className={`blog blog-post ${ActiveSection("blog-post")}`}
      id="blog-card"
    >
      <div className="card-wrap">
        <BlogPostLayout
          title={post.title ?? ""}
          date={
            post.publishedAt
              ? new Date(post.publishedAt).toLocaleDateString()
              : ""
          }
          categories={firstCategory}
          author={post.author ?? ""}
          imageSrc={post.image ?? null}
          contentHtml={post.body?.html ?? ""} // ← Markdown HTML
          tags={tags}
          shareLinks={[
            {
              className: "share-btn-facebook",
              title: "Share on Facebook",
              iconClass: "ion ion-social-facebook",
            },
            {
              className: "share-btn-twitter",
              title: "Share on Twitter",
              iconClass: "ion ion-social-twitter",
            },
            {
              className: "share-btn-linkedin",
              title: "Share on LinkedIn",
              iconClass: "ion ion-social-linkedin",
            },
            {
              className: "share-btn-reddit",
              title: "Share on Reddit",
              iconClass: "ion ion-social-reddit",
            },
            {
              className: "share-btn-pinterest",
              title: "Share on Pinterest",
              iconClass: "ion ion-social-pinterest",
            },
          ]}
        />

        <nav className="navigation post-navigation">
          <div className="nav-links">
            <div className="nav-previous">
              {prev ? (
                <a href={prev.href}>
                  <span className="post-nav-next post-nav-text">
                    Prev: {prev.title}
                  </span>
                </a>
              ) : null}
            </div>
            <div className="nav-next">
              {next ? (
                <a href={next.href}>
                  <span className="post-nav-prev post-nav-text">
                    Next: {next.title}
                  </span>
                </a>
              ) : null}
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default BlogPostNew;
