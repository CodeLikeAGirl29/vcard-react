import { Fragment, useContext } from "react";
import Context from "../../context/context";
import Image from "next/image";
import BlogItem from "./BlogItem";

const BlogSection = ({ posts = [] }) => {
  const { changeNav } = useContext(Context);

  return (
    <Fragment>
      <div className="content blog">
        {/* title */}
        <div className="title">
          <span>Blog</span>
        </div>
        {/* content */}
        <div className="row border-line-v">
          {posts.map((post) => (
            <div key={post.slug} className="col col-d-6 col-t-6 col-m-12">
              <div className="box-item">
                <div className="image">
                  <a href="#" onClick={() => changeNav("blog-post")}>
                    <Image
                      src={post.image || "/images/blog/blog_post1.png"}
                      alt={post.title}
                      width={500}
                      height={300}
                    />
                    <span className="info">
                      <span className="ion ion-document-text" />
                    </span>
                  </a>
                </div>
                <div className="desc">
                  <a href="#" onClick={() => changeNav("blog-post")}>
                    <span className="date">{post.date}</span>
                  </a>
                  <a
                    href="#"
                    onClick={() => changeNav("blog-post")}
                    className="name"
                  >
                    <h4 className="text-fuchsia-400 hover:text-rose-600 text-base">
                      {post.title}
                    </h4>
                  </a>
                  <div className="text">
                    <p className="text-zinc-800 text-sm">{post.excerpt}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
          <div className="clear" />
        </div>
        <div className="pager">
          <nav className="navigation pagination">
            <div className="nav-links">
              <span className="page-numbers current">1</span>
              <a className="page-numbers" href="#">
                2
              </a>
              <a className="next page-numbers" href="#">
                Next
              </a>
            </div>
          </nav>
        </div>
      </div>
    </Fragment>
  );
};
export default BlogSection;

export const BlogClassic = () => {
  const { changeNav } = useContext(Context);

  const blogPosts = [
    {
      imageSrc: "images/blog/blog1.jpg",
      title: "By spite about do of do allow blush",
      date: "20 Jun",
      category: "Design",
    },
    {
      imageSrc: "images/blog/blog2.jpg",
      title: "Two Before Arrow Not Relied",
      date: "19 Jun",
      category: "Coding",
    },
    {
      imageSrc: "images/blog/blog3.jpg",
      title: "By spite about do of do allow blush",
      date: "20 Jun",
      category: "Travel",
    },
  ];

  return (
    <Fragment>
      <div className="content blog">
        <div className="title">Latest Posts</div>
        <div className="row border-line-v">
          {blogPosts.map((post, index) => (
            <BlogItem key={index} {...post} changeNav={changeNav} />
          ))}
        </div>
        <div className="clear" />
      </div>
    </Fragment>
  );
};
