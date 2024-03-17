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
        <section className="bg-gray-950 text-white">
            <Navbar />
            <div className="flex justify-between">
                <Sidebar onFileSelect={handleFileSelect} codes={CODES} />
                
                <div className="flex flex-col w-[1%] border-r-2 pt-16 border-[#C376FF]"></div>
                
                <div className="flex flex-col w-[56%] border-r-2 pt-16 border-[#C376FF]">
                    <div>
                        <button className="text-[#C376FF] absolute bg-[#2E2E2E] p-2 text-xl rounded-md left-[64%] top-[16%] ">Save Changes</button>
                    </div>
                    
                    <div className="flex border-b-2 border-[#C376FF]">
                        {/* Display open file tabs */}
                        {openFiles.map((file, index) => (
                             <div key={index} className="px-8 m-1 flex items-center">
                              <span>{file}</span>
                            <button className="ml-2" onClick={() => handleCloseFile(file)}>x</button>
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
