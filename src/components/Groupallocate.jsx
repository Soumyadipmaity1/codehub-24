import React, { useState, useEffect } from 'react';
import NavbarPic from "./Navbar/navbar_pic.png";
import { useParams } from 'react-router-dom';
import { getCodes, deleteCode, publishCode } from '../services/operations/code';
import { NavLink, Link } from 'react-router-dom';
import { useSelector } from "react-redux";



export default function Groupallocate() {
  const { mygroupId } = useParams();
  const [codes, setCodes] = useState([]);
  const { user } = useSelector((state) => state.profile)


  useEffect(() => {
    async function fetchGroups() {
      try {
        const fetchedcodes = await getCodes(mygroupId);
        setCodes(fetchedcodes.data);
        // console.log("code hai ye", fetchedcodes.data)
      } catch (error) {
        console.error('Error fetching groups:', error);
      }
    }

    fetchGroups();
  }, []);
  const [showDropdown, setShowDropdown] = useState(false);
  const [open, setOpen] = useState(true);

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  // const handleCodeDelete = async (codeId) => {
  //   // setLoading(true)
  //   await deleteCode({ codeId: codeId })
  //   // setLoading(false)
  // }
  const handleCodeDelete = async (codeId) => {
    try {
      await deleteCode({ codeId: codeId });
      // Filter out the deleted code from the codes array
      const updatedCodes = codes.filter(code => code._id !== codeId);
      // Update the state with the filtered array
      setCodes(updatedCodes);
    } catch (error) {
      console.error('Error deleting code:', error);
    }
  }

  const handleCodePublished = async (codeId) => {
    try {
      await publishCode({ codeId: codeId });
      
      // Update the codes state after publishing
      setCodes(prevCodes => {
        // Map over the previous codes and update the status of the published code
        return prevCodes.map(code => {
          if (code._id === codeId) {
            return { ...code, status: "Published" };
          }
          return code;
        });
      });
    } catch (error) {
      console.error('Error publishing code:', error);
    }
  }


  return (
    <>
      <div className={`bg-black items-center h-[calc(100vh-80px)] w-screen `}>
        <div className='flex justify-between items-center'>
          <p className="text-2xl pt-2 ml-5 mt-0 text-white">RnPsoft{window.location.pathname}</p>
          <Link to={`/Mygroup/${mygroupId}/codeeditor`} className="bg-[#1C1917] text-[#C376FF]	my-4 px-4  ml-auto mr-16 py-2 rounded hover:border-[#C376FF] border-black border-2">
            Codes
          </Link>
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
                <th className=" py-2 text-left p-5">Editor Name</th>
                <th className=" py-2 text-left p-5 ">File Name</th>
                <th className=" py-2 text-left pl-10 ">Edits</th>
              </tr>
            </thead>

            <tbody>
              {codes.map((log, index) => {
                const updatedAt = new Date(log.updatedAt);
                const now = new Date();
                const durationInMilliseconds = now - updatedAt;

                // Convert milliseconds to hours
                const durationInHours = durationInMilliseconds / (1000 * 60 * 60);
                if ((log.status === "Published" && user.accountType === "Student") || user.accountType === "Admin") {
                  return (
                    <tr key={index} className="bg-black text-white" >
                      <td className="py-2 p-5 flex items-center">
                        <p className='w-8 h-8 mr-1 bg-purple-500 rounded-full p-1 flex items-center justify-center text-white'>
                          {log.user.firstName.charAt(0).toUpperCase()}
                        </p>
                        {log.group.groupName}
                      </td>
                      <td className="py-2 p-5">{durationInHours.toFixed(2)} hours</td> {/* Display duration in hours */}
                      <td className="py-2 p-5">{log.user.firstName}</td>
                      <td className="py-2 p-2">
                        {log.codeName}
                    
                      </td>
                      <td className="py-2 p-2 flex">
                      <Link to={`/Mygroup/${mygroupId}/codeeditor`} className='ml-8 cursor-pointer'>
                          <img src='/images/Create.png' alt='create' className='w-5 h-5 cursor-pointer' />
                        </Link>
                        {user.accountType === "Admin" &&
                          <img src='/images/Trash.png' alt='trash' className='w-5 h-5 ml-8 cursor-pointer text-align' onClick={() => handleCodeDelete(log._id)} />
                        }
                        {user.accountType === "Admin" && log.status === "Draft" &&
                          <div className='w-5 h-5 ml-8 cursor-pointer text-align' onClick={() => handleCodePublished(log._id)}>
                            Publish</div>
                        }
                      </td>
                    </tr>
                  );
                } else {
                  return null;
                }
              })}

            </tbody>
          </table>
        </div>
      </div >
    </>
  );
}
