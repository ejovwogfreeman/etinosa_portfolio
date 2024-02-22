import React from "react";
import { data } from "../data/data.js";
import "../css/General.css";

const Work = ({ light }) => {
  // projects file
  const project = data;
  //setProject(data);

  const bgColor = light ? "bg-white" : "bg-[#0a192f]";
  const textColor = light ? "text-dark" : "text-gray-300";
  const textColor1 = light ? "text-dark" : "text-[#ccd6f6]";
  const textColor2 = light ? "text-dark" : "text-[#8892b0]";

  return (
    <div name="work" className={`w-full ${bgColor} ${textColor} general`}>
      <div className="max-w-[1200px] mx-auto px-4 flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className={`text-3xl font-bold inline border-b-4 border-yellow-600 ${textColor1}`}>
            Work
          </p>
          <p className={`py-4 ${textColor2}`}>Check out some of my interesting projects</p>
        </div>

        {/* container for projects */}
        {/* <div className="grid sm:grid-cols-2 md:grid-cols-2 gap-6"> */}
        {/* Gird Item */}
        {/* {project.map((item, index) => (
            <div
              key={index}
              style={{
                backgroundImage: `url(${item.image})`,
                height: "350px",
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
              }}
              className="shadow-lg shadow-[#040c16] group container rounded-md 
              flex justify-center text-center items-center mx-auto content-div"
            > */}
        {/* Hover effect for images */}
        {/* <div className="opacity-0 group-hover:opacity-100 ">
                <span className="text-2xl font bold text-white tracking-wider ">
                  {item.name}
                </span> */}
        {/* <div className="pt-8 text-center "> */}
        {/* eslint-disable-next-line */}
        {/* <a href={item.github} target="_blank">
                    <button
                      className="text-center rounded-lg px-4 py-3 m-2
                       bg-white text-gray-700 font-bold text-lg"
                    >
                      Code
                    </button>
                  </a> */}
        {/* eslint-disable-next-line */}
        {/* <a href={item.live} target="_blank">
                    <button
                      className="text-center rounded-lg px-4 py-3 m-2
                       bg-white text-gray-700 font-bold text-lg"
                    >
                      Live
                    </button>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div> */}
        <div className="project-grid">
          {project.map((x) => (
            <div className="a" key={x.id}>
              <span className="bg"></span>
              <img src={x.image} alt="" />
              <h3 className="font-bold text-lg">{x.name}</h3>
              <div>
                <a href={x.github} target="_blank" rel="noreferrer">
                  Github
                </a>
                <a href={x.live} target="_blank" rel="noreferrer">
                  Live
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Work;
