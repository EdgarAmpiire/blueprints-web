import React from "react";
import {
  MdOutlineEmail,
  MdOutlineLocationOn,
  MdOutlineLocalPhone,
} from "react-icons/md";

export const Form = () => {
  return (
    <div>
      <div className="mt-24">
        <div>
          <h1 className="text-[#040052] uppercase font-bold text-2xl">
            Get in touch
          </h1>
        </div>

        <div className="w-full flex mt-10">
          <div className="w-5/12">
            <div className="px-1 py-2 gap-5 flex flex-col">
              <div>
                <div className="flex gap-2">
                  <div className="flex py-3 px-3 bg-[#0055BA] rounded-full w-fit">
                    <MdOutlineEmail className="text-white" />
                  </div>
                  <div className="text-sm">
                    <p className="text-[#040052] font-semibold">
                      Send us an email
                    </p>
                    <p className="text-[#040052]">
                      info@theblueprintstrategy.com
                    </p>
                  </div>
                </div>
              </div>

              <div>
                <div className="flex gap-2">
                  <div className="flex py-3 px-3 bg-[#0055BA] rounded-full w-fit">
                    <MdOutlineLocationOn className="text-white" />
                  </div>
                  <div className="text-sm">
                    <p className="text-[#040052] font-semibold">
                      Visit Us
                    </p>
                    <p className="text-[#040052]">
                    Blueprint Strategy Group, Inc 
                    </p>
                    <p className="text-[#040052]">
                    30 N Gould Street, Suite 4000
                    </p><p className="text-[#040052]">
                    Sheridan, WY
                    </p>
                  </div>
                </div>
              </div>
            
              <div>
                <MdOutlineLocalPhone />
              </div>
            </div>
          </div>
          <div className="w-7/12">
            <form>
              <div>
                <label>First Name</label>
                <input type="text" placeholder="firstname" />
                <label>Last Name</label>
                <input type="text" placeholder="lastname" />
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
