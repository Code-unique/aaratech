import { useInView } from "framer-motion";
import React from "react";

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

export default ContentAnimation;
