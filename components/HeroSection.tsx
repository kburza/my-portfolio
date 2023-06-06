"use client"
import React from "react";
import Image from "next/image";
import { FaAws, FaReact } from "react-icons/fa";
import { SiNextdotjs, SiTailwindcss } from "react-icons/si";
import { IoLogoVercel } from "react-icons/io5";
import { Link } from "react-scroll";
import { HiArrowDown } from "react-icons/hi";
import { RiReactjsLine } from "react-icons/ri";
import { TiArrowSortedDown } from 'react-icons/ti';

const HeroSection = () => {
  const resumeUrl =
    "https://demo-bucket-kap.s3.amazonaws.com/Kacper_Burza_Resume_2023.pdf";

  return (
    <section id="home">
      <div className="flex flex-col text-center items-center justify-center animate-fadeIn animation-delay-2 my-10 py-16 sm:py-32 md:py-48 md:flex-row md:space-x-4 md:text-left">
        <div className="md:mt-2 md:w-1/2">
          <Image
            src="https://demo-bucket-kap.s3.amazonaws.com/headshot.png"
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
            a keen interest in front-end software development and graphical user
            interfaces.
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
          <p className="text-sm text-gray-500 mt-4 mb-6 md:text-base">
            Site Langauges: <RiReactjsLine className="inline text-primary" />{" "}
            <SiNextdotjs className="inline text-primary" />{" "}
            <SiTailwindcss className="inline text-primary" />
            <br />
            Asset Hosting: <FaAws className="inline text-primary" />
          </p>
        </div>
      </div>

      {/* ARROW POINTING DOWN ANIMATION */}
      <div className="flex flex-row items-center text-center justify-center ">
        <Link
          to="about"
          activeClass="active"
          spy={true}
          smooth={true}
          offset={-100}
          duration={500}
        >
          <TiArrowSortedDown size={35} className="animate-bounce" />
        </Link>
      </div>
      
    </section>
  );
};

export default HeroSection;
