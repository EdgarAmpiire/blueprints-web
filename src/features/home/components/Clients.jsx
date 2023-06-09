import React from "react";
import ClientSlider from "./ClientSlider";
import ResponsiveClientSlider from "./ResponsiveClientSlider";

export const Clients = () => {
  return (
    <div>
      <div className="flex items-center justify-center">
        <div className="lg:max-w-7xl max-w-4xl">
          <div className="flex justify-center items-center w-12/12  ">
            <div className="mt-24 lg:w-10/12 w-11/12">
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
              className="w-full flex justify-start mt-4 ">
                <h1 className="lg:text-lg md:text-lg text-xl text-gray-500">
                  Trusted by select clients, companies & partners
                </h1>
              </div>

              {/* slider  */}
              <div 
              data-aos="fade-up"
              data-aos-offset="200"
              data-aos-easing="ease-in-sine"
              data-aos-duration="1000"
              className="lg:flex md:flex lg:flex-col md:flex-col hidden">
                <ClientSlider />
              </div>
              <div 
              data-aos="fade-up"
              data-aos-offset="200"
              data-aos-easing="ease-in-sine"
              data-aos-duration="1000"
              className="lg:hidden md:hidden flex-col">
                <ResponsiveClientSlider />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
