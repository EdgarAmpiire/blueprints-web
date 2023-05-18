import React from "react";
import user from "../../../assets/user.png";
import { CiLinkedin, CiTwitter } from "react-icons/ci";
import { AiOutlineMail } from "react-icons/ai";
import { Link } from "react-router-dom";

export const Team = () => {
  return (
    <div>
      <div className="mt-24">
        <div className="flex justify-center">
          <h1 className="font-semibold text-xl text-[#040052]">
            The Team that makes it happen
          </h1>
        </div>
        <div className=" mt-14 flex items-center justify-center ">
          <div className="flex w-10/12 gap-14">
            <div className="w-3/12 flex flex-col">
              <div>
                <img src={user} alt="" />
              </div>
              <div className="flex px-2 mt-3 w-8/12 items-center justify-between">
                <Link to={"/"}>
                  <CiLinkedin className="text-xl text-[#040052] cursor-pointer" />
                </Link>
                <Link to={"/"}>
                  <CiTwitter className="text-xl text-[#040052] cursor-pointer" />
                </Link>
                <Link to={"/"}>
                  <AiOutlineMail className="text-xl text-[#040052] cursor-pointer" />
                </Link>
              </div>
            </div>
            <div className="w-9/12">
              <div>
                <h1 className="text-[#040052] w-5/12 font-semibold">E Michael Rosales.MBA, CSPO, CPIP, CSM</h1>
                <p className="text-[#0055BA] text-sm w-5/12 font-light mt-3">Chief Digital Product Consultant, BSG Co-founder</p>
              </div>
              <div className="mt-5 border-b border-gray-600 w-9/12"></div>
              <div className="mt-5 w-9/12">
                <p className="font-light">
                  Michael is an innovative, value-centric, outcome-driven and
                  entrepreneurial business strategist, digital product leader,
                  thinker, and problem solver with Digital DNA leveraging 15+
                  years of product and business strategy experience.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
