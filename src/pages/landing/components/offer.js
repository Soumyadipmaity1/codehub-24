import React from 'react';
import appdev from './appdev.png';
import software from './Software.png';
import  Time from './Time.png';
import ML from './ml.png';
import Blockchain from './blockchain.png';
import education from './education.png';




const Box = ({ title, imageSrc }) => (

  <div className="w-52 px-8   border-gradient-purple  rounded  py-2 pb-4 mx-5 my-2  ">
    <div>
      <img className="w-28 pl-10 pb-5 p-5" src={imageSrc} alt="" />
    </div>
    <div className="">
      <h2 className="text-white font-bold text-center ">{title}</h2>
    </div>
  </div>
);

const Offer = () => {
    
  const boxes = [
    { title: 'App development', imageSrc: appdev },
    { title: 'Software Development', imageSrc: software },
    { title: 'Real-Time Solution', imageSrc: Time },
    { title: 'ML / AI', imageSrc: ML },
    { title: 'Blockchain Solution', imageSrc: Blockchain },
    { title: 'Providing Education', imageSrc: education },
  ];

  return (
    <div className='gradient'><h1 className="bg-black text-4xl pb-6 font-bold text-slate-100 text-center mt-10" >What We Offer</h1>
            <div  className="w-40 h-2 mx-auto border-b-4 mt-2 mb-16 items-center border-purple-400   " > </div>

    <div className="flex-col bg-black  ">
      <div className="flex">
        {boxes.slice(0, 3).map((box, index) => (
          <Box key={index} title={box.title} imageSrc={box.imageSrc} />
        ))}
      </div>
      <div className="flex mt-4">
        {boxes.slice(3, 6).map((box, index) => (
          <Box key={index} title={box.title} imageSrc={box.imageSrc} />
        ))}
      </div>
    </div>
    </div>
  );
};

export default Offer;

  


