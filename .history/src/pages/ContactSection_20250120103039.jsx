import React, { useState, useEffect } from "react";
import Navigation from "../components/layout/Navigation";
import HeroSection from "../components/home/HeroSection";
import ServicesSection from "../components/home/ServicesSection";
import BrandsSection from "../components/home/BrandsSection";
import CreatorsSection from "../components/home/CreatorsSection";
import BlogPreview from "../components/blog/BlogList";
import ContactSection from "../components/common/ContactSection";

const Home = () => {
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

  return (
    <div className="min-h-screen">
      <Navigation />
      <HeroSection scrollPosition={scrollPosition} />
      <ServicesSection />
      <BrandsSection />
      <CreatorsSection />
      <section id="blog" className="py-24 bg-gray-50">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-16 text-black">
            Latest Insights
          </h2>
          <BlogPreview />
        </div>
      </section>
      <ContactSection />
    </div>
  );
};

export default Home;
