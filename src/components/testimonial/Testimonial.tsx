"use client";
import React from "react";
import Wrappper from "../Wrappper";
import TestimonialCard from "./TestimonialCard";
import { useQuery } from "@tanstack/react-query";
import { getTestimonialData } from "@/lib/api";

const Testimonial = () => {
  const { data, isPending, error } = useQuery({
    queryKey: ["Testimonial"],
    queryFn: getTestimonialData,
  });

  return (
    <div
      className="py-20"
      style={{
        backgroundImage: "url('/images/finalbg.jpg')", 
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
      }}
    >
      <Wrappper>
        <h1 className="text-black text-[52px] font-medium text-center pb-10">
          Testimonials
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 py-6">
          {/* Ensure data is available before attempting to map over it */}
          {data?.length > 0 ? (
            data.map((each: any, index: number) => (
              <TestimonialCard key={each.sys.id} each={each} index={index} />
            ))
          ) : (
            <div className="text-center text-black">No testimonials available.</div>
          )}
          {/* Show loading skeletons while data is being fetched */}
          {isPending &&
            !error &&
            [1, 2, 3, 4].map((item) => (
              <div
                key={item}
                className="h-auto w-full bg-gray-200 rounded-lg animate-pulse"
              ></div>
            ))}
        </div>
      </Wrappper>
    </div>
  );
};

export default Testimonial;
