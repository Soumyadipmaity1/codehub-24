import React, { useState, useEffect } from 'react';
import Navbar from '../../components/Navbar/Navbar';
import Sidebar from './SideBar/SideBar';
import CodeFile from './Codes/Codes'; 
import RecentLogs from './RecentLogs/RecentLogs'; 
import { useParams } from 'react-router-dom';
import { getCodes } from '../../services/operations/code';

export default function CodeEditor() {
    const { mygroupId } = useParams();
    const [codes, setCodes] = useState([]);
    const [selectedFile, setSelectedFile] = useState(null);
    const [openFiles, setOpenFiles] = useState([]);
    const [textAreaValue, setTextAreaValue] = useState('');

    useEffect(() => {
        async function fetchGroups() {
            try {
                const fetchedCodes = await getCodes(mygroupId);
                // Filter out only the published codes
                const publishedCodes = fetchedCodes.data.filter(code => code.status === "Published");
                // Set the filtered published codes to the state
                setCodes(publishedCodes);
                console.log("Published codes:", publishedCodes);
            } catch (error) {
                console.error('Error fetching groups:', error);
            }
        }
        fetchGroups();
    }, []);
    

    const handleFileSelect = (content) => {
        if (!openFiles.find(file => file._id === content._id)) {
            setOpenFiles([...openFiles, content]);
        }
        setSelectedFile(content.codeName);
        setTextAreaValue(content.code);
    };

    const handleCloseFile = (file) => {
        setOpenFiles(openFiles.filter((f) => f._id !== file._id)); // Filter out the file by its ID
        // if (selectedFile === file.codeName) {
        //     setSelectedFile(null);
        //     setTextAreaValue('');
        // }
        // setTextAreaValue("");
    };


    return (
        <section className="bg-gray-950 text-white text-xl">
            <Navbar />
            <div className="flex justify-between">
                <Sidebar onFileSelect={handleFileSelect} codes={codes} />
                <div className="flex flex-col w-[56%] border-r-2 p-4 border-[#C376FF]">
                    <div className={`flex ${openFiles.length ? 'border-b-2 border-[#C376FF]' : ''}`}>
                        {openFiles.map((file, index) => (
                             <div key={index} className={`px-4 ${selectedFile === file.codeName ? 'bg-slate-700' : 'bg-black'} cursor-pointer border-r-[1px] border-slate-700 m-1 flex items-center`} onClick={() => handleFileSelect(file)}>
                              <span>{file.codeName}</span>
                            <button className="ml-6 hover:text-yellow-600" onClick={() => handleCloseFile(file)}>x</button>
                            </div>
                        ))}
                    </div>
                    <textarea
                        className="w-full h-40 bg-black text-white p-2 outline-none"
                        value={textAreaValue}
                        onChange={(e) => setTextAreaValue(e.target.value)}
                        autoFocus
                        />
                </div>
                <RecentLogs />
            </div>
        </section>
    );
}
