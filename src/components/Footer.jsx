import React from "react";
import { BsGithub, BsInstagram } from "react-icons/bs";
import { FaFacebookSquare } from "react-icons/fa";
import { FiMail } from "react-icons/fi";

const Footer = () => {
  return (
    <div className="w-full  xl:px-20 lg:px-12 sm:px-6 px-4  py-12 bg-gray-900">
      <div className="flex flex-col items-center justify-center">
        <div>
          <h1 className="md:text-4xl font-bold text-yellow-50 sm:text-2xl">
            Sayan Mondal
          </h1>
        </div>
        <div className="flex flex-wrap sm:gap-10 gap-8 items-center justify-center mt-8">
          <p className="hover:text-gray-500 text-base cursor-pointer leading-4 text-yellow-50">
            About
          </p>
          <p className="hover:text-gray-500 text-base cursor-pointer leading-4 text-yellow-50">
            Contact us
          </p>
          <p className="hover:text-gray-500 text-base cursor-pointer leading-4 text-yellow-50">
            Terms of Service
          </p>
          <p className="hover:text-gray-500 text-base cursor-pointer leading-4 text-yellow-50">
            Privacy Policy
          </p>
        </div>
        <div className="flex justify-center mt-2">
          <a
            href="https://github.com/sayan1234-deep"
            className="text-2xl m-1 p-1 sm:m-2 text-yellow-50 hover:bg-gray-800 hover:text-white rounded-full transition-colors duration-300"
          >
            <BsGithub size={25} />
          </a>
          <a
            href="https://github.com/sayan1234-deep"
            className="text-2xl m-1 p-1 sm:m-2 text-yellow-50 hover:bg-blue-900 hover:text-white rounded-full transition-colors duration-300"
          >
            <FaFacebookSquare size={25} />
          </a>
          <a
            href="https://github.com/sayan1234-deep"
            className="text-2xl m-1 p-1 sm:m-2 text-yellow-50 hover:bg-red-600 hover:text-white rounded-full transition-colors duration-300"
          >
            <BsInstagram size={25} />
          </a>
          <a
            href="https://github.com/sayan1234-deep"
            className="text-2xl m-1 p-1 sm:m-2 text-yellow-50 hover:bg-green-600 hover:text-white rounded-full transition-colors duration-300"
          >
            <FiMail size={25} />
          </a>
        </div>

        <div className="flex items-center mt-6">
          <p className="text-base leading-4 text-yellow-50">
            {new Date().getFullYear()}{" "}
            <span className="font-semibold">Sayan Mondal</span>
          </p>
          <div className="border-l border-gray-800 pl-2 ml-2">
            <p className="text-base leading-4 text-yellow-50">
              Inc. All rights reserved
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
