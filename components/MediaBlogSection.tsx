import React from "react";
import Image from "next/image";
import Link from "next/link";
import SlideUp from "./SlideUp";
import { AiOutlineLink } from "react-icons/ai";
import { BsArrowUpRightSquare } from "react-icons/bs";

const media_elements = [
  {
    name: "Porco Russo",
    description:
      "Set in a world where air/marine travel are the primary methods of transportation, this movie about a cursed veteran pilot who has lost hope in humanity. This film was a lot deeper than I anticipated, it definitely caught me off-guard with its emotional complexity and dark themes. The genius of Hayao Miyazaki shines through the initially off-putting character designs.",
    image: "https://demo-bucket-kap.s3.amazonaws.com/mediablog/porco_rosso.jpg",
    rating: "8/10",
    link: "https://zoro.to/watch/porco-rosso-535?ep=57990",
  },
  {
    name: "Angel's Egg",
    description:
      "A dystopian lovecraftian biblical retelling of the Noah's Arc story (along with many other biblical references). This movie puts a spin on the tale, asking questions from Christianity, humanity, and faith. Although the movie is extremely slow and depressing, the art style, world-building, and character design are incredibly strong.",
    image: "https://demo-bucket-kap.s3.amazonaws.com/mediablog/angels_egg.jpg",
    rating: "9/10",
    link: "https://zoro.to/watch/angels-egg-1093?ep=84447",
  },
  {
    name: "R4 / Ridge Racer Type 4 / Direct Audio",
    description:
      "Filled with 80s synth/jazz and a drum n' bass/jungle fusion of beats, these tracks slap vigorously. It's a miracle that a soundtrack of this quality was put together for a mere PS1 game.",
    image: "https://demo-bucket-kap.s3.amazonaws.com/mediablog/r4.jpg",
    rating: "👍",
    link: "https://www.youtube.com/watch?v=dBWKwbjj020&list=PL6PHQCxAqpJTLqJjrDXhr_rXx0ta5rv4M",
  },
];

const MediaBlogSection = () => {
  const resumeUrl =
    "https://www.dropbox.com/s/clwhabhsyt7iof9/Kacper%20Burza%20Resume%202023.pdf?raw=1";

  return (
    <section
      id="mediablog"
      className="flex flex-col text-center items-center justify-center animate-fadeIn animation-delay-2 my-10 py-16 sm:py-32 md:py-48 md:flex-row md:space-x-4"
    >
      <div className="flex flex-col  my-10 py-16 space-y-28 w-full max-w-5xl">
        {media_elements.map((media_elements, idx) => {
          return (
            <div key={idx} className="relative">
              <SlideUp offset="-300px 0px -300px 0px">
                <div className="flex flex-col items-center animate-slideUpCubiBezier animation-delay-2 md:flex-col md:space-x-0">
                  <div className="md:w-1/2 relative z-10 mx-auto">
                    <Image
                      src={media_elements.image}
                      alt=""
                      width={1000}
                      height={1000}
                      className="hover:opacity-100"
                      style={{ maxHeight: "30em", objectFit: "contain" }}
                    />
                  </div>
                  <div className="mt-8 md:w-1/2 mx-auto text-center">
                    <h1 className="text-4xl font-bold mb-6">
                      {media_elements.name}
                    </h1>
                    <p className="text-xl leading-7 mb-4 text-neutral-600 dark:text-neutral-400">
                      {media_elements.description}
                    </p>
                    <p className="text-xl leading-7 mb-4 text-neutral-600 dark:text-neutral-400">
                      {media_elements.rating}
                    </p>
                    {media_elements.link && (
                      <div
                        className="flex justify-center"
                        style={{ paddingTop: "4px" }}
                      >
                        <Link href={media_elements.link} target="_blank">
                          <BsArrowUpRightSquare
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
          );
        })}
      </div>
    </section>
  );
};

export default MediaBlogSection;
