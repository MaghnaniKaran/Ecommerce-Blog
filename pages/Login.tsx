import React, { useState } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import axios from "axios";

const Login = () => {
  const [email, setemail] = useState<string>("");
  const [password, setpassword] = useState<string>("");
  const router = useRouter();

  const checkdata = () => {
    axios
      .post("http://localhost:8080/api/v1/user/login", {
        email: email,
        password: password,
      })
      .then((res) => {
        localStorage.setItem("token", res.data.token);
        localStorage.setItem("user-id", res.data.data.id);
        router.push("/FirstPage");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="flex justify-center items-center w-screen h-screen ">
      <div className="flex-col justify-center items-center bg-white h-96 w-80 p-2 border-2 border-slate-800 shadow-lg">
        <p className="font-semibold text-center text-2xl">Login</p>
        <div className="flex-col mt-14 items-center">
          <div className="flex">
            <p>Email : </p>
            <input
              type="email"
              placeholder="  E-mail"
              className="w-52 h-8 ml-9 mb-6 border-2 border-gray-300 rounded-sm"
              value={email}
              onChange={(e) => setemail(e.target.value)}
            />
          </div>
          <div className="flex">
            <p>Password : </p>
            <input
              type="password"
              placeholder="  Password"
              className="w-52 h-8 ml-2 mb-6 border-2 border-gray-300 rounded-sm"
              value={password}
              onChange={(e) => setpassword(e.target.value)}
            />
          </div>
          <div className="flex justify-center">
            <button
              className="text-white rounded-sm h-8 w-40 my-6 bg-slate-800 text-sm"
              onClick={() => checkdata()}
            >
              Login
            </button>
          </div>
          <p className="font-semibold text-black mt-10 text-center">
            If you have not Signed-up,{" "}
            <Link href="/Registration" className=" text-blue-700">
              Click here.
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
