// src/components/BlogPostView.jsx
"use client";

import ActiveSection from "../activeSection";
import Image from "next/image";

export default function BlogPostView({ post, prev, next }) {
  return (
    <div
      className={`blog blog-post ${ActiveSection("blog-post")}`}
      id="blog-card"
    >
      <div className="card-wrap">
        {/* Blog Single */}
        <div className="content blog-single">
          {/* title */}
          <div className="title">Blog Post</div>

          {/* content */}
          <div className="row border-line-v">
            <div className="col col-m-12 col-t-12 col-d-12">
              <div className="post-box">
                {/* blog detail */}
                <h1 className="h-title text-xl">{post.title}</h1>

                <div className="blog-detail">
                  {post.publishedAt && (
                    <span className="date">
                      {new Date(post.publishedAt).toLocaleDateString()}
                    </span>
                  )}
                  {!!post.tags?.length && (
                    <span className="cat-links">
                      {post.tags.map((t, i) => (
                        <a key={t + i} href="#">
                          {t}
                        </a>
                      ))}
                    </span>
                  )}
                  {post.author && (
                    <span className="byline">
                      {" "}
                      by{" "}
                      <span className="author">
                        <a href="#">{post.author}</a>
                      </span>
                    </span>
                  )}
                </div>

                {/* blog image */}
                {post.image && (
                  <div className="blog-image">
                    <Image
                      src={
                        typeof post.image === "string"
                          ? post.image
                          : post.image.src
                      }
                      alt={post.title || "blog image"}
                      width={800}
                      height={375}
                      style={{ width: "100%", height: "auto" }}
                      priority
                    />
                  </div>
                )}

                {/* blog content (from Markdown HTML) */}
                <div
                  className="blog-content"
                  dangerouslySetInnerHTML={{ __html: post.body?.html || "" }}
                />

                {/* tags + share */}
                {(post.tags?.length || true) && (
                  <div className="post-text-bottom">
                    <div className="social-share">
                      <span>Share</span>
                      <a
                        className="share-btn share-btn-facebook"
                        title="Share on Facebook"
                      >
                        <i className="ion ion-social-facebook" />
                      </a>
                      <a
                        className="share-btn share-btn-twitter"
                        title="Share on Twitter"
                      >
                        <i className="ion ion-social-twitter" />
                      </a>
                      <a
                        className="share-btn share-btn-linkedin"
                        title="Share on Linkedin"
                      >
                        <i className="ion ion-social-linkedin" />
                      </a>
                      <a
                        className="share-btn share-btn-reddit"
                        title="Share on Reddit"
                      >
                        <i className="ion ion-social-reddit" />
                      </a>
                      <a
                        className="share-btn share-btn-pinterest"
                        title="Share on Pinterest"
                      >
                        <i className="ion ion-social-pinterest" />
                      </a>
                    </div>

                    {!!post.tags?.length && (
                      <span className="tags-links">
                        Tags:{" "}
                        {post.tags.map((t, i) => (
                          <a key={t + i} href="#">
                            {t.toLowerCase()}
                          </a>
                        ))}
                      </span>
                    )}
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* prev/next */}
          <nav className="navigation post-navigation">
            <div className="nav-links">
              <div className="nav-previous">
                {prev ? (
                  <a href={prev.href}>
                    <span className="post-nav-next post-nav-text">Prev</span>
                  </a>
                ) : (
                  <a aria-disabled className="opacity-40 cursor-default">
                    <span className="post-nav-next post-nav-text">Prev</span>
                  </a>
                )}
              </div>
              <div className="nav-next">
                {next ? (
                  <a href={next.href}>
                    <span className="post-nav-prev post-nav-text">Next</span>
                  </a>
                ) : (
                  <a aria-disabled className="opacity-40 cursor-default">
                    <span className="post-nav-prev post-nav-text">Next</span>
                  </a>
                )}
              </div>
            </div>
          </nav>
        </div>
      </div>
    </div>
  );
}
