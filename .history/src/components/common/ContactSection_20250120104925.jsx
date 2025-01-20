import React from "react";
import { Mail } from "lucide-react";

export const ContactSection = () => {
  return (
    <section id="contact" className="py-24 bg-black">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold text-white mb-8">
          Join the Platform
        </h2>
        <div className="flex justify-center items-center gap-2">
          <Mail className="text-white" />
          <a
            href="mailto:hello@firstduesocial.com"
            className="text-white hover:opacity-80 transition-colors duration-200"
          >
            hello@firstduesocial.com
          </a>
        </div>
      </div>
    </section>
  );
};
