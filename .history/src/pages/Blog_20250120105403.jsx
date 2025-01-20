import React from "react";
import { Navigation } from "../components/layout/Navigation";
import { BlogList } from "../components/blog/BlogList";
import { ContactSection } from "../components/common/ContactSection";

export const Blog = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <div className="pt-32 pb-24 bg-gray-50">
        <div className="container mx-auto px-6">
          <h1 className="text-4xl font-bold text-center mb-16 text-black">
            First Due Social Blog
          </h1>
          <BlogList />
        </div>
      </div>
      <ContactSection />
    </div>
  );
};
