import React from "react";

export const Hero = () => {
  return (
    <di className="">
      <div
        class="w-full bg-cover bg-center object-cover"
        style={{ height: "28rem", backgroundImage: `url(/images/bg.png)` }}>
        <div class="flex flex-col items-center justify-between h-full w-full py-10 bg-[#000000D9] backdrop-brightness-200">
          <div class="text-center flex flex-col items-center  ">
            <h1 class="text-white text-2xl font-semibold uppercase md:text-3xl">
              We Are
            </h1>
            <h2 className="text-white text-xl font-semibold uppercase mt-10 ">
              WE ARE BLUEPRINT STRATEGY GROUP, INC
            </h2>

            <p className="text-white mt-10 w-6/12 font-light">
               We are  a digital consulting firm that partners with businesses
              to conceptualize, design, build and position their digital
              products and services
            </p>
          </div>
          <div>
            <button className="bg-white py-2 px-4 rounded-md text-black text-sm">Want to know how we work </button>
          </div>
        </div>
      </div>
    </di>
  );
};
