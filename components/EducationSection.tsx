import React from "react";
import SlideUp from "./SlideUp";

interface Subtitle {
  title: string;
  subtitles: string[];
}

interface Step {
  title: string;
  description: string;
  addinfo: string;
  content: Subtitle[];
}

const steps: Step[] = [
  {
    title: "TMU",
    addinfo:
      "Toronto Metropolitan University (f.k.a Ryerson University) — Bachelor of Computer Engineering",
    description: "Sept. 2018 — June 2023 | Toronto, Ontario",
    content: [
      {
        title: "Achievements:",
        subtitles: [
          "Graduated with a Cumulative GPA of 3.17/4.33",
          "2021-2022 (3rd year) and 2022-2023 (4th Year) Dean's List in the Faculty of Engineering and Architectural Science",
        ],
      },
      {
        title: "Courses:",
        subtitles: [
          "Computer Networks and Security (C/Java)",
          "Fundamentals of Data Engineering (SQL/XML)",
          "Microprocessor Systems (Assembly/C/C++)",
          "Systems-on-Chip Design (C/Verilog)",
          "Intelligent Systems (Python)",
          "Digital Signals Processing (Matlab)",
        ],
      },
    ],
  },
  {
    title: "Philip Pocock",
    addinfo: "Philip Pocock Catholic Secondary School — Secondary School Diploma",
    description: "Sept. 2014 — June 2018 | Mississauga, Ontario",
    content: [
      {
        title: "Achievements:",
        subtitles: ["Final average 80%+", "Completed extended French Program"],
      },
      {
        title: "Courses:",
        subtitles: [
          "Grade 11 Computer Science (Python)",
          "Grade 12 Computer Science (HTML)",
        ],
      },
    ],
  },
  {
    title: "Polish Consulate",
    addinfo:
      "Bishop Allen Catholic Secondary School — Elementary/Secondary School Diploma",
    description: "Sept. 2005 — June 2018 | Etobicoke, Ontario",
    content: [
      {
        title: "Achievements:",
        subtitles: ["Final average 85%+"],
      },
    ],
  },
];

const TimelineItem = ({ data }: { data: Step }) => (
  <div className="relative pl-10 pb-12">
    {/* Dot — z-10 keeps it above the container line */}
    <div className="absolute left-0 top-1.5 z-10 h-4 w-4 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 ring-4 ring-white dark:ring-stone-900" />

    <h3 className="text-xl font-bold uppercase tracking-wide">{data.title}</h3>
    {data.addinfo && (
      <p className="mt-0.5 text-base font-semibold text-neutral-700 dark:text-neutral-300">
        {data.addinfo}
      </p>
    )}
    <p className="mt-0.5 mb-4 text-sm text-neutral-500">{data.description}</p>

    {data.content.map((section) => (
      <div key={section.title} className="mt-2">
        <p className="mb-1 text-sm font-bold">{section.title}</p>
        <ul className="space-y-1.5">
          {section.subtitles.map((s) => (
            <li key={s} className="flex gap-2 text-sm text-neutral-600 dark:text-neutral-400">
              <span className="mt-0.5 shrink-0 text-blue-500">•</span>
              <span>{s}</span>
            </li>
          ))}
        </ul>
      </div>
    ))}
  </div>
);

const Timeline = () => (
  <section id="education">
    <div className="my-12 pb-12 md:pt-16 md:pb-48">
      <h1 className="text-center font-bold text-4xl">
        Education
        <div className="w-12 h-1 mx-auto my-4 rounded-full bg-gradient-to-r from-blue-500 to-purple-600" />
      </h1>

      <div className="relative mt-10 max-w-2xl mx-auto">
        {/* Single continuous line starting at first dot centre, masked to fade at bottom */}
        <div
          className="absolute left-[7px] top-[14px] bottom-0 w-0.5 bg-blue-500/40"
          style={{ maskImage: "linear-gradient(to bottom, black 75%, transparent 100%)" }}
        />
        {steps.map((step) => (
          <SlideUp key={step.title}>
            <TimelineItem data={step} />
          </SlideUp>
        ))}
      </div>
    </div>
  </section>
);

export default Timeline;
