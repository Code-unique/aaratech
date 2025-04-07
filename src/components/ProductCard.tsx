"use client";
import Link from "next/link";

import React from "react";

const ProductCard = ({ each }: { each: any }) => {
  const handleNavigation = () => {
    if (each.link) {
      window.open(each.link);
    }
  };

  return (
    <div
      onClick={handleNavigation}
      style={{
        boxShadow:
          "-3px 15px 15px 0px rgba(13, 21, 45, 0.09), -1px 4px 8px 0px rgba(13, 21, 45, 0.10)",
      }}
      className="bg-foreground  cursor-pointer relative z-10  rounded-[8px] border-[5px] border-foreground"
    >
      <img
        src={each.image.url}
        alt={each.image.title}
        width={0}
        height={0}
        className="w-full h-[115px] md:h-[180px] lg:h-[185px] object-cover rounded-l-[8px] rounded-r-[8px] rounded-b-[0px]"
      />
      <h3 className="text-white text-xs md:text-sm lg:text-base font-semibold text-center py-1 md:py-2">
        {each.title}
      </h3>
    </div>
  );
};

export default ProductCard;
