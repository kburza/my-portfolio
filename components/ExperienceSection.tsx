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
          "Worked extensively with SolidWorks, a leading 3D CAD software used by engineers and designers to create, simulate, and visualize product designs",
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
  <section id="experience">
    <div className="my-12 pb-12 md:pt-16 md:pb-48">
      <h1 className="text-center font-bold text-4xl">
        Experience
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
