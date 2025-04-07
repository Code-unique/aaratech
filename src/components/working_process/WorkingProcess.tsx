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
        <div>
          <h1 className="text-foreground text-center text-[40px] md:text-[50px] lg:text-[64px] font-extrabold leading-tight pb-12">
            Our Working Process
          </h1>

          <div className="block lg:hidden">
            {workingStep.map((step: any, index: number) => (
              <div key={index} className="py-10">
                <div className="overflow-hidden rounded-lg shadow-lg">
                  <img
                    src={step.image}
                    alt={step.title}
                    className="w-full h-[270px] md:h-[320px] object-cover rounded-lg transition-transform duration-300 transform hover:scale-105"
                  />
                </div>

                <div className="h-full flex flex-col justify-center items-start py-8">
                  <p className="text-[48px] md:text-[56px] font-semibold text-teal-600">Step 0{step.id}</p>
                  <h3 className="text-[72px] md:text-[80px] lg:text-[96px] font-bold text-foreground pt-4 pb-5 leading-tight hover:text-teal-500 transition-colors duration-300">
                    {step.title}
                  </h3>
                  <p className="text-[40px] md:text-[44px] lg:text-[48px] font-medium text-foreground/90 w-full">
                    {step.content}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="hidden lg:block">
            <WorkingSteps workingStep={workingStep} />
          </div>
        </div>
      </Wrappper>
    </div>
  );
};

export default WorkingProcess;
