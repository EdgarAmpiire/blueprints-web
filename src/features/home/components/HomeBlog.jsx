import React from "react";
import { Carousel } from "./Carousel";

export const HomeBlog = () => {
  return (
    <div className="flex justify-center items-center">
      <div className="w-10/12 md:w-10/12">

      <div className="mt-24 flex flex-col ">
        <div className="w-full flex justify-start ">
          <div className="px-6 py-1 bg-primary"></div>
        </div>
        <div className="w-8/12 flex flex-col justify-start mt-4 ">
          <h1 className="text-3xl text-[#040052] w-9/12 font-semibold">
            People, Process and Technology are always in motion.
          </h1>
          <p className="mt-5 text-lg text-gray-500 ">
            Ultimately, these three interdependent elements are a key strategic
            component for digital operations to reach consistent efficiency,
            automated scaling, and achieve goals and outcomes
          </p>
        </div>
      </div>
      <div className="mb-10">
        <Carousel />
      </div>
    </div>
    </div>

  );
};
