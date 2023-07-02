import React from "react";
import Image from "next/image";
import Link from "next/link";
import SlideUp from "./SlideUp";
import { AiOutlineLink } from "react-icons/ai";
import { MdThumbUp, MdEmojiFoodBeverage } from "react-icons/md";
import {
  BsArrowUpRightSquare,
  BsStar,
  BsStarFill,
  BsStarHalf,
  BsApple,
  BsFillMoonStarsFill,
} from "react-icons/bs";
import { IoFastFood } from "react-icons/io5";

const timestamps = [
  {
    name: "2/7/2023",
    _description: [
      {
        icon: <MdEmojiFoodBeverage />,
        time: "9:30am:",
        text: "Scrambled eggs (3 eggs, 80ml egg whites, 80ml milk)",
      },
      {
        icon: <BsApple />,
        time: "1:30pm:",
        text: "Protein shake (200ml milk, 35g protein powder, 1/2 banana, 5g creatine, 1tsp cocoa powder)",
      },
      {
        icon: <IoFastFood />,
        time: "2:30pm:",
        text: "Protein shake (200ml milk, 35g protein powder, 1/2 banana, 5g creatine, 1tsp cocoa powder)",
      },
      {
        icon: <BsFillMoonStarsFill />,
        time: "5:00pm:",
        text: "Protein shake (200ml milk, 35g protein powder, 1/2 banana, 5g creatine, 1tsp cocoa powder)",
      },
      {
        icon: <BsApple />,
        time: "8:00pm:",
        text: "Protein shake (200ml milk, 35g protein powder, 1/2 banana, 5g creatine, 1tsp cocoa powder)",
      },
    ],
    get description() {
      return this._description;
    },
    set description(value) {
      this._description = value;
    },
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
        {timestamps.map((timestamp, idx) => {
          return (
            <div key={idx} className="relative">
              <SlideUp offset="-300px 0px -300px 0px">
                <div className="flex flex-col items-center animate-slideUpCubiBezier animation-delay-2 md:flex-col md:space-x-0">
                  <div className="mt-8 md:w-1/2 mx-auto text-center">
                    <h1 className="text-4xl font-bold mb-6">
                      {timestamp.name}
                    </h1>
                    <div className="text-xl leading-7 mb-4 text-neutral-600 dark:text-neutral-400">
                      {timestamp.description.map((item, idx) => (
                        <div key={idx} className="flex items-center my-2">
                          <span className="mr-2">{item.icon}</span>
                          <span>{item.time}</span>
                          <span>{item.text}</span>
                        </div>
                      ))}
                    </div>
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
