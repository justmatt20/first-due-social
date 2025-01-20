import React from "react";
import { Camera } from "lucide-react";

export const CreatorsSection = () => {
  const benefits = [
    "Browse available brand campaigns that match your expertise",
    "Create content for products you use in the field",
    "Get paid directly for approved campaign submissions",
  ];

  return (
    <section id="creators" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-16 text-black">
          For Creators
        </h2>
        <div className="max-w-2xl mx-auto">
          <div className="space-y-6 mb-10">
            {benefits.map((item, index) => (
              <div
                key={index}
                className="flex items-center gap-4 p-4 rounded-lg transition-all duration-200 hover:shadow-md border border-black/10"
              >
                <Camera className="text-black" />
                <span className="text-black">{item}</span>
              </div>
            ))}
          </div>
          <a
            href="#contact"
            className="block w-full py-4 rounded-full font-semibold text-white text-center bg-black hover:opacity-90 transition-all duration-200"
          >
            Start Creating
          </a>
        </div>
      </div>
    </section>
  );
};
