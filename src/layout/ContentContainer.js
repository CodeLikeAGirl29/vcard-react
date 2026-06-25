import { Fragment, useContext } from "react";
import BlogPostNew from "../components/BlogPost";
import { BlogPostClassic } from "../components/BlogPost2";
import Context from "../context/context";

const ContentContainer = ({ children, blog, post }) => {
  const { nav } = useContext(Context);
  return (
    <Fragment>
      {nav === "blog-post" ? (
        blog === "classic" ? (
          <BlogPostClassic />
        ) : (
          <BlogPostNew post={post} />
        )
      ) : (
        <Fragment>{children}</Fragment>
      )}
    </Fragment>
  );
};
export default ContentContainer;
