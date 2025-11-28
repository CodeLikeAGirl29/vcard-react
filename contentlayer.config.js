// contentlayer.config.js
import { makeSource, defineDocumentType } from "@contentlayer/source-files";
import readingTime from "reading-time";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import rehypePrettyCode from "rehype-pretty-code";
import rehypeSlug from "rehype-slug";
import remarkGfm from "remark-gfm";
import GithubSlugger from "github-slugger";

const Blog = defineDocumentType(() => ({
  name: "Blog",
  filePathPattern: "**/*.md",
  contentType: "markdown",
  fields: {
    title: { type: "string", required: true },
    publishedAt: { type: "date", required: true },
    updatedAt: { type: "date", required: true },
    description: { type: "string", required: true },
    image: { type: "image" },
    isPublished: { type: "boolean", default: true },
    author: { type: "string", required: true },
    tags: { type: "list", of: { type: "string" } },
  },
  computedFields: {
    // NEW: filename-only slug (no folders)
    slug: {
      type: "string",
      resolve: (doc) => doc._raw.flattenedPath.split("/").pop(),
    },
    // Use the clean slug in your URLs
    url: {
      type: "string",
      resolve: (doc) => `/blogs/${doc._raw.flattenedPath.split("/").pop()}`,
    },
    readingTime: {
      type: "json",
      resolve: (doc) => readingTime(doc.body.raw),
    },
    toc: {
      type: "json",
      resolve: (doc) => {
        const re = /\n(?<flag>#{1,6})\s+(?<content>.+)/g;
        const slugger = new GithubSlugger();
        return Array.from(doc.body.raw.matchAll(re)).map(({ groups }) => {
          const level =
            groups?.flag?.length === 1
              ? "one"
              : groups?.flag?.length === 2
                ? "two"
                : "three";
          const text = groups?.content;
          return { level, text, slug: text ? slugger.slug(text) : undefined };
        });
      },
    },
  },
}));

const codeOptions = { theme: "github-dark", grid: false };

export default makeSource({
  contentDirPath: "content",
  documentTypes: [Blog],
  markdown: {
    remarkPlugins: [remarkGfm],
    rehypePlugins: [
      rehypeSlug,
      [rehypeAutolinkHeadings, { behavior: "append" }],
      [rehypePrettyCode, codeOptions],
    ],
  },
});
