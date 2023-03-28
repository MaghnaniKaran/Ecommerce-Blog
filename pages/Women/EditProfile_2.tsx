import React, { useState } from "react";
import { useRouter } from "next/router";
import axios from "axios";

const EditProfile_2 = () => {
  const router = useRouter();
  const query = router.query;
  const [name, setname] = useState<string>(query === "" ? "" : query.name);
  const [phNo, setphNo] = useState<string>(query === "" ? "" : query.phno);
  const [city, setcity] = useState<string>(query === "" ? "" : query.city);

  const savedata = () => {
    axios
      .put("http://localhost:8080/api/v1/user/update", {
        id: query.id,
        name: name,
        phno: phNo,
        city: city,
        email: query.email,
        password: query.password,
      })
      .then(() => {
        router.push("/FirstPage");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="flex justify-center items-center w-screen h-screen ">
      <div className="flex-col justify-center items-center bg-white h-96 w-80 p-2 border-2 border-slate-800 shadow-lg">
        <p className="font-semibold text-center text-2xl">Edit Profile</p>
        <div className="flex-col mt-12 items-center">
          <div className="flex">
            <p>Name : </p>
            <input
              type="email"
              placeholder="  Name"
              className="w-52 h-8 ml-8 mb-8 border-2 border-gray-300 rounded-sm"
              value={name}
              onChange={(e) => setname(e.target.value)}
            />
          </div>
          <div className="flex">
            <p>Phn no : </p>
            <input
              type="email"
              placeholder="  Phone no"
              className="w-52 h-8 ml-6 mb-8 border-2 border-gray-300 rounded-sm"
              value={phNo}
              onChange={(e) => setphNo(e.target.value)}
            />
          </div>
          <div className="flex">
            <p>City : </p>
            <input
              type="email"
              placeholder="  City"
              className="w-52 h-8 ml-12 mb-8 border-2 border-gray-300 rounded-sm"
              value={city}
              onChange={(e) => setcity(e.target.value)}
            />
          </div>
          <div className="flex justify-center">
            <button
              className="text-white rounded-md h-8 w-40 mt-4 bg-rose-300 text-sm"
              onClick={() => savedata()}
            >
              Edit Profile
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditProfile_2;
