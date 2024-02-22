import React from "react";
import SocialMedia from "./SocialMedia";
import { BsTelephone } from "react-icons/bs";
import { HiOutlineMail } from "react-icons/hi";
import "../css/General.css";

const Contact = ({ light }) => {
  const bgColor = light ? "bg-white" : "bg-[#0a192f]";
  const textColor = light ? "text-dark" : "text-gray-300";
  const textColor1 = light ? "text-dark" : "text-[#ccd6f6]";
  const textColor2 = light ? "text-dark" : "text-[#8892b0]";
  const borderColor = light ? "border-black" : "border-white";
  const isHome = false;

  return (
    <div name="contact" className={`w-full ${bgColor} ${textColor} general`}>
      <div className="max-w-[1200px] mx-auto p-4 flex flex-col justify-between w-full">
        <div className="pb-8 pl-4">
          <p
            className={`text-3xl font-bold inline border-b-4 border-yellow-600 ${textColor1}`}
          >
            Contact
          </p>
        </div>
        <div
          className={`w-full md:flex md:justify-between  p-4 mt-0`}
          style={{ width: "100%" }}
        >
          <div className={`${textColor} pr-10`}>
            {/* <h1 className="text-2xl">Get In Touch</h1> */}
            <p className={`mb-3 mt-0 ${textColor2}`}>
              Get in touch with me through my social media handles
            </p>
            <SocialMedia color="#CA8A04" isHome={isHome} />
            <div className="reach mt-3 flex items-center">
              <HiOutlineMail className="icon" />
              <div className={`ml-5 ${textColor2}`}>
                <p>etinosa.idowu@gmail.com</p>
                <small>Send a message Anytime!</small>
              </div>
            </div>
            <div className="reach mt-3 flex items-center">
              <BsTelephone className="icon" />
              <div className={`ml-5 ${textColor2}`}>
                <p>+234(0)705 944 2002</p>
                <small>Place a call Anytime!</small>
              </div>
            </div>
          </div>

          <form
            method="POST"
            action="mailto:etinosa.idowu@gmail.com"
            className="flex flex-col max-w-[500px] w-full"
          >
            <div className="pb-8">
              <p className={`${textColor2} py-5 md:pt-0 text-2xl`}>
                Please submit the form below to shoot me an email
              </p>
            </div>
            <input
              className="bg-[#ccd6f6] p-2"
              type="text"
              placeholder="Name"
              name="name"
              style={{
                border: "none",
                outline: "none",
                width: "100%",
                color: "black",
              }}
            />
            <input
              className="my-4 p-2 bg-[#ccd6f6]"
              type="email"
              placeholder="Email"
              name="email"
              style={{
                border: "none",
                outline: "none",
                width: "100%",
                color: "black",
              }}
            />
            <textarea
              className="bg-[#ccd6f6] p-2"
              name="message"
              rows="10"
              placeholder="Message"
              style={{
                border: "none",
                outline: "none",
                width: "100%",
                color: "black",
              }}
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
