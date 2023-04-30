import React from "react";
import Image from "next/image";
import Link from "next/link";
import { BsArrowUpRightSquare, BsGithub } from "react-icons/bs";
import SlideUp from "./SlideUp";

const art_elements = [
  {
    name: "eMiL",
    description:
      "An interactive mascot/helper for the DLSTR-ML website. His task is to aid any newcomers to the world of machine learning model scanning and security.",
    image: "/artblog/eMiL.png",
  },
  {
    name: "eViL",
    description:
      "The 'archnemesis' of eMiL, he representes the bugs/vulnerabiltiies that are sustained by a model during attacks.",
    image: "/artblog/eViL.png",
  },
  {
    name: "Title Screen",
    description:
      "Made for the 2016 University of Toronto Game Maker Competition, this serves as the title screen/backdrop for the game's futuristic dystopian setting.",
    image: "/artblog/gmc1.PNG",
  },
  {
    name: "Huai",
    description:
      "A planned in-game boss, Huai (Chinese: Evil/Wicked) ruled over a district depicted on the back of his head. He was designed after ancient warriors with influences from modern biker helmets ('16 UofT Game Maker Competition)",
    image: "/artblog/gmc2.PNG",
  },
  {
    name: "Xingzhi",
    description:
      "A planned in-game boss, Xingzhi (Chinese: Nature) ruled over a district depicted on the back of his head. This boss was designed after nature/greenery and would be set in a lush overgrown metropolis ('16 UofT Game Maker Competition)",
    image: "/artblog/gmc3.PNG",
  },
  {
    name: "Ren",
    description:
      "The protagonist of the game, Ren is a cyborg ninja that carries a sword with which uses to vanquish his enemies ('16 UofT Game Maker Competition)",
    image: "/artblog/gmc4.PNG",
  },
  {
    name: "Undertale Fanart",
    description: "Two heroes from the game admiring a castle in the night sky.",
    image: "/artblog/undertalefanart.jpg",
  },
  {
    name: "dump",
    description: "dump",
    image: "/artblog/dump1.jpeg",
  },
];

const ArtBlogSection = () => {
  const resumeUrl =
    "https://www.dropbox.com/s/clwhabhsyt7iof9/Kacper%20Burza%20Resume%202023.pdf?raw=1";

  return (
    <section
      id="artblog"
      className="flex flex-col text-center items-center justify-center animate-fadeIn animation-delay-2 my-10 py-16 sm:py-32 md:py-48 md:flex-row md:space-x-4"
    >
      <div className="flex flex-col  my-10 py-16 space-y-28 w-full max-w-5xl">
        {art_elements.map((art_elements, idx) => {
          return (
            <div key={idx} className="relative">
              <SlideUp offset="-300px 0px -300px 0px">
                <div className="flex flex-col items-center animate-slideUpCubiBezier animation-delay-2 md:flex-col md:space-x-0">
                  <div className="md:w-1/2 relative z-10 mx-auto">
                    <Image
                      src={art_elements.image}
                      alt=""
                      width={1000}
                      height={1000}
                      className="hover:opacity-100"
                      style={{ maxHeight: "30em", objectFit: "contain" }}
                    />
                  </div>
                  <div className="mt-8 md:w-1/2 mx-auto text-center">
                    <h1 className="text-4xl font-bold mb-6">
                      {art_elements.name}
                    </h1>
                    <p className="text-xl leading-7 mb-4 text-neutral-600 dark:text-neutral-400">
                      {art_elements.description}
                    </p>
                    <div className="flex flex-row align-bottom space-x-4"></div>
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

export default ArtBlogSection;
