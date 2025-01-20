import React from "react";

export const HeroSection = ({ scrollPosition }) => {
  return (
    <div className="relative min-h-screen flex items-center bg-white">
      <div
        className="absolute inset-0 z-0"
        style={{
          transform: `translateY(${scrollPosition * 0.5}px)`,
          opacity: 1 - scrollPosition * 0.001,
        }}
      />
      <div className="container relative z-10 mx-auto px-6 pt-20 pb-32 text-center">
        <h1
          className="text-8xl font-black mb-6 text-black tracking-tight"
          style={{ transform: `translateY(${scrollPosition * 0.2}px)` }}
        >
          FIRST DUE SOCIAL
        </h1>
        <p
          className="text-xl mb-12 text-black/80"
          style={{ transform: `translateY(${scrollPosition * 0.3}px)` }}
        >
          ( Create Content for Leading Public Safety Brands )
        </p>
        <a
          href="#contact"
          className="inline-block px-12 py-4 rounded-full font-semibold text-white bg-black hover:opacity-90 transition-all duration-200"
        >
          START CREATING
        </a>
      </div>
    </div>
  );
};
