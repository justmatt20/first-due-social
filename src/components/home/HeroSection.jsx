import React from "react";

export const HeroSection = ({ scrollPosition }) => {
  return (
    <div className="relative min-h-screen flex items-center bg-white w-full">
      <div
        className="absolute inset-0 z-0"
        style={{
          transform: `translateY(${scrollPosition * 0.5}px)`,
          opacity: 1 - scrollPosition * 0.001,
        }}
      />
      <div className="relative z-10 w-full">
        <div className="max-w-[90%] xl:max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-32 text-center">
          <h1
            className="text-6xl sm:text-7xl lg:text-[120px] xl:text-[150px] font-black mb-6 text-black tracking-tight leading-none"
            style={{ transform: `translateY(${scrollPosition * 0.2}px)` }}
          >
            FIRST DUE SOCIAL
          </h1>
          <p
            className="text-xl sm:text-2xl lg:text-3xl mb-12 text-black/80 max-w-4xl mx-auto"
            style={{ transform: `translateY(${scrollPosition * 0.3}px)` }}
          >
            ( Create Content for Leading Public Safety Brands )
          </p>
          <a
            href="#contact"
            className="inline-block px-12 py-6 text-xl rounded-full font-semibold text-white bg-black hover:opacity-90 transition-all duration-200"
          >
            START CREATING
          </a>
        </div>
      </div>
    </div>
  );
};
