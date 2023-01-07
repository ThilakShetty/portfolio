import React from "react";
// import { Images } from '../Assets/Images';

const About = (props) => {
  return (
    <section id="about">
      <div className="container mx-auto flex px-10 py-20 md:flex-row flex-col items-center">
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">
            Hi there! My name is Thilak Shetty.
            <br className="hidden lg:inline-block" />I am a Software Engineer.
          </h1>
          <p className="mb-8 leading-relaxed">
            I have always been passionate about software applications and have
            spent the past 3 years honing my skills and expertise in this field.
            I am constantly seeking out new opportunities to learn and grow, and
            am always looking for ways to make a positive impact in the world
            through my work. I am excited to share my portfolio with you and
            hope to have the opportunity to work with you in the future.
          </p>
          <div className="flex justify-center">
            <a
              href="#contact"
              className="inline-flex text-white bg-green-500 border-0 py-2 px-6 focus:outline-none hover:bg-green-600 rounded text-lg"
            >
              Work With Me
            </a>
            <a
              href="#projects"
              className="ml-4 inline-flex text-gray-400 bg-gray-800 border-0 py-2 px-6 focus:outline-none hover:bg-gray-700 hover:text-white rounded text-lg"
            >
              See My Past Work
            </a>
          </div>
        </div>
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
          <img
            className="object-cover object-center rounded"
            alt="hero"
            src="./coding.svg"
          />
        </div>
      </div>
    </section>
  );
};

export default About;
