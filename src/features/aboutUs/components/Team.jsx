import React from "react";
import user from "../../../assets/user.png";
import { CiLinkedin, CiTwitter } from "react-icons/ci";
import { AiOutlineMail } from "react-icons/ai";

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
          <div className="flex w-10/12">
            <div className="w-2/12 flex flex-col">
              <div>
                <img src={user} alt="" />
              </div>
              <div className="flex">
                <CiLinkedin />
                <CiTwitter />
                <AiOutlineMail />
              </div>
            </div>
            <div className="w-10/12">
              <div>
                <h1>E Michael Rosales.MBA, CSPO, CPIP, CSM</h1>
                <p>Chief Digital Product Consultant, BSG Co-founder</p>
              </div>
              <div>
                <p>
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
