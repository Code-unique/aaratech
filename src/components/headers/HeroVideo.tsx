import React from "react";
import ImageShimmer from "../shimmers/ImageShimmer";
const HeroVideo = ({ src }: { src?: string }) => {
  if (src) {
    return (
      <img
        src={src}
        alt="hero"
        className="mx-auto w-full  object-cover h-full object-left-top"
        draggable={false}
      />
    );
  } else {
    return <ImageShimmer className="w-full h-full " />;
  }
};

export default HeroVideo;
