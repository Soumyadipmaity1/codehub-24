import React, { useState, useEffect } from 'react';
import NavbarPic from "./Navbar/navbar_pic.png";
import { NavLink } from 'react-router-dom';
import { getAllGroups } from '../services/operations/groupDetailsAPI';
import { useForm } from 'react-hook-form';
import { verifyGroup } from '../services/operations/groupDetailsAPI';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

export default function Mygroup() {
  const navigate = useNavigate();
  const { token } = useSelector((state) => state.auth)

  const { register, handleSubmit, formState: { errors }, setValue } = useForm();
  const [groups, setGroups] = useState([]);
  const [openDropdownIndex, setOpenDropdownIndex] = useState(null); // Track the index of the currently open dropdown

  useEffect(() => {
    async function fetchGroups() {
      try {
        const fetchedGroups = await getAllGroups();
        const groupsWithDropdown = fetchedGroups.map(group => ({ ...group, showDropdown: false }));
        setGroups(groupsWithDropdown);
      } catch (error) {
        console.error('Error fetching groups:', error);
      }
    }

    fetchGroups();
  }, []);

  const toggleDropdown = (index) => {
    setOpenDropdownIndex(prevIndex => (prevIndex === index ? null : index)); // Toggle the dropdown state
  };

  const handleFormSubmit = async (data, groupId) => {
    const userPassKey = data.userPassKey;
    const result = await verifyGroup(userPassKey, groupId, navigate)
  };

  return (
    <>
      <div>
        {groups.map((groupItem, index) => (
          <div key={index} className={`bg-[#2B2B2B] border-b-2 border-white items-center p-6 mt-8 justify-between rounded-t-lg shadow-md max-w-[1120px] mx-10 ${index === openDropdownIndex ? 'h-[200px]' : 'h-[80px]'}`}>
            <div className="flex items-center">
              <div className="flex items-center">
                <img src={NavbarPic} alt="Navbar Pic" className="h-9 w-9 cursor-pointer" />
                <p className="text-2xl text-white font-poppins mb-0 ml-4">{groupItem.groupName}</p>
              </div>
              <p className="text-white ml-auto mr-8">Last updated on {groupItem._id}</p>
              {errors[`userPassKey`] && (
                <p className="text-red-500 text-xs italic mb-4">{errors[`userPassKey`].message}</p>
              )}
              <button className="cursor-pointer" onClick={() => toggleDropdown(index)}>
                <img
                  src="/images/Downarrow.png"
                  alt="0@arrow"
                  style={{ top: '5px', height: '15px', width: '15px', transform: index === openDropdownIndex ? 'rotate(180deg)' : 'rotate(0deg)' }}
                />
              </button>
            </div>

            {index === openDropdownIndex && ( // Render the dropdown content only for the open dropdown
              <form
                className="flex flex-col w-full px-10"
                onSubmit={handleSubmit((data) => handleFormSubmit(data, groupItem._id))}
              >
                <div className="flex">
                  <div className="mb-2 bg-white flex rounded-lg items-center">
                    <i className="bx bx-lock-alt text-2xl text-gray-800 py-2 px-2 "></i>
                    <input
                      type="password"
                      {...register(`userPassKey`, { // Use unique names for each input
                        required: "Group Code is required",
                        minLength: { value: 1, message: "Group Code must be at least 1 characters long" },
                        pattern: {
                          message: "Group Code must meet requirements",
                        },
                      })}
                      placeholder="PassKey"
                      className={`appearance-none rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${errors[`userPassKey`] && "border-red-500"}`}
                    />
                  </div>

                  <div className="items-center text-center ">
                    <button
                      type="submit"
                      className="w-24 text-white rounded-lg p-2 m-2 ml-4 font-bold  bg-[#C376FF] hover:bg-purple-800"
                    >
                      Enter
                    </button>
                  </div>
                </div>
                {errors[`userPassKey`] && (
                  <p className="text-red-500 text-xs italic mb-4">{errors[`userPassKey`].message}</p>
                )}
              </form>
            )}
          </div>
        ))}
      </div>
    </>
  );
}
