"use client";
import React, { useState } from "react";
import Wrappper from "../Wrappper";
import TestimonialCard from "./TestimonialCard";
import { useQuery } from "@tanstack/react-query";
import { getTestimonialData } from "@/lib/api";

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
  projectPhoto?: {
    url: string;
    title: string;
  };
};

const ITEMS_PER_PAGE = 8;

const Testimonials = () => {
  const [currentPage, setCurrentPage] = useState(1);

  const { data = [], isPending } = useQuery<Testimonial[]>({
    queryKey: ["Testimonial"],
    queryFn: getTestimonialData,
  });

  const totalPages = Math.ceil(data.length / ITEMS_PER_PAGE);
  const paginatedData = data.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE
  );

  const handlePrev = () => {
    setCurrentPage((prev) => Math.max(prev - 1, 1));
  };

  const handleNext = () => {
    setCurrentPage((prev) => Math.min(prev + 1, totalPages));
  };

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
          {!isPending && paginatedData.length > 0 ? (
            paginatedData.map((each) => (
              <TestimonialCard key={each.sys.id} each={each} index={0} />
            ))
          ) : isPending ? (
            Array.from({ length: 8 }).map((_, index) => (
              <div
                key={index}
                className="h-[250px] w-full bg-gray-200 rounded-lg animate-pulse"
              ></div>
            ))
          ) : (
            <div className="text-center text-black col-span-full">
              No testimonials available.
            </div>
          )}
        </div>

        {/* Pagination Controls */}
        {!isPending && totalPages > 1 && (
          <div className="flex justify-center mt-6 gap-4">
            <button
              className="px-4 py-2 bg-teal-600 text-white rounded hover:bg-teal-700 disabled:opacity-50"
              onClick={handlePrev}
              disabled={currentPage === 1}
            >
              Previous
            </button>
            <span className="text-black font-medium">
              Page {currentPage} of {totalPages}
            </span>
            <button
              className="px-4 py-2 bg-teal-600 text-white rounded hover:bg-teal-700 disabled:opacity-50"
              onClick={handleNext}
              disabled={currentPage === totalPages}
            >
              Next
            </button>
          </div>
        )}
      </Wrappper>
    </div>
  );
};

export default Testimonials;
