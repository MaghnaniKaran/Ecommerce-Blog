import React from "react";
import Link from "next/link";
import Header from "./Header";
import Footer from "./Footer";

const Products = () => {
  return (
    <div className="h-screen">
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
          <div className=" grid my-28 grid-cols-4 grid-rows-2 gap-20 ">
            <Link
              href={{
                pathname: "/Men/SingleProduct",
                query: {
                  img: "../images/Men/Arrow_shirt.jpg",
                  pName: "Arrow Shirt",
                  price: "999",
                },
              }}
            >
              <div className="items-center justify-center bg-gray-200 py-2 hover:-translate-y-2">
                <img
                  src="../images/Men/Arrow_shirt.jpg"
                  className="h-56 w-52 mx-3"
                />
                <p className="text-xs font-semibold text-left text-black mx-3 py-1 ">
                  Arrow Slim-fit Shirt
                </p>
              </div>
            </Link>

            <Link
              href={{
                pathname: "/Men/SingleProduct",
                query: {
                  img: "../images/Men/us_polo_tshirt.jpg",
                  pName: "Us-Polo Slim T-Shirt",
                  price: "5999",
                },
              }}
            >
              <div className="place-items-center justify-center bg-gray-200 py-2 hover:-translate-y-2">
                <img
                  src="../images/Men/us_polo_tshirt.jpg"
                  className="h-56 w-52 mx-3"
                />
                <p className="text-xs font-semibold text-left text-black mx-3 py-1 ">
                  Us-Polo Slim T-Shirt
                </p>
              </div>
            </Link>

            <Link
              href={{
                pathname: "/Men/SingleProduct",
                query: {
                  img: "../images/Men/jean.jpg",
                  pName: "Killers Jeans",
                  price: "1599",
                },
              }}
            >
              <div className="place-items-center justify-center bg-gray-200 py-2 hover:-translate-y-2">
                <img src="../images/Men/jean.jpg" className="h-56 w-52 mx-3" />
                <p className="text-xs font-semibold text-left text-black mx-3 py-1">
                  Killers Jeans
                </p>
              </div>
            </Link>

            <Link
              href={{
                pathname: "/Men/SingleProduct",
                query: {
                  img: "../images/Men/pe_trousers.jpg",
                  pName: "Peter-England Trouser",
                  price: "3999",
                },
              }}
            >
              <div className="place-items-center justify-center bg-gray-200 py-2 hover:-translate-y-2">
                <img
                  src="../images/Men/pe_trousers.jpg"
                  className="h-56 w-52 mx-3"
                />
                <p className="text-xs font-semibold text-left text-black mx-3 py-1">
                  Peter-England Trouser
                </p>
              </div>
            </Link>

            <Link
              href={{
                pathname: "/Men/SingleProduct",
                query: {
                  img: "../images/Men/rolex.jpg",
                  pName: " Rolex Watch",
                  price: "10999",
                },
              }}
            >
              <div className="place-items-center justify-center bg-gray-200 py-2 hover:-translate-y-2">
                <img src="../images/Men/rolex.jpg" className="h-56 w-52 mx-3" />
                <p className="text-xs font-semibold text-left text-black mx-3 py-1">
                  Rolex Watch
                </p>
              </div>
            </Link>

            <Link
              href={{
                pathname: "/Men/SingleProduct",
                query: {
                  img: "../images/Men/rb_glasses.jpg",
                  pName: "Ray-Ban Glasses",
                  price: "2999",
                },
              }}
            >
              <div className="place-items-center justify-center bg-gray-200 py-2 hover:-translate-y-2">
                <img
                  src="../images/Men/rb_glasses.jpg"
                  className="h-56 w-52 mx-3"
                />
                <p className="text-xs font-semibold text-left text-black mx-3 py-1">
                  Ray-Ban Glasses
                </p>
              </div>
            </Link>

            <Link
              href={{
                pathname: "/Men/SingleProduct",
                query: {
                  img: "../images/Men/belt.jpg",
                  pName: "Tommy-Hilfliger Belt",
                  price: "1199",
                },
              }}
            >
              <div className="place-items-center justify-center bg-gray-200 py-2 hover:-translate-y-2">
                <img src="../images/Men/belt.jpg" className="h-56 w-52 mx-3" />
                <p className="text-xs font-semibold text-left text-black mx-3 py-1">
                  Tommy-Hilfliger Belt
                </p>
              </div>
            </Link>

            <Link
              href={{
                pathname: "/Men/SingleProduct",
                query: {
                  img: "../images/Men/shoes.jpg",
                  pName: "Red-Tape Shoes",
                  price: "1299",
                },
              }}
            >
              <div className="place-items-center justify-center bg-gray-200 py-2 hover:-translate-y-2">
                <img src="../images/Men/shoes.jpg" className="h-56 w-52 mx-3" />
                <p className="text-xs font-semibold text-left text-black mx-3 py-1">
                  Red-Tape Shoes
                </p>
              </div>
            </Link>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Products;
