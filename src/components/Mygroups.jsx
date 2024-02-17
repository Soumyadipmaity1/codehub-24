import React, { useState } from 'react';
import NavbarPic from "./Navbar/navbar_pic.png";
import { NavLink } from 'react-router-dom';

export default function Mygroup() {
  const [showDropdown, setShowDropdown] = useState(false);
  const [open, setOpen] = useState(true);

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  return (
    <>
    <div className={`bg-[#2B2B2B] border-b-2 border-white items-center p-6 mt-8 justify-between rounded-t-lg shadow-md max-w-[1120px] mx-10 ${showDropdown ? 'h-[200px]' : 'h-[80px]'}`}>
      <div className="flex items-center">
        <div className="flex items-center">
          <img src={NavbarPic} alt="Navbar Pic" className="h-9 w-9 cursor-pointer" />
          <p className="text-2xl text-white font-poppins mb-0 ml-4">Group Allocated</p>
        </div>
        <p className="text-white ml-auto mr-8">Last updated on</p>
        <button className="cursor-pointer" onClick={toggleDropdown}>
          <img
            src="/images/downarrow.png"
            alt="0@arrow"
            style={{ top: '5px', height: '15px', width: '15px', transform: showDropdown ? 'rotate(180deg)' : 'rotate(0deg)' }}
          />
        </button>
      </div>

      {showDropdown && (
        <div className="flex items-center justify-center mb-4">
         
        </div>
      )}
      
      {showDropdown && (
        <div className={`flex items-center justify-center mb-4 mt-12 ${!open && "hidden"}`}>
          <input
            type="text"
            id="groupCode"
            name="groupCode"
            className="flex-1 border p-2 rounded focus:outline-none max-w-96 ml-8 focus:border-blue-500"
            placeholder=" Enter Group Code"
          />
          <NavLink to="/Mygroup/Groupallocate" className="bg-[#C376FF] text-white px-4 ml-4 py-2 rounded hover:bg-black">
            Enter
          </NavLink>
        </div>
      )}
    </div>


    




    </>
  );
}
