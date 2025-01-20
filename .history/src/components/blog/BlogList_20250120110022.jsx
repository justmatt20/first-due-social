import React from "react";
import { BlogCard } from "./BlogCard";
import { blogPosts } from "../../data/blogPosts";

export const BlogList = () => {
  return (
    <div className="grid md:grid-cols-3 gap-8">
      {blogPosts.map((post) => (
        <BlogCard key={post.id} post={post} />
      ))}
    </div>
  );
};
