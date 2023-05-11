import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import logitech from "../../../assets/logitech.png";
import h from "../../../assets/h.png";
import army from "../../../assets/army.png";
import eightyFour from "../../../assets/84.png";
import gid from "../../../assets/gid.png";
import blueCross from "../../../assets/blue-cross.png";
import nike from "../../../assets/nike.png";
import ingram from "../../../assets/ingram.png";
import cnb from "../../../assets/cnb.png";
import honda from "../../../assets/honda.png";
import avery from "../../../assets/avery.png";
import corelogic from "../../../assets/corelogic.png";
import deloitte from "../../../assets/deloitte.png";
import farmers from "../../../assets/farmers.png";
import ibm from "../../../assets/ibm.png";
import zelle from "../../../assets/zelle.png";
import lewray from "../../../assets/lewray.png";
import adobe from "../../../assets/adobe.png";

class ClientSlider extends Component {
  render() {
    const settings = {
      dots: false,
      infinite: true,
      slidesToShow: 5,
      slidesToScroll: 1,
      autoplay: true,
      speed: 2000,
      autoplaySpeed: 2000,
      cssEase: "linear",
    };

    const settingsTwo = {
      dots: false,
      infinite: true,
      slidesToShow: 5,
      slidesToScroll: 1,
      autoplay: true,
      speed: 2000,
      autoplaySpeed: 2000,
      cssEase: "linear",
    };

    const settingsThree = {
      dots: false,
      infinite: true,
      slidesToShow: 5,
      slidesToScroll: 1,
      autoplay: true,
      speed: 2000,
      autoplaySpeed: 2000,
      cssEase: "linear",
    };

    return (
      <>
        <div className="mt-10 ">
          <Slider {...settings}>
            <div className=" h-24">
              <div className="flex items-center justify-center h-full ">
                <img src={logitech} alt="" className="" />
              </div>
            </div>
            <div className=" h-24">
              <div className="flex items-center justify-center h-full ">
                <img src={h} alt="" className="" />
              </div>
            </div>
            <div className=" h-24">
              <div className="flex items-center justify-center h-full ">
                <img src={army} alt="" className="" />
              </div>
            </div>
            <div className=" h-24">
              <div className="flex items-center justify-center h-full ">
                <img src={eightyFour} alt="" className="" />
              </div>
            </div>
            <div className=" h-24">
              <div className="flex items-center justify-center h-full ">
                <img src={gid} alt="" className="" />
              </div>
            </div>
            <div className=" h-24">
              <div className="flex items-center justify-center h-full ">
                <img src={blueCross} alt="" className="" />
              </div>
            </div>

            <div className=" h-24">
              <div className="flex items-center justify-center h-full ">
                <img src={nike} alt="" className="" />
              </div>
            </div>
            <div className=" h-24">
              <div className="flex items-center justify-center h-full ">
                <img src={ingram} alt="" className="" />
              </div>
            </div>
            <div className=" h-24">
              <div className="flex items-center justify-center h-full ">
                <img src={cnb} alt="" className="" />
              </div>
            </div>
          </Slider>
        </div>

        <div className="mt-10 ">
          <Slider {...settingsTwo}>
            
            <div className=" h-24">
              <div className="flex items-center justify-center h-full ">
                <img src={honda} alt="" className="" />
              </div>
            </div>
            <div className=" h-24">
              <div className="flex items-center justify-center h-full ">
                <img src={avery} alt="" className="" />
              </div>
            </div>
            <div className=" h-24">
              <div className="flex items-center justify-center h-full ">
                <img src={corelogic} alt="" className="" />
              </div>
            </div>
            <div className=" h-24">
              <div className="flex items-center justify-center h-full ">
                <img src={adobe} alt="" className="" />
              </div>
            </div>
            <div className=" h-24">
              <div className="flex items-center justify-center h-full ">
                <img src={deloitte} alt="" className="" />
              </div>
            </div>
            <div className=" h-24">
              <div className="flex items-center justify-center h-full ">
                <img src={farmers} alt="" className="" />
              </div>
            </div>
            <div className=" h-24">
              <div className="flex items-center justify-center h-full ">
                <img src={ibm} alt="" className="" />
              </div>
            </div>
            <div className=" h-24">
              <div className="flex items-center justify-center h-full ">
                <img src={zelle} alt="" className="" />
              </div>
            </div>
            <div className=" h-24">
              <div className="flex items-center justify-center h-full ">
                <img src={lewray} alt="" className="" />
              </div>
            </div>
          </Slider>
        </div>

        
      </>
    );
  }
}

export default ClientSlider;
