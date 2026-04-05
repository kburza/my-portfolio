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
    "https://demo-bucket-kap.s3.us-east-1.amazonaws.com/Kacper_Burza_Resume.pdf";
  const resumeUrl_pl =
    "https://demo-bucket-kap.s3.us-east-1.amazonaws.com/Kacper_Burza_Resume_pl.pdf";

  return (
    <section id="home" className="relative">

      <div className="flex flex-col items-center justify-center text-center my-10 py-16 sm:py-32 md:py-48 md:flex-row md:space-x-8 md:text-left">
        {/* Photo */}
        <motion.div
          className="md:mt-2 md:w-1/2 flex justify-center md:justify-start"
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="relative">
            <div className="absolute inset-0 scale-110 rounded-full bg-gradient-to-br from-blue-500/20 to-purple-500/20 blur-xl" />
            <Image
              src="https://demo-bucket-kap.s3.amazonaws.com/headshot.png"
              alt="Kacper Burza"
              width={300}
              height={300}
              className="relative rounded-full shadow-2xl ring-2 ring-white/10"
            />
          </div>
        </motion.div>

        {/* Text */}
        <div className="md:mt-2 md:w-3/5">
          {/* Status badge */}
          <motion.div
            className="mt-6 mb-3 inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-4 py-1.5 text-sm font-medium text-emerald-600 dark:text-emerald-400 md:mt-0"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <span className="h-2 w-2 animate-pulse rounded-full bg-emerald-500" />
            Software Developer
          </motion.div>

          <motion.h1
            className="text-4xl font-bold md:text-7xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          >
            Hi, I&#39;m{" "}
            <span className="bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
              Kacper!
            </span>
          </motion.h1>

          <motion.p
            className="mt-4 mb-6 text-lg text-neutral-600 dark:text-neutral-400 md:text-xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          >
            A Software Developer with experience building and modernizing
            enterprise applications across the full stack — Java Spring Boot,
            Node.js, React, deployed on GCP and Azure.
          </motion.p>

          <motion.div
            className="flex flex-wrap gap-3 justify-center md:justify-start"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
          >
            <a
              href={resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-lg bg-blue-600 px-6 py-3 font-semibold text-white shadow-lg shadow-blue-500/25 transition-all hover:-translate-y-0.5 hover:bg-blue-700"
              download
            >
              Resume
            </a>
            <a
              href={resumeUrl_pl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-lg border border-gray-300 px-6 py-3 font-semibold transition-all hover:-translate-y-0.5 hover:bg-gray-100 dark:border-gray-600 dark:hover:bg-gray-800"
              download
            >
              CV (PL)
            </a>
          </motion.div>

          <motion.p
            className="mt-5 text-xs text-gray-400 dark:text-gray-500"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.55 }}
          >
            Built with <RiReactjsLine className="inline" />{" "}
            <SiNextdotjs className="inline" />{" "}
            <SiTailwindcss className="inline" /> · Hosted on{" "}
            <FaAws className="inline" />
          </motion.p>
        </div>
      </div>

      <div className="flex items-center justify-center">
        <Link
          to="about"
          activeClass="active"
          spy={true}
          smooth={true}
          offset={-100}
          duration={500}
        >
          <TiArrowSortedDown
            size={35}
            className="animate-bounce cursor-pointer opacity-40 transition-opacity hover:opacity-80"
          />
        </Link>
      </div>
    </section>
  );
};

export default HeroSection;
