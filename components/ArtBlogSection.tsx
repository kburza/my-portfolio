import React from "react";
import Image from "next/image";
import Link from "next/link";
import { BsArrowUpRightSquare, BsGithub } from "react-icons/bs";
import SlideUp from "./SlideUp";
import { SiLinktree } from "react-icons/si";
import dynamic from "next/dynamic";

const ThreeD = dynamic(() => import("@/public/artblog/3D/ThreeD"), {
  ssr: false,
});

const art_elements = [
  {
    name: "Arashi Business Card (Front)",
    description:
      "Front design of Arashi Art Decor's business card. The marketing material features a color palette that mactehs the website's design as well as a composite promotional image of a wood resin table.",
    image:
      "https://demo-bucket-kap.s3.amazonaws.com/artblog/Arashi_Business_Card_Front.jpeg",
  },
  {
    name: "Arashi Business Card (Back)",
    description:
      "Front design of Arashi Art Decor's business card. The art features a composite promotional image of a wood resin table (similar to the front of the business card) as well as a scannable QR code which directs the user to the business' Linktree (for main webpage, social medias, etc.) ",
    linktree: "https://linktr.ee/arashiartdecor",
    image:
      "https://demo-bucket-kap.s3.amazonaws.com/artblog/Arashi_Business_Card_Back.jpeg",
  },
  {
    name: "eMiL",
    description:
      "An interactive mascot/helper for the DLSTR-ML website. His task is to aid any newcomers to the world of machine learning model scanning and security.",
    image: "https://demo-bucket-kap.s3.amazonaws.com/artblog/eMiL.png",
  },
  {
    name: "eViL",
    description:
      "The 'archnemesis' of eMiL, he represents the bugs/vulnerabiltiies that are sustained by a model during attacks.",
    image: "https://demo-bucket-kap.s3.amazonaws.com/artblog/eViL.png",
  },
  {
    name: "Title Screen",
    description:
      "Made for the 2016 University of Toronto Game Maker Competition, this serves as the title screen/backdrop for the game's futuristic dystopian setting.",
    image: "https://demo-bucket-kap.s3.amazonaws.com/artblog/gmc1.PNG",
  },
  {
    name: "Huai",
    description:
      "A planned in-game boss, Huai (Chinese: Evil/Wicked) ruled over a district depicted on the back of his head. He was designed after ancient warriors with influences from modern biker helmets ('16 UofT Game Maker Competition)",
    image: "https://demo-bucket-kap.s3.amazonaws.com/artblog/gmc2.PNG",
  },
  {
    name: "Xingzhi",
    description:
      "A planned in-game boss, Xingzhi (Chinese: Nature) ruled over a district depicted on the back of his head. This boss was designed after nature/greenery and would be set in a lush overgrown metropolis ('16 UofT Game Maker Competition)",
    image: "https://demo-bucket-kap.s3.amazonaws.com/artblog/gmc3.PNG",
  },
  {
    name: "Ren",
    description:
      "The protagonist of the game, Ren is a cyborg ninja that carries a sword with which uses to vanquish his enemies ('16 UofT Game Maker Competition)",
    image: "https://demo-bucket-kap.s3.amazonaws.com/artblog/gmc4.PNG",
  },
  {
    name: "Undertale Fanart",
    description: "Two heroes from the game admiring a castle in the night sky.",
    image:
      "https://demo-bucket-kap.s3.amazonaws.com/artblog/undertalefanart.jpg",
  },
  {
    name: "Pylon",
    description:
      "Twitch streamer commision. This rendition of the Pylon is expressing shock/pain. ",
    image: "https://demo-bucket-kap.s3.amazonaws.com/artblog/pylon.png",
  },
  {
    name: "Album Art 1",
    description:
      "Unused album art for a personal project long ago. The scrapped project was supposed to feature a lofi/rap fusion.",
    image: "https://demo-bucket-kap.s3.amazonaws.com/artblog/unusedalbum.PNG",
  },
  {
    name: "Album Art 2",
    description:
      "Unused album art for a personal project long ago. The scrapped project was supposed to be a trap banger.",
    image: "https://demo-bucket-kap.s3.amazonaws.com/artblog/unusedalbum2.PNG",
  },
  {
    name: "dump",
    description: "dump",
    image: "https://demo-bucket-kap.s3.amazonaws.com/artblog/dump1.jpeg",
  },
];

const ArtBlogSection = () => {
  return (
    <>
      <section
        id="artblog"
        className="flex flex-col text-center items-center justify-center animate-fadeIn animation-delay-2 my-10 py-16 sm:py-32 md:py-48 md:flex-row md:space-x-4"
      >
        <div className="flex flex-col  my-10 py-16 space-y-28 w-full max-w-5xl">
          {art_elements.map((art_element, idx) => {
            return (
              <>
                {idx === 2 && (
                  <SlideUp offset="-300px 0px -300px 0px">
                    <ThreeD />
                    <div className="mt-8 md:w-1/2 mx-auto text-center">
                      <h1 className="text-4xl font-bold mb-6">DLSTR-ML Logo</h1>
                      <p className="text-xl leading-7 mb-4 text-neutral-600 dark:text-neutral-400">
                        A 3D Logo rendering created for the Deep Learning
                        Security Tools Repository web-app. It was implemented
                        using the Three.js fiber package and serves as a
                        simplified dynamic version of the logo to promote
                        positive user interaction upon entry.
                      </p>
                    </div>
                  </SlideUp>
                )}
                <div key={idx} className="relative">
                  <SlideUp offset="-300px 0px -300px 0px">
                    <div className="flex flex-col items-center animate-slideUpCubiBezier animation-delay-2 md:flex-col md:space-x-0">
                      <div className="md:w-1/2 relative z-10 mx-auto">
                        <Image
                          src={art_element.image}
                          alt=""
                          width={1000}
                          height={1000}
                          className="hover:opacity-100"
                          style={{ maxHeight: "30em", objectFit: "contain" }}
                        />
                      </div>
                      <div className="mt-8 md:w-1/2 mx-auto text-center">
                        <h1 className="text-4xl font-bold mb-6">
                          {art_element.name}
                        </h1>
                        <p className="text-xl leading-7 mb-4 text-neutral-600 dark:text-neutral-400">
                          {art_element.description}
                        </p>
                        {art_element.linktree && (
                          <div
                            className="flex justify-center"
                            style={{ paddingTop: "4px" }}
                          >
                            <Link href={art_element.linktree} target="_blank">
                              <SiLinktree
                                size={30}
                                className="hover:-translate-y-1 transition-transform cursor-pointer"
                              />
                            </Link>
                          </div>
                        )}
                        <div className="flex flex-row align-bottom space-x-4"></div>
                      </div>
                    </div>
                  </SlideUp>
                </div>
              </>
            );
          })}
        </div>
      </section>
    </>
  );
};

export default ArtBlogSection;
