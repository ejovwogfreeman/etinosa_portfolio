import React from "react";
import SocialMedia from "./SocialMedia";
import "../css/Footer.css";

import {
  FaGithub,
  FaLinkedin,
  FaTwitter,
  // FaFacebook,
  // FaLinkedinIn,
} from "react-icons/fa";

import { HiOutlineMail } from "react-icons/hi";
// import { BsFillPersonLinesFill } from "react-icons/bs";

const Footer = () => {
  var year = new Date().getFullYear();
  return (
    <>
      <footer>
        <div className="line"></div>
        <h1 className="text-4xl">Etinosa Omoruyi</h1>
        <p className="social">
          <SocialMedia color="white" />
        </p>
        <p>Copyright &copy; {year} | All rights reserved.</p>
      </footer>

      {/* Social icons */}

      <div
        className="hidden lg:flex flex-col top-[30%] left-0"
        style={{ position: "fixed", bottom: 0 }}
      >
        <ul>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-600">
            <a
              className="flex justify-between items-center w-full text-gray-300"
              href="https://www.linkedin.com/in/etinosaidowuomoruyi"
              target="_blank"
              rel="noopener noreferrer"
            >
              Linkedin <FaLinkedin size={30} />
            </a>
          </li>

          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#333333]">
            <a
              className="flex justify-between items-center w-full text-gray-300"
              href="https://github.com/EtinRuyi"
              target="_blank"
              rel="noopener noreferrer"
            >
              Github <FaGithub size={30} />
            </a>
          </li>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#511027]">
            <a
              className="flex justify-between items-center w-full text-gray-300"
              href="https://twitter.com/realetinosaruyi"
              target="_blank"
              rel="noopener noreferrer"
            >
              Twitter <FaTwitter size={30} />
            </a>
          </li>

          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300   bg-[#0b062c]">
            <a
              className="flex justify-between items-center w-full text-gray-300"
              href="mailto:etinosa.idowu@gmail.com"
            >
              Email <HiOutlineMail size={30} />
            </a>
          </li>
          {/* <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#1d0821]">
            <a
              className="flex justify-between items-center w-full text-gray-300"
              href="/"
            >
              Resume <BsFillPersonLinesFill size={30} />
            </a>
          </li> */}
        </ul>
      </div>
    </>
  );
};

export default Footer;
