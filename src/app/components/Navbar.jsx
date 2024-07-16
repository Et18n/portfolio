"use client";
import React, { useState } from "react";
import Link from "next/link";
import NavLink from "./NavLink";
import { Bars3BottomRightIcon, XMarkIcon } from "@heroicons/react/24/solid";
import MenuOverlay from "./MenuOverlay";
export default function Navbar() {
  const navlinks = [
    { title: "Home", path: "/" },
    { title: "Projects", path: "Projects" },
    { title: "Developer", path: "#developer" },
    { title: "About", path: "#about" },
  ];
  const [navOpen, setnavOpen] = useState(false);
  return (
    <>
      <nav className=" text-[#ffffff] absolute z-10 top-9 mx-[10px] bg-opacity-85 bg-black">
        <div className="flex flex-row justify-between w-[95vw]">
          <Link
            href={"/"}
            className="uppercase font-[900] text-3xl text-center ml-[4rem] md:ml-8 w-full md:text-xl md:text-start"
          >
            Logo
          </Link>
          <div className="mobile-menu block md:hidden ">
            {!navOpen ? (
              <button
                onClick={() => setnavOpen(true)}
                className=" text-slate-400 flex items-center p-2 border-white hover:text-white mr-5"
              >
                <Bars3BottomRightIcon className=" h-5 w-5" />
              </button>
            ) : (
              <button
                onClick={() => setnavOpen(false)}
                className=" text-slate-400 flex items-center p-2 border-white hover:text-white mr-5"
              >
                <XMarkIcon className="h-5 w-5" />
              </button>
            )}
          </div>
          <div className="menu hidden md:w-auto  md:flex flex-row space-x-5 text-xl">
            {navlinks.map((link, index) => (
              <li key={index} className=" list-none">
                <NavLink href={link.path} title={link.title} />
              </li>
            ))}
          </div>
        </div>
        {navOpen ? <MenuOverlay links={navlinks} /> : null}
      </nav>
    </>
  );
}
