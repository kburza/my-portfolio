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
    title: "Scotiabank",
    addinfo: "Software Developer — Global Wealth Engineering",
    description: "March 2025 — Present | Toronto, Ontario",
    content: [
      {
        title: "Key Contributions:",
        subtitles: [
          "Contributed to upgrading and modernizing enterprise-level applications built in Java Spring Boot and Node.js, ensuring seamless integration and deployment across Kubernetes clusters in GCP and Azure",
          "Leveraged Git and Bitbucket for version control and CI/CD pipelines, taking part in over a dozen production deployments, with responsibilities including QA validation, debugging, unit testing, and security remediation",
          "Created and optimized Power BI dashboards for analyzing incident and operational data from ServiceNow, utilizing SQL to query data from Microsoft SQL Servers, improving visibility and reporting accuracy",
          "Led the development of multiple proof-of-concept projects, including a React (TypeScript) client onboarding web app and a token-based authentication microservice, designed for secure, modular, and scalable architecture",
        ],
      },
    ],
  },
  {
    title: "CanDeal",
    addinfo: "Enterprise Technology Intern",
    description: "June 2024 — September 2024 | Toronto, Ontario",
    content: [
      {
        title: "Details:",
        subtitles: [
          "Developed a secure, full-stack internal tool to enhance user functionality using Next.js for the front end and FastAPI for the back end, ensuring a responsive and high-performing application",
          "Utilized AWS App Studio for streamlined web development and integration of internal tools, and implemented a robust backend using an Amazon RDS Aurora PostgreSQL database for efficient data management",
          "Deployed and managed applications on AWS and Microsoft Azure, utilizing Docker containers on a Linux environment for seamless packaging and deployment",
          "Collaborated closely with cross-functional teams, effectively managing code with Git in an Azure DevOps environment to maintain high code quality and version control",
        ],
      },
    ],
  },
  {
    title: "FEA-TC",
    addinfo: "Inside Technical Sales",
    description: "July 2023 — January 2024 | Mississauga, Ontario",
    content: [
      {
        title: "Accomplishments:",
        subtitles: [
          "Worked extensively with SolidWorks, a leading 3D computer-aided design (CAD) software used by engineers and designers to create, simulate, and visualize product designs",
          "Engaged in sales prospecting, expanding the customer base and driving business growth through the Zoho CRM",
          "Provided comprehensive solutions and product information to clients, leveraging expertise in SolidWorks software and industry best practices",
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
          "Used JavaScript, HTML, and CSS to design and implement the front-end of a website including all main and supporting pages",
          "Ensured website compatibility across multiple devices by implementing an extensive CSS codebase optimized for both desktop and mobile access",
        ],
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
          {content.map((item) => (
            <li key={item.title} className={styles["li-outside"]}>
              {item.title}
              <ul>
                {item.subtitles.map((subtitle) => (
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
