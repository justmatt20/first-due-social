import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export const Navigation = () => {
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.pageYOffset);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 transition-colors duration-300"
      style={{
        backgroundColor: scrollPosition > 50 ? "#ffffff" : "transparent",
      }}
    >
      <div className="container mx-auto px-6 py-6 flex justify-between items-center">
        <Link
          to="/"
          onClick={scrollToTop}
          className="text-black font-bold text-2xl cursor-pointer hover:opacity-80 transition-opacity"
        >
          FDS
        </Link>
        <div className="flex items-center gap-4">
          <Link to="/blog" className="text-black hover:opacity-80">
            Blog
          </Link>
          <a href="#brands" className="text-black hover:opacity-80">
            For Brands
          </a>
          <a
            href="#creators"
            className="bg-black text-white px-6 py-2 rounded-full hover:opacity-90"
          >
            Start Creating
          </a>
        </div>
      </div>
    </nav>
  );
};
