import React from "react";
import { BsGithub, BsInstagram } from "react-icons/bs";
import { FaFacebookSquare } from "react-icons/fa";
import { FiMail } from "react-icons/fi";

const Card = () => {
  return (
    <div className="w-full">
      <div className="flex flex-col  cursor-pointer justify-center mx-auto max-w-xs rounded-xl bg-white shadow-2xl p-12">
        <div className="p-2 ">
          <img
            src="./mine.jpeg"
            alt="Mine Pic"
            className="w-32 shadow-2xl mx-auto rounded-full "
          />
        </div>
        <div className="text-center mt-5 ">
          <p className="text-xl sm:text-2xl text-gray-900 font-bold font-serif">
            Sayan Mondal
          </p>
          <p className="text-xs sm:text-base pt2 pb-2 px-5 w-auto inline-block font-serif mt-3 text-gray-600">
            Full Stack Developer (Mern Developer)
          </p>
        </div>
        <hr style={{ border: "1px solid grey", borderRadius: "20px" }} />
        <div className="flex justify-center mt-2">
          <a
            href="https://github.com/sayan1234-deep"
            className="text-2xl m-1 p-1 sm:m-2 text-gray-900 hover:bg-gray-800 hover:text-white rounded-full transition-colors duration-300"
          >
            <BsGithub size={25} />
          </a>
          <a
            href="https://github.com/sayan1234-deep"
            className="text-2xl m-1 p-1 sm:m-2 text-gray-900 hover:bg-blue-800 hover:text-white rounded-full transition-colors duration-300"
          >
            <FaFacebookSquare size={25} />
          </a>
          <a
            href="https://github.com/sayan1234-deep"
            className="text-2xl m-1 p-1 sm:m-2 text-gray-900 hover:bg-red-600 hover:text-white rounded-full transition-colors duration-300"
          >
            <BsInstagram size={25} />
          </a>
          <a
            href="https://github.com/sayan1234-deep"
            className="text-2xl m-1 p-1 sm:m-2 text-gray-900 hover:bg-green-600 hover:text-white rounded-full transition-colors duration-300"
          >
            <FiMail size={25} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Card;
