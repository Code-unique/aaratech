import Link from "next/link";
import React, { useState, useEffect, useRef } from "react";
import { featureWork } from "@/app/types";

const WorkCard = ({ workDetail }: { workDetail: featureWork }) => {
  const [isImageModalOpen, setImageModalOpen] = useState(false);
  const [isDetailModalOpen, setDetailModalOpen] = useState(false);
  const imageRef = useRef<HTMLImageElement | null>(null);

  useEffect(() => {
    if (imageRef.current) {
      const rect = imageRef.current.getBoundingClientRect();
      console.log("Image Position:", rect);
    }
  }, []);

  return (
    <div className="w-full relative">
      <Link
        prefetch={false}
        href={`/works?id=${workDetail.sys.id}`}
        className="block group"
      >
        <div className="relative rounded-xl overflow-hidden transition-transform duration-500 transform group-hover:scale-105">
          <img
            ref={imageRef}
            src={workDetail.imagesCollection.items[0].url}
            alt={workDetail.imagesCollection.items[0].title}
            className="w-full h-[390px] md:h-[336px] lg:h-[400px] object-cover"
          />
          <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-80 transition-opacity duration-500" />
        </div>

        <div className="pt-4">
        <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 tracking-tight leading-snug transition duration-300 group-hover:text-teal-500 drop-shadow-sm">
          {workDetail.projectTitle}
        </h2>

        </div>
      </Link>

      {/* Image Modal */}
      {isImageModalOpen && (
        <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50">
          <div className="bg-white p-4 rounded-xl shadow-xl max-w-lg">
            <img
              src={workDetail.imagesCollection.items[0].url}
              alt={workDetail.imagesCollection.items[0].title}
              className="w-full h-auto rounded-md"
            />
            <button
              onClick={() => setImageModalOpen(false)}
              className="mt-4 px-4 py-2 bg-red-600 hover:bg-red-700 text-white rounded-full"
            >
              Close
            </button>
          </div>
        </div>
      )}

      {/* Details Modal */}
      {isDetailModalOpen && (
        <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-xl shadow-xl max-w-md w-full">
            <h3 className="text-xl font-bold mb-4 text-gray-800">
              Project Details
            </h3>
            <p className="text-gray-600">
              {workDetail.projectDescription || "No description available."}
            </p>
            <button
              onClick={() => setDetailModalOpen(false)}
              className="mt-6 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-full"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default WorkCard;
