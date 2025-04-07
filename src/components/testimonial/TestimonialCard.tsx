import React, { useState } from "react";
import Stars from "./Stars";

// Define the types for the testimonial data
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

type TestimonialCardProps = {
  each: Testimonial;
  index: number;
};

const TestimonialCard = ({ each }: TestimonialCardProps) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="px-5 py-6 bg-background text-headingText rounded-[16px] flex flex-col justify-between">
      {/* Reviewer Information */}
      <div className="flex items-start gap-4 mb-4">
        {each.reviewerPhoto?.url ? (
          <img
            src={each.reviewerPhoto.url}
            alt={each.reviewerPhoto.title}
            className="object-cover rounded-full overflow-hidden w-[50px] h-[50px]"
          />
        ) : (
          <div className="w-[50px] h-[50px] bg-gray-300 rounded-full"></div>
        )}
        <div>
          <h5 className="font-medium text-base text-headingText">{each.reviewerName}</h5>
          <Stars starSize="20" rating={each.ratingNumber} />
        </div>
      </div>

      {/* Testimonial Description */}
      <p className="text-base text-paraText font-medium py-4 h-[130px] overflow-hidden mb-4">
        {each.description}
      </p>

      {/* Read More Button */}
      <div className="mt-auto flex justify-end">
        <button
          onClick={openModal}
          className="px-4 py-2 bg-teal-500 text-white rounded-[8px]"
        >
          Read More
        </button>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50"
          onClick={closeModal}
        >
          <div
            className="bg-white rounded-lg w-[60%] sm:w-[50%] md:w-[40%] p-6"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="absolute top-4 right-4 text-gray-500"
              onClick={closeModal}
            >
              ✖
            </button>
            <h2 className="text-2xl font-semibold text-headingText mb-4">
              {each.reviewerName} - Testimonial
            </h2>
            {each.reviewerPhoto?.url ? (
              <img
                src={each.reviewerPhoto.url}
                alt={each.reviewerPhoto.title}
                className="object-cover rounded-full overflow-hidden w-[60px] h-[60px] mb-4"
              />
            ) : (
              <div className="w-[60px] h-[60px] bg-gray-300 rounded-full mb-4"></div>
            )}
            <Stars starSize="20" rating={each.ratingNumber} />

            <p className="text-lg text-paraText font-medium py-4">
              {each.description}
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default TestimonialCard;
