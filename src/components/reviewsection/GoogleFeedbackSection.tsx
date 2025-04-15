"use client";

import { useState } from "react";
import Testimonial from "@/components/testimonial/Testimonial";
import Wrappper from "../Wrappper";

const GoogleFeedbackSection: React.FC = () => {
  const [selected, setSelected] = useState<'testimonials' | 'google' | 'feedbacks'>('testimonials');

  const googleReviewImages: string[] = [
    '/images/google_reviews/google1.jpg',
    '/images/google_reviews/google2.jpg',
    '/images/google_reviews/google3.jpg',
    '/images/google_reviews/google4.jpg',
  ];

  const feedbackImages: string[] = [
    '/images/feedbacks/feedback1.jpeg',
    '/images/feedbacks/feedback2.jpeg',
    '/images/feedbacks/feedback3.jpeg',
    '/images/feedbacks/feedback4.jpeg',
  ];

  const renderImages = (images: string[], title: string) => (
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
        <div className="flex justify-center mb-8">
          <select
            value={selected}
            onChange={(e) => setSelected(e.target.value as 'testimonials' | 'google' | 'feedbacks')}
            className="p-2 border border-gray-300 rounded-md shadow-sm bg-background text-black"
          >
            <option value="testimonials">Testimonials</option>
            <option value="google">Google Reviews</option>
            <option value="feedbacks">Feedbacks</option>
          </select>
        </div>

        <h1 className="text-black text-[52px] font-medium text-center pb-10">
          {title}
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 py-6">
          {images.map((src, index) => (
            <img
              key={index}
              src={src}
              alt={`review-${index}`}
              className="w-full rounded-lg shadow-md bg-white"
            />
          ))}
        </div>
      </Wrappper>
    </div>
  );

  return (
    <>
      {selected === 'google' && renderImages(googleReviewImages, "Google Reviews")}
      {selected === 'feedbacks' && renderImages(feedbackImages, "Feedbacks")}
      {selected === 'testimonials' && (
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
            <div className="flex justify-center mb-8">
              <select
                value={selected}
                onChange={(e) => setSelected(e.target.value as 'testimonials' | 'google' | 'feedbacks')}
                className="p-2 border border-gray-300 rounded-md shadow-sm bg-background text-black"
              >
                <option value="testimonials">Testimonials</option>
                <option value="google">Google Reviews</option>
                <option value="feedbacks">Feedbacks</option>
              </select>
            </div>
            <Testimonial />
          </Wrappper>
        </div>
      )}
    </>
  );
};

export default GoogleFeedbackSection;
