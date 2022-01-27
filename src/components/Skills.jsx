import React from "react";
import { SiReact, SiAndroidstudio, SiJavascript } from "react-icons/si";
import { FaReact } from "react-icons/fa";
import { ImHtmlFive } from "react-icons/im";
import { SiCss3 } from "react-icons/si";

const Skills = () => {
  return (
    <div className="max-w-4xl mx-auto justify-center py-12" id="tech">
      <h1 className="text-2xl pt-4  sm:text-4xl text-black text-center font-bold font-mono">
        Tech I Use
      </h1>
      <div className="flex flex-wrap justify-center ">
        <div className="flex flex-col w-40 p-10 m-6 overflow-hidden bg-white shadow-2xl rounded-2xl md:rounded-lg text-4xl cursor-pointer ">
          <SiReact
            color="#2A6FB4"
            className="mx-auto md:text-4xl sm:text-4xl"
          />
          <p className="text-xl mx-auto mt-3 font-semibold">React</p>
        </div>
        <div className="flex flex-col w-40 p-10 m-6 overflow-hidden bg-white shadow-2xl rounded-2xl md:rounded-lg text-4xl cursor-pointer ">
          <FaReact
            color="#2A6FB4"
            className="mx-auto md:text-4xl sm:text-4xl"
          />
          <p className="text-xl mx-auto mt-3 font-semibold text-center">
            React Native
          </p>
        </div>
        <div className="flex flex-col w-40 p-10 m-6 overflow-hidden bg-white shadow-2xl rounded-2xl md:rounded-lg text-4xl cursor-pointer ">
          <SiAndroidstudio
            color="#287B1F"
            className="mx-auto md:text-4xl sm:text-4xl"
          />
          <p className="text-xl mx-auto mt-3 font-semibold text-center">
            Android Studio
          </p>
        </div>
        <div className=" flex-col w-40 p-10 m-6 overflow-hidden bg-white shadow-2xl rounded-2xl md:rounded-lg text-4xl cursor-pointer ">
          <SiJavascript
            color="#E3CE00"
            className="mx-auto md:text-4xl sm:text-4xl"
          />
          <p className="text-xl mx-auto mt-3 font-semibold text-center">
            Javascript
          </p>
        </div>
        <div className="flex flex-col w-40 p-10 m-6 overflow-hidden bg-white shadow-2xl rounded-2xl md:rounded-lg text-2xl cursor-pointer ">
          <div className="flex flex-row">
            <ImHtmlFive
              color="#E30000"
              className="mx-auto md:text-xl sm:text-2xl m-0"
            />
            <SiCss3
              color="#03ABFF"
              className="mx-auto md:text-2xl sm:text-xl"
            />
          </div>
          <p className="text-xl mx-auto mt-3 font-semibold text-center">
            HTML & CSS
          </p>
        </div>
      </div>
    </div>
  );
};

export default Skills;
