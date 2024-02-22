import React, { useState } from "react";
import {
  FaBars,
  FaTimes,
  // FaGithub,
  // FaLinkedin,
  // FaTwitter,
  // FaFacebook,
  // FaLinkedinIn,
} from "react-icons/fa";
// import { HiOutlineMail } from "react-icons/hi";
// import { BsFillPersonLinesFill } from "react-icons/bs";
import Logo from "../assets/logo.png";
import { Link } from "react-scroll";
import { MdOutlineDarkMode, MdOutlineLightMode } from "react-icons/md";

const Navbar = ({ light, handleLight }) => {
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);
  const bgColor = light ? "bg-white" : "bg-[#0a192f]";
  const textColor = light ? "text-dark" : "text-gray-300";
  return (
    <div
      className={`fixed w-full h-[80px] flex justify-between items-center px-4 ${bgColor} ${textColor}`}
      style={{ zIndex: 1000 }}
    >
      <div>
        <img src={Logo} alt="Logo" style={{ width: "2px" }} />
      </div>

      {/* menu */}
      <ul className="hidden md:flex">
        <li>
          <Link
            to="home"
            smooth={true}
            duration={500}
            className="hover:text-yellow-600"
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            to="about"
            smooth={true}
            duration={500}
            className="hover:text-yellow-600"
          >
            About
          </Link>
        </li>
        <li>
          <Link
            to="skills"
            smooth={true}
            duration={500}
            className="hover:text-yellow-600"
          >
            Skills
          </Link>
        </li>
        <li>
          <Link
            to="work"
            smooth={true}
            duration={500}
            className="hover:text-yellow-600"
          >
            Work
          </Link>
        </li>
        <li>
          <Link
            to="contact"
            smooth={true}
            duration={500}
            className="hover:text-yellow-600"
          >
            Contact
          </Link>
        </li>
        <li style={{ fontSize: "20px" }}>
          {light ? (
            <MdOutlineDarkMode onClick={() => handleLight()} />
          ) : (
            <MdOutlineLightMode onClick={() => handleLight()} />
          )}
        </li>
      </ul>

      {/* Hamburger */}
      <div
        onClick={handleClick}
        className="md:hidden z-10"
        style={{ cursor: "pointer" }}
      >
        {!nav ? <FaBars className="icons" /> : <FaTimes className="icons" />}
      </div>

      {/* Mobile menu */}
      <ul
        className={
          !nav
            ? "hidden"
            : `absolute top-0 left-0 w-full h-screen ${bgColor} flex flex-col justify-center items-center`
        }
      >
        <li className="py-6 text-4xl">
          <Link
            onClick={handleClick}
            to="home"
            smooth={true}
            duration={500}
            className="hover:text-yellow-600"
          >
            Home
          </Link>
        </li>
        <li className="py-6 text-4xl">
          {" "}
          <Link
            onClick={handleClick}
            to="about"
            smooth={true}
            duration={500}
            className="hover:text-yellow-600"
          >
            About
          </Link>
        </li>
        <li className="py-6 text-4xl">
          {" "}
          <Link
            onClick={handleClick}
            to="skills"
            smooth={true}
            duration={500}
            className="hover:text-yellow-600"
          >
            Skills
          </Link>
        </li>
        <li className="py-6 text-4xl">
          {" "}
          <Link
            onClick={handleClick}
            to="work"
            smooth={true}
            duration={500}
            className="hover:text-yellow-600"
          >
            Work
          </Link>
        </li>
        <li className="py-6 text-4xl">
          {" "}
          <Link
            onClick={handleClick}
            to="contact"
            smooth={true}
            duration={500}
            className="hover:text-yellow-600"
          >
            Contact
          </Link>
        </li>
        <li style={{ fontSize: "30px" }}>
          {light ? (
            <MdOutlineDarkMode onClick={() => handleLight()} />
          ) : (
            <MdOutlineLightMode onClick={() => handleLight()} />
          )}
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
