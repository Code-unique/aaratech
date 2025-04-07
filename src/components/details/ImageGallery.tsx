import React from "react";

const ImageGallery = ({ images }: { images: any[] }) => {
  return (
    <div>
      {images.map((image, index) => {
        if (index % 3 === 0 && index + 1 < images.length) {
          // Render two side-by-side images
          return (
            <div
              key={index}
              className="flex flex-col md:flex-row gap-6 items-center justify-center mb-6"
            >
              <img
                src={images[index].url}
                alt={images[index].title}
                className="w-full md:w-[50%] h-[320px] md:h-[350px] lg:h-[640px] rounded-[16px]"
              />
              <img
                src={images[index + 1].url}
                alt={images[index + 1].title}
                className="w-full md:w-[50%] h-[320px] md:h-[350px] lg:h-[640px] rounded-[16px]"
              />
            </div>
          );
        }

        if (index % 3 === 2) {
          // Render full-width image
          return (
            <div
              key={index}
              className="relative h-[275px] md:h-[400px] lg:h-[640px] my-10 rounded-[16px] overflow-hidden w-full"
            >
              <img
                src={images[index].url}
                className="w-full h-full object-fill"
                alt={images[index].title}
              />
            </div>
          );
        }

        // Handle the case where the last image does not fit into the pattern
        if (index % 3 === 0 && index + 1 >= images.length) {
          return (
            <div
              key={index}
              className="relative h-[275px] md:h-[400px] lg:h-[640px] my-10 rounded-[16px] overflow-hidden w-full"
            >
              <img
                src={images[index].url}
                className="w-full h-full object-fill"
                alt={images[index].title}
              />
            </div>
          );
        }

        return null;
      })}
    </div>
  );
};

export default ImageGallery;
