"use client";
import React from "react";
import Wrappper from "../Wrappper";
import TestimonialCard from "./TestimonialCard";
import { useQuery } from "@tanstack/react-query";
import { getTestimonialData } from "@/lib/api";

// Define the type for the response data
type Testimonial = {
  sys: {
    id: string;
  };
  reviewerName: string;
  reviewerPhoto: {
    url: string;
    title: string;
  };
  ratingNumber: number;
  description: string;
};

const Testimonial = () => {
  const { data, isPending, error } = useQuery<Testimonial[]>({
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
          {data && data.length > 0 ? (  // Ensure data is not undefined
            data.map((each, index) => (
              <TestimonialCard key={each.sys.id} each={each} index={index} />
            ))
          ) : (
            <div className="text-center text-black">No testimonials available.</div>
          )}
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
