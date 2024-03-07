import React, { useState } from 'react';
import NavbarPic from "./Navbar/navbar_pic.png";
import { NavLink } from 'react-router-dom';

export default function Groupallocate() {
  const [showDropdown, setShowDropdown] = useState(false);
  const [open, setOpen] = useState(true);

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  const recentLogs = [
    { projectName: 'Project A', duration: '2 hours', logInfo: 'Log information A', name: 'John Doe' },
    { projectName: 'Project B', duration: '1 hour', logInfo: 'Log information B', name: 'Jane Doe' },
   
  ];

  const olderLogs = [
    { projectName: 'Project X', duration: '3 hours', logInfo: 'Log information X', name: 'Doe John' },
    { projectName: 'Project Y', duration: '4 hours', logInfo: 'Log information Y', name: 'Doe Jane' },
  ];

  return (
    <>
      <div className={`bg-black items-center h-[calc(100vh-80px)] w-screen `}>
      <div className='flex'>
      <p className="text-2xl p-5 mt-0 text-white">RnPsoft{window.location.pathname}</p>
        <NavLink to="/Mygroup/Groupallocate/AddPeople" className="bg-[#1C1917] text-[#C376FF]	mt-4 px-4  h-12 w-36 ml-auto mr-16 py-2 rounded hover:border-[#C376FF] border-black border-2">
            Add People
          </NavLink>
      </div>
        
        <hr className="w-11/12 h-0 ml-auto mr-auto border-1 rounded bg-[#989898]"></hr>

        {/* Recent Logs Section */}
        <div className="">
          <h2 className="text-xl font-semibold p-5 text-white ">Recent Logs</h2>
          <table className="w-full ">
            <thead>
              <tr className="bg-black text-white ">
                <th className=" py-2 text-left p-5">Project Name</th>
                <th className=" py-2 text-left p-5">Duration</th>
                <th className=" py-2 text-left p-5">Log Info</th>
                <th className=" py-2 text-left p-5 ">Name
                </th>
              </tr>
            </thead>

            <tbody>
              {recentLogs.map((log, index) => (
                <tr key={index} className="bg-black text-white">
                  <td className=" py-2 p-5 flex items-center">
                  <p className='w-8 h-8 bg-purple-500 rounded-full  p-1 ml-2 mr-2'>A</p>
                  {log.projectName}</td>
                  <td className=" py-2 p-5">{log.duration}</td>
                  <td className=" py-2 p-5">{log.logInfo}</td>
                  <td className=" py-2 p-5 flex">{log.name}
                  <img src='/images/Create.png' alt='create' className='w-5 h-5 ml-8 cursor-pointer text-align'/>
                  <img src='/images/Trash.png' alt='trash' className='w-5 h-5 ml-8 cursor-pointer text-align'/>
                </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Older Logs Section */}
        <div className="">
          <h2 className="text-xl font-semibold p-5 text-white ">Older Logs</h2>
          <table className="w-full  ">
            <thead>
              <tr className="bg-black text-white">
                <th className=" text-left p-5 py-2 ">Project Name</th>
                <th className=" text-left p-5 py-2 ">Duration</th>
                <th className=" text-left p-5 py-2 ">Log Info</th>
                <th className=" text-left p-5 py-2 ">Name</th>
              </tr>
            </thead>
            <tbody>
            {olderLogs.map((log, index) => (
                <tr key={index} className="bg-black text-white">

                  <td className="p-5 py-2 flex items-center">
                  <p className='w-8 h-8 bg-blue-500 rounded-full  p-1 ml-2 mr-2'>A</p>
                  {log.projectName}</td>
                  
                  <td className="p-5 py-2 ">{log.duration}</td>
                  <td className="p-5 py-2 ">{log.logInfo}</td>
                  <td className="p-5 py-2 flex">{log.name}
                  <img src='/images/Create.png' alt='create' className='w-5  cursor-pointer  h-5 ml-8 text-align'/>
                  <img src='/images/Trash.png' alt='trash' className='w-5 h-5 ml-8 cursor-pointer text-align'/></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}
