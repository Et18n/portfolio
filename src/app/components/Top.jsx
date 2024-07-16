"use client";
import { ArrowUpIcon, ArrowDownIcon } from "@heroicons/react/24/solid";
import { useState } from "react";
export default function Top() {
  const [location, setlocation] = useState("down");
  const up = () => {
    window.scrollTo({ top: 100000, behavior: "smooth" });
    setlocation("up");
   
  };
  const down = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    setlocation("down");
  };
  const handlelocation = () => {
    location === "down" ? up() : down();
  };

  return (
    <div
      className="hidden fixed bottom-10 right-10 bg-slate-800 w-10 h-10 justify-center md:flex items-center rounded-full"
      id="scrollbtn"
    >
      {location === "down" ? (
        <button onClick={handlelocation} className=" w-6 h-6 text-white ">
          <ArrowDownIcon />
        </button>
      ) : (
        <button onClick={handlelocation} className=" w-6 h-6 text-white">
          <ArrowUpIcon />
        </button>
      )}
    </div>
  );
}
