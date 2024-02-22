import React from "react";
import {
  FaGithub,
  FaLinkedin,
  FaTwitter,
  // FaFacebook,
  // FaLinkedinIn,
} from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
// import { BsFillPersonLinesFill } from "react-icons/bs";
import "../css/SocialMedia.css";

const SocialMedia = ({ color, isHome }) => {
  console.log(isHome);
  return (
    <div className="social-icons" style={{ color: color, borderColor: color }}>
      <a
        href="https://www.linkedin.com/in/etinosaidowuomoruyi"
        target="_blank"
        rel="noreferrer"
        className={`${
          isHome
            ? "hover:bg-yellow-600 hover:border-yellow-600"
            : `hover:${color}`
        }`}
      >
        <FaLinkedin />
      </a>
      <a
        href="https://github.com/EtinRuyi"
        target="_blank"
        rel="noreferrer"
        className={`${
          isHome
            ? "hover:bg-yellow-600 hover:border-yellow-600"
            : `hover:${color}`
        }`}
      >
        <FaGithub />
      </a>
      <a
        href="https://twitter.com/realetinosaruyi"
        target="_blank"
        rel="noreferrer"
        className={`${
          isHome
            ? "hover:bg-yellow-600 hover:border-yellow-600"
            : `hover:${color}`
        }`}
      >
        <FaTwitter />
      </a>
      <a
        href="mailto:etinosa.idowu@gmail.com"
        className={`${
          isHome
            ? "hover:bg-yellow-600 hover:border-yellow-600"
            : `hover:${color}`
        }`}
      >
        <HiOutlineMail />
      </a>
      {/* <a
        href="https://www.github.com/ejovwogfreeman/"
        style={{ color: color, borderColor: color }}
      >
        <BsFillPersonLinesFill />
      </a> */}
    </div>
  );
};

export default SocialMedia;
