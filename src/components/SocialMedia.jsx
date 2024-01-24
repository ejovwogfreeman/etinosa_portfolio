import React from "react";
import {
  AiFillInstagram,
  AiFillFacebook,
  AiFillLinkedin,
  AiFillYoutube,
} from "react-icons/ai";
import { FaTwitterSquare, FaGithubSquare } from "react-icons/fa";
import "../css/SocialMedia.css";

const SocialMedia = ({ color }) => {
  return (
    <div className="social-icons" style={{ color: color, borderColor: color }}>
      <a
        href="https://www.youtube.com/@thegbmedia/"
        style={{ color: color, borderColor: color }}
      >
        <AiFillYoutube />
      </a>
      <a
        href="https://www.facebook.com/ejovwo.gfreeman/"
        style={{ color: color, borderColor: color }}
      >
        <AiFillFacebook />
      </a>
      <a
        href="https://www.instagram.com/ejovwogfreeman/"
        style={{ color: color, borderColor: color }}
      >
        <AiFillInstagram />
      </a>
      <a
        href="https://www.twitter.com/ejovwogfreeman/"
        style={{ color: color, borderColor: color }}
      >
        <FaTwitterSquare />
      </a>
      <a
        href="https://www.linkedin.com/in/godbless-ejovwo/"
        style={{ color: color, borderColor: color }}
      >
        <AiFillLinkedin />
      </a>
      <a
        href="https://www.github.com/ejovwogfreeman/"
        style={{ color: color, borderColor: color }}
      >
        <FaGithubSquare />
      </a>
    </div>
  );
};

export default SocialMedia;
