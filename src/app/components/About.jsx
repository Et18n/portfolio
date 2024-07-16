"use client";
import React, { useState, useTransition } from "react";
import Image from "next/image";
import Tabbtn from "./Tabbtn";
const Tab_Data = [
  {
    title: "Skills",
    id: "skills",
    content: (
      <ul className="mt-5  grid grid-cols-2">
        <li>HTML</li>
        <li>CSS</li>
        <li>JAVASCRIPT</li>
        <li>REACT</li>
        <li>MYSQL</li>
        <li>MONGODB</li>
        <li>NEXT.JS</li>
        <li>PHP</li>
        <li>C,C++</li>
        <li>PYTHON</li>
        <li>EXPRESS</li>
        <li>NODE.js</li>
      </ul>
    ),
  },
  {
    title: "Education",
    id: "education",
    content: (
      <ul>
        <li>Xavier's Institute of Engineering</li>
      </ul>
    ),
  },
  {
    title: "Certification",
    id: "certification",
    content: (
      <ul>
        <li>IBM: AI/ML</li>
      </ul>
    ),
  },
];

const About = () => {
  const [Tab, setTab] = useState("skills");
  const [startTransition, isPending] = useTransition();
  const handleTabChange = (id) => {
    setTab(id);
  };
  return (
    <div className="text-white grid md:grid-cols-2 mt-12 md:mt-36 justify-items-center  text-center">
      <Image
        className=" mb-10 rounded-lg"
        src="/images/about-image.png"
        width={400}
      height={10}
        alt="about-image"
      />
      <div>
        <h2 className=" text-white text-3xl font-bold mb-6">About ME</h2>
        <div>
          <p className=" md:max-w-[500px] md:text-left">
            Hello! I'm Ethan, a web developer with a passion for creating
            intuitive and visually appealing websites. With a year of hands-on
            experience, I have immersed myself in the world of web development,
            learning and growing with each project I undertake. I have built a
            solid foundation in HTML, CSS, and JavaScript, and I'm continually
            expanding my knowledge in modern frameaworks like React and Next.js
            . My recent projects include developing responsive websites and
            small web applications that prioritize user experience and
            accessibility.
          </p>
          <div className="flex flex-row space-x-4 font-semibold">
            <Tabbtn
              selecttab={() => handleTabChange("skills")}
              active={Tab === "skills"}
            >
              Skills
            </Tabbtn>
            <Tabbtn
              selecttab={() => handleTabChange("education")}
              active={Tab === "education"}
            >
              Education
            </Tabbtn>
            <Tabbtn
              selecttab={() => handleTabChange("certification")}
              active={Tab === "certification"}
            >
              Certification
            </Tabbtn>
          </div>
          <div className="text-center md:text-left mt-5">
            {Tab_Data.find((t) => t.id === Tab).content}
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
