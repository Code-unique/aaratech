import { cn } from "@/utils/cn";
import React from "react";

const TextShimmer = ({
  className,
  lines = 1,
}: {
  className?: string;
  lines?: number;
}) => {
  return (
    <div className="animate-pulse">
      {Array.from({ length: lines }).map((_, i) => {
        return (
          <p
            key={i}
            className={cn("h-2 my-4 bg-blue-400 rounded", className)}
          ></p>
        );
      })}
    </div>
  );
};

export default TextShimmer;
