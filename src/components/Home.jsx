import React from "react";
import me from "../assets/me.jpg"
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { RiFilePaper2Fill } from "react-icons/ri"
import { Link } from "react-scroll";

const Home = () => {
  return (
    <div
      name="home"
      className="h-screen w-full bg-gradient-to-b from-black via-black to-gray-800"
    >
      <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row">
        <div className="flex flex-col justify-center h-full">
          <h2 className="text-4xl sm:text-7xl font-bold text-white mb-4">
            Fullstack Web Developer
          </h2>
          <div className="text-gray-500">
            <h3 className="font-semibold text-xl">
              Woodrow Reese - Massachusetts
            </h3>
            <br />
            <p className="pt-1 pb-5 max-w-md text-xl"> 
              I design websites! My focus is on helping entities build their online presence via landing pages and portfolio sites. I would be excited
              to put my skills to work for you and increase your marketablility. 
            </p>
          </div>
          <div class='grid grid-rows-1 grid-flow-col'>
            <div>
              <Link
                to="portfolio"
                smooth
                duration={500}
                className="group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer"
              >
                Portfolio
                <span className="group-hover:rotate-90 duration-300">
                  <MdOutlineKeyboardArrowRight size={25} className="ml-1" />
                </span>
              </Link>
            </div>

            <div>
              <Link
                to="resume"
                smooth
                duration={500}
                className="group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer"
              >
                Resume
                <span className="group-hover:rotate-45 duration-1000">
                  <RiFilePaper2Fill size={20} className="ml-3" />
                </span>
              </Link>
            </div>
          </div>
        </div>

        <div className="mr-auto ml-3 flex min-h-screen max-w-screen-sm items-center justify-center">
          <div className="w-full rounded-lg bg-gradient-to-r from-cyan-500 to-blue-500 p-1">
            <img
              src={me}
              alt="my profile"
              className="mx-auto rounded-lg w-3 md:w-full"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
