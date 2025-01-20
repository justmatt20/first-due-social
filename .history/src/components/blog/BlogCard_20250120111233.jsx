// src/components/blog/BlogCard.jsx
import React from "react";
import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";

export const BlogCard = ({ post }) => {
  return (
    <div className="bg-white rounded-xl p-8 transition-all duration-200 hover:-translate-y-1 hover:shadow-lg border border-black/10">
      <div className="flex items-center gap-2 mb-4">
        <span className="text-sm font-medium text-black/60">
          {post.category}
        </span>
        <span className="text-black/40">•</span>
        <span className="text-sm text-black/60">{post.readTime}</span>
      </div>
      <Link to={`/blog/${post.id}`}>
        <h3 className="text-xl lg:text-2xl font-bold mb-3 text-black hover:text-black/80 transition-colors">
          {post.title}
        </h3>
      </Link>
      <p className="text-black/80 mb-6">{post.excerpt}</p>
      <div className="flex items-center justify-between">
        <span className="text-sm text-black/60">{post.date}</span>
        <Link
          to={`/blog/${post.id}`}
          className="flex items-center gap-1 text-black hover:text-black/80 transition-colors"
        >
          Read More
          <ArrowUpRight size={16} />
        </Link>
      </div>
    </div>
  );
};
