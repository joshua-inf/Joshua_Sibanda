import React from "react";
import BlogPostDetail from "../../../components/BlogPostDetail";

interface BlogPostPageProps {
  params: {
    slug: string;
  };
}

export default function BlogPostPage({ params }: BlogPostPageProps) {
  return <BlogPostDetail slug={params.slug} />;
}
