import axios from "axios";
import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import type { RootState } from "../../Redux/Store";
import { clearItem } from "../../Redux/CartSlice";

const Header = () => {
  const router = useRouter();
  const items = useSelector((state: RootState) => state.value);
  const dispatch = useDispatch();

  const clearCart = (length: number) => {
    dispatch(clearItem(length));
  };

  const logout = () => {
    clearCart(items.length);
    router.push("/Login");
  };

  const editProfile = () => {
    const user_id = localStorage.getItem("user-id");
    axios
      .get(`http://localhost:8080/api/v1/user/byId/${user_id}`)
      .then((res) => {
        router.push({
          pathname: "/Men/EditProfile",
          query: {
            id: res.data.data.id,
            name: res.data.data.name,
            phno: res.data.data.phno,
            city: res.data.data.city,
            email: res.data.data.email,
            password: res.data.data.password,
          },
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="bg-sky-300 h-14 w-full">
      <div className=" flex float-right">
        <Link href="/FirstPage">
          {" "}
          <p className="text-center text-1xl text-white pt-3 ml-4 mr-4">Main</p>
        </Link>
        <Link href="/Men/Home">
          {" "}
          <p className="text-center text-1xl text-white pt-3 mr-4">Home</p>
        </Link>
        <Link href="/Men/Products">
          {" "}
          <p className="text-center text-1xl text-white pt-3 mr-4">Products</p>
        </Link>
        <Link href="/Men/About">
          <p className="text-center text-1xl text-white pt-3 mr-4">About US</p>
        </Link>
        <Link href="/Men/Contact">
          <p className="text-center text-1xl text-white pt-3 mr-4">
            Contact US
          </p>
        </Link>
        <Link href="">
          <p
            className="text-center text-1xl text-white pt-3 mr-4"
            onClick={() => editProfile()}
          >
            Edit Profile
          </p>
        </Link>
        <Link href="">
          <p
            className="text-center text-1xl text-white pt-3 mr-4"
            onClick={() => logout()}
          >
            Logout
          </p>
        </Link>
      </div>
    </div>
  );
};

export default Header;
