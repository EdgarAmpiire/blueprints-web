import React from "react";
import thumb from "../../../assets/thumb.png";
import { Link } from "react-router-dom";

export const Strategy = () => {
  return (
    <div>
      <div className="w-full flex justify-center ">
        <div className="flex w-10/12 ">
          <div className="w-8/12">
            <div className="mt-5  flex justify-center  flex-col ">
              <h1 className="text-gray-500 text-lg w-10/12 ">
                We work together to outline the path to meeting your vision, and
                define the best product ideas to achieve your business goals to
                reach product-market fit
              </h1>
            </div>

            <div className="mt-8">
              <Link to={"/"} className="text-primary">
                Inquire more about this{" "}
              </Link>
            </div>
          </div>
          <div className="w-4/12 ">
            <div className="flex w-full justify-center items-center">
              <img src={thumb} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
