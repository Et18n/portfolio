import React from "react";
import { CodeBracketIcon, EyeIcon } from "@heroicons/react/24/solid";
import Link from "next/link";
const ProjectCard = ({ imgUrl, title, description, gitUrl, prewUrl, tag }) => {
  return (
    <div>
      <div
        className="mt-10 h-[100px] w-full md:h-[300px] md:w-[650px] rounded-t-lg relative group "
        style={{ background: `url(${imgUrl})`, backgroundSize: "cover" }}
      >
        <div className=" bg-opacity-0 group-hover:bg-opacity-70 transition-all duration-500 absolute top-0 left-0 h-full w-full bg-[#181818]">
          <Link
            href={gitUrl}
            className=" h-14 w-14 group-hover:border-2 left-1/2 top-1/2 -translate-x-[55px] -translate-y-1/2 rounded-full z-10 group-hover:absolute p-1 hover:border-white border-[#adb7be] group/link"
          >
            <CodeBracketIcon className=" hidden group-hover:block h-10 w-10 text-[#adb7be] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 absolute  group-hover/link:text-white" />
          </Link>
          <Link
            href={prewUrl}
            className=" h-14 w-14 group-hover:border-2 left-1/2 top-1/2 translate-x-[10px] -translate-y-1/2 rounded-full z-10 group-hover:absolute p-1 hover:border-white border-[#adb7be] group/link"
          >
            <EyeIcon className=" hidden  group-hover:block h-10 w-10 text-[#adb7be] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 absolute  group-hover/link:text-white" />
          </Link>
        </div>
      </div>
      
      <div className="text-white text-xl font-semibold bg-slate-950 md:w-[650px] px-3 py-2">
        {title}
      </div>
      <p className=" text-slate-400 text-sm font-normal bg-slate-950 md:w-[650px] rounded-b-lg px-3 py-2">
        {description}
      </p>
    </div>
  );
};

export default ProjectCard;
