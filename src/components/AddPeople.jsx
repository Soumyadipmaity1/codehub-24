import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

function AddPeople() {
  const [activeButton, setActiveButton] = useState(null);

  const handleButtonClick = (buttonIndex) => {
    setActiveButton(buttonIndex);
  };

  return (
    <div className='bg-[#0D0D0D] w-screen h-[calc(100vh-80px)]'>
      <p className="text-2xl p-5 mt-0 text-white">RnPsoft{window.location.pathname}</p>
      <hr className="w-11/12 h-0 ml-auto mr-auto border-1 rounded bg-[#989898]"></hr>

      <div className='bg-black max-w-xl h-4/6 ml-auto  mr-auto mt-10'>
        <button
          className={`text-white w-1/2 mt-5 text-xl pl-10 ${activeButton === 0 ? 'border-b-2 border-[#C376FF]' : ''}`}
          onClick={() => handleButtonClick(0)}
        >
          Add an existing user
        </button>
        <button
          className={`text-white text-xl w-1/2 pl-10 ${activeButton === 1 ? 'border-b-2 border-[#C376FF]' : ''}`}
          onClick={() => handleButtonClick(1)}
        >
          Create a new user
        </button>

        <div className={`flex items-center justify-center mb-4 mt-44 `}>
          <input
            type="text"
            id="groupCode"
            name="groupCode"
            className="border p-2 rounded focus:outline-none w-80 ml-8 focus:border-blue-500"
            placeholder=" Enter ID"
          />
        </div>

        <div className='flex items-center justify-center mt-10'>
          <NavLink
            to=""
            className="bg-[#1C1917] text-[#C376FF]  px-8 ml-4 py-2 rounded hover:border-[#C376FF] border-black border-2"
          >
            Add
          </NavLink>
        </div>
      </div>
    </div>
  );
}

export default AddPeople;
