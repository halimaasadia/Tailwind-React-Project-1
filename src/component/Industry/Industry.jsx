import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import slider1 from "../../assets/slider1.png";
import slider2 from "../../assets/slider2.png";
import slider3 from "../../assets/slider3.png";
import slider4 from "../../assets/slider4.png";

export default function SimpleSlider() {
    var settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 5,
      slidesToScroll: 1
    };

    return (
        <Slider>
          <div>
            <h3>slider1</h3>
          </div>
          <div>
            <h3>slider2</h3>
          </div>
          <div>
            <h3>slider3</h3>
          </div>
          <div>
            <h3>slider4</h3>
          </div>
          <div>
            <h3>slider5</h3>
          </div>
          
        </Slider>
      );
    }

// const Slider = () => {
//   return (
//     <div className="flex justify-between">
//       <img src={slider1} alt="" />
//       <img src={slider2} alt="" />
//       <img src={slider3} alt="" />
//       <img src={slider4} alt="" />
//     </div>
//   );
// };

// export default Slider;
