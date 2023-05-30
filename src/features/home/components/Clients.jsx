import React from "react";
import ClientSlider from "./ClientSlider";

export const Clients = () => {
  return (
    <div className="flex justify-center items-center w-12/12 ">
      <div className="mt-24 lg:w-10/12 w-11/12">
        <div className="w-full flex justify-start ">
          <div className="px-6 py-1 bg-primary"></div>
        </div>
        <div className="w-full flex justify-start mt-4 ">
          <h1 className="text-lg text-gray-500">
            Trusted by select clients, companies & partners
          </h1>
        </div>

        {/* slider  */}
        <div>
          <ClientSlider />
        </div>
      </div>
    </div>
  );
};
