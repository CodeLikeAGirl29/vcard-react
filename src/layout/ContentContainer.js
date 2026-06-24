import { Fragment, useContext } from "react";
import BlogPostNew from "../components/BlogPost";
import { BlogPostClassic } from "../components/BlogPost2";
import Context from "../context/context";

const ContentContainer = ({ children, blog }) => {
  const { nav } = useContext(Context);
  return (
    <Fragment>
      {nav === "blog-post" ? (
        blog === "classic" ? (
          <BlogPostClassic />
        ) : (
          <BlogPostNew />
        )
      ) : (
        <Fragment>{children}</Fragment>
      )}
    </Fragment>
  );
};
export default ContentContainer;
