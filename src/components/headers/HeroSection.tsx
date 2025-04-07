"use client";

import Link from "next/link";
import React, { useRef } from "react";
import Wrappper from "../Wrappper";
import HeroVideo from "./HeroVideo";
import { useScroll, useTransform, motion } from "framer-motion";
import { useQuery } from "@tanstack/react-query";
import { getHeroSectionData } from "@/lib/api";
import TextShimmer from "../shimmers/TextShimmer";

const HeroSection = () => {
  const { data, isPending, error } = useQuery({
    queryKey: ["heroData"],
    queryFn: getHeroSectionData,
  });

  const target = useRef(null);
  const [isMobile, setIsMobile] = React.useState(false);

  const scroll = useScroll({ target });

  React.useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 1024); // Check if the screen size is smaller than 1024px
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => {
      window.removeEventListener("resize", checkMobile);
    };
  }, []);

  // Scroll-based transforms (only active for larger screens)
  const translate = useTransform(scroll.scrollYProgress, [0, 0.9], [0, 750]);
  const scale = useTransform(scroll.scrollYProgress, [0, 0.8], [1.05, 1.6]);
  const opacity = useTransform(scroll.scrollYProgress, [0, 1], [0, 1]);
  const borderRadius = useTransform(scroll.scrollYProgress, [0, 0.1], [16, 0]);

  // Title fade and disappear effect (for larger screens)
  const titleOpacity = useTransform(scroll.scrollYProgress, [0, 0.2], [1, 0]);
  const titleTranslateY = useTransform(scroll.scrollYProgress, [0, 0.2], [0, -50]);

  // Shift "CREATION" slightly to the right (2px) as user scrolls (for larger screens)
  const creationTranslate = useTransform(scroll.scrollYProgress, [0, 0.2], [0, 2]);

  return (
    <div ref={target} className="pb-8 relative z-10">
      <Wrappper>
        <motion.div
          style={{
            translateY: isMobile ? 0 : translate, // Disable scroll translation for mobile
          }}
          className="relative z-40 max-w-[972px] mx-auto text-center py-8 sm:py-12"
        >
          {data ? (
            <motion.h1
              style={{
                opacity: isMobile ? 1 : titleOpacity, // Show the title immediately on mobile
                translateY: isMobile ? 0 : titleTranslateY, // Keep the title static on mobile
              }}
              className="text-[30px] sm:text-[36px] md:text-[44px] leading-relaxed md:leading-relaxed lg:leading-normal lg:text-[62px] xl:text-[64px] font-semibold text-center bg-darkHeading 
              bg-gradient-to-t from-[#E6EAF2]/0 to-[#C3CCD9] bg-clip-text"
            >
              Aara Technology{" "}
              <span className="text-[22px] block sm:text-[26px] md:text-[30px] lg:text-[44px] text-black">
                where{" "}
                <span className="text-blue-700 font-bold">innovation</span>{" "}
                meets{" "}
                <span className="text-blue-700 font-bold">execution</span>.
              </span>
            </motion.h1>
          ) : (
            <TextShimmer
              className="w-[80%] h-16 text-center mx-auto my-6"
              lines={2}
            />
          )}

          {data ? (
            <motion.div className="flex mt-12 gap-6 text-start">
              <p className="text-xs sm:text-sm w-1/2 md:text-lg font-medium text-black mx-auto">
                <span className="text-blue-700 font-semibold">CONCEPTION:</span>{" "}
                {data.subtitleLeft}
              </p>
              <p className="border-2 rounded-full border-primary"></p>
              <motion.p
                style={{
                  translateX: isMobile ? 0 : creationTranslate, // Disable scroll translation for mobile
                }}
                className="text-xs sm:text-sm w-1/2 md:text-lg font-medium text-black mx-auto"
              >
                <span className="text-blue-700 font-semibold">CREATION:</span>{" "}
                {data.subtitleRight}
              </motion.p>
            </motion.div>
          ) : (
            <TextShimmer className="w-[80%] h-4 text-center mx-auto" lines={2} />
          )}
        </motion.div>

        <motion.div
          style={{
            scale: isMobile ? 1 : scale, // Keep scale static on mobile
            borderRadius: isMobile ? 16 : borderRadius, // Keep border-radius static on mobile
          }}
          className="relative h-[260px] md:h-[467px] lg:h-[773px] my-2 md:my-16 overflow-hidden border border-videoBorder"
        >
          {/* For mobile, give the HeroVideo a higher z-index to ensure it stays above the background */}
          <motion.div
            style={{
              opacity: isMobile ? 1 : opacity, // Keep opacity static on mobile
              zIndex: isMobile ? 10 : 20, // Ensure video is above the background on small screens
            }}
            className="absolute inset-0 w-full h-full bg-background/90 z-20"
          ></motion.div>
          <HeroVideo src={data?.heroImage.url} />
        </motion.div>
      </Wrappper>
    </div>
  );
};

export default HeroSection;
