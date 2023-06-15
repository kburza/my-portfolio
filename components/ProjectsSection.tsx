import React from "react";
import Image from "next/image";
import Link from "next/link";
import SlideUp from "./SlideUp";
import { BsGithub, BsArrowUpRightSquare } from "react-icons/bs";
import { FaAws } from "react-icons/fa";

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
    name: "Arashi Furniture",
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
    name: "SQL Headphones Database",
    description:
      "A convenient project to sort/analyze through various different types of industry-grade consumer headphones. Complete with SQL/XML implementations and Java JDBC functionality.",
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
  {
    name: "Blog",
    description:
      "Check out the art and designs that I work on in service of projects or just as a hobby. Also, view my opinions on the various media I consume in my spare time.",
    image:
      "https://demo-bucket-kap.s3.amazonaws.com/my-portfolio-projects-assets/my-portfolio-projects-assets/art.png",
    github: "",
    link: "/artblog/#",
  },
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
                      {project.name !== "Blog" && (
                        <Link href={project.github} target="_blank">
                          <BsGithub
                            size={30}
                            className="hover:-translate-y-1 transition transform cursor-pointer"
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
                      ) : (
                        ![
                          "SQL Headphones Database",
                          "Cyclone V FPGA Media Centre",
                          "Secure Java Bank App",
                          "Blog",
                          "Docker Demo App",
                        ].includes(project.name) && (
                          <Link href={project.link} target="_blank">
                            <BsArrowUpRightSquare
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
          );
        })}
      </div>
    </section>
  );
};

export default ProjectsSection;
