import React, { useState } from "react";
import Stars from "./Stars";

type Testimonial = {
  sys: { id: string };
  reviewerName: string;
  reviewerPhoto: { url: string; title: string };
  ratingNumber: number;
  description: string;
  projectPhoto?: { url: string; title: string };
};

type TestimonialCardProps = {
  each: Testimonial;
  index: number;
};

const TestimonialCard = ({ each }: TestimonialCardProps) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="px-5 py-6 bg-background text-headingText rounded-[16px] flex flex-col justify-between shadow-lg">
      {/* Reviewer Info */}
      <div className="flex items-start gap-4 mb-4">
        {each.reviewerPhoto?.url ? (
          <img
            src={each.reviewerPhoto.url}
            alt={each.reviewerPhoto.title}
            className="object-cover rounded-full w-[50px] h-[50px]"
          />
        ) : (
          <div className="w-[50px] h-[50px] bg-gray-300 rounded-full" />
        )}
        <div>
          <h5 className="font-medium text-base text-headingText">{each.reviewerName}</h5>
          <Stars starSize="20" rating={each.ratingNumber} />
        </div>
      </div>

      {/* Description */}
      <p className="text-base text-paraText font-medium py-4 h-[130px] overflow-hidden mb-4">
        {each.description}
      </p>

      {/* Read More */}
      <div className="mt-auto flex justify-end">
        <button
          onClick={() => setIsModalOpen(true)}
          className="px-4 py-2 bg-teal-500 text-white rounded-[8px]"
        >
          Read More
        </button>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50"
          onClick={() => setIsModalOpen(false)}
        >
          <div
            className="bg-white rounded-lg w-[90%] max-w-[600px] p-6 relative"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="absolute top-4 right-4 text-gray-500"
              onClick={() => setIsModalOpen(false)}
            >
              ✖
            </button>

            <h2 className="text-2xl font-semibold text-headingText mb-2">
              {`${each.reviewerName}'s Testimonial`}
            </h2>

            <Stars starSize="20" rating={each.ratingNumber} />

            {/* Responsive Flex Layout for Description and Image */}
            <div className="flex flex-col sm:flex-row gap-4 py-4">
              <p className="text-lg text-paraText font-medium flex-1">
                {each.description}
              </p>

              {each.projectPhoto?.url && (
                <img
                  src={each.projectPhoto.url}
                  alt={each.projectPhoto.title}
                  className="w-full sm:w-1/2 h-auto rounded-md object-contain"
                />
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default TestimonialCard;
