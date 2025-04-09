import React from "react";
import Wrappper from "./Wrappper";
import Link from "next/link";

const AboutSection = () => {
  return (
    <section
      className="py-16 md:py-8 bg-background"
      style={{
        backgroundImage: "url('/images/finalbg.jpg')", 
        backgroundSize: "cover", 
        backgroundPosition: "center", 
        backgroundAttachment: "fixed",
      }}
    >
      <Wrappper>
        <div className="flex gap-8 items-center justify-center">
          <div className="hidden md:block w-[40%]">
            <img
              src="/images/about.png"
              alt="about"
              className="w-[368px] mx-auto h-[368px] object-contain"
            />
          </div>
          <div className="w-[90%] mx-auto md:w-[50%] lg:w-[60%]">
            <h2 className="text-black text-center md:text-start max-md:text-balance text-xs sm:text-sm lg:text-[18px] !leading-relaxed font-semibold pb-6">
              <span className="text-primary text-[28px] ">A</span>
              re you looking to bring your parts/ product design idea to life?
              Our product prototype design service offers a range of options,
              from basic 3D printed mock-ups to fully functioning field ready
              parts/products. Contact us right away to transform your concept
              into reality with our product development and engineering
              expertise backed by high-quality 3dprinting and laser cutting
              services. Get your customized parts/product designed and developed
              with us!!
              <span className="text-primary block py-1">
                Service and delivery all over Nepal.
              </span>
            </h2>
          </div>
        </div>
      </Wrappper>
      <div className="flex justify-center mt-0">
        <Link
          className="hover:scale-[1.03] duration-300 ease-linear block w-max rounded-[8px] bg-teal-500 text-foreground px-6 py-2 text-base font-semibold"
          href="https://wa.me/9817396487"
        >
          Connect With Us
        </Link>
      </div>
    </section>
  );
};

export default AboutSection;
