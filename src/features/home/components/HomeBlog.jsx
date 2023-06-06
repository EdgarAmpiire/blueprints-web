import React from "react";
import { Carousel } from "./Carousel";

export const HomeBlog = () => {
  return (
    <div>
      <div className="flex items-center justify-center">
        <div className="lg:max-w-7xl max-w-4xl">
          <div className="flex justify-center items-center">
            <div className="lg:w-10/12 md:w-11/12 w-11/12">
              <div className="mt-24 flex flex-col ">
                <div 
                data-aos="fade-up"
                data-aos-offset="200"
                data-aos-easing="ease-in-sine"
                data-aos-duration="1000"
                className="w-full flex justify-start ">
                  <div className="px-6 py-1 bg-primary"></div>
                </div>
                <div 
                data-aos="fade-up"
                data-aos-offset="200"
                data-aos-easing="ease-in-sine"
                data-aos-duration="1000"
                className="lg:w-8/12 md:w-10/12 w-12/12 flex flex-col justify-start mt-4 ">
                  <h1 
                  data-aos="fade-up"
                  data-aos-offset="200"
                  data-aos-easing="ease-in-sine"
                  data-aos-duration="1000"
                  className="text-3xl text-[#040052] lg:w-9/12 md:w-10/12 w-12/12 font-semibold">
                    People, Process and Technology are always in motion.
                  </h1>
                  <p className="mt-5 text-lg text-gray-500 ">
                    Ultimately, these three interdependent elements are a key
                    strategic component for digital operations to reach
                    consistent efficiency, automated scaling, and achieve goals
                    and outcomes
                  </p>
                </div>
              </div>
              <div 
              data-aos="fade-up"
              data-aos-offset="200"
              data-aos-easing="ease-in-sine"
              data-aos-duration="1000"
              className="mb-10">
                <Carousel />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
