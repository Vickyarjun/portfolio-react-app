import React from 'react';
import { HiArrowNarrowRight } from 'react-icons/hi';
// import { Link } from 'react-scroll';

const Home = () => {
  // const URL =
  //   'https://drive.google.com/file/d/1FPqdfrvfKnk5gIdQNjTDV3zW_KckWHwP/view';
  return (
    <div name="home" className="w-full h-screen bg-[#0a192f]">
      {/* container */}
      <div className="max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full">
        <p className="text-pink-600">Hi, my name is</p>
        <h1 className="text-4xl sm:text-7xl font-bold text-[#ccd6f6]">
          VIGNESH
        </h1>
        <h2 className="text-4xl sm:text-7xl font-bold text-[#8892b0]">
          I'm a Frontend Developer.
        </h2>
        <p className="text-[#8892b0] py-4 max-w-[700px]">
          I’m a Frontend/Full-stack developer specializing in building and
          designing exceptional digital experiences. Seeking a role as a
          front-end developer in a reputed organization where I can learn new
          skills, expand my knowledge, and leverage my learnings. Currently, I’m
          focused on building responsive User interface.
        </p>
        <div>
          <button className="text-white border-2 px-6 py-3 my-2 flex items-center hover:bg-pink-600 hover:border-pink-600 duration-300">
            <a
              href="https://drive.google.com/file/d/1FPqdfrvfKnk5gIdQNjTDV3zW_KckWHwP/view"
              target="_blank"
              rel="noopener noreferrer"
            >
              View certificate
            </a>
            <span>
              <a
                href="https://drive.google.com/file/d/1FPqdfrvfKnk5gIdQNjTDV3zW_KckWHwP/view"
                target="_blank"
                rel="noopener noreferrer"
              >
                <HiArrowNarrowRight className="ml-3" />
              </a>
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
