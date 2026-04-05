"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { motion } from "framer-motion";

const skills = [
  { skill: "Java" },
  { skill: "Spring Boot" },
  { skill: "JavaScript" },
  { skill: "TypeScript" },
  { skill: "Node.js" },
  { skill: "React.js" },
  { skill: "Next.js" },
  { skill: "FastAPI" },
  { skill: "Python" },
  { skill: "SQL" },
  { skill: "PostgreSQL" },
  { skill: "Power BI" },
  { skill: "HTML5" },
  { skill: "CSS" },
  { skill: "Tailwind CSS" },
  { skill: "Docker" },
  { skill: "Kubernetes" },
  { skill: "AWS" },
  { skill: "GCP" },
  { skill: "Azure" },
  { skill: "Azure DevOps" },
  { skill: "Git" },
  { skill: "Angular" },
  { skill: "Firebase" },
  { skill: "Three.js" },
  { skill: "Claude Code" },
  { skill: "OpenAI / GPT" },
  { skill: "Gemini" },
  { skill: "LLM Integration" },
  { skill: "Prompt Engineering" },
  { skill: "C" },
  { skill: "C++" },
  { skill: "Verilog" },
  { skill: "XML" },
  { skill: "Matlab" },
  { skill: "SOLIDWORKS" },
];

const skillContainer = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.04, delayChildren: 0.1 },
  },
};

const skillItem = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.25 } },
};

const AboutSection = () => {
  return (
    <section id="about">
      <div className="my-12 pb-12 md:pt-16 md:pb-48">
        <h1 className="text-center font-bold text-4xl">
          About Me
          <div className="w-12 h-1 mx-auto my-4 rounded-full bg-gradient-to-r from-blue-500 to-purple-600" />
        </h1>

        <div className="flex flex-col space-y-10 items-stretch justify-center align-top md:space-x-10 md:space-y-0 md:p-4 md:flex-row md:text-left">
          <div className="md:w-1/2">
            <h1 className="text-center text-2xl font-bold mb-6 md:text-left">
              Information
            </h1>
            <p>
              Hello, and welcome to my website! My name is Kacper Burza — a{" "}
              <span className="font-bold">Software Developer</span> based in
              Toronto, Ontario. I graduated from{" "}
              <span className="font-bold">
                Toronto Metropolitan University with a degree in Computer
                Engineering
              </span>{" "}
              and work on enterprise-grade applications across the full stack. I
              am passionate about building functional, efficient, and modern
              software — spanning front-end and back-end development, cloud
              infrastructure, and AI-assisted tooling.
            </p>
            <br />
            <p>
              I have worked on full-stack projects using{" "}
              <span className="font-bold">
                Java Spring Boot, React, Next.js, FastAPI, AWS,
              </span>{" "}
              and <span className="font-bold">Microsoft Azure</span>, including
              production deployments across{" "}
              <span className="font-bold">Kubernetes</span> clusters on GCP and
              Azure. I actively integrate{" "}
              <span className="font-bold">
                large language models into my development workflow
              </span>
              , working with tools like{" "}
              <span className="font-bold">
                Claude Code, OpenAI GPT, and Gemini
              </span>{" "}
              for everything from code generation and debugging to building
              LLM-powered features in applications.
            </p>
            <br />
            <p>
              I thrive in collaborative, cross-functional environments using{" "}
              <span className="font-bold">Agile/Scrum</span> methodologies.
              Fluent in both{" "}
              <span className="font-bold">English</span> and{" "}
              <span className="font-bold">Polish</span>, I&#39;m proficient
              across a wide range of languages including{" "}
              <span className="font-bold">
                JavaScript/TypeScript, Java, Python, C/C++,
              </span>{" "}
              and <span className="font-bold">SQL</span>.
            </p>
            <br />
            <p>
              Thank you for visiting my website! Feel free to explore my work,
              and don&#39;t hesitate to reach out if you have any questions or
              would like to discuss potential collaborations.
            </p>
          </div>

          <div className="text-center md:w-1/2 md:text-left">
            <h1 className="text-2xl font-bold mb-6">Skills</h1>
            <motion.div
              className="flex flex-wrap flex-row justify-center z-10 md:justify-start"
              variants={skillContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
            >
              {skills.map((item, idx) => (
                <motion.p
                  key={idx}
                  variants={skillItem}
                  className="px-3 py-1.5 mr-2 mt-2 text-sm font-medium rounded-md border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800/50 text-gray-700 dark:text-gray-300 hover:border-blue-400 dark:hover:border-blue-500 hover:text-blue-600 dark:hover:text-blue-400 transition-all cursor-default"
                >
                  {item.skill}
                </motion.p>
              ))}
            </motion.div>

            <div style={{ paddingTop: "20px" }}>
              <h1 className="text-2xl font-bold mb-6">Certifications</h1>
              <div className="flex justify-center">
                <Carousel showThumbs={false} showStatus={false} width="300px">
                  <div>
                    <Link
                      href="https://www.credly.com/badges/72780e0b-d8d7-4ad5-bce5-bf4660594728/public_url"
                      target="_blank"
                    >
                      <Image
                        src="https://demo-bucket-kap.s3.amazonaws.com/certifications/awscloudpractitioner.png"
                        alt="AWS Certified Cloud Practitioner"
                        width={600}
                        height={600}
                        className="rounded-xl shadow-xl hover:opacity-70"
                        style={{ paddingBottom: "40px" }}
                      />
                    </Link>
                  </div>
                  <div>
                    <Link
                      href="https://university.solidworks.com/#/catalog/course:1259052"
                      target="_blank"
                    >
                      <Image
                        src="https://demo-bucket-kap.s3.amazonaws.com/certifications/SW_badge.png"
                        alt="SolidWorks Certification"
                        width={279}
                        height={277}
                        className="rounded-xl hover:opacity-70"
                        style={{ paddingBottom: "40px" }}
                      />
                    </Link>
                  </div>
                  <div>
                    <Link
                      href="https://university.solidworks.com/#/catalog/course:24463"
                      target="_blank"
                    >
                      <Image
                        src="https://demo-bucket-kap.s3.amazonaws.com/certifications/SW_badge.png"
                        alt="SolidWorks Certification"
                        width={279}
                        height={277}
                        className="rounded-xl hover:opacity-70"
                        style={{ paddingBottom: "40px" }}
                      />
                    </Link>
                  </div>
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
