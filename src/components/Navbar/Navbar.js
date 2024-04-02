// Navbar.js
import React from "react";
import NavbarPic from "./navbar_pic.png";
import { useSelector } from "react-redux";


const Navbar = () => {
  const { user } = useSelector((state) => state.profile)

  return (
    <nav className="bg-black text-white w-screen">
      <div className="p-4 flex justify-between items-center">
        <div className="text-2xl font-sans">Welcome, {user.firstName}</div>
        <img src={NavbarPic} alt="Navbar Pic" className="h-9 w-9 ml-auto cursor-pointer" />
        <div className="text-lg"></div>
      </div>
      <div className="border-b-4 w-full h-3 border-[#C376FF]"></div>
    </nav>
  );
};

export default Navbar;


