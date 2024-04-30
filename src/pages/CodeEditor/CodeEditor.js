import React, { useState, useEffect } from 'react';
import Navbar from '../../components/Navbar/Navbar';
import Sidebar from './SideBar/SideBar';
import CodeFile from './Codes/Codes'; 
import RecentLogs from './RecentLogs/RecentLogs'; 
import CODES from './SideBar/Mapping'; 
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

       

        if (!openFiles.includes(content)) {
            setOpenFiles([...openFiles, content]);
        }
        setSelectedFile(content.title);
        setTextAreaValue(content.code);
      
    };

    const handleCloseFile = (file) => {
        setOpenFiles(openFiles.filter((f) => f !== file));
        if (selectedFile === file) {
            setSelectedFile(null);
            setTextAreaValue('');
        }
    };

    return (
        <section className="bg-gray-950 text-white text-xl">
            <Navbar />
            <div className="flex justify-between">
            {/*Two states i ahve added for the input field */}
                <Sidebar onFileSelect={handleFileSelect} codes={CODES} openFiles={openFiles} setOpenFiles={setOpenFiles} />
                <div className="flex flex-col w-[70%] border-r-2 p-4 border-[#C376FF]">
                    <div className={`flex ${openFiles.length ? 'border-b-2 border-[#C376FF]' : ''}`}>
                        {openFiles.map((file, index) => (
                          console.log("file hai ye", file),
                             <div key={index} className="px-4 border-r-[1px] border-slate-700 m-1 flex items-center" onClick={() => handleFileSelect(file)}>
                              <span>{file.title}</span>
                            <button className="ml-2 pl-4" onClick={() => handleCloseFile(file)}>x</button>
                            </div>
                        ))}
                    </div>
                    <CodeFile selectedFile={selectedFile} codes={CODES} />
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
