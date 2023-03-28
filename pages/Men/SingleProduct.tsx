import React from "react";
import { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Link from "next/link";
import { useRouter } from "next/router";
import { useDispatch } from "react-redux";
import { addItem } from "../../Redux/CartSlice";

const SingleProduct = () => {
  const router = useRouter();
  const query = router.query;
  const [qty, setQty] = useState<number>(1);
  const dispatch = useDispatch();

  const increase = () => {
    setQty(qty + 1);
  };
  const decrease = () => {
    if (qty > 0) {
      setQty(qty - 1);
    }
  };
  const addToCart = () => {
    const item = {
      img: query.img,
      p_name: query.pName,
      p_price: query.price,
      qty: qty,
    };
    dispatch(addItem(item));
  };
  return (
    <>
      <Header />
      <div className="h-auto ">
        <div className="text-center">
          <p className=" font-bold text-6xl mt-16">Product Details</p>
        </div>

        <div className="text-center mx-12 my-10">
          <p className="text-sm">
            {" "}
            Our team is dedicated to providing excellent customer service, fast
            shipping, and a seamless shopping experience. Thank you for choosing
            to shop with us.
          </p>
        </div>

        <div className="grid grid-cols-2 px-40 m-10">
          <div className="flex justify-center items-center">
            <div className=" flex-col items-center justify-center bg-gray-200 py-2 h-64 w-56">
              <img src={`${query.img}`} className="h-56 w-52 mx-2" />
              <p className="text-xs font-semibold text-left text-black mx-2 py-1">
                {query.pName}
              </p>
            </div>
          </div>

          <div>
            <div>
              <p className="font-semibold text-xl mb-1">
                Price : ₹{query.price}
              </p>
              <p className="font-semibold text-sm">Product Description</p>
              <p className="text-xs">
                We provide high-quality products that meet the needs and
                expectations of our customers. This helps to ensure customer
                satisfaction and encourage repeat business. We also try to make
                sure that our website is user-friendly and easy to navigate, as
                this can make it easier for customers to find and purchase the
                products they are looking for. Providing excellent customer
                service is also crucial, as having a knowledgeable and helpful
                team can make a big difference in the shopping experience for
                our customers. We offer fast and reliable shipping options, as
                customers appreciate the convenience of having their orders
                delivered in a timely manner. Providing clear and detailed
                product information, including descriptions, images, and videos,
                also help customers make informed decisions about what to
                purchase. Finally, offering flexible payment options, such as
                credit cards and UPI, can make the checkout process smoother and
                more convenient for our customers.
              </p>
            </div>
          </div>
        </div>

        <div className=" flex justify-end px-52 mb-10">
          <div className="flex justify-center items-center">
            <button
              className="bg-gray-200 rounded-sm p-1 mr-4"
              onClick={decrease}
            >
              -
            </button>
            <p className="text-sm">{qty}</p>
            <button
              className="bg-gray-200 rounded-sm p-1 ml-4"
              onClick={increase}
            >
              +
            </button>
          </div>

          <Link href="/Men/Cart">
            <button
              className="bg-sky-300 rounded-sm p-1 ml-4 text-white"
              onClick={addToCart}
            >
              {" "}
              Add to Cart
            </button>
          </Link>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default SingleProduct;
