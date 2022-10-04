import React from 'react';
import WorkImg from '../assets/WorkImg.png';

const Work = () => {
  return (
    <div name="work" className="w-full md:h-screen text-gray-300 bg-[#0a192f]">
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 text-gray-300 border-pink-600">
            Projects
          </p>
          <p className="py-6">Check out some of my recent work</p>
        </div>

        {/* Container */}
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
          {/* Grid Item */}
          <div
            style={{ backgroundImage: `url(${WorkImg})` }}
            className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
          >
            {/* Hover Effects */}
            <div className="opacity-0 group-hover:opacity-100">
              <span className="text-2xl font-bold text-white tracking-wider">
                <span className="text-[#5A7DD4]">hii </span>MERN Application
              </span>
              <div className="pt-8 text-center">
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://cartmax-shopping.netlify.app/"
                >
                  <button className="text-center rounded-lg w-32 py-3 m-2 bg-white text-gray-700 font-bold text-lg hover:bg-[#7f95f1] duration-300">
                    Demo
                  </button>
                </a>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://github.com/Vickyarjun/cartmax"
                >
                  <button className="text-center rounded-lg w-32 py-3 m-2 bg-white text-gray-700 font-bold text-lg hover:bg-[#7f95f1] duration-300">
                    Code
                  </button>
                </a>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://justpaste.it/4yjc5/pdf"
                >
                  <button className="text-center rounded-lg w-32 py-3 m-2 bg-white text-gray-700 font-bold text-lg hover:bg-[#7f95f1] duration-300">
                    Credentials
                  </button>
                </a>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://justpaste.it/8v1d2/pdf"
                >
                  <button className="text-center rounded-lg w-32 py-3 m-2 bg-white text-gray-700 font-bold text-lg hover:bg-[#7f95f1] duration-300">
                    Details
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Work;
