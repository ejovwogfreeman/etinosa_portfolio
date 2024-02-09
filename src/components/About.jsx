import React from "react";
import profileImg from "../assets/img.png";
import "../css/General.css";

const About = ({ light }) => {
  const bgColor = light ? "bg-white" : "bg-[#0a192f]";
  const textColor = light ? "text-dark" : "text-gray-300";
  return (
    <div name="about" className={`w-full ${bgColor} ${textColor} general`}>
      <div className="flex flex-col justify-center items-center w-full h-full">
        <div className="max-w-[1300px] w-full grid grid-cols-2 gap-8">
          <div className="sm:text-right pb-8 pl-4">
            <p className="text-3xl font-bold inline border-b-4 border-yellow-600">
              About
            </p>
          </div>
          <div></div>
        </div>
        <div className="max-w-[1300px] w-full grid sm:grid-cols-2 gap-8 px-4 items-center">
          <div>
            <img
              src={profileImg}
              alt=""
              style={{ marginTop: "-100px" }}
              className="imgcircle"
            />
          </div>
          <div>
            <p className="text-3xl font-bold mb-5">
              Hi. I'm Etinosa Omoruyi, nice to meet you. Please feel free to
              take a look around.
            </p>
            <p className="text-justify">
              I am passionate about building excellent software that improves
              the lives of those around me. I specialize in creating software
              for clients ranging from individuals and small-businesses all the
              way to large enterprise corporations. What would you do if you had
              a software expert available at your fingertips?
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
