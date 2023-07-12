import React from "react";
import yelpcamp from "../assets/portfolio/yelpcamp.png"
import candy from "../assets/portfolio/candy.png";
import calculator from "../assets/portfolio/calculator.png"

const Portfolio = () => {
  const portfolios = [
    {
      id: 1,
      src: yelpcamp,
      code: "https://github.com/woooocoder/YelpCamp"
    },

    {
      id: 3,
      src: calculator,
      code: "https://github.com/woooocoder/Calculator"
    },
    {
      id: 4,
      src: candy,
      code: "https://github.com/woooocoder/museum-of-candy/tree/main/museum-of-candy"
    },
    
  ];

  return (
    <div
      name="portfolio"
      className="bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Portfolio
          </p>
          <p className="mt-10 text-xl">Here are several of my projects:</p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0 items-center">
          {portfolios.map(({ id, src, code, demo }) => (
            <div key={id} className="shadow-md shadow-gray-600 rounded-lg duration-200 hover:scale-105">
              <img
                src={src}
                alt=""
                className="rounded-md duration-200 hover:scale-105 w-full"
              />
              <div className="flex items-center justify-center">
                <a href={demo}> 
                  <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">
                      Demo
                  </button>
                </a>
                <a href={code}>
                  <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">
                   Code
                  </button>
                </a>
              </div>
            </div>
          ))}
        </div>
        <p className="py-10">
          See more of my work on <a className='text-cyan-400' href="https://github.com/woooocoder">GitHub</a>
        </p>
      </div>
    </div>
  );
};

export default Portfolio;
