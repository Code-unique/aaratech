"use client";
import React, { useEffect, useRef, useState } from "react";
import AnimatedImage from "./AnimatedImage";
import ContentAnimation from "./ContentAnimation";

const WorkingSteps = ({ workingStep }: any) => {
  const [currentStep, setCurrentStep] = useState(0);
  const stepRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const handleScroll = () => {
      const stepPositions = stepRefs.current
        .filter((ref) => ref !== null) // Ensure refs are not null
        .map((ref) => ref?.getBoundingClientRect()?.top ?? Infinity);

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
            ref={(el) => (stepRefs.current[index] = el)}
            className="mb-12 h-[300px] lg:h-[650px]"
          >
            <ContentAnimation step={step} index={index} currentStep={currentStep} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default WorkingSteps;