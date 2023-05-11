import React, {Component} from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import logitech from "../../../assets/logitech.png"
import h from "../../../assets/h.png"
import army from "../../../assets/army.png"
import eightyFour from "../../../assets/84.png"
import gid from "../../../assets/gid.png"
import blueCross from "../../../assets/blue-cross.png"
import nike from "../../../assets/nike.png"
import ingram from "../../../assets/ingram.png"
import cnb from "../../../assets/cnb.png"
import honda from "../../../assets/honda.png"
import avery from "../../../assets/avery.png"
import corelogic from "../../../assets/corelogic.png"
import deloitte from "../../../assets/deloitte.png"
import farmers from "../../../assets/farmers.png"
import ibm from "../../../assets/ibm.png"
import zelle from "../../../assets/zelle.png"
import lewray from "../../../assets/lewray.png"
import adobe from "../../../assets/adobe.png"

class ClientSlider extends Component {
    render(){
        const settings = {
            dots: false,
            infinite: true,
      slidesToShow: 3,
      slidesToScroll: 1,
      autoplay: true,
      speed: 1000,
      autoplaySpeed: 2000,
      cssEase: "linear"
    }
        
        return(
            <div>
                <Slider {...settings}>
                     <div>
                        <img src={} alt="" />
                     </div>
                </Slider>
            </div>
        )
    }
}

export default ClientSlider;