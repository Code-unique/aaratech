import React from "react";
import Wrappper from "./Wrappper";
import Link from "next/link";

const AboutSection = () => {
  return (
    <section
      className="py-20 md:py-24 bg-background"
      style={{
        backgroundImage: "url('/images/finalbg.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
      }}
    >
      <Wrappper>
        <div className="flex flex-col md:flex-row gap-10 items-center justify-between">
          <div className="hidden md:block w-[40%]">
            <img
              src="/images/about.png"
              alt="about"
              className="w-[368px] h-[368px] object-contain mx-auto"
            />
          </div>

          <div className="w-full md:w-[60%] text-center md:text-left">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4 leading-tight">
              Bring Your Ideas to Life
            </h2>

            <p className="text-base md:text-lg text-black leading-relaxed">
  Are you looking to bring your parts or product design idea to life? Our{" "}
  <span className="font-bold text-teal-400 animate-pulse drop-shadow-[0_0_8px_#14b8a6]">
    product prototype design
  </span>{" "}
  service offers a range of solutions — from rugged 3D printed mockups to
  fully functional, field-ready parts.
  <br />
  <br />
  Backed by{" "}
  <span className="font-bold text-pink-500 animate-pulse drop-shadow-[0_0_8px_#ec4899]">
    engineering mastery
  </span>{" "}
  and cutting-edge fabrication tools, we bring your ideas into reality. Your
  concept, our execution — industrial-grade quality guaranteed.
  <br />
  <span className="block mt-4 text-xl font-extrabold text-amber-400 animate-pulse drop-shadow-[0_0_10px_#f59e0b]">
    🚚 We deliver anywhere in Nepal.
  </span>
</p>





            <div className="mt-6">
              <Link
                href="https://wa.me/9817396487"
                className="inline-block bg-teal-600 text-white px-6 py-3 rounded-lg text-sm font-semibold shadow-md hover:bg-teal-700 transition-all duration-300"
              >
                Connect With Us
              </Link>
            </div>
          </div>
        </div>
      </Wrappper>
    </section>
  );
};

export default AboutSection;
