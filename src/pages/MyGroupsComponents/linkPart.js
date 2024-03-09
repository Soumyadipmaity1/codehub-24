import React from 'react';

const LinkPart = () => {
  return (
    <section className="text-2xl bg-black">
      <div className="flex justify-between border-b-4 py-6 pt-20 border-gray-800 mx-40">
        <div className="flex">
          <div><a href="#">RnpSoft /</a></div>
          <div><a href="#">My Group /</a></div>
          <div><a href="#">Group Allocated1</a></div>
        </div>
        <div>
          <button className="text-[#C376FF] bg-[#2E2E2E] p-2 text-xl rounded-md">+ Add People</button>
        </div>
      </div>
    </section>
  );
};

export default LinkPart;
