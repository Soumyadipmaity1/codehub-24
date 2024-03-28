import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import CODES from '../SideBar/Mapping'; 
import CodeFile from '../Codes/Codes';

const Sidebar = ({ onFileSelect }) => {
  const [open, setOpen] = useState(true);
  const [activeButton, setActiveButton] = useState(null);
  const [submenuOpen, setSubmenuOpen] = useState(false);
  const [selectedFileIndex, setSelectedFileIndex] = useState(null);

  const toggleSubmenu = () => {
    setSubmenuOpen(!submenuOpen);
  };

  const Menus = [
    {
      title: "Folder",
      icon: "/images/Folder.png",
      submenu: true,
      submenuItems: CODES.map((code) => ({
        title: code.title,
        code: code.code,
      })),
      font: "font-sans",
    },
  ];

  const handleClick = (index) => {
    setActiveButton(index);
    setSelectedFileIndex(index);
    onFileSelect(CODES[index].title);
  };

  const bottommenu = [
    {
      title: "Logout",
      icon: "/images/LogoutRoundedleft.png",
    },
  ];

  return (
    <>
      <div>
<div      className={`bg-[#1C1917] text-zinc-50 z-20 h-[calc(100vh-80px)] flex flex-col justify-between ${
            open ? "w-[254px]" : "w-[35px]"
          } duration-300 relative`}
        >
         <div className="bg-slate-800 rounded-md p-1 mx-1 cursor-pointer my-2 text-center">
    {!open && <p className="text-xl ">+</p>}
    {open && <p className="text-xl mx-4">+ <span className=" ">Import File</span></p>}
</div>

          <div className="border-gray-600 ml-0 p-1 pl-4 border-b-2">
            <div className="p-4 flex items-center">
              <p className={`ml-2 text-xl  ${open ? "" : "hidden"}`}>Explorer</p>
              <img
                className="h-6 w-6 ml-14 cursor-pointer"
                src="/images/Add Folder.png"
                alt="Add Folder"
              />

              <img
                className="h-6 w-6 ml-auto cursor-pointer"
                src="/images/Add File.png"
                alt="Add File"
              />
            </div>
          </div>
          <ul className="pt-2">
            {Menus.map((menu, index) => (
              <div key={index}>
                <li
                  className={`flex pt-2 pl-2 text-xl bg-[#141414] cursor-pointer ${
                    menu.spacing ? "self-end " : "mt-0"
                  } `}
                >
                  {menu.icon && (
                    <img
                      className="h-6 w-6 mr-2 cursor-pointer"
                      src={menu.icon}
                      alt="icon"
                    />
                  )}
                  <NavLink
                    to={menu.to}
                    key={index}
                    className={`flex-1 ml-2  ${open ? "" : "hidden"}`}
                  >
                    {menu.title}
                  </NavLink>
                  {menu.submenu && open && (
                    <div className="mr-2 mt-2">
                      <img
                        src="/images/Downarrow.png"
                        alt="arrow"
                        className={`${submenuOpen ? "rotate-180 cursor-pointer" : ""}`}
                        style={{ top: "5px", height: "15px", width: "20px" }}
                        onClick={toggleSubmenu}
                      />
                    </div>
                  )}
                </li>
                {menu.submenu && submenuOpen && open && (
                  <ul>
                    {menu.submenuItems.map((submenuItem, subIndex) => (
                      <li
                        key={subIndex}
                        className="flex p-3 border-b-[1px] border-gray-600 text-base bg-[#1C1917] justify-center cursor-pointer"
                        onClick={() => handleClick(subIndex)}
                      >
                        {submenuItem.title}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </ul>
          <div className="flex-1"></div>
          {/* Bottom Menu */}
          <ul className="pt-2">
            {bottommenu.map((bmenu, index) => (
              <li
                key={index}
                className={`flex pt-2 pl-2 text-xl bg-[#141414] cursor-pointer ${
                  index === activeButton ? "" : ""
                }`}
              >
                {bmenu.icon && (
                  <img
                    className="h-6 w-6 mr-2 cursor-pointer"
                    src={bmenu.icon}
                    alt="icon"
                  />
                )}
                <span
                  className={`flex-1 ml-2 ${open ? "" : "hidden"}`}
                  onClick={() => handleClick(index)}
                >
                  {bmenu.title}
                </span>
              </li>
            ))}
          </ul>
          <div className="flex items-center bg-[#141414]" onClick={() => setOpen(!open)}>
            <img
              src="/images/Double Left.png"
              className={`h-6 w-8 left-3 cursor-pointer ${!open ? "rotate-180" : ""}`}
              alt="Double Left"
            />
            <button className={`text-xl whitespace-nowrap ml-4 p-2 ${open ? "" : "hidden"}`}>
              Collapse Sidebar
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
