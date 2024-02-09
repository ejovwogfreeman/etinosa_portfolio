import React from "react";
import HTML from "../assets/html.png";
import CSS from "../assets/css.png";
import JavaScript from "../assets/javascript.png";
import ReactImg from "../assets/react.png";
// import Photoshop from "../assets/adobe-photoshop.png";
// import CorelDraw from "../assets/CorelDraw.png";
// import Vmix from "../assets/vMix4.png";
import GitHub from "../assets/github.png";
import Tailwind from "../assets/tailwind.png";
import C_Sharp from "../assets/C-Sharp.png";
import DotNet from "../assets/Dotnet.png";
import "../css/General.css";
import Progress from "./Progress";

const Skills = ({ light }) => {
  const bgColor = light ? "bg-white" : "bg-[#0a192f]";
  const textColor = light ? "text-dark" : "text-gray-300";
  return (
    <div name="skills" className={`w-full ${bgColor} ${textColor} general`}>
      {/* Container */}
      <div className="max-w-[1300px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div>
          <p className="text-4xl font-bold inline border-b-4 border-yellow-600 ">
            Skills
          </p>
          <p className="py-4">These are the technologies I've worked with</p>
        </div>

        <div className="w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8">
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500 p-5">
            <img className="w-20 mx-auto" src={HTML} alt="HTML icon" />
            <p className="my-4">HTML</p>
            <Progress completed={60} />
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500 p-5">
            <img className="w-20 mx-auto" src={CSS} alt="CSS icon" />
            <p className="my-4">CSS</p>
            <Progress completed={60} />
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500 p-5">
            <img className="w-20 mx-auto" src={Tailwind} alt="TAILWIND icon" />
            <p className="my-4">TAILWIND</p>
            <Progress completed={60} />
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500 p-5">
            <img
              className="w-20 mx-auto"
              src={JavaScript}
              alt="JAVASCRIPT icon"
            />
            <p className="my-4">JAVASCRIPT</p>
            <Progress completed={60} />
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500 p-5">
            <img className="w-20 mx-auto" src={ReactImg} alt="REACT icon" />
            <p className="my-4">REACT</p>
            <Progress completed={60} />
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500 p-5">
            <img className="w-20 mx-auto" src={GitHub} alt="GITHUB icon" />
            <p className="my-4">GITHUB</p>
            <Progress completed={60} />
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500 p-5">
            <img className="w-40 mx-auto" src={DotNet} alt=".Net icon" />
            <p className="my-4">.Net</p>
            <Progress completed={80} />
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500 p-5">
            <img
              className="w-20 mx-auto"
              src={C_Sharp}
              alt=".C_Sharp icon"
              style={{ marginTop: "-5px" }}
            />
            <p className="mt-2 mb-4">C_Sharp</p>
            <Progress completed={80} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
