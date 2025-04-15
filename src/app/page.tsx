"use client";
import React, { useState } from "react";
import Headers from "@/components/headers/Headers";
import ClientSection from "@/components/ClientSection";
import FeatureWorks from "@/components/FeatureWorks";
import WorkingProcess from "@/components/working_process/WorkingProcess";
import OurTeam from "@/components/OurTeam";
import FaqSection from "@/components/faq/FaqSection";
import AboutSection from "@/components/AboutSection";
import Banner from "@/components/Banner"; // Keep this for popup only
import GoogleFeedbackSection from "@/components/reviewsection/GoogleFeedbackSection";

export default function Home() {
  const [showPopup, setShowPopup] = useState(true);

  // Close the popup if the user clicks outside of the popup
  const handleClosePopup = (e: React.MouseEvent<HTMLDivElement>) => {
    // Type assertion to treat e.target as an HTMLDivElement
    const target = e.target as HTMLDivElement;

    // Check if the click is outside the popup container
    if (target.id === "popup-overlay") {
      setShowPopup(false);
    }
  };

  return (
    <>
    <div className="mt-0 pt-0 bg-background">
      {/* Responsive Popup Modal */}
      {showPopup && (
        <div
          id="popup-overlay"
          className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50 px-4 mt-0 pt-0"
          onClick={handleClosePopup} // Trigger close on clicking the overlay
        >
          <div
            className="relative bg-white p-4 sm:p-6 md:p-8 rounded-xl shadow-lg w-full max-w-md sm:max-w-lg md:max-w-xl overflow-y-auto max-h-[90vh]"
            onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside the popup
          >
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
      <GoogleFeedbackSection />
      {/* Removed second <Banner /> */}
      <AboutSection />
      </div>
    </>
  );
}
