import { Fragment } from "react";
import ActiveSection from "../activeSection";

const Blog = ({ children, animationIn, animationOut }) => {
  return (
    <Fragment>
      <div
        className={ActiveSection("blog", animationIn, animationOut)}
        id="blog"
      >
        <div className="card-wrap">{children}</div>
      </div>
    </Fragment>
  );
};
export default Blog;
