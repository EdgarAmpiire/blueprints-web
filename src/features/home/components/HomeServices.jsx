import React from "react";
import { Strategy } from "./Strategy";

export const HomeServices = () => {
  const [isActive, setisActive] = React.useState("strategy");

  const changeComponent = (item) => {
    setisActive(item);
  };
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

        <div>
          <div>
            <img src="" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};
