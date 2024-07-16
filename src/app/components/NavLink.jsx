import Link from "next/link";

const NavLink = ({ href, title }) => {
  return (
    <Link href={href} className=" hover:text-white text-[#8e8e8ecc]">
      {title}
      
    </Link>
  );
};

export default NavLink;
