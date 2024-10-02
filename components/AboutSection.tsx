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
  { skill: "Angular" },
  { skill: "Firebase" },
  { skill: "Python" },
  { skill: "Next.js" },
  { skill: "Three.js" },
  { skill: "Tailwind CSS" },
  { skill: "Matlab" },
  { skill: "Docker" },
  { skill: "AWS" },
  { skill: "SOLIDWORKS" },
  { skill: "Sales" },
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
          <div className="md:w-1/2">
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
              Canada. I am passionate about software development, with expertise
              spanning front-end and back-end technologies, cloud computing, and
              agile methodologies. I take pride in building functional,
              efficient, and aesthetically pleasing applications.
            </p>
            <br />
            <p>
              I have worked on full-stack web development projects using{" "}
              <span className="font-bold">React, Next.js, FastAPI, AWS,</span>{" "}
              and <span className="font-bold">Microsoft Azure.</span> As an{" "}
              <span className="font-bold">Enterprise Technology Intern</span> at{" "}
              <span className="font-bold">CanDeal</span>, I developed a secure
              internal tool leveraging technologies like{" "}
              <span className="font-bold">
                Next.js, FastAPI, AWS App Studio,
              </span>{" "}
              and{" "}
              <span className="font-bold">Amazon RDS Aurora PostgreSQL</span>{" "}
              for data management. I deployed applications using{" "}
              <span className="font-bold">Docker</span> and collaborated with
              teams using <span className="font-bold">Azure DevOps</span>.
            </p>
            <br />
            <p>
              In addition to my professional experience, I have led personal
              projects such as a{" "}
              <span className="font-bold">
                Deep Learning Security Tools Repository Web-App
              </span>{" "}
              and participated in a hackathon to create a{" "}
              <span className="font-bold">pandemic relief website</span>. I
              thrive in collaborative team environments, using{" "}
              <span className="font-bold">Agile/Scrum</span> methodologies and
              cross-functional teamwork. Fluent in both{" "}
              <span className="font-bold">English</span> and{" "}
              <span className="font-bold">Polish</span>, I’m proficient in a
              range of programming languages including{" "}
              <span className="font-bold">
                JavaScript/TypeScript, C/C++, Python,
              </span>{" "}
              and <span className="font-bold">SQL</span>.
            </p>
            <br />
            <p>
              Thank you for visiting my website! Feel free to explore my work,
              and don’t hesitate to reach out if you have any questions or would
              like to discuss potential collaborations.
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
                    <Link
                      href="https://www.credly.com/badges/72780e0b-d8d7-4ad5-bce5-bf4660594728/public_url"
                      target="_blank"
                    >
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
                  <div>
                    <Link
                      href="https://university.solidworks.com/#/catalog/course:1259052"
                      target="_blank"
                    >
                      <div>
                        <Image
                          src="https://demo-bucket-kap.s3.amazonaws.com/certifications/SW_badge.png"
                          alt=""
                          width={279}
                          height={277}
                          className="rounded-xl hover:opacity-70"
                          style={{ paddingBottom: "40px" }}
                        />
                      </div>
                    </Link>
                  </div>
                  <div>
                    <Link
                      href="https://university.solidworks.com/#/catalog/course:24463"
                      target="_blank"
                    >
                      <div>
                        <Image
                          src="https://demo-bucket-kap.s3.amazonaws.com/certifications/SW_badge.png"
                          alt=""
                          width={279}
                          height={277}
                          className="rounded-xl hover:opacity-70"
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
