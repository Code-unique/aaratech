"use client";

import React from "react";
import Wrappper from "@/components/Wrappper";
import Navigation from "@/components/headers/Navigation";
import AboutSection from "@/components/AboutSection";

const About = () => {
  return (
    <div
      className="relative text-foreground overflow-hidden"
      style={{
        backgroundImage: "url('/images/bgn.jpg')", // Set background image
        backgroundSize: "cover", // Ensure the background image covers the entire section
        backgroundPosition: "center", // Center the background image
      }}
    >
      {/* Navigation Bar */}
      <Navigation />

      <img
        src="/icons/footer_bg.svg"
        width={300}
        height={300}
        alt="background"
        className="absolute top-8 left-[8%] opacity-30"
      />

      {/* Main Content Wrapper */}
      <Wrappper>
        <main className="flex flex-col items-center gap-10">

          {/* About Section */}
          <AboutSection />
        </main>
      </Wrappper>
    </div>
  );
};

export default About;
