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
import Testimonial from "@/components/testimonial/Testimonial";
import { X } from "lucide-react"; // Import cross icon

export default function Home() {
  const [showPopup, setShowPopup] = useState(true);

  // Close the popup if the user clicks outside of the popup
  const handleClosePopup = (e: React.MouseEvent<HTMLDivElement>) => {
    const target = e.target as HTMLDivElement;
    if (target.id === "popup-overlay") {
      setShowPopup(false);
    }
  };

  // Handle close when clicking the cross button
  const handleCloseButtonClick = () => {
    setShowPopup(false);
  };

  return (
    <>
      <div className="mt-0 pt-0 bg-background">
        {/* Responsive Popup Modal */}
        {showPopup && (
          <div
            id="popup-overlay"
            className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50 px-2 mt-0 pt-0"
            onClick={handleClosePopup} // Trigger close on clicking the overlay
          >
            <div
  onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside the popup
  className="relative bg-white sm:p-4 md:p-6 rounded-lg shadow-lg w-full max-w-sm sm:max-w-md md:max-w-lg overflow-y-auto max-h-[90vh] border border-gray-300"
>
  {/* Cross icon for closing the popup */}
  <button
  onClick={handleCloseButtonClick}
  className="absolute top-2 right-2 text-black text-2xl md:text-3xl z-10"
  aria-label="Close popup"
>
  <X className="w-4 h-4 sm:w-5 sm:h-5" />
</button>

  {/* Banner div with no margin or padding to remove the space between */}
  <div className="p-0 m-0">
    <Banner />
  </div>
</div>



          </div>
        )}

        {/* Main content */}
        <Headers />
        <FeatureWorks />
        <ClientSection />
        <WorkingProcess />
        <OurTeam />
        <FaqSection />
        <Testimonial />
        <AboutSection />
      </div>
    </>
  );
}
