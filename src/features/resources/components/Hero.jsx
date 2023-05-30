import React from "react";
import { Blogs } from "./Blogs";

export const Hero = () => {
  const [isActive, setisActive] = React.useState("blog");

  const changeComponent = (item) => {
    setisActive(item);
  };
  return (
    <div>
      
          <div className="mt-16 ">
            <div className=" flex items-center justify-center ">
            <div className="flex items-center justify-center">
        <div className="lg:max-w-7xl max-w-4xl">
              <div className="lg:w-12/12 w-11/12">
                <div className="">
                  <div className=" border-gray-300">
                    <div className="flex gap-10 w-4/12 ">
                      <button
                        className={
                          isActive === "blog"
                            ? "bg-[#0055BA] text-white px-10 py-2 rounded-full"
                            : "bg-[#0055BA33] text-[#040052] px-10 py-2 rounded-full"
                        }
                        onClick={() => changeComponent("blog")}>
                        Blog
                      </button>
                      <button
                        className={
                          isActive === "press"
                            ? "bg-[#0055BA] text-white px-10 py-2 rounded-full"
                            : "bg-[#0055BA33] text-[#040052] px-10 py-2 rounded-full"
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
