import React from "react";

const About = () => {
  return (
    <div
      name="about"
      className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            About
          </p>
        </div>

        <div className="text-xl mt-10 tracking-wide">
          I am a 4th year Computer Science (BS) student at the University of Massachusetts
          - Boston. Through my coursework and personal projects, I have gained proficiency in some of the latest,
           (and oldest) technologies within the software engineering cycle, my favorite being <b className="font-semibold text-cyan-600">web development.</b>
        </div>
        <br />
        <p className="text-xl">
          Aside from designing websites, I love to snowboard, paintball, and play chess!
        </p>
      </div>
    </div>
  );
};

export default About;
