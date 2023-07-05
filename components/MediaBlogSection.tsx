import React from "react";
import Image from "next/image";
import Link from "next/link";
import SlideUp from "./SlideUp";
import { AiOutlineLink } from "react-icons/ai";
import { MdThumbUp } from "react-icons/md";
import {
  BsArrowUpRightSquare,
  BsGlobeAmericas,
  BsStar,
  BsStarFill,
  BsStarHalf,
} from "react-icons/bs";

const media_elements = [
  {
    name: "NieR: Automata",
    description:
      "Once again, Yoko Taro demonstrates his masterful ability to create a captivating world filled with deeply engaging characters in NieR Automata. Unlike its predecessor, Nier Replicant, this game introduces a near-perfect combat system that remains consistently enjoyable and addictive, even after the fifth playthrough. The seamless harmony between its compelling story, mesmerizing music, stunning visuals, and immersive gameplay is nothing short of extraordinary, making NieR Automata an unparalleled masterpiece within the realm of video games. Yoko Taro has proven to be the Shakespeare of the gaming medium.",
    image: "https://demo-bucket-kap.s3.amazonaws.com/mediablog/nieraut.jpg",
    rating: (
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <BsStarFill style={{ marginRight: "2px", color: "#FFD700" }} />
        <BsStarFill style={{ marginRight: "2px", color: "#FFD700" }} />
        <BsStarFill style={{ marginRight: "2px", color: "#FFD700" }} />
        <BsStarFill style={{ marginRight: "2px", color: "#FFD700" }} />
        <BsStarFill style={{ marginRight: "2px", color: "#FFD700" }} />
      </div>
    ),
    link: "https://nierautomata.square-enix-games.com/en-us/age-gate/",
  },
  {
    name: "NieR Replicant ver.1.22474487139...",
    description:
      "This is undeniably one of the most remarkable story-driven games I've had the pleasure of experiencing. Its characters, despite their 'uncanny' nature, manage to grip your heartstrings, while the profoundly philosophical narrative leaves your mind utterly astounded. However, the game's only letdown lies in its repetitive and monotonous gameplay. The combat is pretty shallow, and the quests frequently border on being excessively tedious, burdened with an abundance of backtracking. This game's soundtrack is nothing short of perfect and provided me with comfort on many sleepless nights.",
    image: "https://demo-bucket-kap.s3.amazonaws.com/mediablog/nierrep.png",
    rating: (
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <BsStarFill style={{ marginRight: "2px" }} />
        <BsStarFill style={{ marginRight: "2px" }} />
        <BsStarFill style={{ marginRight: "2px" }} />
        <BsStarHalf style={{ marginRight: "2px" }} />
        <BsStar style={{ marginRight: "2px" }} />
      </div>
    ),
    link: "https://nier.square-enix-games.com/en-us/",
  },
  {
    name: "Dai Dark",
    description:
      "A fun and refreshing take on the sci-fi genre, Q-Hayashida (known for her work on Dorohedoro) delivers her signature 'gruesome' style of storytelling with a lovable cast of characters. Contrasting light-hearted story beats with body horror and a slight hint of mystery, this story manages to weave stone-age type visuals into a cosmic tale. The series is only 5 volumes deep as of this review, but the potential here is aStRonOmiCaL.",
    image: "https://demo-bucket-kap.s3.amazonaws.com/mediablog/daidark.png",
    rating: (
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <MdThumbUp style={{ marginRight: "2px" }} />
      </div>
    ),
    link: "https://www.penguinrandomhouse.ca/books/701926/dai-dark-vol-1-by-q-hayashida/9781648271168",
  },
  {
    name: "Monster",
    description:
      "Proclaimed as being one of the best stories ever told (in a non-fictional setting) in anime/mange, Monster had set my expectations high, anticipating a conclusion that would leave a lasting impact rather than a sense of emptiness. Considering its expansive scope and the profound connections established between the huge cast of characters, I hoped that the climax would have been more grand and fulfilling overall.",
    image: "https://demo-bucket-kap.s3.amazonaws.com/mediablog/monster.png",
    rating: (
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <BsStarFill style={{ marginRight: "2px" }} />
        <BsStarFill style={{ marginRight: "2px" }} />
        <BsStarFill style={{ marginRight: "2px" }} />
        <BsStar style={{ marginRight: "2px" }} />
        <BsStar style={{ marginRight: "2px" }} />
      </div>
    ),
    link: "https://zoro.to/monster-37",
  },
  {
    name: "Porco Russo",
    description:
      "Set in a world where air/marine travel are the primary methods of transportation, this movie about a cursed veteran pilot who has lost hope in humanity. This film was a lot deeper than I anticipated, it definitely caught me off-guard with its emotional complexity and dark themes. The genius of Hayao Miyazaki shines through the initially off-putting character designs.",
    image: "https://demo-bucket-kap.s3.amazonaws.com/mediablog/porco_rosso.jpg",
    rating: (
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <BsStarFill style={{ marginRight: "2px" }} />
        <BsStarFill style={{ marginRight: "2px" }} />
        <BsStarFill style={{ marginRight: "2px" }} />
        <BsStarFill style={{ marginRight: "2px" }} />
        <BsStar style={{ marginRight: "2px" }} />
      </div>
    ),
    link: "https://zoro.to/watch/porco-rosso-535?ep=57990",
  },
  {
    name: "Angel's Egg",
    description:
      "A dystopian lovecraftian biblical retelling of the Noah's Arc story (along with many other biblical references). This movie puts a spin on the tale, asking questions from Christianity, humanity, and faith. Although the movie is extremely slow and depressing, the art style, world-building, and character design are incredibly strong.",
    image: "https://demo-bucket-kap.s3.amazonaws.com/mediablog/angels_egg.jpg",
    rating: (
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <BsStarFill style={{ marginRight: "2px" }} />
        <BsStarFill style={{ marginRight: "2px" }} />
        <BsStarFill style={{ marginRight: "2px" }} />
        <BsStarFill style={{ marginRight: "2px" }} />
        <BsStarHalf style={{ marginRight: "2px" }} />
      </div>
    ),
    link: "https://zoro.to/watch/angels-egg-1093?ep=84447",
  },
  {
    name: "R4 / Ridge Racer Type 4 / Direct Audio",
    description:
      "Filled with 80s synth/jazz and a drum n' bass/jungle fusion of beats, these tracks slap vigorously. It's a miracle that a soundtrack of this quality was put together for a mere PS1 game.",
    image: "https://demo-bucket-kap.s3.amazonaws.com/mediablog/r4.jpg",
    rating: (
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <MdThumbUp style={{ marginRight: "2px" }} />
      </div>
    ),
    link: "https://www.youtube.com/watch?v=dBWKwbjj020&list=PL6PHQCxAqpJTLqJjrDXhr_rXx0ta5rv4M",
  },
  {
    name: "Mother 3",
    description:
      "Since it was never localized, not many outside of Japan got to experience this heartwarming (and at times, soul-crushing) tale. Once you get past the 'quirky' off-beat moments of Shigesato Itoi's slighlty cringe sense of humour, the story and characters really manage to your soul. At the end of it, I was sobbing on the couch like a baby. Everyone I talk to is sick of hearing about this game.",
    image: "https://demo-bucket-kap.s3.amazonaws.com/mediablog/mother3.jpg",
    rating: (
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <BsStarFill style={{ marginRight: "2px", color: "#FFD700" }} />
        <BsStarFill style={{ marginRight: "2px", color: "#FFD700" }} />
        <BsStarFill style={{ marginRight: "2px", color: "#FFD700" }} />
        <BsStarFill style={{ marginRight: "2px", color: "#FFD700" }} />
        <BsStarFill style={{ marginRight: "2px", color: "#FFD700" }} />
      </div>
    ),
    link: "http://mother3.fobby.net/",
  },
  {
    name: "Mother 2/Earthbound",
    description:
      "Regarded as a cult classic by many, Earthbound encompasses a series of unpredictable and endearing story beats that continue to exert significant influence in today's gaming landscape. While it may not reach the storytelling heights of Shigesato Itoi's Mother 3, it possesses a distinct sense of authorship that can only be found in his handful of titles. I would highly recommend playing this game with the official guide, as it adheres to several archaic design choices commonly seen in retro games of its time, such as excessively tedious mazes and a lack of clear direction.",
    image: "https://demo-bucket-kap.s3.amazonaws.com/mediablog/mother2.jpg",
    rating: (
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <BsStarFill style={{ marginRight: "2px" }} />
        <BsStarFill style={{ marginRight: "2px" }} />
        <BsStarFill style={{ marginRight: "2px" }} />
        <BsStarHalf style={{ marginRight: "2px" }} />
        <BsStar style={{ marginRight: "2px" }} />
      </div>
    ),
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
                          <BsGlobeAmericas
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
