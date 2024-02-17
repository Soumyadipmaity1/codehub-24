import React from "react";
import Navbar from "../components/Navbar/Navbar";
import Sidebar from "../components/Sidebar/Sidebar";
import { useLocation } from 'react-router-dom';



export default function Dashboard({ children }) {
  const location = useLocation();
  const { hash, pathname, search } = location;
  return (
    <>
      <div>
        <Navbar />
        <div className="flex">
          <Sidebar />
          <div className="bg-black w-screen h-[calc(100vh-80px)] ">
            <p className="text-3xl p-6  text-white">Dashboard</p>
            <p className="text-2xl p-5 mt-0 text-white">RnPsoft{window.location.pathname}</p>
            <hr className="w-11/12 h-0 ml-auto mr-auto border-1 rounded  bg-[#989898]"></hr>
            {children}
          </div>
        </div>
      </div>
    </>
  );
}
