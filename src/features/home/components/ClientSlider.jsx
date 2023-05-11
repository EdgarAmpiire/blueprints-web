import React, {Component} from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

class ClientSlider extends Component {
    render(){
        const settings = {
            dots: false,
            infinite: true,
      slidesToShow: 3,
      slidesToScroll: 1,
      autoplay: true,
      speed: 2000,
      autoplaySpeed: 2000,
      cssEase: "linear"
    };
        }
        return(
            <div>
                <Slider>
                     
                </Slider>
            </div>
        )
    }
}

export default ClientSlider;