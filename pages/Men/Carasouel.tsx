import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Carasouel = () => {
  var settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 2000,
  };

  return (
    <div className="p-10 bg-sky-300 w-96">
      <Slider {...settings}>
        <div>
          <img src="../images/Men/shoes.jpg" className="h-60 w-80" />
        </div>
        <div>
          <img src="../images/Men/rolex.jpg" className="h-60 w-80" />
        </div>
        <div>
          <img src="../images/Men/us_polo_tshirt.jpg" className="h-60 w-80" />
        </div>
      </Slider>
    </div>
  );
};

export default Carasouel;
