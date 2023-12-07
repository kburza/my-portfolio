import React from "react";
import styles from "./Timeline.module.css";

interface Subtitle {
  title: string;
  subtitles: string[];
}

interface Step {
  title: string;
  description: string;
  addinfo: string;
  content: Subtitle[];
  transcriptLink?: string;
  diplomaLink?: string;
}

interface TimelineItemProps {
  data: Step;
  index: number;
}

const steps = [
  {
    title: "TMU",
    addinfo:
      "Toronto Metropolitan University (f.k.a Ryerson University) — Bachelor of Computer Engineering",
    description: "Sept. 2018 — April. 2023 | Toronto, Ontario",
    content: [
      {
        title: "Achievements:",
        subtitles: [
          "Graduated with a Cumulative GPA of 3.17/4.33",
          "2021-2022 (3rd year) and 2022-2023 (4th Year) Dean’s List in the Faculty of Engineering and Architectural Science",
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
    addinfo:
      "Philip Pocock Catholic Secondary School — Secondary School Diploma",
    description: "Sept. 2014 — June 2018 | Mississauga, Ontario",
    content: [
      {
        title: "Achievements:",
        subtitles: ["Final average 80%+ ", "Completed extended French Program"],
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

const TimelineItem: React.FC<TimelineItemProps> = ({ data, index }) => {
  const { title, description, content } = data;
  return (
    <div className={styles["container-item"]}>
      <div className={styles["container-content-item"]}>
        <div className={styles["container-content-header"]}>
          <span
            className={`${styles["container-content-header-time"]} ${styles["container-roadmap-items"]}`}
          >
            {title}
          </span>
          {data.addinfo && (
            <li key={data.addinfo} className={styles["li-outside"]}>
              {data.addinfo}
            </li>
          )}
          <span className={styles["container-content-header-title"]}>
            {description}
          </span>
        </div>
        <ul className={styles["container-content-list"]}>
          {content.map((item, index) => (
            <li key={item.title} className={styles["li-outside"]}>
              {item.title}
              <ul>
                {item.subtitles.map((subtitle, index) => (
                  <span className={styles["contcont"]} key={subtitle}>
                    •&nbsp;
                    <li className={styles["li-inside"]}>{subtitle}</li>
                  </span>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

const Timeline = () => {
  return (
    <section id="education">
      <div className="my-12 pb-12 md:pt-16 md:pb-48">
        <h1 className="text-center font-bold text-4xl">
          Education
          <hr className="w-6 h-1 mx-auto my-4 bg-gray-500 border-0 rounded"></hr>
        </h1>
        <div
          className={`${styles["container-timeline"]} ${styles["container-roadMap"]}`}
        >
          {steps.map((step, index) => (
            <TimelineItem data={step} key={step.title} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Timeline;
