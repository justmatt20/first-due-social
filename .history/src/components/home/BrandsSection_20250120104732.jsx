import React from "react";
import { ArrowRight } from "lucide-react";

export const BrandsSection = () => {
  const benefits = [
    "Launch content creation campaigns for your products",
    "Get authentic content from verified public safety professionals",
    "Quick turnaround on campaign-specific content needs",
  ];

  return (
    <section id="brands" className="py-24 bg-black text-white">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-16">For Brands</h2>
        <div className="max-w-2xl mx-auto">
          <div className="space-y-6 mb-10">
            {benefits.map((item, index) => (
              <div
                key={index}
                className="flex items-center gap-4 p-4 bg-black rounded-lg transition-all duration-200 border border-white/10"
              >
                <ArrowRight className="text-white" />
                <span>{item}</span>
              </div>
            ))}
          </div>
          <a
            href="#contact"
            className="block w-full py-4 rounded-full font-semibold text-black text-center bg-white hover:opacity-90 transition-all duration-200"
          >
            Launch a Campaign
          </a>
        </div>
      </div>
    </section>
  );
};
