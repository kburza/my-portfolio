import React from "react";
import Image from "next/image";
import Link from "next/link";
import SlideUp from "./SlideUp";
import { BsGithub, BsArrowUpRightSquare } from "react-icons/bs";

const projects = [
  {
    name: "Arashi Furniture",
    description:
      "We create quality artisan setpieces for your home. Take an in-depth look at the tables we make, and wood we use.",
    image: "/arashi.png",
    github: "https://github.com/kburza/ArashiFurniture",
    link: "http://arashiartdecor.ca/",
  },
  {
    name: "DLSTR-ML",
    description:
      "Robust and convenient machine learning model security and privacy testing.",
    image: "/dlstr.png",
    github: "https://github.com/kburza/ML-Model-Capstone-Site",
    link: "https://rsa02.netlify.app/",
  },
  {
    name: "SQL Headphones Database",
    description:
      "A convenient project to sort/analyze through various different types of industry-grade consumer headphones. Complete with SQL/XML implementations and Java JDBC functionality.",
    image: "/head.png",
    github: "https://github.com/kburza/sql-xml-headphones-database",
    link: "https://github.com/kburza/sql-xml-headphones-database",
  },
  {
    name: "Cyclone V FPGA Media Centre",
    description:
      "A lightweight and simple media centre implementation on the ALTERA Cyclone V FPGA coded in C. Complete with hand-drawn graphics and on-board controls.",
    image: "/board.png",
    github: "https://github.com/kburza/cyclone-v-fpga-media-center",
    link: "https://github.com/kburza/cyclone-v-fpga-media-center",
  },
];

const ProjectsSection = () => {
  return (
    <section id="projects" style={{ marginBottom: "15em" }}>
      <h1 className="my-10 text-center font-bold text-4xl">
        Projects
        <hr className="w-6 h-1 mx-auto my-4 bg-gray-500 border-0 rounded"></hr>
      </h1>

      <div className="flex flex-col space-y-28">
        {projects.map((project, idx) => {
          return (
            <div key={idx}>
              <SlideUp offset="-300px 0px -300px 0px">
                <div className="flex flex-col  animate-slideUpCubiBezier animation-delay-2 md:flex-row md:space-x-12">
                  <div className=" md:w-1/2">
                    <Link href={project.link}>
                      <Image
                        src={project.image}
                        alt=""
                        width={1000}
                        height={1000}
                        className="rounded-xl shadow-xl hover:opacity-70"
                      />
                    </Link>
                  </div>
                  <div className="mt-8 md:w-1/2">
                    <h1 className="text-4xl font-bold mb-6">{project.name}</h1>
                    <p className="text-xl leading-7 mb-4 text-neutral-600 dark:text-neutral-400">
                      {project.description}
                    </p>
                    <div className="flex flex-row align-bottom space-x-4">
                      <Link href={project.github} target="_blank">
                        <BsGithub
                          size={30}
                          className="hover:-translate-y-1 transition                          transform cursor-pointer"
                        />
                      </Link>
                      {![
                        "SQL Headphones Database",
                        "Cyclone V FPGA Media Centre",
                      ].includes(project.name) && (
                        <Link href={project.link} target="_blank">
                          <BsArrowUpRightSquare
                            size={30}
                            className="hover:-translate-y-1 transition-transform cursor-pointer"
                          />
                        </Link>
                      )}
                    </div>
                  </div>
                </div>
              </SlideUp>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default ProjectsSection;
