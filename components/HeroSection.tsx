"use client";
import React from "react";
import Image from "next/image";
import { FaAws } from "react-icons/fa";
import { SiNextdotjs, SiTailwindcss } from "react-icons/si";
import { Link } from "react-scroll";
import { RiReactjsLine } from "react-icons/ri";
import { TiArrowSortedDown } from "react-icons/ti";
import { motion } from "framer-motion";

const HeroSection = () => {
  const resumeUrl =
    "https://demo-bucket-kap.s3.amazonaws.com/Kacper_Burza_Resume.pdf";
  const resumeUrl_pl =
    "https://demo-bucket-kap.s3.amazonaws.com/Kacper_Burza_Resume_pl.pdf";

  return (
    <section id="home">
      <div className="flex flex-col text-center items-center justify-center my-10 py-16 sm:py-32 md:py-48 md:flex-row md:space-x-4 md:text-left">
        <motion.div
          className="md:mt-2 md:w-1/2"
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        >
          <Image
            src="https://demo-bucket-kap.s3.amazonaws.com/headshot.png"
            alt="Kacper Burza"
            width={325}
            height={325}
            className="rounded-full shadow-2xl"
          />
        </motion.div>

        <div className="md:mt-2 md:w-3/5">
          <motion.h1
            className="text-4xl font-bold mt-6 md:mt-0 md:text-7xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
          >
            Hi, I&#39;m Kacper!
          </motion.h1>

          <motion.p
            className="text-lg mt-4 mb-6 md:text-2xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
          >
            Hi, I&#39;m Kacper Burza — a Software Developer with experience
            building and modernizing enterprise applications across the full
            stack. I work with technologies like Java Spring Boot, Node.js, and
            React, and deploy on cloud platforms including GCP and Azure.
          </motion.p>

          <motion.div
            className="flex flex-wrap gap-3"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
          >
            <a
              href={resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-neutral-100 font-semibold px-6 py-3 bg-gray-600 rounded shadow hover:bg-gray-700 transition-colors"
              download
            >
              Resume
            </a>
            <a
              href={resumeUrl_pl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-neutral-100 font-semibold px-6 py-3 bg-gray-600 rounded shadow hover:bg-gray-700 transition-colors"
              download
            >
              CV (PL)
            </a>
          </motion.div>

          <motion.p
            className="text-sm text-gray-500 mt-4 mb-6 md:text-base"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            Site Languages: <RiReactjsLine className="inline text-primary" />{" "}
            <SiNextdotjs className="inline text-primary" />{" "}
            <SiTailwindcss className="inline text-primary" />
            <br />
            Asset Hosting: <FaAws className="inline text-primary" />
          </motion.p>
        </div>
      </div>

      <div className="flex flex-row items-center text-center justify-center">
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
