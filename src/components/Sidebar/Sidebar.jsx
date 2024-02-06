import React, { useState } from "react";


const Sidebar = () => {
  const [open, setOpen] = useState(true);
  const [submenuOpen, setSubmenuOpen] = useState(false);

  const Menus = [
    {
      title: "Recent",
      icon: "./images/File.png",
      submenu: true,
      submenuItems: [
        { title: "FileName 1" },
        { title: "FileName 2" },
        { title: "FileName 3" },
      ],
    },
    {
      title: "Requests",
      icon: "./images/Request.png",
      submenu: true,
      submenuItems: [
        { title: "Pending Request" },
        { title: "Pending Request" },
        { title: "Pending Request" },
      ],
    },

    {
      title: "Merge Groups",
      icon : "./images/Merge.png",
    },
    { title: "My Groups",
      icon : "./images/Group.png"
  },
    
  ];


  const bottommenu = [
    {
   title : "Instructions",
   icon : "./images/User Manual.png",
    },{
    title : "Logout",
    icon : "./images/Logout Rounded left.png"
    },
  ];

  return (
    <div>
      <div
        className={`bg-[#1C1917]  text-zinc-50 z-20 h-[calc(100vh-80px)] flex flex-col justify-between ${
          open ? "w-[254px]" : "w-[35px]"
        } duration-300 relative`}
      >
        <ul className="pt-2">
          {Menus.map((menu, index) => (
            <React.Fragment>
              <li
                key={index}
                className={`flex pt-2 pl-2 text-xl bg-[#141414] cursor-pointer ${
                  menu.spacing ? " self-end " : "mt-0" 
                }`}
              >
                {menu.icon && (
                  <img
                    className="h-6 w-6  mr-2  cursor-pointer"
                    src={menu.icon}
                  />
                )}

                <span className={`flex-1 ml-2 ${!open && "hidden"} `}>
                  {menu.title}
                </span>
               
                {menu.submenu && open &&(
                  <img src="./images/downarrow.png" alt="downarrow" className={`${submenuOpen ? "rotate-180 cursor-pointer" : ""}`} style={{top:'5px', height: '15px', width: '15px' }} onClick={() => setSubmenuOpen(!submenuOpen)} />
                 
                  )}  
                
              </li>
              {menu.submenu && submenuOpen && open &&(
                <ul>
                {menu.submenuItems.map((submenuItems,index)=> (
                  <li key={index} className="flex pt-1 pb-1 pl-2 text-xs  bg-[#1C1917] justify-center">
                  {submenuItems.title}
                  </li>
                ))}
                </ul>
              ) }
            </React.Fragment>
          ))}
        </ul>

      <ul className="pt-2 mt-80">
      {bottommenu.map((bmenu,index)=>(
        <li key={index} className={`flex pt-2 pl-2 text-xl bg-[#141414]  cursor-pointer}`}>
        
        {bmenu.icon && (
          <img
            className="h-6 w-6  mr-2  cursor-pointer"
            src={bmenu.icon}
          />
        )}

        <span className={`flex-1 ml-2 ${!open && "hidden"} `}>
                  {bmenu.title}
                </span>
        
        </li>
      ))}
      </ul>


        <div>
          <div
            className="flex items-center bg-[#141414]"
            onClick={() => setOpen(!open)}
          >
          <img src="./images/double left.png"  className={` h-10 w-8 left-3 cursor-pointer ${
            !open && "rotate-180"
          } `}/>
           
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
    </div>
  );
};
export default Sidebar;
