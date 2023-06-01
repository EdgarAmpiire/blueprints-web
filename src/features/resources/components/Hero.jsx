import React from "react";
import { Blogs } from "./Blogs";

export const Hero = () => {
  const [isActive, setisActive] = React.useState("blog");

  const changeComponent = (item) => {
    setisActive(item);
  };
  return (
    <div className="">
      <div className="lg:mt-16 md:mt-16 mt-8 ">
        <div className=" flex items-center justify-center ">
          <div className="flex items-center justify-center">
            <div className="lg:max-w-7xl md:max-w-3xl max-w-xs">
              <div className="lg:w-12/12 md:w-12/12 w-10/12">
                <div className="lg:flex-none md:flex-none lg:items-start md:items-start lg:justify-start md:justify-start flex flex-col items-center justify-center ">
                  <div className=" border-gray-300">
                    <div className="flex lg:gap-10 md:gap-10 gap-5 lg:w-4/12 md:w-4/12 w-6/12 ">
                      <button
                        className={
                          isActive === "blog"
                            ? "bg-[#0055BA] text-white lg:px-10 md:px-10 px-8 py-2 rounded-full"
                            : "bg-[#0055BA33] text-[#040052] lg:px-10 md:px-10 px-8 py-2 rounded-full"
                        }
                        onClick={() => changeComponent("blog")}>
                        Blog
                      </button>
                      <button
                        className={
                          isActive === "press"
                            ? "bg-[#0055BA] text-white lg:px-10 md:px-10 px-8 py-2 rounded-full"
                            : "bg-[#0055BA33] text-[#040052] lg:px-10 md:px-10 px-8 py-2 rounded-full"
                        }
                        onClick={() => changeComponent("press")}>
                        Press
                      </button>
                    </div>
                  </div>
                  <div className="mt-10">
                    {isActive === "blog" && <Blogs />}
                    {isActive === "press" && "presses"}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
