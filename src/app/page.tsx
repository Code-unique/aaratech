"use client";
import React, { useState } from "react";
import Banner from "@/components/Banner";
import Headers from "@/components/headers/Headers";
import ClientSection from "@/components/ClientSection";
import FeatureWorks from "@/components/FeatureWorks";
import WorkingProcess from "@/components/working_process/WorkingProcess";
import OurTeam from "@/components/OurTeam";
import FaqSection from "@/components/faq/FaqSection";
import Testimonial from "@/components/testimonial/Testimonial";
import AboutSection from "@/components/AboutSection";

export default function Home() {
  const [showPopup, setShowPopup] = useState(true);

  const handleClosePopup = () => {
    setShowPopup(false); // Close the popup when the user clicks on the close button
  };

  return (
    <>
      {/* Responsive Popup Modal */}
      {showPopup && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50 px-4">
          <div className="relative bg-white p-4 sm:p-6 md:p-8 rounded-xl shadow-lg w-full max-w-md sm:max-w-lg md:max-w-xl overflow-y-auto max-h-[90vh]">
            <button
              onClick={handleClosePopup}
              className="absolute top-2 right-2 text-gray-800 text-xl font-bold hover:text-red-500 transition duration-200"
              aria-label="Close popup"
            >
              &times;
            </button>
            <Banner />
          </div>
        </div>
      )}

      {/* Main content */}
      <Headers />
      <ClientSection />
      <FeatureWorks />
      <WorkingProcess />
      <OurTeam />
      <FaqSection />
      <Testimonial />
      <Banner />
      <AboutSection />
    </>
  );
}
