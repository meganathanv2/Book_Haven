import React from "react";

const Header = () => {
  return (
    //rgb(24, 26, 52)
    //rgb(12, 14, 35)
    <div className="header flex items-center justify-between pr-7 pl-3 bg-gradient-to-r from-[rgb(12,14,35)] to-[rgb(12,14,35)] via-[rgb(24,26,52)] text-white h-[4rem]">
      <div className="logo">
        {/* <img src="/assets/book.png" width={"64px"} height={"64px"} /> */}
        <p className="text-2xl bungee-spice-regular">BOOKHAVEN</p>
      </div>
      <nav className="list-none flex w-[350px]  justify-between ">
        <li className="cursor-pointer rounded-lg hover:bg-[rgb(46,54,82)] p-2 duration-300">
          Home
        </li>
        <li className="cursor-pointer rounded-lg hover:hover:bg-[rgb(46,54,82)] p-2 duration-300">
          About
        </li>
        <li className="cursor-pointer rounded-lg hover:hover:bg-[rgb(46,54,82)] p-2 duration-300">
          Contact
        </li>
        <li className="cursor-pointer rounded-lg  px-3 py-2 bg-[rgb(192,192,192)] text-black duration-300 hover:bg-white">
          SignUp
        </li>
      </nav>
    </div>
  );
};

export default Header;
