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
      console.log(rect);
    }
  }, []);

  return (
    <Link
      prefetch={false}
      href={`/works?id=${workDetail.sys.id}`}
      className="w-full"
      key={workDetail.sys.id}
    >
      <div className="relative group cursor-pointer rounded-xl overflow-hidden transition-all duration-500 transform hover:scale-105">
        <img
          ref={imageRef}
          src={workDetail.imagesCollection.items[0].url}
          alt={workDetail.imagesCollection.items[0].title}
          className="w-full h-[390px] md:h-[336px] lg:h-[400px] object-cover transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-background/50 to-transparent opacity-0 group-hover:opacity-80 transition-opacity duration-500"></div>
      </div>

      <div className="pt-6 flex justify-between items-center">
        <h2 className="text-2xl md:text-3xl lg:text-4xl text-black font-semibold tracking-wide leading-tight group-hover:text-teal-400 transition-colors duration-300">
          {workDetail.projectTitle}
        </h2>
      </div>

      {isImageModalOpen && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <div className="bg-white p-4 rounded-lg">
            <img
              src={workDetail.imagesCollection.items[0].url}
              alt={workDetail.imagesCollection.items[0].title}
              className="max-w-full h-auto"
            />
            <button
              onClick={() => setImageModalOpen(false)}
              className="mt-4 px-4 py-2 bg-red-500 text-white rounded-full"
            >
              Close
            </button>
          </div>
        </div>
      )}

      {isDetailModalOpen && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <div className="bg-white p-4 rounded-lg w-96">
            <h3 className="text-xl font-semibold mb-4">Project Details</h3>
            {/* Add a fallback for projectDescription if it's undefined */}
            <p>{workDetail.projectDescription || "No description available."}</p>
            <button
              onClick={() => setDetailModalOpen(false)}
              className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-full"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </Link>
  );
};

export default WorkCard;
