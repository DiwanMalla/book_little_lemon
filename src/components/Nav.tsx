import { Link } from "react-router-dom";
import logo from "/littlelemon_logo.png";
import React from "react";

interface navProp {
  menuOpen: boolean;
  setMenuOpen: React.Dispatch<React.SetStateAction<boolean>>;
}
const Nav: React.FC<navProp> = ({ menuOpen, setMenuOpen }) => {
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const handleMenuItemClick = () => {
    setMenuOpen(false);
  };
  console.log(menuOpen);

  const navbar = [
    { name: "Home", path: "/" },
    { name: "About", path: "/" },
    { name: "Services", path: "/" },
    { name: "Menu", path: "/" },
    { name: "Reservations", path: "/" },
    { name: "Order Online", path: "/" },
    { name: "Login", path: "/" },
  ];
  return (
    <div className="flex justify-between items-center px-[10%] py-[8%]">
      <div>
        <Link to={"/"}>
          <img src={logo} className="h-14" />
        </Link>
      </div>
      <div
        id="menu"
        onClick={toggleMenu}
        className={`cursor-pointer flex flex-col justify-center items-center sm:flex md:hidden lg:hidden `}
      >
        <hr className=" my-1 border-2 border-black w-8" />
        <hr className=" my-1 border-2 border-black w-8" />
        <hr className=" my-1 border-2 border-black w-8" />
      </div>

      <div
        id="nav"
        className={`p-10 flex flex-col absolute top-24  items-center justify-center w-full md:static md:flex-row md:w-auto gap-4 sm:hidden md:flex lg:flex ${
          menuOpen
            ? "block min-w-full bg-gray-800 text-white  my-3 mx-[-10%]"
            : "hidden"
        } `}
      >
        {navbar.map((nav, index) => (
          <div
            key={index}
            onClick={handleMenuItemClick}
            className={`w-full ${
              menuOpen ? `hover:bg-gray-500` : "hover:underline"
            }`}
          >
            <Link to={nav.path} className="block w-full text-center py-2">
              {nav.name}
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Nav;
