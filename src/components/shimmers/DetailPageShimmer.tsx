import React from "react";
import Wrappper from "../Wrappper";

const DetailPageShimmer = () => {
  return (
    <div>
      <div className="w-full h-[400px] lg:h-[570px] object-fill bg-slate-400 animate-pulse" />
      <Wrappper>
        <div className="flex flex-col lg:flex-row justify-between gap-10 py-16 my-10">
          <div className="w-[40%] h-[40px] bg-slate-400 animate-pulse" />
          <div className="w-[40%] h-[200px] bg-slate-400 animate-pulse" />
        </div>
      </Wrappper>
    </div>
  );
};

export default DetailPageShimmer;
