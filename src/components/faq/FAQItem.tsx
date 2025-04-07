"use client";
import React, { useRef, useState, useEffect } from "react";

const FAQItem = ({
  item,
  isOpen,
  onToggle,
}: {
  item: any;
  index: number;
  isOpen: boolean;
  onToggle: () => void;
}) => {
  const contentRef = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState<string | number>("0px");

  useEffect(() => {
    if (contentRef.current) {
      setHeight(isOpen ? `${contentRef.current.scrollHeight}px` : "0px");
    }
  }, [isOpen]);

  return (
    <div className="border-b py-2">
      <div
        onClick={onToggle}
        className="flex w-full cursor-pointer items-center justify-between py-4"
      >
        <h3 className="text-black text-lg md:text-[20px] w-[90%] font-medium">
          {item.title}
        </h3>
        {isOpen ? (
          <svg
            width="24"
            height="26"
            viewBox="0 0 24 26"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M8 14H16M22 14C22 19.5228 17.5228 24 12 24C6.47715 24 2 19.5228 2 14C2 8.47715 6.47715 4 12 4C17.5228 4 22 8.47715 22 14Z"
              stroke="#71717A"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        ) : (
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M11.9998 8V16M7.99976 12H15.9998M21.9998 12C21.9998 17.5228 17.5226 22 11.9998 22C6.47691 22 1.99976 17.5228 1.99976 12C1.99976 6.47715 6.47691 2 11.9998 2C17.5226 2 21.9998 6.47715 21.9998 12Z"
              stroke="#71717A"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        )}
      </div>

      <div
        ref={contentRef}
        style={{ height }}
        className="overflow-hidden transition-all duration-500"
      >
        <p className="text-black text-sm md:text-[16px] font-medium">
          {item.content}
        </p>
      </div>
    </div>
  );
};

export default FAQItem;
