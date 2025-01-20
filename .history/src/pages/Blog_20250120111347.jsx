import React, { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Navigation } from "../components/layout/Navigation";
import { ContactSection } from "../components/common/ContactSection";
import { blogPosts } from "../data/blogPosts";
import { ArrowLeft } from "lucide-react";

export const BlogPost = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const post = blogPosts.find((post) => post.id === parseInt(id));

  useEffect(() => {
    if (!post) {
      navigate("/blog");
    }
  }, [post, navigate]);

  if (!post) return null;

  return (
    <div className="min-h-screen">
      <Navigation />
      <article className="pt-32 pb-24 bg-gray-50">
        <div className="max-w-[90%] xl:max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <button
              onClick={() => navigate("/blog")}
              className="flex items-center gap-2 text-black/60 hover:text-black mb-8 transition-colors"
            >
              <ArrowLeft size={20} />
              Back to Blog
            </button>

            <div className="bg-white rounded-xl p-8 lg:p-12 shadow-sm">
              <div className="mb-8">
                <div className="flex items-center gap-2 mb-4">
                  <span className="text-sm font-medium text-black/60">
                    {post.category}
                  </span>
                  <span className="text-black/40">•</span>
                  <span className="text-sm text-black/60">{post.readTime}</span>
                </div>
                <h1 className="text-4xl lg:text-5xl font-bold mb-4 text-black">
                  {post.title}
                </h1>
                <div className="flex items-center justify-between text-sm text-black/60">
                  <div>
                    <p className="font-medium">{post.author}</p>
                    <p>{post.authorRole}</p>
                  </div>
                  <time>{post.date}</time>
                </div>
              </div>

              <div className="prose prose-lg max-w-none">
                {post.content.split("\n\n").map((paragraph, index) => (
                  <p key={index} className="mb-6 text-black/80 leading-relaxed">
                    {paragraph}
                  </p>
                ))}
              </div>
            </div>
          </div>
        </div>
      </article>
      <ContactSection />
    </div>
  );
};
