"use client";
import React, { useEffect, useRef, useState } from "react";
import { useInView } from "framer-motion";
import { motion } from "framer-motion";
import Wrappper from "@/components/Wrappper";
import { workingStep } from "@/constants";
import Navigation from "@/components/headers/Navigation";  // Importing the Navigation component

// Content Animation Component
const ContentAnimation = ({ step }: any) => {
  const ref = React.useRef(null);
  const isInView = useInView(ref, {
    margin: "0px 0px -300px 0px",
  });

  return (
    <div
      className="flex justify-center items-center h-full"
      style={{
        opacity: isInView ? 1 : 0,
        transition: "all ease-in-out 0.6s",
      }}
      ref={ref}
    >
      <div className="my-auto h-full flex flex-col justify-center items-start">
        <p className="text-lg font-medium">0 {step.id}</p>
        <h3 className="text-[24px] lg:text-[36px] font-semibold pt-3 pb-5">
          {step.title}
        </h3>
        <p className="text-base lg:text-[20px] leading-8 font-medium text-foreground/80 w-full max-w-[90%] text-balance">
          {step.content}
        </p>
      </div>
    </div>
  );
};

// Animated Image Component
const AnimatedImage = ({ src, alt }: { src: string; alt: string }) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 1 }}
      animate={{ opacity: 1, scale: 1.07 }}
      transition={{ duration: 1 }}
      exit={{ opacity: 0, scale: 1 }}
      key={src}
      className="sticky top-80 lg:top-[15vh] bg-green-300 w-[35%] overflow-hidden rounded-[16px] h-[275px] lg:h-[475px]"
    >
      <div className="relative w-full h-full">
        <img src={src} alt={alt} className="w-full h-full object-cover" />
      </div>
    </motion.div>
  );
};

// Working Steps Component
const WorkingSteps = ({ workingStep }: any) => {
  const [currentStep, setCurrentStep] = useState(0);
  const stepRefs = useRef<HTMLDivElement[]>([]);  // Fixed type

  useEffect(() => {
    const handleScroll = () => {
      const stepPositions = stepRefs.current
        .map((ref) => ref?.getBoundingClientRect().top ?? Infinity);

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
    <div className="flex items-start justify-between py-20">
      <AnimatedImage
        src={workingStep[currentStep]?.image}
        alt={workingStep[currentStep]?.title}
      />

      <div className="w-[50%]">
        {workingStep.map((step: any, index: number) => (
          <div
            key={index}
            ref={(el) => {
              if (el) stepRefs.current[index] = el;  // Fixed ref callback
            }}
            className="mb-12 h-[300px] lg:h-[650px]"
          >
            <ContentAnimation step={step} />
          </div>
        ))}
      </div>
    </div>
  );
};

// Main Working Process Component
const WorkingProcess = () => {
  return (
    <div
      className="py-4 relative text-foreground"  // Reduced the top padding to 4
      style={{
        backgroundImage: "url('/images/finalbg.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
      }}
    >
      {/* Render Navigation component */}
      <Navigation />

      <Wrappper>
        <div className="max-w-7xl mx-auto">
          <h1 className="text-center text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight pb-12">
            Our Working Process
          </h1>

          {/* Mobile & Tablet View */}
          <div className="block lg:hidden space-y-16">
            {workingStep.map((step: any, index: number) => (
              <div key={index} className="space-y-6">
                <div className="overflow-hidden rounded-2xl shadow-lg">
                  <img
                    src={step.image}
                    alt={step.title}
                    className="w-full aspect-[4/3] object-cover rounded-2xl transition-transform duration-300 hover:scale-105"
                  />
                </div>

                <div className="flex flex-col items-start space-y-4 px-2 sm:px-4">
                  <p className="text-2xl sm:text-3xl font-semibold text-teal-600">
                    Step 0{step.id}
                  </p>
                  <h3 className="text-3xl sm:text-4xl font-bold text-foreground leading-tight hover:text-teal-500 transition-colors duration-300">
                    {step.title}
                  </h3>
                  <p className="text-lg sm:text-xl font-medium text-foreground/90">
                    {step.content}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Desktop View */}
          <div className="hidden lg:block">
            <WorkingSteps workingStep={workingStep} />
          </div>
        </div>
      </Wrappper>
    </div>
  );
};

export default WorkingProcess;
