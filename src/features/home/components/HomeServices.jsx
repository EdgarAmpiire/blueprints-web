import React from "react";
import strategy from "../../../assets/strategyIcon.png";
import portfolio from "../../../assets/portfolioIcon.png";
import management from "../../../assets/managementIcon.png";
import marketing from "../../../assets/marketingIcon.png";
// import { Strategy } from "./Strategy";

export const HomeServices = () => {
  // const [isActive, setisActive] = React.useState("strategy");

  // const changeComponent = (item) => {
  //   setisActive(item);
  // };
  return (
    <div>
      <div className="mt-24">
        <div className="w-full flex justify-center ">
          <div className="px-6 py-1 bg-primary"></div>
        </div>
        <div className="w-full flex justify-center mt-4 ">
          <h1 className="text-3xl font-semibold ">We help you with</h1>
        </div>

        {/* <div className="bg-[#F5F5F5] py-5 px-3 rounded-lg mt-5">
          <div className="py-3">
            <div className=" border-gray-300">
              <div className="flex justify-around w-full ">
                <button
                  className={
                    isActive === "strategy"
                      ? "mx-1 bg-black text-white rounded-full py-2 text-sm px-3"
                      : "mx-1 bg-[#E5E5E5] rounded-full py-2 text-sm text-black px-3"
                  }
                  onClick={() => changeComponent("strategy")}
                >
                  Business & Product Strategy
                </button>
                <button
                  className={
                    isActive === "management"
                      ? "mx-1 bg-black text-white rounded-full py-2 text-sm px-3"
                      : "mx-1 bg-[#E5E5E5] rounded-full py-2 text-sm text-black px-3"
                  }
                  onClick={() => changeComponent("management")}
                >
                  Product Portfolio Management
                </button>
                <button
                  className={
                    isActive === "operation"
                      ? "mx-1 bg-black text-white rounded-full py-2 text-sm px-3"
                      : "mx-1 bg-[#E5E5E5] rounded-full py-2 text-sm text-black px-3"
                  }
                  onClick={() => changeComponent("operation")}
                >
                  Product Development and Management Operation
                </button>
                <button
                  className={
                    isActive === "marketing"
                      ? "mx-1 bg-black text-white rounded-full py-2 text-sm px-3"
                      : "mx-1 bg-[#E5E5E5] rounded-full py-2 text-sm text-black px-3"
                  }
                  onClick={() => changeComponent("marketing")}
                >
                  Digital Marketing
                </button>
              </div>
            </div>
            <div className="mt-5">
              {isActive === "strategy" && <Strategy />}
              {isActive === "management" && "tab2"}
              {isActive === "operation" && "tab3"}
              {isActive === "marketing" && "tab4"}
            </div>
          </div>
        </div> */}

        <div className="bg-[#F5F5F5] w-full   py-5 px-5 rounded-lg mt-5 gap-14 grid grid-cols-2">
          <div className="w-10/12 flex justify-center items-center">
            <div className="rounded-3xl bg-[#050422] py-8 px-5 ">
              <div>
                <img src={strategy} alt="" />
              </div>
              <div>
                <h1 className="text-white mt-5 font-semibold">
                  Business & Product Strategy
                </h1>
                <p className="text-white mt-5 font-light text-sm mb-5">
                  Defining product ideas to achieve your strategic vision and
                  goals.
                </p>
              </div>
            </div>
          </div>

          <div className="w-10/12">
            <div className="rounded-3xl bg-[#050422] py-8 px-5  ">
              <div>
                <img src={strategy} alt="" />
              </div>
              <div>
                <h1 className="text-white mt-5 font-semibold">
                  Business & Product Strategy
                </h1>
                <p className="text-white mt-5 font-light text-sm mb-5">
                  Defining product ideas to achieve your strategic vision and
                  goals.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
