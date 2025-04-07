import React from "react";
import Wrappper from "../Wrappper";
import dynamic from "next/dynamic";
import { workingStep } from "@/constants";

const WorkingSteps = dynamic(() => import("./WorkingSteps"));

const WorkingProcess = () => {
  return (
    <div
      className="py-16 relative text-foreground"
      style={{
        backgroundImage: "url('/images/finalbg.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
      }}
    >
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
