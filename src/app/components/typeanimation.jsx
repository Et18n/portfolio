"use client";
import { TypeAnimation } from "react-type-animation";

export default function Typee() {
  return (
    <>
    
      <TypeAnimation
        sequence={[`Ethan`, 1000, "A Web Developer", 1000]}
        cursor={false}
        wrapper="span"
        speed={50}
        repeat={Infinity}
      />
    </>
  );
}
