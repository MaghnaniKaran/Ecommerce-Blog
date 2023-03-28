import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Carasouel_2 = () => {
  var settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 2000,
  };

  return (
    <div className="p-10 bg-rose-300 w-96">
      <Slider {...settings}>
        <div>
          <img src="../images/Women/Single_pearl.jpg" className="h-60 w-80" />
        </div>
        <div>
          <img src="../images/Women/Bracelet.jpg" className="h-60 w-80" />
        </div>
        <div>
          <img
            src="../images/Women/Evil_eye_necklace.jpg"
            className="h-60 w-80"
          />
        </div>
      </Slider>
    </div>
  );
};

export default Carasouel_2;
