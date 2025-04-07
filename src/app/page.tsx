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
      {/* Popup Modal */}
      {showPopup && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="relative bg-white p-8 rounded-lg shadow-lg w-[80%] md:w-[60%] max-w-lg">
            <button
              onClick={handleClosePopup}
              className="absolute top-2 right-2 text-black text-lg font-bold"
            >
              X
            </button>
            {/* Banner as the popup content */}
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
