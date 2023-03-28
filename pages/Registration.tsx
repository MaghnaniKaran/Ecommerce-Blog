import React, { useState } from "react";
import { useRouter } from "next/router";
import axios from "axios";

const Registartion = () => {
  const [name, setname] = useState<string>("");
  const [phNo, setphNo] = useState<string>("");
  const [city, setcity] = useState<string>("");
  const [email, setemail] = useState<string>("");
  const [password, setpassword] = useState<string>("");
  const router = useRouter();

  const savedata = () => {
    axios
      .post("http://localhost:8080/api/v1/user/add", {
        name: name,
        phno: phNo,
        city: city,
        email: email,
        password: password,
      })
      .then((res) => {
        console.log(res.data);
        router.push("/Login");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="flex justify-center items-center w-screen h-screen ">
      <div className="flex-col justify-center items-center bg-white h-96 w-80 p-2 border-2 border-slate-800 shadow-lg">
        <p className="font-semibold text-center text-2xl">Registration</p>
        <div className="flex-col mt-7 items-center">
          <div className="flex">
            <p>Name : </p>
            <input
              type="email"
              placeholder="  Name"
              className="w-52 h-8 ml-8 mb-4 border-2 border-gray-300 rounded-sm"
              value={name}
              onChange={(e) => setname(e.target.value)}
            />
          </div>
          <div className="flex">
            <p>Phn no : </p>
            <input
              type="email"
              placeholder="  Phone no"
              className="w-52 h-8 ml-6 mb-4 border-2 border-gray-300 rounded-sm"
              value={phNo}
              onChange={(e) => setphNo(e.target.value)}
            />
          </div>
          <div className="flex">
            <p>City : </p>
            <input
              type="email"
              placeholder="  City"
              className="w-52 h-8 ml-12 mb-4 border-2 border-gray-300 rounded-sm"
              value={city}
              onChange={(e) => setcity(e.target.value)}
            />
          </div>
          <div className="flex">
            <p>Email : </p>
            <input
              type="email"
              placeholder="  E-mail"
              className="w-52 h-8 ml-9 mb-4 border-2 border-gray-300 rounded-sm"
              value={email}
              onChange={(e) => setemail(e.target.value)}
            />
          </div>
          <div className="flex">
            <p>Password : </p>
            <input
              type="password"
              placeholder="  Password"
              className="w-52 h-8 ml-2 mb-4 border-2 border-gray-300 rounded-sm"
              value={password}
              onChange={(e) => setpassword(e.target.value)}
            />
          </div>
          <div className="flex justify-center">
            <button
              className="text-white rounded-sm h-8 w-40 mt-2 bg-slate-800 text-sm"
              onClick={() => savedata()}
            >
              Register
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Registartion;
