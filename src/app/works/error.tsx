"use client";

import React from "react";

const error = ({ error }: { error: Error & { digest?: string } }) => {
  return (
    <section className="h-screen flex justify-center flex-col items-center bg-gray-900">
      <div className="mx-auto max-w-screen-xl px-4 py-8 lg:px-6 lg:py-16">
        <div className="mx-auto max-w-screen-sm text-center">
          <h1 className="dark:text-primary-500 mb-4 text-7xl font-extrabold tracking-tight text-blue-600 lg:text-9xl">
            Sorry !
          </h1>
          <p className="mb-4 text-lg font-light text-gray-500 dark:text-gray-400">
            Sorry something went wrong.
          </p>
          <p className="mb-4 text-3xl font-bold tracking-tight text-gray-900 md:text-4xl dark:text-white">
            Try Again later
          </p>
        </div>
      </div>
    </section>
  );
};

export default error;
