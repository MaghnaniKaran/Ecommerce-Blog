import React from "react";
import Link from "next/link";

const FirstPage = () => {
  return (
    <>
      <div className="bg-slate-800 h-14 w-full">
        <div className=" flex justify-center text-white font-semibold text-3xl py-2">
          <p>Hollah !</p>
        </div>
      </div>

      <div className="flex-row text-center h-auto">
        <p className=" font-semibold text-2xl mt-3">
          Welcome to our Online Store
        </p>
        <p className="m-7 text-sm">
          Welcome to our online store! We are thrilled to have you here. We have
          a wide variety of products to choose from, all carefully curated to
          bring you the best selection. Our team is dedicated to providing
          excellent customer service, fast shipping, and a seamless shopping
          experience. Thank you for choosing to shop with us and we hope you
          find everything you need. If you have any questions or concerns,
          please don't hesitate to reach out to us. We are always here to help.
        </p>
        <div className="flex justify-center mb-8">
          <Link href="/Men/Home">
            <div className="h-72 w-60 bg-gray-200 py-4 hover:-translate-y-2">
              <div className="flex place-items-center justify-center bg-sky-300 h-64 w-48 mx-6">
                {" "}
                <p className="text-4xl font-bold text-white">HIM</p>
              </div>
            </div>
          </Link>
          <Link href="/Women/Home_2">
            <div className="h-72 w-60 bg-gray-200 py-4 ml-20 hover:-translate-y-2">
              <div className="flex place-items-center justify-center bg-rose-300 h-64 w-48 mx-6">
                <p className="text-4xl font-bold text-white">HER</p>
              </div>
            </div>
          </Link>
        </div>
      </div>
      <div className="text-center text-sm mb-9">
        <p>
          We provide you with the best product and service available in the
          market and very reasonable price and with the best possible
          <br />
          offers available in the market.
        </p>
      </div>
      <div className="bg-slate-800 h-10 ">
        <div className="flex justify-between">
          <div className="py-3">
            <p className="text-white font-semibold pl-2 text-xs">
              2022-All Rights Reserved.
            </p>
          </div>
          <div className="py-3">
            <p className="text-white font-semibold pr-2 text-xs">
              Icons to be displayed.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default FirstPage;
