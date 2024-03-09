import React from 'react';

const GroupHeading = () => {
  return (
    <div className="flex justify-between mx-40 p-4 pb-8 text-xl border-b-2 border-gray-700">
      <h3 className="pl">Project Name</h3>
      <h3 className="">Duration</h3>
      <h3 className="">Log Info</h3>
      <h3 className="pl-5">Name</h3>
      <div className="w-[144px] "></div>
    </div>
  );
};

export default GroupHeading;
