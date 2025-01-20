import React from "react";
import { Camera } from "lucide-react";

export const CreatorsSection = () => {
  const benefits = [
    "Browse available brand campaigns that match your expertise",
    "Create content for products you use in the field",
    "Get paid directly for approved campaign submissions",
  ];

  return (
    <section id="creators" className="py-24 lg:py-32 bg-white">
      <div className="max-w-[90%] xl:max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl lg:text-6xl font-bold text-center mb-16 lg:mb-24 text-black">
          For Creators
        </h2>
        <div className="max-w-4xl mx-auto lg:max-w-6xl">
          <div className="space-y-6 lg:space-y-8 mb-10 lg:mb-16">
            {benefits.map((item, index) => (
              <div
                key={index}
                className="flex items-center gap-4 lg:gap-6 p-4 lg:p-8 rounded-lg transition-all duration-200 hover:shadow-md border border-black/10"
              >
                <Camera className="w-6 h-6 lg:w-8 lg:h-8 text-black flex-shrink-0" />
                <span className="flex-1 text-black text-base lg:text-2xl">
                  {item}
                </span>
              </div>
            ))}
          </div>
          <a
            href="#contact"
            className="block w-full py-4 lg:py-6 rounded-full font-semibold text-white text-center bg-black hover:opacity-90 transition-all duration-200 text-lg lg:text-xl"
          >
            Start Creating
          </a>
        </div>
      </div>
    </section>
  );
};
