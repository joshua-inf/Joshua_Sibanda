import React from "react";
import { BLOG_POSTS } from "../data/blogPosts";

const BlogSection: React.FC = () => {
  // Take the latest 3 posts
  const latestPosts = BLOG_POSTS.slice(0, 3);

  return (
    <section id="blog-section" className="py-20">
      <div className="container">
        <div className="flex flex-col md:flex-row justify-between items-center mb-12">
          <div>
            <h2 className="text-4xl font-bold text-white mb-2">Latest Articles</h2>
            <p className="text-slate-400">Thoughts, guides, and insights on software development.</p>
          </div>
          <a
            href="#/blog"
            className="mt-4 md:mt-0 px-5 py-2.5 bg-slate-800 hover:bg-slate-700 text-slate-200 hover:text-white rounded-lg border border-slate-700 hover:border-blue-500 transition-all font-medium text-sm text-center"
          >
            View All Posts
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {latestPosts.map((post) => (
            <div
              key={post.id}
              className="bg-slate-800 rounded-lg overflow-hidden border border-slate-700 hover:border-blue-500 transition-all duration-300 hover:transform hover:scale-[1.02] flex flex-col h-full group"
            >
              {post.image && (
                <div className="h-48 overflow-hidden border-b border-slate-700 select-none">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover object-top group-hover:scale-[1.04] transition-transform duration-500"
                  />
                </div>
              )}
              <div className="p-6 flex flex-col flex-grow">
                {/* Meta details */}
                <div className="flex items-center justify-between mb-4">
                  <span className="px-2.5 py-0.5 bg-blue-500/10 text-blue-400 rounded-md text-xs font-semibold uppercase tracking-wider">
                    {post.category}
                  </span>
                  <span className="text-xs text-slate-400">{post.readTime}</span>
                </div>

                {/* Title and Excerpt */}
                <h3 className="text-xl font-bold text-white mb-3 line-clamp-2 hover:text-blue-400 transition-colors">
                  <a href={`#/blog/${post.slug}`}>{post.title}</a>
                </h3>
                <p className="text-slate-400 text-sm mb-6 leading-relaxed flex-grow line-clamp-3">
                  {post.excerpt}
                </p>

                {/* Footer details */}
                <div className="flex items-center justify-between pt-4 border-t border-slate-700/50 mt-auto">
                  <div className="flex items-center gap-2">
                    <img
                      src={post.author.avatar}
                      alt={post.author.name}
                      className="w-6 h-6 rounded-lg object-cover"
                    />
                    <span className="text-xs font-medium text-slate-300">{post.author.name}</span>
                  </div>
                  <a
                    href={`#/blog/${post.slug}`}
                    className="text-xs font-bold text-blue-400 hover:text-blue-300 transition-colors inline-flex items-center gap-1 group"
                  >
                    Read Post 
                    <span className="transform group-hover:translate-x-1 transition-transform">→</span>
                  </a>
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
