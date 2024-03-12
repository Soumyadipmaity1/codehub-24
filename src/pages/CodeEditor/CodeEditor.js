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
                <div className="flex flex-col w-[60%] border-r-4 pt-10 border-gray-800">
                    <div className="flex border-b-4 border-gray-900">
                        {/* Display open file tabs */}
                        {openFiles.map((file, index) => (
                            <div key={index} className="px-8 m-1 flex items-center ">
                                <span>{file}</span>
                                <button onClick={() => handleCloseFile(file)}>x</button>
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
