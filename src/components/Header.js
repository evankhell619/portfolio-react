import React from "react";

import Social from "./Socials";
import Logo from "../img/header/logo1.svg";
import MobileNav from "./MobileNav";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className=" fixed w-full px-[30px] lg:px-[100px] z-30 h-[100px] lg:h-[140px]  flex items-center">
      <div className="flex flex-col lg:flex-row lg:items-center w-full justify-between">
        {/* logo */}
        <Link to={"/"} className="max-w-[200px]">
          <img src={Logo} alt="" />
        </Link>
        {/* nav hidden */}
        <nav className="hidden xl:flex gap-x-12 font-semibold">
          <Link
            to={"/"}
            className="text-[#696c6d] hover:text-primary transition"
          >
            Home
          </Link>
          <Link
            to={"/skills"}
            className="text-[#696c6d] hover:text-primary transition"
          >
            Skills
          </Link>
          <Link
            to={"/portfolio"}
            className="text-[#696c6d] hover:text-primary transition"
          >
            Portfolio
          </Link>
          <Link
            to={"/contact"}
            className="text-[#696c6d] hover:text-primary transition"
          >
            Contact
          </Link>
        </nav>
        {/* socials */}
      </div>
      <Social />
      <MobileNav />
    </header>
  );
};

export default Header;
