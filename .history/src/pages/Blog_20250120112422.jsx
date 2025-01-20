import React from "react";
import { Navigation } from "../components/layout/Navigation";
import { BlogList } from "../components/blog/BlogList";
import { ContactSection } from "../components/common/ContactSection";

export const Blog = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <div className="pt-32 pb-24 bg-gray-50">
        <div className="max-w-[90%] xl:max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl lg:text-6xl font-bold text-center mb-16 text-black">
            First Due Social Blog
          </h1>
          <BlogList />
        </div>
      </div>
      <ContactSection />
    </div>
  );
};

export default Blog;
