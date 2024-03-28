import React, { useState } from 'react';
import Navbar from './Navbar/Navbar';
import Sidebar from './SideBar/SideBar';
import CodeFile from './Codes/Codes'; 
import RecentLogs from './RecentLogs/RecentLogs'; 
import CODES from './SideBar/Mapping'; 

export default function CodeEditor() {
    const [selectedFile, setSelectedFile] = useState(null);
    const [openFiles, setOpenFiles] = useState([]);

    const handleFileSelect = (content) => {
        if (!openFiles.includes(content)) {
            setOpenFiles([...openFiles, content]);
        }
        setSelectedFile(content);
    };

    const handleCloseFile = (file) => {
        setOpenFiles(openFiles.filter((f) => f !== file));
        if (selectedFile === file) {
            setSelectedFile(null);
        }
    };

    return (
        <section className="bg-gray-950 text-white text-xl">
            <Navbar />
            <div className="flex justify-between">
                <Sidebar onFileSelect={handleFileSelect} codes={CODES} />
                
                
                <div className="flex flex-col w-[56%] border-r-2 p-4 border-[#C376FF]">
               
                    
<div className={`flex ${openFiles.length ? 'border-b-2 border-[#C376FF]' : ''}`}>
                        {openFiles.map((file, index) => (
                             <div key={index} className="px-4 border-r-[1px] border-slate-700 m-1 flex items-center">
                              <span>{file}</span>
                            <button className="ml-2 pl-4" onClick={() => handleCloseFile(file)}>x</button>
                            </div>
                        ))}
                       
                    </div>
                    <CodeFile selectedFile={selectedFile} />
                    
                </div>
                <RecentLogs />
            </div>
        </section>
    );
}
