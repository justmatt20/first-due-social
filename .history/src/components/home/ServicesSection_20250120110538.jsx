// src/components/home/ServicesSection.jsx
import React from "react";
import { ImagePlus, Users, Target } from "lucide-react";

export const ServicesSection = () => {
  const services = [
    {
      icon: <ImagePlus className="w-12 h-12 lg:w-16 lg:h-16" />,
      title: "Find Opportunities",
      description:
        "Browse available brand campaigns and choose projects that match your expertise and the gear you use.",
    },
    {
      icon: <Users className="w-12 h-12 lg:w-16 lg:h-16" />,
      title: "Create Content",
      description:
        "Produce authentic photos and videos for brand campaigns, showcasing real-world product usage.",
    },
    {
      icon: <Target className="w-12 h-12 lg:w-16 lg:h-16" />,
      title: "Get Paid",
      description:
        "Receive direct payment when your content is approved for brand campaigns.",
    },
  ];

  return (
    <section className="py-24 lg:py-32 bg-white border-t border-black/10">
      <div className="max-w-[90%] xl:max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl lg:text-6xl font-bold text-center mb-16 lg:mb-24 text-black">
          How It Works
        </h2>
        <div className="grid md:grid-cols-3 gap-8 lg:gap-16">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-8 lg:p-12 transition-all duration-200 hover:-translate-y-1 hover:shadow-lg border border-black/10"
            >
              <div className="mb-8 text-black">{service.icon}</div>
              <h3 className="text-2xl lg:text-3xl font-bold mb-6 text-black">
                {service.title}
              </h3>
              <p className="text-lg lg:text-xl text-black/80">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
