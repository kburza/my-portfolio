import React from "react";
import Image from "next/image";
import Link from "next/link";
import SlideUp from "./SlideUp";
import { BsGithub, BsArrowUpRightSquare } from "react-icons/bs";
import { FaAws } from "react-icons/fa";

const certifications = [
  {
    name: "AWS Cloud Practitioner",
    description: "Course Code: CLF-C01",
    image:
      "https://demo-bucket-kap.s3.amazonaws.com/certifications/awscloudpractitioner.png",
    link: "https://aws.amazon.com/certification/certified-cloud-practitioner/",
  },
];

const CertificationsSection = () => {
  return (
    <section id="certifications" style={{ marginBottom: "15em" }}>
      <h1 className="my-10 text-center font-bold text-4xl">
        Certifications
        <hr className="w-6 h-1 mx-auto my-4 bg-gray-500 border-0 rounded"></hr>
      </h1>
      <div className="flex flex-col  my-10 py-16 space-y-28 w-full max-w-5xl">
        {certifications.map((certifications, idx) => {
          return (
            <div key={idx} className="relative">
              <SlideUp offset="-300px 0px -300px 0px">
                <div className="flex flex-col items-center animate-slideUpCubiBezier animation-delay-2 md:flex-col md:space-x-0">
                  <div className="md:w-1/2 relative z-10 mx-auto">
                    <Image
                      src={certifications.image}
                      alt=""
                      width={1000}
                      height={1000}
                      className="hover:opacity-100"
                      style={{ maxHeight: "30em", objectFit: "contain" }}
                    />
                  </div>
                  <div className="mt-8 md:w-1/2 mx-auto text-center">
                    <h1 className="text-4xl font-bold mb-6">
                      {certifications.name}
                    </h1>
                    <p className="text-xl leading-7 mb-4 text-neutral-600 dark:text-neutral-400">
                      {certifications.description}
                    </p>
                    {/* {certifications.link && (
                      <div
                        className="flex justify-center"
                        style={{ paddingTop: "4px" }}
                      >
                        <Link href={certifications.link} target="_blank">
                          <BsArrowUpRightSquare
                            size={30}
                            className="hover:-translate-y-1 transition-transform cursor-pointer"
                          />
                        </Link>
                      </div>
                    )} */}
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

export default CertificationsSection;
