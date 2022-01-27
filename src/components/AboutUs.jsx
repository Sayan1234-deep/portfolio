import React from "react";

const AboutUs = () => {
  return (
    <div className="max-w-4xl mt-20 mx-auto">
      <p className="text-2xl text-black md:text-4xl font-bold text-center font-mono">
        Hey There 👋
      </p>
      <p className="text-base text-gray-600 md:text-xl mt-4 text-center mx-4">
        I love to create web application using React(Frontend), Node Js(Backend)
        and MongoDb (database) for clients like you!. I am a MERN developer as
        well as I love to create mobile application using React Native using my
        react skills <br />
        If you are looking for a web developer as well as mobile
        developer(Android, IOS) then feel free to{" "}
        <span
          onClick={() => {
            window.scrollTo(0, 0);
          }}
          className="text-blue-700 border-b-2 cursor-pointer border-blue-700"
        >
          {" "}
          contact with me!
        </span>
      </p>
    </div>
  );
};

export default AboutUs;
