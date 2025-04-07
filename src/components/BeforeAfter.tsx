import React from "react";
import Wrappper from "./Wrappper";

const BeforeAfter = () => {
  return (
    <section className="pb-10">
      <Wrappper>
        <div>
          <h1 className="text-paraText text-[28px] md:text-[40px] lg:text-[48px] font-semibold">
            Before & After
          </h1>
          <div className="flex flex-col lg:flex-row gap-5 lg:gap-10  py-8 ">
            <div className="w-full relative">
              <img
                src="/images/before.png"
                alt="before printing"
                width={0}
                height={0}
                className="w-full h-[414px] sm:h-[500px] md:h-[580px] lg:h-[600px] object-cover rounded-[16px]"
              />
              <p className="absolute top-5 left-5 md:top-10 md:left-10 rounded-full bg-paraText px-4 py-1 text-foreground text-sm md:text-base lg:text-lg font-medium">
                Before
              </p>
            </div>
            <div className="w-full relative">
              <img
                src="/images/after.png"
                alt="before printing"
                className="w-full h-[414px] sm:h-[500px] md:h-[580px] lg:h-[600px] object-cover rounded-[16px]"
              />
              <p className="absolute top-5 left-5 md:top-10 md:left-10 rounded-full bg-paraText px-4 py-1 text-foreground text-sm md:text-base lg:text-lg font-medium">
                After
              </p>
            </div>
          </div>
        </div>
      </Wrappper>
    </section>
  );
};

export default BeforeAfter;
