import React from "react";
import SocialMedia from "./SocialMedia";
import { BsTelephone } from "react-icons/bs";
import { HiOutlineMail } from "react-icons/hi";
import "../css/Contact.css";

const Contact = () => {
  return (
    <div
      name="contact"
      className="w-full h-screen bg-[#0a192f] flex justify-center items-center p-4 pt-10"
    >
      <div className="max-w-[1000px]">
        <p className="text-4xl font-bold inline border-b-4 border-pink-600 text-gray-300 ml-3">
          Contact
        </p>
        <div
          className="w-full h-screen bg-[#0a192f] md:flex justify-center p-4 mt-5"
          style={{ width: "90%" }}
        >
          <div className="text-gray-300 pr-10">
            <h1 className="text-2xl">Get In Touch</h1>
            <p className="my-3">
              Get in touch with me through my social media handles below.
            </p>
            <SocialMedia color="#B53389" />
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
              <p className="text-gray-300 py-4 text-2xl">
                Submit the form below or shoot me an email -
                etinosa.idowu@gmail.com
              </p>
            </div>
            <input
              className="bg-[#ccd6f6] p-2"
              type="text"
              placeholder="Name"
              name="name"
              style={{ border: "none", outline: "none" }}
            />
            <input
              className="my-4 p-2 bg-[#ccd6f6]"
              type="email"
              placeholder="Email"
              name="email"
              style={{ border: "none", outline: "none" }}
            />
            <textarea
              className="bg-[#ccd6f6] p-2"
              name="message"
              rows="10"
              placeholder="Message"
              style={{ border: "none", outline: "none" }}
            ></textarea>
            <button className="text-white border-2 hover:bg-pink-600 hover:border-pink-600 px-4 py-3 my-8 mx-auto flex items-center">
              Let's Collaborate
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
