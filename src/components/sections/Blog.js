import { Fragment, useContext } from "react";
import Context from "../../context/context";
import Image from "next/image";
import BlogItem from "./BlogItem";

const BlogSection = () => {
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
          {/* blog item */}
          <div className="col col-d-6 col-t-6 col-m-12">
            <div className="box-item">
              <div className="image">
                <a href="#" onClick={() => changeNav("blog-post")}>
                  <Image
                    src="/images/blog/blog_post1.png"
                    alt="why i love using gatsby.js"
                    width={500}
                    height={300}
                  />
                  <span className="info">
                    <span className="ion ion-document-text" />
                  </span>
                </a>
              </div>
              <div className="desc">
                <button href="#" onClick={() => changeNav("blog-post")}>
                  <span className="date">April 28, 2023</span>
                </button>
                <a
                  href="#"
                  onClick={() => changeNav("blog-post")}
                  className="name"
                >
                  <h4 className="text-fuchsia-400 hover:text-rose-600 text-base">
                    {" "}
                    Why I Love Using Gatsby.js
                  </h4>
                </a>
                <div className="text">
                  <p className="text-zinc-800 text-sm">
                    Gatsby.js, a powerful and modern web framework built on
                    React, revolutionizes web development with its speed and
                    efficiency. Its robust ecosystem, rich plugin library, and
                    intuitive architecture make it a top choice for creating
                    high-performance web projects with ease.
                  </p>
                </div>
              </div>
            </div>
          </div>
          {/* blog item */}
          <div className="col col-d-6 col-t-6 col-m-12">
            <div className="box-item">
              <div className="image">
                <a href="#" onClick={() => changeNav("blog-post")}>
                  <Image
                    src="/images/blog/blog2.png"
                    alt="art of productivity"
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
                  <span className="date">April 28, 2023</span>
                </a>
                <a
                  href="#"
                  onClick={() => changeNav("blog-post")}
                  className="name"
                >
                  <h4 className="text-fuchsia-400  hover:text-rose-600 text-base">
                    The Art of Productivity
                  </h4>
                </a>
                <div className="text">
                  <p className="text-zinc-800 text-sm">
                    Dig deeper in what it means to balance life/work; it's a
                    crucial skill that can significantly impact personal and
                    professional success. Balancing multiple tasks, deadlines,
                    and responsibilities requires not just hard work, but also
                    smart work.
                  </p>
                </div>
              </div>
            </div>
          </div>
          {/* blog item */}
          <div className="col col-d-6 col-t-6 col-m-12">
            <div className="box-item">
              <div className="image">
                <a href="#" onClick={() => changeNav("blog-post")}>
                  <Image
                    src="/images/blog/blog3.png"
                    alt="styling with CSS"
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
                  <span className="date">Dec 04, 2022</span>
                </a>
                <a
                  href="#"
                  onClick={() => changeNav("blog-post")}
                  className="name"
                >
                  <h4 className="text-fuchsia-400 text-base hover:text-rose-600">
                    Styling with CSS
                  </h4>
                </a>
                <div className="text">
                  <p className="text-zinc-800 text-sm">
                    We've compiled a massive list of tips, tricks, techniques, &
                    the occasional dirty hack to help you build the design you
                    want.
                  </p>
                </div>
              </div>
            </div>
          </div>
          {/* blog item */}
          <div className="col col-d-6 col-t-6 col-m-12">
            <div className="box-item">
              <div className="image">
                <a href="#" onClick={() => changeNav("blog-post")}>
                  <Image
                    src="/images/blog/blog5.png"
                    alt="responsive design"
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
                  <span className="date">Nov 28, 2023</span>
                </a>
                <a
                  href="#"
                  onClick={() => changeNav("blog-post")}
                  className="name"
                >
                  <h4 className="text-fuchsia-400 text-base hover:text-rose-600">
                    {" "}
                    Responsive Websites: Speed Matters
                  </h4>
                </a>
                <div className="text">
                  <p className="text-zinc-800 text-sm">
                    Explore performance optimization techniques for web
                    applications, including code-splitting, lazy loading, image
                    optimization, and other strategies to enhance speed and user
                    experience.
                  </p>
                </div>
              </div>
            </div>
          </div>
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
