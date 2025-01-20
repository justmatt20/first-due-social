import React from "react";
import { ImagePlus, Users, Target } from "lucide-react";

export const ServicesSection = () => {
  const services = [
    {
      icon: <ImagePlus size={32} />,
      title: "Find Opportunities",
      description:
        "Browse available brand campaigns and choose projects that match your expertise and the gear you use.",
    },
    {
      icon: <Users size={32} />,
      title: "Create Content",
      description:
        "Produce authentic photos and videos for brand campaigns, showcasing real-world product usage.",
    },
    {
      icon: <Target size={32} />,
      title: "Get Paid",
      description:
        "Receive direct payment when your content is approved for brand campaigns.",
    },
  ];

  return (
    <section className="py-24 bg-white border-t border-black/10">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-16 text-black">
          How It Works
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-8 transition-all duration-200 hover:-translate-y-1 hover:shadow-lg border border-black/10"
            >
              <div className="mb-6 text-black">{service.icon}</div>
              <h3 className="text-xl font-bold mb-4 text-black">
                {service.title}
              </h3>
              <p className="text-black/80">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
