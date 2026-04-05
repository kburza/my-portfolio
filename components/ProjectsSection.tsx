import React from "react";
import Image from "next/image";
import Link from "next/link";
import SlideUp from "./SlideUp";
import { BsGithub, BsArrowUpRightSquare } from "react-icons/bs";

const projects = [
  {
    name: "Implant ID",
    description:
      "Full-stack dental implant identification SaaS portal. Users navigate a step-by-step filtering wizard to identify implants across a 250+ record database spanning 30+ brands. Built with Next.js, React 19, TypeScript, Material UI, Drizzle ORM, Neon Postgres, and NextAuth — deployed on Vercel.",
    image:
      "https://demo-bucket-kap.s3.us-east-1.amazonaws.com/my-portfolio-projects-assets/my-portfolio-projects-assets/dentist-app.png",
    github: "",
    link: "https://dental-data-portal.vercel.app/",
  },
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
    name: "Chatsper: Chat App",
    description:
      "Private chat app built with Angular and Firebase for secure user authentication. Includes cryptography implementation.",
    image:
      "https://demo-bucket-kap.s3.amazonaws.com/my-portfolio-projects-assets/my-portfolio-projects-assets/chatsper.png",
    github: "https://github.com/kburza/ang-chat-app",
    link: "https://kburza.github.io/ang-chat-app/",
  },
  {
    name: "Arashi 2.0",
    description:
      "Node/React port of the original Arashi website hosted on Vercel. Features an e-commerce look with dynamic and visually aesthetic elements.",
    image:
      "https://demo-bucket-kap.s3.amazonaws.com/my-portfolio-projects-assets/my-portfolio-projects-assets/arashi2.png",
    github: "https://github.com/kburza/ArashiFurniture2",
    link: "https://arashi-furniture2.vercel.app/",
  },
  {
    name: "Python SQL Database Manager",
    description:
      "Python script with a local MySQL server connector for creating, storing, and manipulating SQL databases.",
    image:
      "https://demo-bucket-kap.s3.amazonaws.com/my-portfolio-projects-assets/my-portfolio-projects-assets/python_sql.png",
    github: "https://github.com/kburza/PythonSQLDatabase",
    link: "https://github.com/kburza/PythonSQLDatabase",
  },
  {
    name: "Angular Three.js Geometry Demo",
    description:
      "Blends Angular and Three.js to craft a visually engaging 3D environment showcasing dynamic sphere geometry with ambient lighting and built-in controls.",
    image:
      "https://demo-bucket-kap.s3.amazonaws.com/my-portfolio-projects-assets/my-portfolio-projects-assets/ang_threejs.png",
    github: "https://github.com/kburza/ang-threejs",
    link: "https://kburza.github.io/ang-threejs/",
  },
  {
    name: "Arashi Art Decor",
    description:
      "Sleek artisan wood home decor website for Arashi Inc., based in Mississauga, Ontario.",
    image:
      "https://demo-bucket-kap.s3.amazonaws.com/my-portfolio-projects-assets/my-portfolio-projects-assets/arashi.png",
    github: "https://github.com/kburza/ArashiFurniture",
    link: "http://arashiartdecor.ca/",
  },
  {
    name: "AWS Node Docker Demo",
    description:
      "A Node.js app in a Docker container displaying the Docker logo via ASCII art. Deployed on an AWS EC2 Ubuntu instance.",
    image:
      "https://demo-bucket-kap.s3.amazonaws.com/my-portfolio-projects-assets/my-portfolio-projects-assets/docker.png",
    github: "https://github.com/kburza/docker-demo",
    link: "https://github.com/kburza/docker-demo",
  },
  {
    name: "Java SQL Database Manager",
    description:
      "Java applet to explore and manage SQL databases through the JDBC API with a dynamic ASCII UI and a fully realized headphones database.",
    image:
      "https://demo-bucket-kap.s3.amazonaws.com/my-portfolio-projects-assets/my-portfolio-projects-assets/head.png",
    github: "https://github.com/kburza/sql-xml-headphones-database",
    link: "https://github.com/kburza/sql-xml-headphones-database",
  },
  {
    name: "Secure Java Bank App",
    description:
      "An encrypted (RSA/AES) Java GUI for bank account management using socket programming and an SQL database backend.",
    image:
      "https://demo-bucket-kap.s3.amazonaws.com/my-portfolio-projects-assets/my-portfolio-projects-assets/bank.png",
    github: "https://github.com/kburza/java-bank-socket-app",
    link: "https://github.com/kburza/java-bank-socket-app",
  },
  {
    name: "Cyclone V FPGA Media Centre",
    description:
      "A lightweight media centre on the ALTERA Cyclone V FPGA coded in C, with hand-drawn graphics and on-board controls.",
    image:
      "https://demo-bucket-kap.s3.amazonaws.com/my-portfolio-projects-assets/my-portfolio-projects-assets/board.png",
    github: "https://github.com/kburza/cyclone-v-fpga-media-center",
    link: "https://github.com/kburza/cyclone-v-fpga-media-center",
  },
];

const ProjectCard = ({ project }: { project: (typeof projects)[0] }) => {
  const hasExternalLink = project.link !== project.github;

  return (
    <div className="group flex flex-col h-[400px] rounded-2xl border border-gray-200 bg-white dark:border-gray-700/50 dark:bg-gray-800/40 overflow-hidden shadow-sm hover:shadow-xl hover:shadow-blue-500/10 dark:hover:shadow-blue-500/5 hover:-translate-y-1 transition-all duration-300">
      <div className="overflow-hidden">
        <Link href={project.link} target="_blank">
          <Image
            src={project.image}
            alt={project.name}
            width={800}
            height={500}
            className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500"
          />
        </Link>
      </div>
      <div className="flex flex-col flex-1 p-5">
        <h3 className="text-lg font-bold mb-2">{project.name}</h3>
        <p className="text-sm leading-relaxed text-neutral-600 dark:text-neutral-400 mb-auto line-clamp-4">
          {project.description}
        </p>
        <div className="flex items-center gap-3 pt-4">
          <Link href={project.github} target="_blank">
            <BsGithub
              size={20}
              className="text-neutral-500 hover:text-black dark:hover:text-white hover:-translate-y-0.5 transition-all"
            />
          </Link>
          {hasExternalLink && (
            <Link href={project.link} target="_blank">
              <BsArrowUpRightSquare
                size={20}
                className="text-neutral-500 hover:text-blue-500 hover:-translate-y-0.5 transition-all"
              />
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

const ProjectsSection = () => {
  return (
    <section id="projects" className="mb-48">
      <h1 className="my-10 text-center font-bold text-4xl">
        Projects
        <div className="w-12 h-1 mx-auto my-4 rounded-full bg-gradient-to-r from-blue-500 to-purple-600" />
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {projects.map((project, idx) => (
          <SlideUp key={idx}>
            <ProjectCard project={project} />
          </SlideUp>
        ))}
      </div>
    </section>
  );
};

export default ProjectsSection;
