import React from "react";
import Link from "next/link";
import Header from "./Header_2";
import Footer from "./Footer_2";

const Products_2 = () => {
  return (
    <>
      <Header />

      <div className="h-auto">
        <div className="text-center">
          <p className=" font-bold text-6xl mt-16">Our-Products</p>
        </div>
        <div className="text-center mx-12 my-10">
          <p className="text-sm">
            We have a wide variety of products to choose from, all carefully
            curated to bring you the best selection. Our team is dedicated to
            providing excellent customer service, fast shipping, and a seamless
            shopping experience. Thank you for choosing to shop with us and we
            hope you find everything you need.
          </p>
          <div className=" grid my-28 grid-cols-4 grid-rows-2 gap-20">
            <Link
              href={{
                pathname: "/Women/SingleProduct_2",
                query: {
                  img: "../images/Women/Single_pearl.jpg",
                  pName: "Single-pearl Necklace",
                  price: "999",
                },
              }}
            >
              <div className="place-items-center justify-center bg-gray-200 py-2 hover:-translate-y-2">
                <img
                  src="../images/Women/Single_pearl.jpg"
                  className="h-56 w-52 mx-3"
                />
                <p className="text-xs font-semibold text-left text-black mx-3 py-1">
                  Single-pearl Necklace
                </p>
              </div>
            </Link>

            <Link
              href={{
                pathname: "/Women/SingleProduct_2",
                query: {
                  img: "../images/Women/Evil_eye_earing.jpg",
                  pName: "Evil's eye Earings",
                  price: "1050",
                },
              }}
            >
              <div className="place-items-center justify-center bg-gray-200 py-2 hover:-translate-y-2">
                <img
                  src="../images/Women/Evil_eye_earing.jpg"
                  className="h-56 w-52 mx-3"
                />
                <p className="text-xs font-semibold text-left text-black mx-3 py-1">
                  Evil's eye Earings
                </p>
              </div>
            </Link>

            <Link
              href={{
                pathname: "/Women/SingleProduct_2",
                query: {
                  img: "../images/Women/Bracelet.jpg",
                  pName: "Bracelet",
                  price: "8999",
                },
              }}
            >
              <div className="place-items-center justify-center bg-gray-200 py-2 hover:-translate-y-2">
                <img
                  src="../images/Women/Bracelet.jpg"
                  className="h-56 w-52 mx-3"
                />
                <p className="text-xs font-semibold text-left text-black mx-3 py-1">
                  Bracelet
                </p>
              </div>
            </Link>

            <Link
              href={{
                pathname: "/Women/SingleProduct_2",
                query: {
                  img: "../images/Women/blue_ring.jpg",
                  pName: "Blue Sapphire Ring",
                  price: "7999",
                },
              }}
            >
              <div className="place-items-center justify-center bg-gray-200 py-2 hover:-translate-y-2">
                <img
                  src="../images/Women/blue_ring.jpg"
                  className="h-56 w-52 mx-3"
                />
                <p className="text-xs font-semibold text-left text-black mx-3 py-1">
                  Blue Sapphire Ring
                </p>
              </div>
            </Link>

            <Link
              href={{
                pathname: "/Women/SingleProduct_2",
                query: {
                  img: "../images/Women/Sandles.jpg",
                  pName: "Sandals",
                  price: "499",
                },
              }}
            >
              <div className="place-items-center justify-center bg-gray-200 py-2 hover:-translate-y-2">
                <img
                  src="../images/Women/Sandles.jpg"
                  className="h-56 w-52 mx-3"
                />
                <p className="text-xs font-semibold text-left text-black mx-3 py-1">
                  Sandals
                </p>
              </div>
            </Link>

            <Link
              href={{
                pathname: "/Women/SingleProduct_2",
                query: {
                  img: "../images/Women/watch.jpg",
                  pName: "Watch",
                  price: "1999",
                },
              }}
            >
              <div className="place-items-center justify-center bg-gray-200 py-2 hover:-translate-y-2">
                <img
                  src="../images/Women/watch.jpg"
                  className="h-56 w-52 mx-3"
                />
                <p className="text-xs font-semibold text-left text-black mx-3 py-1">
                  Watch
                </p>
              </div>
            </Link>

            <Link
              href={{
                pathname: "/Women/SingleProduct_2",
                query: {
                  img: "../images/Women/Evil_eye_necklace.jpg",
                  pName: " Evil's eye Necklace",
                  price: "1199",
                },
              }}
            >
              <div className="place-items-center justify-center bg-gray-200 py-2 hover:-translate-y-2">
                <img
                  src="../images/Women/Evil_eye_necklace.jpg"
                  className="h-56 w-52 mx-3"
                />
                <p className="text-xs font-semibold text-left text-black mx-3 py-1">
                  Evil's eye Necklace
                </p>
              </div>
            </Link>

            <Link
              href={{
                pathname: "/Women/SingleProduct_2",
                query: {
                  img: "../images/Women/dress.jpg",
                  pName: "Dress",
                  price: "799",
                },
              }}
            >
              <div className="place-items-center justify-center bg-gray-200 py-2 hover:-translate-y-2">
                <img
                  src="../images/Women/dress.jpg"
                  className="h-56 w-52 mx-3"
                />
                <p className="text-xs font-semibold text-left text-black mx-3 py-1">
                  Dress
                </p>
              </div>
            </Link>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Products_2;
