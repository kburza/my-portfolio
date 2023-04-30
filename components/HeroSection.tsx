import React from "react";
import Image from "next/image";
import { Link } from "react-scroll";
import { HiArrowDown } from "react-icons/hi";

const HeroSection = () => {
  const resumeUrl =
    "https://drive.google.com/file/d/1uSa0oeQr4iAm3iqSS8kZUec2lryNGKTG/view";

  return (
    <section id="home">
      <div className="flex flex-col text-center items-center justify-center animate-fadeIn animation-delay-2 my-10 py-16 sm:py-32 md:py-48 md:flex-row md:space-x-4 md:text-left">
        <div className="md:mt-2 md:w-1/2">
          <Image
            src="/headshot.png"
            alt=""
            width={325}
            height={325}
            className="rounded-full shadow-2xl"
          />
        </div>
        <div className="md:mt-2 md:w-3/5">
          <h1 className="text-4xl font-bold mt-6 md:mt-0 md:text-7xl">
            Hi, I&#39;m Kacper!
          </h1>
          <p className="text-lg mt-4 mb-6 md:text-2xl">
            As a Toronto Metropolitan University (TMU){" "}
            <span className="font-bold">Computer Engineering </span>
            graduate, I am eager to explore the world of systems and design with
            a keen interest in networks and graphical user interfaces.
          </p>
          <a
            href={resumeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-neutral-100 font-semibold px-6 py-3 bg-gray-600 rounded shadow hover:bg-gray-700"
            download
          >
            Resume
          </a>
        </div>
      </div>
      {/* ARROW POINTING DOWN ANIMATION */}
      {/* <div className="flex flex-row items-center text-center justify-center ">
        <Link
          to="about"
          activeClass="active"
          spy={true}
          smooth={true}
          offset={-100}
          duration={500}
        >
          <HiArrowDown size={35} className="animate-bounce" />
        </Link>
      </div> */}
    </section>
  );
};

export default HeroSection;
