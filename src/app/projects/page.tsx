"use client";

import React from "react";
import Wrappper from "@/components/Wrappper";
import Navigation from "@/components/headers/Navigation";
import FeatureWorks from "@/components/FeatureWorks";

const Projects = () => {
  return (
    <div
      className="relative bg-background text-foreground overflow-hidden"
      style={{
        backgroundImage: "url('/images/finalbg.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
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
          <FeatureWorks />
        </main>
      </Wrappper>
    </div>
  );
};

export default Projects;
