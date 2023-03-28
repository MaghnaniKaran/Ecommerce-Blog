import React, { useState } from "react";
import Header from "./Header_2";
import Footer from "./Footer_2";
import axios from "axios";

const Contact = () => {
  const [user_name, setuser_name] = useState<string>("");
  const [contact, setcontact] = useState<string>("");
  const [msg, setmsg] = useState<string>("");
  const [user_email, setuser_email] = useState<string>("");

  const header = {
    headers: {
      authorization: localStorage.getItem("token"),
    },
  };

  const savedata = () => {
    axios
      .post(
        "http://localhost:8080/api/v1/contact/add",
        {
          user_name: user_name,
          contact_no: contact,
          message: msg,
          user_email: user_email,
        },
        header
      )
      .then((res) => {
        console.log(res.data);
        setuser_name("");
        setcontact("");
        setmsg("");
        setuser_email("");
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <>
      <Header />
      <div className="h-auto">
        <div className="text-center">
          <p className=" font-bold text-6xl my-16">Contact-US</p>
        </div>

        <div className="flex pb-16 justify-around px-32">
          <div className="w-1/2 ">
            {" "}
            <div className="my-8">
              <p className="text-xl font-semibold mb-4">Hello,</p>
              <p className="text-2xl font-semibold mb-6">
                What's on your mind?
              </p>
              <p className="text-sm ">
                Feel free to share any of your queries or feedback, we will be
                glad to hear you out.
              </p>
            </div>
            <div>
              <p className="text-sm font-semibold mb-2">Contact Details : </p>
              <p className="text-sm">M - 052555 / 448603</p>
              <p className="text-sm">Email - inf@onlineStore.com</p>
            </div>
          </div>

          <div className="w-1/2 ml-20 text-xs">
            <input
              type="text"
              placeholder="  Name"
              className="w-96 h-8 mb-6 border-2 border-gray-300 rounded-sm"
              value={user_name}
              onChange={(e) => setuser_name(e.target.value)}
            />
            <input
              type="email"
              placeholder="  E-mail"
              className="w-96 h-8 mb-6 border-2 border-gray-300 rounded-sm"
              value={user_email}
              onChange={(e) => setuser_email(e.target.value)}
            />
            <input
              type="text"
              placeholder="  Contact-No"
              className="w-96 h-8 mb-6 border-2 border-gray-300 rounded-sm"
              value={contact}
              onChange={(e) => setcontact(e.target.value)}
            />
            <textarea
              placeholder="  Message"
              rows={5}
              className="w-96 border-2 border-gray-300 rounded-sm"
              value={msg}
              onChange={(e) => setmsg(e.target.value)}
            />
            <div>
              <button
                className="text-white rounded-sm p-2 mt-4 bg-rose-300"
                onClick={() => savedata()}
              >
                Submit
              </button>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Contact;
