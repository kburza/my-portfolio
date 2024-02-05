import React from "react";
import Image from "next/image";
import Link from "next/link";
import SlideUp from "./SlideUp";
import {
  BsGithub,
  BsArrowUpRightSquare,
  BsGlobeAmericas,
} from "react-icons/bs";
import { FaAws } from "react-icons/fa";
import { IoLogoVercel } from "react-icons/io5";
import { BiLogoNetlify } from "react-icons/bi";
import { FaAngular } from "react-icons/fa";

const projects = [
  {
    name: "DLSTR-ML",
    description:
      "Deep Learning Security Aggregate Tool. Uploads a tensorflow model and dataset to a GCP bucket which runs various open-source attacks on the ML model.",
    image:
      "https://demo-bucket-kap.s3.amazonaws.com/my-portfolio-projects-assets/my-portfolio-projects-assets/dlstr.png",
    github:
      "https://github.com/ncheungg/DEEP-LEARNING-SECURITY-TOOLS-REPOSITORY",
    link: "https://rsa02.netlify.app/",
  },
  {
    name: "Chatsper: Chat App (Alpha)",
    description:
      "Private chat app built through the angular framework using firebase implementation to securely store user login information.",
    image:
      "https://demo-bucket-kap.s3.amazonaws.com/my-portfolio-projects-assets/my-portfolio-projects-assets/chatsper.png",
    github: "https://github.com/kburza/ang-chat-app",
    link: "https://kburza.github.io/ang-chat-app/",
  },
  {
    name: "Arashi 2.0 (WIP)",
    description:
      "Node/React port of original Arashi website hosted on Vercel. Features an e-commerce look/feel with many dynamic and visually aesthetic elements.",
    image:
      "https://demo-bucket-kap.s3.amazonaws.com/my-portfolio-projects-assets/my-portfolio-projects-assets/arashi2.png",
    github: "https://github.com/kburza/ArashiFurniture2",
    link: "https://arashi-furniture2.vercel.app/",
  },
  {
    name: "Arashi Art Decor",
    description:
      "Sleek and attractive artisan wood home decor website for Arashi Inc., based in Mississauga, Ontario",
    image:
      "https://demo-bucket-kap.s3.amazonaws.com/my-portfolio-projects-assets/my-portfolio-projects-assets/arashi.png",
    github: "https://github.com/kburza/ArashiFurniture",
    link: "http://arashiartdecor.ca/",
  },
  {
    name: "AWS Node Docker Demo App",
    description:
      "A simple Node.js app in a Docker container that displays the docker logo through ASCII art on your local machine. Deployed on an Amazon Web Services Ubuntu Virtual EC2 instance.",
    image:
      "https://demo-bucket-kap.s3.amazonaws.com/my-portfolio-projects-assets/my-portfolio-projects-assets/docker.png",
    github: "https://github.com/kburza/docker-demo",
    link: "http://54.147.110.7:8000/",
  },
  {
    name: "Java SQL Database Manager",
    description:
      "Java applet to explore/manage SQl databases through the JDBC API. Complete with a dynamic ASCII UI and a fully realized industry-grade headphones database.",
    image:
      "https://demo-bucket-kap.s3.amazonaws.com/my-portfolio-projects-assets/my-portfolio-projects-assets/head.png",
    github: "https://github.com/kburza/sql-xml-headphones-database",
    link: "https://github.com/kburza/sql-xml-headphones-database",
  },
  {
    name: "Secure Java Bank App",
    description:
      "An encrypted (RSA/AES) Java GUI for bank account management through the use of socket programming and SQL database implementation.",
    image:
      "https://demo-bucket-kap.s3.amazonaws.com/my-portfolio-projects-assets/my-portfolio-projects-assets/bank.png",
    github: "https://github.com/kburza/java-bank-socket-app",
    link: "https://github.com/kburza/java-bank-socket-app",
  },
  {
    name: "Cyclone V FPGA Media Centre",
    description:
      "A lightweight and simple media centre implementation on the ALTERA Cyclone V FPGA coded in C. Complete with hand-drawn graphics and on-board controls.",
    image:
      "https://demo-bucket-kap.s3.amazonaws.com/my-portfolio-projects-assets/my-portfolio-projects-assets/board.png",
    github: "https://github.com/kburza/cyclone-v-fpga-media-center",
    link: "https://github.com/kburza/cyclone-v-fpga-media-center",
  },
  // {
  //   name: "Blog",
  //   description:
  //     "Check out the art and designs that I work on in service of projects or just as a hobby. Also, view my opinions on the various media that I consume in my spare time.",
  //   image:
  //     "https://demo-bucket-kap.s3.amazonaws.com/my-portfolio-projects-assets/my-portfolio-projects-assets/art.png",
  //   github: "",
  //   link: "/artblog/#",
  // },
];

const ProjectsSection = () => {
  return (
    <section id="projects" style={{ marginBottom: "15em" }}>
      <h1
        className="my-10 text-center
font-bold text-4xl"
      >
        Projects
        <hr className="w-6 h-1 mx-auto my-4 bg-gray-500 border-0 rounded"></hr>
      </h1>
      <div className="flex flex-col space-y-28">
        {projects.map((project, idx) => (
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
                    {project.name !== "Blog" && (
                      <Link href={project.github} target="_blank">
                        <BsGithub
                          size={30}
                          className="hover:-translate-y-1 transition transform cursor-pointer"
                        />
                      </Link>
                    )}
                    {project.name === "Chatsper: Chat App (Alpha)" && (
                      <Link href={project.link} target="_blank">
                        <FaAngular
                          size={30}
                          className="hover:-translate-y-1 transition-transform cursor-pointer"
                        />
                      </Link>
                    )}
                    {project.name === "AWS Node Docker Demo App" ? (
                      <Link href={project.link} target="_blank">
                        <FaAws
                          size={30}
                          className="hover:-translate-y-1 transition-transform cursor-pointer"
                        />
                      </Link>
                    ) : project.name === "Arashi 2.0 (WIP)" ? (
                      <Link href={project.link} target="_blank">
                        <IoLogoVercel
                          size={30}
                          className="hover:-translate-y-1 transition-transform cursor-pointer"
                        />
                      </Link>
                    ) : project.name === "DLSTR-ML" ? (
                      <Link href={project.link} target="_blank">
                        <BiLogoNetlify
                          size={30}
                          className="hover:-translate-y-1 transition-transform cursor-pointer"
                        />
                      </Link>
                    ) : (
                      ![
                        "SQL Headphones Database",
                        "Cyclone V FPGA Media Centre",
                        "Secure Java Bank App",
                        "Blog",
                        "Docker Demo App",
                        "AWS Node Docker Demo App",
                        "Java SQL Database Manager",
                        "Chatsper: Chat App (Alpha)",
                      ].includes(project.name) && (
                        <Link href={project.link} target="_blank">
                          <BsGlobeAmericas
                            size={30}
                            className="hover:-translate-y-1 transition-transform cursor-pointer"
                          />
                        </Link>
                      )
                    )}
                  </div>
                </div>
              </div>
            </SlideUp>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProjectsSection;
