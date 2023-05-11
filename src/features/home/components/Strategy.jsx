import React from "react";
import thumb from "../../../assets/thumb.png";
import { Link } from "react-router-dom";

export const Strategy = () => {
  return (
    <div>
      <div className="w-full">
        <div className="flex  ">
            <div>

          <div className="mt-5 w-7/12 flex justify-center items-center flex-col ">

            <h1 className="text-gray-500 text-lg w-10/12 ">

            We work together to outline the path to meeting your vision, and
            define the best product ideas to achieve your business goals to
            reach product-market fit
            </h1>
            </div>

            <Link className="text-primary">Inquire more about this  </Link>
          </div>
          <div className="w-5/12 ">

          <div className="flex justify-center items-center">
            <img src={thumb} alt="" />
          </div>
          </div>
        </div>
      </div>
    </div>
  );
};
