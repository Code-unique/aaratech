"use client";
import AboutSection from "@/components/AboutSection";
import ImageGallery from "@/components/details/ImageGallery";
import FeatureWorks from "@/components/FeatureWorks";
import DetailPageShimmer from "@/components/shimmers/DetailPageShimmer";
import Wrappper from "@/components/Wrappper";
import { getEachWork } from "@/lib/api";
import { useQuery } from "@tanstack/react-query";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import React from "react";
import OtherProjects from "./OtherProjects";
import Navigation from "../headers/Navigation";

const Details = () => {
  const params = useSearchParams();
  const queryId = params.get("id");

  const { data, isLoading, error } = useQuery({
    queryKey: ["eachWork", queryId],
    queryFn: () => getEachWork(queryId!),
    enabled: !!queryId,
  });

  if (isLoading) {
    return <DetailPageShimmer />;
  }

  if (error) {
    return (
      <div className="text-center py-20 text-red-500">
        Failed to load project details. Please try again later.
      </div>
    );
  }

  if (!data) {
    return (
      <div className="text-center py-20 text-red-500">
        Project not found.
      </div>
    );
  }

  return (
    <div
      className="bg-background text-black"
      style={{
        backgroundImage: "url('/images/finalbg.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
      }}
    >
      <Navigation />
      <Wrappper>
        <div>
          <div className="relative w-full h-[400px] lg:h-[570px]">
            <img
              src={data?.imagesCollection?.items?.[0]?.url || "/fallback.jpg"}
              alt={data?.imagesCollection?.items?.[0]?.title || "Project Image"}
              className="w-full h-full object-cover object-center rounded-2xl shadow-2xl shadow-black/40 transition-transform duration-500 hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent rounded-2xl"></div>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row justify-between max-lg:gap-10 py-16">
          <h1 className="text-[28px] md:text-[40px] lg:text-[48px] font-semibold">
            {data?.projectTitle || "Untitled Project"}
          </h1>
          <p className="text-base md:text-lg font-normal w-full lg:w-[40%] text-balance">
            {data?.projectDescription || "No description available."}
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-5 md:gap-10 justify-between items-start py-10">
          <div className="flex gap-12 flex-col md:flex-row lg:flex-col">
            <div>
              <h4 className="text-lg md:text-[24px] font-bold">Client</h4>
              <p className="text-base md:text-[20px] font-medium">
                {data?.clientName || "N/A"}
              </p>
            </div>
            <div>
              <h4 className="text-lg md:text-[24px] font-bold">Date</h4>
              <p className="text-base md:text-[20px] font-medium">
                {data?.projectDate || "N/A"}
              </p>
            </div>
            {data?.clientWebsite && (
              <div className="text-lg md:text-[24px] font-bold">
                <h4>Website</h4>
                <Link
                  prefetch={false}
                  className="text-base md:text-[20px] font-medium"
                  href={data.clientWebsite}
                  target="_blank"
                >
                  {data.clientWebsite}
                </Link>
              </div>
            )}
          </div>
          <div className="relative w-full lg:w-[70%] h-[300px] md:h-[448px] lg:h-[587px]">
            <img
              src={data?.clientProjectImage?.url || "/fallback.jpg"}
              className="w-full h-full object-cover rounded-2xl"
              alt={data?.clientProjectImage?.title || "Client Image"}
            />
          </div>
        </div>

        <div className="flex flex-col lg:flex-row justify-between gap-10 items-start py-6 md:py-16">
          <div className="w-full lg:w-[40%] py-2">
            <h4 className="text-[28px] md:text-[40px] font-semibold">
              The Challenge
            </h4>
            <p className="text-base font-medium pt-8">
              {data?.theChallengeDescription || "No challenge provided."}
            </p>
          </div>
          <div className="relative h-[280px] md:h-[496px] rounded-[16px] overflow-hidden w-full lg:w-[50%]">
            <img
              src={data?.theChallengeImage?.url || "/fallback.jpg"}
              alt={data?.theChallengeImage?.title || "Challenge Image"}
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        <div className="flex flex-col lg:flex-row justify-between gap-10 items-start py-6 md:py-16">
          <div className="order-2 md:order-1 relative h-[280px] md:h-[496px] rounded-[16px] overflow-hidden w-full lg:w-[50%]">
            <img
              src={data?.theOutcomeImage?.url || "/fallback.jpg"}
              className="w-full h-full object-cover"
              alt={data?.theOutcomeImage?.title || "Outcome Image"}
            />
          </div>
          <div className="w-full order-1 md:order-2 lg:w-[40%] py-2">
            <h4 className="text-[28px] md:text-[40px] font-semibold">
              The Outcome
            </h4>
            <p className="text-base font-medium pt-8">
              {data?.theOutcomeDescription || "No outcome provided."}
            </p>
          </div>
        </div>

        {data?.imagesCollection?.items?.length > 0 && (
          <ImageGallery images={data.imagesCollection.items} />
        )}
      </Wrappper>

      {data?.otherProjectsCollection && (
        <OtherProjects works={data.otherProjectsCollection} />
      )}

      <AboutSection />
    </div>
  );
};

export default Details;
