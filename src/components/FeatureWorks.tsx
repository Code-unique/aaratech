"use client";

import React from "react";
import Wrapper from "./Wrappper"; 
import Link from "next/link";
import { useQuery } from "@tanstack/react-query";
import { getWorkData } from "@/lib/api";
import WorkCard from "./WorkCard";
import { featureWork } from "@/app/types";

const FeatureWorks = () => {
  const { data, isPending, error } = useQuery({
    queryKey: ["worksData"],
    queryFn: getWorkData,
  });

  return (
    <div
      className="py-10"
      style={{
        backgroundImage: "url('/images/clientbg.jpg')",
        backgroundSize: "cover", 
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
      }}
    >
      <Wrapper>
        <div>
          <h1 className="text-black text-[28px] md:text-[40px] lg:text-[48px] text-center font-semibold pb-10">
            Feature Works
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
            {data &&
              data.map((each: featureWork) => (
                <WorkCard key={each.sys.id} workDetail={each} />
              ))}

            {isPending &&
              !error &&
              Array.from({ length: 6 }).map((_, index) => (
                <div
                  key={index}
                  className="w-full h-[336px] md:h-[336px] lg:h-[436px] xl:h-[596px] bg-gray-500 rounded-[16px] animate-pulse"
                ></div>
              ))}

            {error && (
              <div className="text-red-500 text-center w-full">
                ❌ Sorry! Something went wrong.
              </div>
            )}
          </div>
        </div>
      </Wrapper>
    </div>
  );
};

export default FeatureWorks;
