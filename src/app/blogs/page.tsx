"use client";

import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import Wrappper from "@/components/Wrappper";
import { workingStep } from "@/constants";
import Navigation from "@/components/headers/Navigation";

// Importing animation components
import AnimatedImage from "@/components/working_process/AnimatedImage";
import ContentAnimation from "@/components/working_process/ContentAnimation";

const Blogs = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const stepRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const handleScroll = () => {
      // Ensure all refs are valid before accessing
      const stepPositions = stepRefs.current
        .filter((ref) => ref !== null) // Remove any null refs
        .map((ref) => ref!.getBoundingClientRect().top); // Safe to access ref!.getBoundingClientRect()

      const currentIndex = stepPositions.findIndex((position, index) => {
        const nextPosition = stepPositions[index + 1];
        return (
          position < window.innerHeight / 2 &&
          (!nextPosition || nextPosition > window.innerHeight / 2)
        );
      });

      if (currentIndex !== -1 && currentIndex !== currentStep) {
        setCurrentStep(currentIndex);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [currentStep]);

  return (
    <div
      className="relative bg-background text-foreground"
      style={{
        backgroundImage: "url('/images/finalbg.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
      }}
    >
      <Navigation />
      <Wrappper>
        <h1 className="text-3xl font-bold text-center pb-10 mt-2">Working Process</h1>

        {/* Scrollable Animated Sections */}
        <div className="flex items-start justify-between py-20">
          {/* Animated Image Component */}
          <AnimatedImage
            src={workingStep[currentStep].image}
            alt={workingStep[currentStep].title}
          />

          {/* Scroll-triggered Blog Content */}
          <div className="w-[50%]">
            {workingStep.map((step: any, index: number) => (
              <div
                key={index}
                ref={(el: any) => (stepRefs.current[index] = el)}
                className="mb-12 h-[300px] lg:h-[650px]"
              >
                <ContentAnimation step={step} />
              </div>
            ))}
          </div>
        </div>
      </Wrappper>
    </div>
  );
};

export default Blogs;
