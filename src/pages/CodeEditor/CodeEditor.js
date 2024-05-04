import React, { useState, useEffect } from 'react';
import Navbar from '../../components/Navbar/Navbar';
import Sidebar from './SideBar/SideBar';
import CodeFile from './Codes/Codes';
import RecentLogs from './RecentLogs/RecentLogs';
import { useParams } from 'react-router-dom';
import { getCodes, createCode } from '../../services/operations/code';
import { useSelector } from "react-redux";


export default function CodeEditor() {
    const { mygroupId } = useParams();
  const [codes, setCodes] = useState([]);
  useEffect(() => {
    async function fetchGroups() {
      try {
        const fetchedcodes = await getCodes(mygroupId);
        setCodes(fetchedcodes.data);
        console.log("code hai ye", fetchedcodes.data)
      } catch (error) {
        console.error('Error fetching groups:', error);
      }
    }

    fetchGroups();
  }, []);
    const [selectedFile, setSelectedFile] = useState(null);
    const [selectedFileId, setSelectedFileId] = useState(null);
    const [openFiles, setOpenFiles] = useState([]);
    const [textAreaValue, setTextAreaValue] = useState('');
    const { user } = useSelector((state) => state.profile)


    useEffect(() => {
        async function fetchGroups() {
            try {
                const fetchedCodes = await getCodes(mygroupId);
                const publishedCodes = fetchedCodes.data.filter(code => code.status === "Published");
                setCodes(publishedCodes);
                console.log("Published codes:", publishedCodes);
            } catch (error) {
                console.error('Error fetching groups:', error);
            }
        }

        fetchGroups();
    }, []);

    const pushCodeToServer = async (codeName, code, group, user, codeId) => {
        try {
            await createCode(codeName, code, group, user._id, codeId);
            console.log("Code pushed successfully!");
            console.log(codeName, code, group, user._id)
        } catch (error) {
            console.error('Error pushing code:', error);
        }
    };

    const handleSaveCode = () => {
        const codeName = selectedFile;
        const code = textAreaValue;
        const group = mygroupId;
        const codeId = selectedFileId;
        pushCodeToServer(codeName, code, group, user, codeId);
    };


    const handleFileSelect = (content) => {

       

        if (!openFiles.includes(content)) {
            setOpenFiles([...openFiles, content]);
        }
        setSelectedFile(content.title);
        setTextAreaValue(content.code);
        setSelectedFileId(content._id);
    };

    const [fileClosed, setFileClosed] = useState(false);

    const handleCloseFile = (file) => {
        setOpenFiles(openFiles.filter((f) => f._id !== file._id));
        setFileClosed(true);
    };

    useEffect(() => {
        if (fileClosed) {
            if (openFiles.length > 0) {
                setSelectedFile(openFiles[0].codeName);
                setTextAreaValue(openFiles[0].code);
                setSelectedFileId(openFiles[0]._id);
            } else {
                setSelectedFile(null);
                setTextAreaValue('');
                setSelectedFileId('');
            }
            setFileClosed(false);
        }
    }, [fileClosed, openFiles]);


    return (
        <section className="bg-gray-950 text-white text-xl">
            <Navbar />
            <div className="flex justify-between">
                <Sidebar onFileSelect={handleFileSelect} codes={codes} />
                <div className="flex flex-col w-full border-r-2 p-4 border-[#C376FF]">
                    <div className='flex justify-between'>
                        <div className={`flex ${openFiles.length ? 'border-b-2 border-[#C376FF]' : ''}`}>
                            {openFiles.map((file, index) => (
                                <div key={index} className={`px-4 ${selectedFile === file.codeName ? 'bg-slate-700' : 'bg-black'} cursor-pointer border-r-[1px] border-slate-700 m-1 flex items-center`} onClick={() => handleFileSelect(file)}>
                                    <span>{file.codeName}</span>
                                    <button className="ml-6 hover:text-yellow-600" onClick={() => handleCloseFile(file)}>x</button>
                                </div>
                            ))}
                        </div>
                        <div onClick={handleSaveCode}>Save</div>
                    </div>

                    <textarea
                        className="w-full h-full bg-black text-white p-4 outline-none"
                        value={textAreaValue}
                        onChange={(e) => setTextAreaValue(e.target.value)}
                        autoFocus
                    />
                </div>
            </div>
        </section>
    );
}
