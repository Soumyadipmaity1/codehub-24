import React, { useState } from "react";
import { NavLink } from "react-router-dom";

const Sidebar = ({ onFileSelect, codes }) => {
  const [open, setOpen] = useState(true);
  const [activeButton, setActiveButton] = useState(null);
  const [submenuOpen, setSubmenuOpen] = useState(false);
  const [selectedFileIndex, setSelectedFileIndex] = useState(null);
  const [newFileName, setNewFileName] = useState('');

  const toggleSubmenu = () => {
    setSubmenuOpen(!submenuOpen);
  };

  const Menus = [
    {
      title: "Folder",
      icon: "/images/Folder.png",
      submenu: true,
      submenuItems: codes.map((code) => ({
        title: code.codeName,
        code: code.code,
      })),
      font: "font-sans",
    },
  ];

  const handleClick = (index) => {
    setActiveButton(index);
    setSelectedFileIndex(index);
    onFileSelect(codes[index]);
  };

  const addNewFile = () => {
    if (newFileName.trim() !== '') {
      const newFile = { _id: 1, codeName: newFileName, code: '' };
      onFileSelect(newFile);
      setNewFileName('');
    }
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
        <div className={`bg-[#1C1917] text-zinc-50 z-20 h-[calc(100vh-80px)] flex flex-col justify-between ${open ? "w-[254px]" : "w-[35px]"
          } duration-300 relative`}
        >
          {open && (
            <div className="pl-4 mt-4 pr-4">
              <input
                type="text"
                placeholder="Enter file name"
                className="w-full bg-black text-white p-2 outline-none border-b-2 border-gray-600"
                value={newFileName}
                onChange={(e) => setNewFileName(e.target.value)}
              />
              <button className="w-full mt-2 bg-[#141414] text-xl text-left text-zinc-50 py-1 px-4" onClick={addNewFile}>Add File</button>
            </div>
          )}
          <ul className="pt-2">
            {Menus.map((menu, index) => (
              <div key={index}>
                <li
                  className={`flex pt-2 pl-2 text-xl bg-[#141414] cursor-pointer ${menu.spacing ? "self-end " : "mt-0"
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
                    onClick={toggleSubmenu}
                  >
                    {menu.title}
                  </NavLink>
                  {menu.submenu && open && (
                    <div className="mr-2 mt-2" >
                      <img
                        src="/images/Downarrow.png"
                        alt="arrow"
                        className={`${submenuOpen ? "rotate-180 cursor-pointer" : ""}`}
                        style={{ top: "5px", height: "15px", width: "20px" }}

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
