import React, { useState } from "react";
import { NavLink } from "react-router-dom";


const Sidebar = () => {
  const [open, setOpen] = useState(true);
  const [activeButton, setActiveButton] = useState(null);
  const [submenuStates, setSubmenuStates] = useState({});

  const toggleSubmenu = (index) => {
    console.log(`Toggling submenu ${index}`);
    setSubmenuStates((prevStates) => ({
      ...prevStates,
      [index]: !prevStates[index],
    }));
  };

  

  const Menus = [
    {
      title: "Recent",
      icon: "/images/File.png",
      submenu: true,
      submenuItems: [
        { title: "FileName 1" },
        { title: "FileName 2" },
        { title: "FileName 3" },
      ],
    },
    {
      title: "Requests",
      icon: "/images/Request.png",
      submenu: true,
      submenuItems: [
        { title: "Pending Request" },
        { title: "Pending Request" },
        { title: "Pending Request" },
      ],
    },

    {
      title: "Merge Groups",
      icon : "/images/Merge.png",
    },
    { title: "My Groups",
      to : "/Mygroup",
      icon : "/images/Group.png"
  },
    
  ];

  const handleClick = (index) => {
    setActiveButton(index);
  };



  const bottommenu = [
    {
   title : "Instructions",
   icon : "/images/UserManual.png",
    },{
    title : "Logout",
    icon : "/images/LogoutRoundedleft.png"
    },
  ];

  

  const activeState = ({ isActive }) => {
    return {
      color: isActive ? "rgb(253 230 138)" : "",
      backgroundColor: isActive ? "rgb(69 26 3)" : "",
      fontWeight: isActive ? "bold" : ""
    };
  };

  return (
    <>
      <div>
        <div
          className={`bg-[#1C1917]  text-zinc-50 z-20 h-[calc(100vh-80px)] flex flex-col justify-between ${
            open ? "w-[254px]" : "w-[35px]"
          } duration-300 relative`}
        >
          <ul className="pt-2">
            {Menus.map((menu, index) => (
              <div key={index}>
                <li
                  className={`flex pt-2 pl-2 text-xl bg-[#141414] cursor-pointer ${
                    menu.spacing ? "self-end " : "mt-0"
                  } ${index === activeButton ? 'border l-4 border-blue-500' : ''}`}
                >
                  {menu.icon && (
                    <img
                      className="h-6 w-6  mr-2  cursor-pointer"
                      src={menu.icon}
                    />
                  )}
                  <NavLink to={menu.to} key={index} className={`flex-1 ml-2 ${!open && "hidden"}`}>{menu.title}</NavLink>
                  {menu.submenu && open && (
                    <div className="mr-2 mt-2">
                      <img src="/images/Downarrow.png" alt="arrow" className={`${submenuStates[index] ? "rotate-180 cursor-pointer" : ""}`} style={{ top: '5px', height: '15px', width: '15px', }} onClick={() => toggleSubmenu(index)} />
                    </div>
                  )}
                </li>
                {menu.submenu && submenuStates[index] && open && (
                  <ul>
                    {menu.submenuItems.map((submenuItems, subIndex) => (
                      <li key={subIndex} className="flex pt-1 pb-1 pl-2 text-xs  bg-[#1C1917] justify-center">
                        {submenuItems.title}
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
              <li key={index} className={`flex pt-2 pl-2 text-xl bg-[#141414] cursor-pointer}
              ${index === activeButton ? 'border-l-4 border-blue-500' : ''}
              `}>
                {bmenu.icon && (
                  <img
                    className="h-6 w-6  mr-2  cursor-pointer"
                    src={bmenu.icon}
                  />
                )}
                <span className={`flex-1 ml-2  ${!open && "hidden"} `}
                  onClick={() => handleClick(index)}>
                  {bmenu.title}
                </span>
              </li>
            ))}
          </ul>

          <div className="flex items-center bg-[#141414]" onClick={() => setOpen(!open)}>
            <img src="/images/Doubleleft.png" className={`h-10 w-8 left-3 cursor-pointer ${
              !open && "rotate-180"
            }`} />
            <button
              className={`text-xl whitespace-nowrap ml-4 p-2 ${
                !open && "hidden"
              }`}
            >
              Collapse Sidebar
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;