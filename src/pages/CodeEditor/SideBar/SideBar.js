// Sidebar.js
import React from 'react';
import CODES from './Mapping'; // Import CODES array from codes.js

const Sidebar = ({ onFileSelect }) => {
    return (
        <div className="flex flex-col w-[20%] border-r-4 bg-gray-900 border-gray-900 h-[686px]">
            <div className="bg-slate-800 rounded-md p-1 mx-4 my-2 text-center">
                <p className="p-1">+ Import File</p>
            </div>
            <div className="border-gray-600 ml-4 p-1 pl-4 border-b-2">
                <p className="p-2">Explorer</p>
            </div>
            <div className="h-[640px]">
                <p className="p-2 pl-4 ml-4 border-gray-600 border-b-2">Folder</p>
                <div className="ml-8">
                    {CODES.map((code, index) => (
                        <div key={index} className="border-gray-600 border-b-2">
                            <p className="p-2 pl-4" onClick={() => onFileSelect(code.title)}>{code.title}</p>
                        </div>
                    ))}
                </div>
            </div>
            <div>
                <p className="p-2 pl-4 bg-slate-950 text-white">Logout</p>
            </div>
            <div className="p-2 pl-4 bg-slate-950 border-t-2 border-gray-700 text-white">Collapse Slidebar</div>
        </div>
    );
};

export default Sidebar;
