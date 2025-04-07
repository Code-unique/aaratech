import React from "react";

const ImageShimmer = ({ className }: { className?: string }) => {
  return (
    <div className="animate-pulse">
      <div className={`${className} h-96 bg-slate-500 rounded`}></div>
    </div>
  );
};

export default ImageShimmer;
