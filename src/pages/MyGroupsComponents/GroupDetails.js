import React from 'react';
import Editicon from './image.png'
import Deleteicon from './deleteopt.png'

const GroupDetails = ({ projectImage, projectTitle, company, duration, logInfo, employeeName }) => {
  return (
    <div className="flex justify-between mx-40 p-3 border-b-2 border-gray-700">
      <div className="flex font-semibold items-center justify-center py-2">
        <img className="mr-2 w-10 rounded-full" src={projectImage} alt="" />
        <div>
          <h3 className="p-">{projectTitle}</h3>
          <h5 className="text-[10px]">{company}</h5>
        </div>
      </div>
      <div className="py-5">{duration}</div>
      <div className="py-5">{logInfo}</div>
      <div className="py-5">{employeeName}</div>
      <div className="flex">
        <img className="w-6 my-5" src={Editicon} alt="" />
        <img className="w-6 mx-2 my-5" src={Deleteicon} alt="" />
      </div>
    </div>
  );
};

export default GroupDetails;

