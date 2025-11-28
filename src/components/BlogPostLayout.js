import Image from "next/image";

const BlogPostLayout = ({
  title,
  date,
  categories,
  author,
  imageSrc,
  content,
  tags,
  shareLinks,
}) => {
  return (
    <div className="content blog-single">
      {/* Title */}
      <div className="title">Blog Post</div>

      {/* Blog Content */}
      <div className="row border-line-v">
        <div className="col col-m-12 col-t-12 col-d-12">
          <div className="post-box">
            {/* Blog Detail */}
            <h1 className="h-title text-xl">{title}</h1>
            <div className="blog-detail">
              <span className="date">{date}</span>
              {categories && (
                <span className="cat-links">
                  {categories.map((cat, index) => (
                    <a key={index} href="#">
                      {cat}
                    </a>
                  ))}
                </span>
              )}
              {author && (
                <span className="byline">
                  by{" "}
                  <span className="author">
                    <a href="#">{author}</a>
                  </span>
                </span>
              )}
            </div>

            {/* Blog Image */}
            {imageSrc && (
              <div className="blog-image">
                <Image
                  src={imageSrc}
                  alt="blog image"
                  width={800}
                  height={375}
                  layout="responsive"
                />
              </div>
            )}

            {/* Blog Content */}
            <div className="blog-content">
              {Array.isArray(content)
                ? content.map((item, index) => {
                  switch (item.type) {
                    case "paragraph":
                      return (
                        <p key={index} className={item.className}>
                          {item.text}
                        </p>
                      );
                    case "blockquote":
                      return (
                        <blockquote key={index}>
                          <p>{item.text}</p>
                        </blockquote>
                      );
                    case "list":
                      return (
                        <ul key={index}>
                          {item.items?.map((listItem, listIndex) => (
                            <li key={listIndex}>{listItem}</li>
                          ))}
                        </ul>
                      );
                    default:
                      return null;
                  }
                })
                : content}
            </div>

            {/* Tags and Share Links */}
            {(tags || shareLinks) && (
              <div className="post-text-bottom">
                {shareLinks && (
                  <div className="social-share">
                    <span>Share</span>
                    {shareLinks.map((link, index) => (
                      <a
                        key={index}
                        className={`share-btn ${link.className}`}
                        title={link.title}
                      >
                        <i className={link.iconClass}></i>
                      </a>
                    ))}
                  </div>
                )}
                {tags && (
                  <span className="tags-links">
                    Tags{" "}
                    {tags.map((tag, index) => (
                      <a key={index} href="#">
                        {tag}
                      </a>
                    ))}
                  </span>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogPostLayout;
