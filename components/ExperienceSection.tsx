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
}

interface TimelineItemProps {
  data: Step;
  index: number;
}

const steps = [
  {
    title: "CanDeal",
    addinfo: "Enterprise Technology Intern",
    description: "June. 2024 — Present | Toronto, Ontario",
    content: [
      {
        title: "Details:",
        subtitles: [
          "Developed a secure, full-stack internal tool for user functions, leveraging Next.js and FastAPI for an efficient application",
          "Utilized AWS, Microsoft Azure, and Docker on a Linux distribution to package and deploy the application",
          "Collaborated effectively within a team, using Git commands to manage code in an Azure repository",
        ],
      },
    ],
  },
  {
    title: "FEA-TC",
    addinfo: "Inside Technical Sales",
    description: "July. 2023 — January 2024 | Mississauga, Ontario",
    content: [
      {
        title: "Accomplishments:",
        subtitles: [
          "Worked extensively with SolidWorks, a leading 3D computer-aided design (CAD) software used by engineers and designers to create, simulate, and visualize product designs",
          "Engaged in sales prospecting, expanding the customer base and driving business growth through the Zoho CRM.",
          "Provided comprehensive solutions and product information to clients, leveraging expertise in SolidWorks software and industry best practices.",
        ],
      },
    ],
  },
  {
    title: "D-Cubed Solid Consultants Inc.",
    addinfo: "Front End Web Developer",
    description: "June 2021 — August 2021 | Oakville, Ontario",
    content: [
      {
        title: "Accomplishments:",
        subtitles: [
          "Used JavaScript, HTML, and CSS, designed and implemented the front-end of a website including a main page and all accompanying pages (main page, contacts list, etc.)",
          "Ensured website compatibility across multiple devices by implementing an extensive CSS codebase optimized for both desktop and mobile access",
        ],
      },
    ],
  },
  // {
  //   title: "Storm Construction Inc.",
  //   addinfo: "Assistant Contractor",
  //   description: "2015 - Present | Ontario, Canada",
  //   content: [
  //     {
  //       title: "Accomplishments:",
  //       subtitles: [
  //         "Managed 40+ construction projects from onset to completion, delivering high-quality work and earning a reputation for dependability and professionalism",
  //         "Coordinated with clients, architects, engineers, and subcontractors to deliver projects on time and within budget, while providing excellent customer service",
  //       ],
  //     },
  //   ],
  // },
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
    <section id="experience">
      <div className="my-12 pb-12 md:pt-16 md:pb-48">
        <h1 className="text-center font-bold text-4xl">
          Experience
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
