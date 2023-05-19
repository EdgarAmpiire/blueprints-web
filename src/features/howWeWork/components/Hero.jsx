import React from "react";

export const Hero = () => {
  return (
    <div className="">
      <div
        class="w-full bg-cover bg-center object-cover"
        style={{
          height: "28rem",
          backgroundImage: `url(/images/chessbg.png)`,
        }}>
        <div class="flex flex-col items-center justify-between h-full w-full py-10 bg-[#000000D9] backdrop-brightness-200">
          <div className="mt-14 flex flex-col items-center justify-center w-full">
            <h1 className="text-4xl w-7/12 font-semibold text-center text-white">
              To build a wining blueprint
            </h1>
            <p className="w-7/12 text-center mt-14 font-light text-white ">
               Leverage our consulting methodology that is designed to
              prioritize and solve the problems that capture and deliver the
              most value, create scalable market opportunities, jump start
              digital transformation, and set a clear and measurable path to
              disruptive growth and profitability
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
