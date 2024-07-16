import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import Link from "next/link";

export default function Email() {
  const writeableareas = "bg-slate-900 rounded-lg outline-none text-white";
  return (
    <section className=" grid md:grid-cols-2 md:mt-32 mt-10  ">
      <h2 className=" text-[#adb7be] text-xl md:ml-9">Let's Connect</h2>
      <p className=" md:ml-9 mt-3">
        I'm currently looking for new opportunities, my inbox is always open.
        Whether you have a question or just want to say hi, I'll try my best to
        get back to you.
      </p>
      <div className=" col-start-1 flex flex-row mt-5 md:ml-9">
        <Link href={"https://github.com/Et18n"}>
          <FontAwesomeIcon icon={faGithub} className="w-8 h-8 text-white" />
        </Link>
        <Link href={"https://www.linkedin.com/in/ethan-ferrao-228739257/"}>
          <FontAwesomeIcon
            icon={faLinkedin}
            className=" w-8 h-8 ml-3 text-white "
          />
        </Link>
      </div>

      <form action="">
        <div className=" flex flex-col md:-mt-20 md:ml-9 mt-5">
          <span className="text-[#adb7be]  mb-3 ml-1">Your Email</span>
          <input
            type="email"
            placeholder="something@gmail.com"
            className={`   outline-none p-1 px-3 ${writeableareas} `}
          />
          <label htmlFor="" className="text-[#adb7be] mt-5 ml-1">
            Subject
          </label>
          <input
            type="text"
            id="subject"
            className={` px-3 p-1 ${writeableareas} mt-2`}
            placeholder="Just saying hi"
          />
          <label htmlFor="" className=" text-white mt-10"></label>
          <textarea
            name=""
            id=""
            className={` mt-2  resize-none px-3 ${writeableareas} p-1 h-32`}
            placeholder="Let's talk about....."
          ></textarea>
          <button
            type="submit"
            className=" text-[#adb7be] hover:text-white border-[#adb7be] rounded-lg hover:bg-slate-500 bg-slate-900 w-24 mt-3 hover:border-white "
          >
            Submit
          </button>
        </div>
      </form>
    </section>
  );
}
