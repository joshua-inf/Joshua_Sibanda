"use client";

import React, { useState, useMemo } from "react";
import Link from "next/link";
import { BLOG_POSTS } from "../data/blogPosts";

const BlogList: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  // Get list of unique categories
  const categories = useMemo(() => {
    const list = new Set(BLOG_POSTS.map((post) => post.category));
    return ["All", ...Array.from(list)];
  }, []);

  // Filter blog posts based on search query and category
  const filteredPosts = useMemo(() => {
    return BLOG_POSTS.filter((post) => {
      const matchesSearch =
        post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesCategory =
        selectedCategory === "All" || post.category === selectedCategory;
      return matchesSearch && matchesCategory;
    });
  }, [searchQuery, selectedCategory]);

  return (
    <div className="min-h-screen pt-28 pb-20 bg-slate-900 text-slate-100">
      <div className="container">
        {/* Navigation / Header */}
        <div className="flex flex-wrap items-center justify-between gap-4 mb-12">
          <div>
            <Link
              href="/#home"
              className="inline-flex items-center text-sm font-medium text-slate-400 hover:text-blue-400 transition-colors mb-3 group"
            >
              <span className="transform group-hover:-translate-x-1 transition-transform mr-1.5">←</span>
              Back to Home
            </Link>
            <h1 className="text-4xl md:text-5xl font-bold text-white">Articles & Insights</h1>
          </div>
        </div>

        {/* Search & Category Filter Controls */}
        <div className="flex flex-col md:flex-row gap-6 justify-between items-stretch md:items-center mb-10 pb-6 border-b border-slate-800">
          {/* Category Tabs */}
          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 text-sm font-medium rounded-lg border transition-all ${
                  selectedCategory === cat
                    ? "bg-blue-600 border-blue-500 text-white"
                    : "bg-slate-800 border-slate-700 hover:border-slate-600 text-slate-300 hover:text-white"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Search Input */}
          <div className="relative max-w-sm w-full">
            <input
              type="text"
              placeholder="Search articles..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full px-4 py-2.5 pl-10 bg-slate-800 border border-slate-700 hover:border-slate-600 rounded-lg text-sm text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
            />
            <span className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400">
              🔍
            </span>
          </div>
        </div>

        {/* Results grid */}
        {filteredPosts.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.map((post) => (
              <div
                key={post.id}
                className="bg-slate-800 rounded-lg overflow-hidden border border-slate-700 hover:border-blue-500 transition-all duration-300 hover:transform hover:scale-[1.02] flex flex-col h-full group"
              >
                {post.image && (
                  <div className="h-48 overflow-hidden border-b border-slate-700 select-none">
                    <img
                      src={post.image?.src || post.image}
                      alt={post.title}
                      className="w-full h-full object-cover object-top group-hover:scale-[1.04] transition-transform duration-500"
                    />
                  </div>
                )}
                <div className="p-6 flex flex-col flex-grow">
                  <div className="flex items-center justify-between mb-4">
                    <span className="px-2.5 py-0.5 bg-blue-500/10 text-blue-400 rounded-md text-xs font-semibold uppercase tracking-wider">
                      {post.category}
                    </span>
                    <span className="text-xs text-slate-400">{post.readTime}</span>
                  </div>

                  <h3 className="text-xl font-bold text-white mb-3 line-clamp-2 hover:text-blue-400 transition-colors">
                    <Link href={`/blog/${post.slug}`}>{post.title}</Link>
                  </h3>
                  <p className="text-slate-400 text-sm mb-6 leading-relaxed flex-grow line-clamp-3">
                    {post.excerpt}
                  </p>

                  <div className="flex items-center justify-between pt-4 border-t border-slate-700/50 mt-auto">
                    <div className="flex items-center gap-2">
                      <img
                        src={post.author.avatar}
                        alt={post.author.name}
                        className="w-6 h-6 rounded-lg object-cover"
                      />
                      <span className="text-xs font-medium text-slate-300">{post.author.name}</span>
                    </div>
                    <Link
                      href={`/blog/${post.slug}`}
                      className="text-xs font-bold text-blue-400 hover:text-blue-300 transition-colors inline-flex items-center gap-1 group"
                    >
                      Read Post 
                      <span className="transform group-hover:translate-x-1 transition-transform">→</span>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-20 bg-slate-800/20 rounded-lg border border-slate-800">
            <h3 className="text-xl font-bold text-slate-300 mb-2">No articles found</h3>
            <p className="text-slate-500 max-w-md mx-auto">
              We couldn't find any articles matching "{searchQuery}" under category "{selectedCategory}".
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default BlogList;
