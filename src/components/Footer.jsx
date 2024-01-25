import React from "react";
import SocialMedia from "./SocialMedia";
import "../css/Footer.css";

const Footer = () => {
  var year = new Date().getFullYear();
  return (
    <footer>
      <div className="line"></div>
      <h1 className="text-4xl">Etinosa Omoruyi</h1>
      <p className="social">
        <SocialMedia color="white" />
      </p>
      <p>Copyright &copy; {year} | All rights reserved.</p>
    </footer>
  );
};

export default Footer;
