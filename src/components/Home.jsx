import React from "react";
import { HiArrowNarrowRight } from "react-icons/hi";
import profileImg from "../assets/profile_img.png";
import { Link } from "react-scroll";
import SocialMedia from "./SocialMedia";
import "../css/General.css";

const Home = ({ light }) => {
  const bgColor = light ? "bg-white" : "bg-[#0a192f]";
  const textColor1 = light ? "text-dark" : "text-[#ccd6f6]";
  const textColor2 = light ? "text-dark" : "text-[#8892b0]";
  const socialColor = light ? "black" : "white";
  const borderColor = light ? "border-black" : "border-white";
  const isHome = true;
  return (
    <div name="home" className={`w-full ${bgColor} general home`}>
      {/* Container */}
      <div className="max-w-[1200px] mx-auto px-2 md:px-8 flex flex-col justify-center h-full">
        <div
          className="flex flex-col-reverse items-start justify-center"
          id="corner"
        >
          <div className="text-start">
            {/* <p className="text-yellow-600 font-normal">Hi, my name is</p> */}
            {/* <h1 className={`text-xl sm:text-3xl font-bold ${textColor1}`}>
              OMORUYI ETINOSA
            </h1> */}
            <h1 className={`text-xl sm:text-3xl font-bold ${textColor1}`}>
              Software Engineer, .NET <br />Developer, and Entrepreneur.
            </h1>
            <p className={`${textColor2} py-4 max-w-[700px] text-justify`}>
              I'm Etinosa, a dedicated software engineer with a passion for
              crafting exceptional, secure, and robust applications to solve
              complex business challenges. My guiding principles are growth,
              kindness, honesty, transparency, and a commitment to continuous
              learning and development.
            </p>
            {/* <div className="flex justify-center sm:justify-start"> */}
            <SocialMedia color={socialColor} isHome={isHome} />
            {/* </div> */}
            <div className="mt-5">
              <Link
                to="work"
                smooth={true}
                duration={500}
                className={`${textColor1} group border-2 ${borderColor} px-6 py-3 my-2 flex items-center hover:bg-yellow-600 hover:border-yellow-600`}
                style={{ display: "inline-flex", cursor: "pointer" }}
              >
                View Work
                <span className="group-hover:rotate-90 duration-300">
                  <HiArrowNarrowRight className="ml-3 " />
                </span>
              </Link>
            </div>
          </div>
          <div className="md:mt-0 mt-10 flex">
            {/* Apply a margin-top of 0 on medium screens and above, 8 on small screens */}
            <img src={profileImg} alt="Profile" className="profileImg" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
