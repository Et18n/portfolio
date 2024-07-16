import NavLink from "./NavLink";
const MenuOverlay = ({ links }) => {
  
  return (
    <>
      <ul className="flex flex-col w-[95vw]] text-white h-fit text-center bg-opacity-80 ">
        {links.map((link, index) => (
          <li key={index} className=" list-none">
            <NavLink href={link.path} title={link.title} />
          </li>
        ))}
      </ul>
    </>
  );
};
export default MenuOverlay;
