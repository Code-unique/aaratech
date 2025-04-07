"use client";
import React from "react";

const Banner = () => {
  return (
    <section className="relative w-full justify-center bg-background p-4">
      <img
        src="/images/bannerf.jpg"
        alt="Banner"
        className="w-auto h-auto max-w-full max-h-full rounded-lg"
      />
      <div className="absolute inset-0 bg-background opacity-30 rounded-lg"></div>
      <div className="absolute inset-0 flex items-center justify-center text-center">
        {/* Optional content */}
      </div>
    </section>
  );
};

export default Banner;
