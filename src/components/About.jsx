import React from "react";
import profileImg from "../assets/img.png";
import "../css/General.css";

const About = ({ light }) => {
  const bgColor = light ? "bg-white" : "bg-[#0a192f]";
  //const textColor = light ? "text-dark" : "text-white";
  const textColor1 = light ? "text-dark" : "text-[#ccd6f6]";
  const textColor2 = light ? "text-dark" : "text-[#8892b0]";
  return (
    <div name="about" className={`w-full ${bgColor} general`}>
      <div className="flex flex-col justify-center items-center w-full h-full">
        <div className="max-w-[1200px] w-full grid grid-cols-2 gap-8">
          <div className="pb-8 pl-4">
            <p
              className={`text-3xl font-bold inline border-b-4 border-yellow-600 ${textColor1}`}
            >
              About Me
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
            <p className={`text-3xl font-bold mb-5 ${textColor1}`}>
              I'm Etinosa Omoruyi
            </p>
            <p className={`text-justify ${textColor2}`}>
              A Dedicated software engineer with a drive for crafting
              exceptional, secure applications to solve complex business
              challenges.
              <br />
              Over the years, I have gained experience tackling diverse
              projects, maintaining cutting-edge software solutions and
              collaborating with cross-functional teams to deliver high-quality
              products.
              <br />
              Proficient in C#, JavaScript, frameworks like ASP.NET Core, Entity
              Framework Core and React, and tools like Git, Docker, Azure, SQL
              Server, MySQL, and PostgreSQL. I excel in designing RESTful APIs
              and microservices architectures.
              <br />I value collaboration, fostering positive relationships, and
              continuous learning. Eager to connect and create impactful
              solutions for your business.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
