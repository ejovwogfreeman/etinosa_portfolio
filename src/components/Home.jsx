import React from "react";
import { HiArrowNarrowRight } from "react-icons/hi";
import profileImg from "../assets/profile_img.png";
import { Link } from "react-scroll";
import SocialMedia from "./SocialMedia";
import "../css/General.css";

const Home = () => {
  return (
    <div name="home" className="w-full bg-[#0a192f] general home">
      {/* Container */}
      <div className="max-w-[1500px] mx-auto px-2 md:px-8 flex flex-col justify-center h-full">
        <div className="flex flex-col-reverse md:flex-row items-center justify-center">
          <div className="text-center sm:text-start">
            <p className="text-yellow-600 font-normal">Hi, my name is</p>
            <h1 className="text-xl sm:text-3xl font-bold text-[#ccd6f6]">
              OMORUYI ETINOSA
            </h1>
            <h2 className="text-xl sm:text-3xl font-bold text-[#8892b0]">
              I'm a Full Stack Software Engineer.
            </h2>
            <p className="text-[#8892b0] py-4 max-w-[700px]">
              I’m a full-stack developer specializing in building (and
              occasionally designing) exceptional digital experiences.
              Currently, I’m focused on building responsive full-stack web
              applications.
            </p>
            <div className="flex justify-center sm:justify-start">
              <SocialMedia color="white" />
            </div>
            <div className="mt-5">
              <Link
                to="work"
                smooth={true}
                duration={500}
                className="text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-yellow-600 hover:border-yellow-600"
                style={{ display: "inline-flex", cursor: "pointer" }}
              >
                View Work
                <span className="group-hover:rotate-90 duration-300">
                  <HiArrowNarrowRight className="ml-3 " />
                </span>
              </Link>
            </div>
          </div>
          <div className="md:mt-0 mt-10">
            {/* Apply a margin-top of 0 on medium screens and above, 8 on small screens */}
            <img src={profileImg} alt="Profile" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
