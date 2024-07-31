'use client'

import Typee from "./typeanimation";
import "./hero.css";
import Image from "next/image";
import { useEffect } from "react";
import { TypeAnimation } from "react-type-animation";
export default function Hero() {

  const mailer=(e)=>{
    window.location.href="mailto:ethanferrao04@gmail.com";
    e.preventDefault();
  }
  return (
    <main className="hero text-center md:text-left">
      <section className="text">
        <h1>
          <span className="hello"> Hello, I'm </span>
          <br />
          {/* <TypeAnimation
        sequence={["Iam",1000,"",1000]}
        wrapper="span"
        speed={50}
        repeat={Infinity}
      /> */}
     
          <Typee />
        </h1>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vel quaerat
          doloremque quae alias delectus assumenda rem, dolor iste eum nihil.{" "}
        </p>
        <button onClick={(e)=>{mailer(e)}} className="hireme-btn">Hire me</button>
        <button className="DownloadCV">Download CV</button>
      </section>
      <div id="rounded-image">
        <Image
          id="headshot"
          src="/images/main.png"
          alt="my photo"
          width={300}
          height={300}
        />
      </div>
    </main>
  );
}
