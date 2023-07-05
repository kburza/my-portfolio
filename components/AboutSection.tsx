"use client";
import React from "react";
import Image from "next/image";
import { SiNextdotjs } from "react-icons/si";
import Link from "next/link";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const skills = [
  { skill: "C" },
  { skill: "C++" },
  { skill: "System C" },
  { skill: "Java" },
  { skill: "JavaScript" },
  { skill: "TypeScript" },
  { skill: "Verilog" },
  { skill: "VHDL" },
  { skill: "HTML5" },
  { skill: "CSS" },
  { skill: "SQL" },
  { skill: "XML" },
  { skill: "Git" },
  { skill: "Node.js" },
  { skill: "React.js" },
  { skill: "Python" },
  { skill: "Next.js" },
  { skill: "Three.js" },
  { skill: "Tailwind CSS" },
  { skill: "Matlab" },
  { skill: "Docker" },
  { skill: "AWS" },
  { skill: "SOLIDWORKS" },
];

const AboutSection = () => {
  return (
    <section id="about">
      <div className="my-12 pb-12 md:pt-16 md:pb-48">
        <h1 className="text-center font-bold text-4xl">
          About Me
          <hr className="w-6 h-1 mx-auto my-4 bg-gray-500 border-0 rounded"></hr>
        </h1>

        <div className="flex flex-col space-y-10 items-stretch justify-center align-top md:space-x-10 md:space-y-0 md:p-4 md:flex-row md:text-left">
          <div className="md:w-1/2 ">
            <h1 className="text-center text-2xl font-bold mb-6 md:text-left">
              Information
            </h1>
            <p>
              Hello, and welcome to my website! My name is Kacper Burza, and I
              am a recent{" "}
              <span className="font-bold">
                {
                  "Computer Engineering graduate from Toronto Metropolitan University"
                }
              </span>
              , (formerly known as Ryerson University) located in Ontario,
              Canada. I am passionate about all things related to software
              development, and I love to create things that are both beautiful
              and functional.
            </p>
            <br />
            <p>
              In my free time, I enjoy working on personal projects that allow
              me to explore new technologies and experiment with different
              programming languages. Some of my recent projects include
              designing and programming a Deep Learning Security tools
              repository web-app, participating in a hackathon to create a
              pandemic relief website, and developing a game for the University
              of Toronto GameMaker Competition.
            </p>
            <br />
            <p>
              As a person, I am hardworking, detail-oriented, and always eager
              to learn new things. I am a team player and value collaboration
              and communication in my work. I am excited about the opportunity
              to contribute my skills and knowledge to your organization while
              continuing to grow and develop my expertise in software
              development.
            </p>
            <br />
            <p>
              Thank you for taking the time to get to know me a little better.
              Please feel free to explore my website and reach out to me if you
              have any questions or would like to discuss potential
              collaborations.
            </p>
          </div>
          <div className="text-center md:w-1/2 md:text-left">
            <h1 className="text-2xl font-bold mb-6">Skills</h1>
            <div className="flex flex-wrap flex-row justify-center z-10 md:justify-start">
              {skills.map((item, idx) => {
                return (
                  <p
                    key={idx}
                    className="bg-gray-200 px-4 py-2 mr-2 mt-2 text-gray-500 rounded font-semibold"
                  >
                    {item.skill}
                  </p>
                );
              })}
            </div>
            <div style={{ paddingTop: "20px" }}>
              <h1 className="text-2xl font-bold mb-6">Certifications</h1>
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                }}
              >
                <Carousel showThumbs={false} showStatus={false} width="300px">
                  <div>
                    <Link href="https://www.credly.com/badges/72780e0b-d8d7-4ad5-bce5-bf4660594728/public_url">
                      <div>
                        <Image
                          src="https://demo-bucket-kap.s3.amazonaws.com/certifications/awscloudpractitioner.png"
                          alt=""
                          width={600}
                          height={600}
                          className="rounded-xl shadow-xl hover:opacity-70"
                          style={{ paddingBottom: "40px" }}
                        />
                      </div>
                    </Link>
                  </div>
                  <></>
                </Carousel>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
