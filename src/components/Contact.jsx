import React from "react";
import SocialMedia from "./SocialMedia";
import { BsTelephone } from "react-icons/bs";
import { HiOutlineMail } from "react-icons/hi";
import "../css/General.css";

const Contact = ({ light }) => {
  const bgColor = light ? "bg-white" : "bg-[#0a192f]";
  const textColor = light ? "text-dark" : "text-gray-300";
  const textColor1 = light ? "text-dark" : "text-[#ccd6f6]";
  const borderColor = light ? "border-black" : "border-white";

  return (
    <div
      name="contact"
      className={`w-full ${bgColor} flex justify-center items-center px-4 general`}
    >
      <div className="max-w-[1500px]">
        <p
          className={`text-4xl font-bold inline border-b-4 border-yellow-600 ${textColor} ml-3`}
        >
          Contact
        </p>
        <div
          className={`w-full ${bgColor} md:flex justify-center p-4 mt-5`}
          style={{ width: "100%" }}
        >
          <div className={`${textColor} pr-10`}>
            <h1 className="text-2xl">Get In Touch</h1>
            <p className="my-3">
              Get in touch with me through my social media handles below.
            </p>
            <SocialMedia color="#CA8A04" />
            <div className="reach mt-3 flex items-center">
              <HiOutlineMail className="icon" />
              <div className="touch ml-5">
                <p>etinosa.idowu@gmail.com</p>
                <small>Send a message Anytime!</small>
              </div>
            </div>
            <div className="reach mt-3 flex items-center">
              <BsTelephone className="icon" />
              <div className="touch ml-5">
                <p>+234(0)705 944 2002</p>
                <small>Place a call Anttime!</small>
              </div>
            </div>
          </div>

          <form
            method="POST"
            action="mailto:orjisamuelobinna@gmail.com"
            className="flex flex-col max-w-[500px] w-full"
          >
            <div className="pb-8">
              <p className={`${textColor} py-4 text-2xl`}>
                Submit the form below or shoot me an email -
                etinosa.idowu@gmail.com
              </p>
            </div>
            <input
              className="bg-[#ccd6f6] p-2"
              type="text"
              placeholder="Name"
              name="name"
              style={{ border: "none", outline: "none", width: "100%" }}
            />
            <input
              className="my-4 p-2 bg-[#ccd6f6]"
              type="email"
              placeholder="Email"
              name="email"
              style={{ border: "none", outline: "none", width: "100%" }}
            />
            <textarea
              className="bg-[#ccd6f6] p-2"
              name="message"
              rows="10"
              placeholder="Message"
              style={{ border: "none", outline: "none", width: "100%" }}
            ></textarea>
            <button
              className={`${textColor1} group border-2 ${borderColor} border-2 hover:bg-yellow-600 hover:border-yellow-600 px-4 py-3 my-8 mx-auto flex items-center`}
            >
              Let's Collaborate
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
