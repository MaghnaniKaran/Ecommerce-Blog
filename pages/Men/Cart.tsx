import React from "react";
import axios from "axios";
import { useRouter } from "next/router";
import { useSelector, useDispatch } from "react-redux";
import { deleteItem, clearItem } from "../../Redux/CartSlice";
import type { RootState } from "../../Redux/Store";
import Header from "./Header";
import Footer from "./Footer";

const Cart = () => {
  const items = useSelector((state: RootState) => state.value);
  const dispatch = useDispatch();
  const router = useRouter();

  const deleteFromCart = (i: number) => {
    dispatch(deleteItem(i));
  };

  const editCart = (i: number, item: any) => {
    dispatch(deleteItem(i));
    router.push({
      pathname: "/Men/SingleProduct",
      query: {
        img: item.img,
        pName: item.p_name,
        price: item.p_price,
      },
    });
  };

  const clearCart = (length: number) => {
    dispatch(clearItem(length));
  };

  const storetoCart = (length: number) => {
    const id = localStorage.getItem("user-id");
    axios
      .post("http://localhost:8080/api/v1/cart/add", {
        cart_details: items,
        user_id: id,
      })
      .then((res) => {
        clearCart(length);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <>
      <Header />
      <div className="h-auto ">
        <div className="text-center my-16">
          <p className=" font-bold text-6xl">Cart Details</p>
        </div>

        <div>
          <div className="flex justify-center mb-10">
            <table className="shadow-lg bg-white border-separate ">
              <thead>
                <tr className="text-xl">
                  <th className="bg-sky-100 border text-center px-4 py-2">
                    Product Name
                  </th>
                  <th className="bg-sky-100 border text-center px-4 py-2">
                    Quantity
                  </th>
                  <th className="bg-sky-100 border text-center px-4 py-2">
                    Price
                  </th>
                  <th className="bg-sky-100 border text-center px-4 py-2">
                    Total
                  </th>
                  <th className="bg-sky-100 border text-center px-4 py-2">
                    Action
                  </th>
                </tr>
              </thead>
              <tbody>
                {items.map((item: any, index: number) => {
                  return (
                    <tr className="text-md" key={index}>
                      <td className="border px-4 py-2">{item.p_name}</td>
                      <td className="border px-4 py-2">{item.qty}</td>
                      <td className="border px-4 py-2">{item.p_price}</td>
                      <td className="border px-4 py-2">
                        {item.qty * item.p_price}
                      </td>
                      <td className="border px-2 py-1">
                        <div className="flex justify-between">
                          <button
                            className="text-xs bg-gray-200 p-1 rounded-sm"
                            onClick={() => deleteFromCart(index)}
                          >
                            {" "}
                            Delete
                          </button>
                          <button
                            className="text-xs bg-gray-200 p-1 rounded-sm"
                            onClick={() => editCart(index, item)}
                          >
                            {" "}
                            Edit
                          </button>
                        </div>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
          <div className="pr-80 mb-44">
            <button
              className="text-xs bg-sky-300 text-white font-medium p-2 rounded-sm w-20 float-right mr-10"
              onClick={() => storetoCart(items.length)}
            >
              Checkout
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Cart;
