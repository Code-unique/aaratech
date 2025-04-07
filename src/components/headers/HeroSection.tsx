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
      setIsMobile(window.innerWidth <= 1024);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => {
      window.removeEventListener("resize", checkMobile);
    };
  }, []);

  const translate = useTransform(scroll.scrollYProgress, [0, 0.9], [0, 750]);
  const scale = useTransform(scroll.scrollYProgress, [0, 0.8], [1.05, 1.6]);
  const opacity = useTransform(scroll.scrollYProgress, [0, 1], [0, 1]);
  const borderRadius = useTransform(scroll.scrollYProgress, [0, 0.1], [16, 0]);

  const titleOpacity = useTransform(scroll.scrollYProgress, [0, 0.2], [1, 0]);
  const titleTranslateY = useTransform(scroll.scrollYProgress, [0, 0.2], [0, -50]);
  const creationTranslate = useTransform(scroll.scrollYProgress, [0, 0.2], [0, 2]);

  return (
    <div ref={target} className="pb-8 relative z-10">
      <Wrappper>
        {/* Title Section */}
        <motion.div
          style={{
            translateY: isMobile ? 0 : translate,
          }}
          className="relative z-40 max-w-[972px] mx-auto text-center py-8 sm:py-12"
        >
          {data ? (
            <motion.h1
              style={{
                opacity: isMobile ? 1 : titleOpacity,
                translateY: isMobile ? 0 : titleTranslateY,
              }}
              className="text-[28px] sm:text-[36px] md:text-[44px] lg:text-[60px] xl:text-[64px] font-semibold text-center bg-darkHeading 
              bg-gradient-to-t from-[#E6EAF2]/0 to-[#C3CCD9] bg-clip-text leading-snug"
            >
              Aara Technology{" "}
              <span className="block text-black text-[20px] sm:text-[24px] md:text-[30px] lg:text-[42px]">
                where <span className="text-blue-700 font-bold">innovation</span>{" "}
                meets <span className="text-blue-700 font-bold">execution</span>.
              </span>
            </motion.h1>
          ) : (
            <TextShimmer className="w-[80%] h-16 text-center mx-auto my-6" lines={2} />
          )}

          {/* Subtitle Section */}
          {data ? (
            <motion.div className="flex flex-col sm:flex-row justify-center items-center mt-10 sm:mt-12 gap-6">
              <p className="text-sm sm:text-base md:text-lg font-medium text-black max-w-[300px] text-center sm:text-left">
                <span className="text-blue-700 font-semibold">CONCEPTION:</span>{" "}
                {data.subtitleLeft}
              </p>
              <div className="hidden sm:block h-12 border-l-2 border-primary"></div>
              <motion.p
                style={{
                  translateX: isMobile ? 0 : creationTranslate,
                }}
                className="text-sm sm:text-base md:text-lg font-medium text-black max-w-[300px] text-center sm:text-left"
              >
                <span className="text-blue-700 font-semibold">CREATION:</span>{" "}
                {data.subtitleRight}
              </motion.p>
            </motion.div>
          ) : (
            <TextShimmer className="w-[80%] h-4 text-center mx-auto" lines={2} />
          )}
        </motion.div>

        {/* Hero Video Section */}
        <motion.div
          style={{
            scale: isMobile ? 1 : scale,
            borderRadius: isMobile ? 16 : borderRadius,
          }}
          className="relative h-[240px] sm:h-[350px] md:h-[467px] lg:h-[773px] my-4 md:my-16 overflow-hidden border border-videoBorder rounded-xl"
        >
          {/* Remove dark overlay on mobile */}
          {!isMobile && (
            <motion.div
              style={{
                opacity,
              }}
              className="absolute inset-0 w-full h-full bg-background/90 z-20 pointer-events-none"
            ></motion.div>
          )}
          <HeroVideo src={data?.heroImage.url} />
        </motion.div>
      </Wrappper>
    </div>
  );
};

export default HeroSection;
