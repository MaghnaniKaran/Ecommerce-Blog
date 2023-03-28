import React from "react";
import Header from "./Header_2";
import Footer from "./Footer_2";
import Carasouel from "./Carasouel_2";

const Home_2 = () => {
  return (
    <>
      <Header />
      <div className="h-auto">
        <div className="text-center">
          <p className=" font-bold text-6xl mt-16">Just for HER</p>
          <p className=" font-semibold text-sm mt-3">
            Only . Quality . Products
          </p>
        </div>
        <div className="text-center mx-12 my-10">
          <p className="text-sm">
            We are thrilled to have you here. We have a wide variety of products
            to choose from, all carefully curated to bring you the best
            selection. Our team is dedicated to providing excellent customer
            service, fast shipping, and a seamless shopping experience. Thank
            you for choosing to shop with us and we hope you find everything you
            need.{" "}
          </p>
          <p className="font-medium">Below are the images of our top-3 products sold so far.</p>
          <div className="my-20 flex  justify-center items-center">
            <Carasouel />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Home_2;
