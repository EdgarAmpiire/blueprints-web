import React from "react";

export const Hero = () => {
  return (
    <di className="">
      <div
        class="w-full bg-cover bg-center object-cover"
        style={{ height: "32rem", backgroundImage: `url(/images/bg.png)` }}>
        <div class="flex justify-center h-full w-full bg-[#000000D9] opacity-70">
          <div class="text-center mt-10">
            <h1 class="text-white text-2xl font-semibold uppercase md:text-3xl">
              We Are
            </h1>
            <h2 className="text-white text-xl font-semibold uppercase mt-10 ">WE ARE BLUEPRINT STRATEGY GROUP, INC</h2>
            
            <p></p>
            <button class="mt-4 px-4 py-2 bg-blue-600 text-white text-sm uppercase font-medium rounded hover:bg-blue-500 focus:outline-none focus:bg-blue-500">
              Start project
            </button>
          </div>
        </div>
      </div>
    </di>
  );
};
