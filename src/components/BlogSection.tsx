import React from "react";
import Link from "next/link";
import { BLOG_POSTS } from "../data/blogPosts";

const BlogSection: React.FC = () => {
  // Take the latest 3 posts
  const latestPosts = BLOG_POSTS.slice(0, 3);

  return (
    <section id="blog-section" className="py-20 bg-slate-100/50 dark:bg-slate-800/50 transition-colors duration-300">
      <div className="container">
        <div className="flex flex-col md:flex-row justify-between items-center mb-12">
          <div>
            <h2 className="text-4xl font-bold text-slate-900 dark:text-white mb-2 transition-colors">Latest Articles</h2>
            <p className="text-slate-600 dark:text-slate-400 transition-colors">Thoughts, guides, and insights on software development.</p>
          </div>
          <Link
            href="/blog"
            className="mt-4 md:mt-0 px-5 py-2.5 bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-200 hover:text-slate-950 dark:hover:text-white rounded-lg border border-slate-250 dark:border-slate-700 hover:border-blue-500 transition-all font-medium text-sm text-center"
          >
            View All Posts
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {latestPosts.map((post) => (
            <div
              key={post.id}
              className="bg-white dark:bg-slate-800 rounded-lg overflow-hidden border border-slate-200 dark:border-slate-700 hover:border-blue-500 transition-all duration-300 hover:transform hover:scale-[1.02] flex flex-col h-full group"
            >
              {post.image && (
                <div className="h-48 overflow-hidden border-b border-slate-200 dark:border-slate-700 select-none">
                  <img
                    src={post.image?.src || post.image}
                    alt={post.title}
                    className="w-full h-full object-cover object-top group-hover:scale-[1.04] transition-transform duration-500"
                  />
                </div>
              )}
              <div className="p-6 flex flex-col flex-grow">
                {/* Meta details */}
                <div className="flex items-center justify-between mb-4">
                  <span className="px-2.5 py-0.5 bg-blue-50 dark:bg-blue-500/10 text-blue-600 dark:text-blue-400 rounded-md text-xs font-semibold uppercase tracking-wider border border-blue-100 dark:border-blue-500/20">
                    {post.category}
                  </span>
                  <span className="text-xs text-slate-500 dark:text-slate-400">{post.readTime}</span>
                </div>

                {/* Title and Excerpt */}
                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3 line-clamp-2 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                  <Link href={`/blog/${post.slug}`}>{post.title}</Link>
                </h3>
                <p className="text-slate-600 dark:text-slate-400 text-sm mb-6 leading-relaxed flex-grow line-clamp-3">
                  {post.excerpt}
                </p>

                {/* Footer details */}
                <div className="flex items-center justify-between pt-4 border-t border-slate-200 dark:border-slate-700/50 mt-auto">
                  <div className="flex items-center gap-2">
                    <img
                      src={post.author.avatar}
                      alt={post.author.name}
                      className="w-6 h-6 rounded-lg object-cover"
                    />
                    <span className="text-xs font-medium text-slate-600 dark:text-slate-300">{post.author.name}</span>
                  </div>
                  <Link
                    href={`/blog/${post.slug}`}
                    className="text-xs font-bold text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors inline-flex items-center gap-1 group"
                  >
                    Read Post 
                    <span className="transform group-hover:translate-x-1 transition-transform">→</span>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
