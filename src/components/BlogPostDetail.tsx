import React from "react";
import { BLOG_POSTS } from "../data/blogPosts";

interface BlogPostDetailProps {
  slug: string;
}

const BlogPostDetail: React.FC<BlogPostDetailProps> = ({ slug }) => {
  // Find the post
  const post = BLOG_POSTS.find((p) => p.slug === slug);

  if (!post) {
    return (
      <div className="min-h-screen pt-28 pb-20 bg-slate-900 text-slate-100 flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-white mb-4">Article Not Found</h2>
          <a
            href="#/blog"
            className="px-5 py-2.5 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium transition-all"
          >
            Back to Articles
          </a>
        </div>
      </div>
    );
  }

  // Simple parser for custom styling of markdown blocks
  const parseInlineMarkdown = (text: string) => {
    const parts = text.split(/(`[^`]+`)/g);
    return parts.map((part, index) => {
      if (part.startsWith("`") && part.endsWith("`")) {
        return (
          <code
            key={index}
            className="bg-slate-850 px-1.5 py-0.5 rounded text-sm text-blue-400 font-mono border border-slate-750"
          >
            {part.slice(1, -1)}
          </code>
        );
      }
      return part;
    });
  };

  const parseContent = (content: string) => {
    const blocks = content.split("\n\n");
    return blocks.map((block, index) => {
      // Body Images
      if (block.startsWith("[image: ") && block.endsWith("]")) {
        const src = block.replace("[image: ", "").slice(0, -1);
        return (
          <div
            key={index}
            className="my-8 rounded-lg overflow-hidden border border-slate-850 select-none"
          >
            <img
              src={src}
              alt="Field work and briefings"
              className="w-full h-auto object-cover object-top max-h-[450px]"
            />
          </div>
        );
      }

      // Code blocks
      if (block.startsWith("```")) {
        const lines = block.split("\n");
        const language = lines[0].replace("```", "").trim();
        const code = lines.slice(1, -1).join("\n");
        return (
          <pre
            key={index}
            className="bg-slate-950 p-5 rounded-lg border border-slate-800 text-sm overflow-x-auto my-6 font-mono text-blue-300"
          >
            <div className="flex justify-between items-center text-xs text-slate-500 border-b border-slate-900 pb-2 mb-3 select-none">
              <span>{language || "code"}</span>
              <span>copy</span>
            </div>
            <code>{code}</code>
          </pre>
        );
      }

      // Headings
      if (block.startsWith("### ")) {
        return (
          <h3 key={index} className="text-xl font-bold text-white mt-8 mb-4">
            {block.replace("### ", "")}
          </h3>
        );
      }
      if (block.startsWith("## ")) {
        return (
          <h2 key={index} className="text-2xl font-bold text-white mt-10 mb-4">
            {block.replace("## ", "")}
          </h2>
        );
      }

      // Unordered lists
      if (block.trim().startsWith("- ")) {
        const items = block
          .split("\n")
          .map((item) => item.trim().replace("- ", ""));
        return (
          <ul key={index} className="list-disc pl-6 my-4 space-y-2 text-slate-300">
            {items.map((item, itemIdx) => (
              <li key={itemIdx} className="text-lg leading-relaxed">
                {parseInlineMarkdown(item)}
              </li>
            ))}
          </ul>
        );
      }

      // Normal paragraphs
      return (
        <p key={index} className="text-slate-300 leading-relaxed mb-6 text-lg">
          {parseInlineMarkdown(block)}
        </p>
      );
    });
  };

  return (
    <article className="min-h-screen pt-28 pb-20 bg-slate-900 text-slate-100">
      <div className="container max-w-3xl mx-auto">
        {/* Back navigation */}
        <a
          href="#/blog"
          className="inline-flex items-center text-sm font-medium text-slate-400 hover:text-blue-400 transition-colors mb-8 group"
        >
          <span className="transform group-hover:-translate-x-1 transition-transform mr-1.5">←</span>
          Back to Articles
        </a>

        {/* Post Metadata Header */}
        <header className="mb-10 pb-8 border-b border-slate-800">
          <div className="flex items-center gap-3 mb-4">
            <span className="px-3 py-1 bg-blue-500/10 text-blue-400 rounded-md text-xs font-semibold uppercase tracking-wider">
              {post.category}
            </span>
            <span className="text-sm text-slate-400">•</span>
            <time className="text-sm text-slate-400">{post.publishedAt}</time>
            <span className="text-sm text-slate-400">•</span>
            <span className="text-sm text-slate-400">{post.readTime}</span>
          </div>

          <h1 className="text-3xl md:text-5xl font-extrabold text-white leading-tight mb-6">
            {post.title}
          </h1>

          <div className="flex items-center gap-3">
            <img
              src={post.author.avatar}
              alt={post.author.name}
              className="w-10 h-10 rounded-lg object-cover border border-slate-700"
            />
            <div>
              <p className="text-sm font-bold text-white">{post.author.name}</p>
              <p className="text-xs text-slate-400">Author</p>
            </div>
          </div>
        </header>

        {post.image && (
          <div className="mb-10 rounded-lg overflow-hidden border border-slate-850">
            <img
              src={post.image}
              alt={post.title}
              className="w-full h-auto object-cover object-top max-h-[450px]"
            />
          </div>
        )}

        {/* Render parsed blog content */}
        <div className="prose prose-invert max-w-none">
          {parseContent(post.content)}
        </div>

        {/* Post Footer */}
        <div className="mt-16 pt-8 border-t border-slate-800 flex justify-between items-center">
          <span className="text-sm text-slate-500">Shared with Zambia Tech Community</span>
          <a
            href="#/blog"
            className="text-sm font-bold text-blue-400 hover:text-blue-300 transition-colors"
          >
            See more articles
          </a>
        </div>
      </div>
    </article>
  );
};

export default BlogPostDetail;
