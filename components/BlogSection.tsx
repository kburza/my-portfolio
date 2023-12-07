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

const blogs = [
  {
    name: "Art Blog",
    description:
      "Check out the art and designs that I work on in service of projects or just as a hobby.",
    image:
      "https://demo-bucket-kap.s3.amazonaws.com/my-portfolio-projects-assets/my-portfolio-projects-assets/artblog.png",
    link: "/artblog/#",
  },
  {
    name: "Media Blog",
    description:
      "Also, view my reviews and opinions on the various media that I consume in my spare time.",
    image:
      "https://demo-bucket-kap.s3.amazonaws.com/my-portfolio-projects-assets/my-portfolio-projects-assets/mediablog.png",
    link: "/mediablog/#",
  },
];

const BlogSection = () => {
  return (
    <section id="blogs" style={{ marginBottom: "15em" }}>
      <h1
        className="my-10 text-center
font-bold text-4xl"
      >
        Blog
        <hr className="w-6 h-1 mx-auto my-4 bg-gray-500 border-0 rounded"></hr>
      </h1>
      <div className="flex flex-col space-y-28">
        {blogs.map((project, idx) => (
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
                </div>
              </div>
            </SlideUp>
          </div>
        ))}
      </div>
    </section>
  );
};

export default BlogSection;
