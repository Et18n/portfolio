'use client'

import Typee from "./typeanimation";
import "./hero.css";
import Image from "next/image";
import { useEffect } from "react";
export default function Hero() {

  const mailer=(e)=>{
    window.location.href="mailto:no-reply@example.com";
    e.preventDefault();
  }
  return (
    <main className="hero text-center md:text-left">
      <section className="text">
        <h1>
          <span className="hello"> Hello, I'm </span>
          <br />
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
