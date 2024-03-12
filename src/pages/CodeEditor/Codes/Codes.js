import React from 'react';
import CODES from '../SideBar/Mapping'; 

const CodeFile = ({ selectedIndex }) => {
  const selectedFile = CODES[selectedIndex];

  return (
    <div className="flex justify-start flex-col border-r-4 pt-10 border-gray-800 w-[60%]">
      <div className="flex border-b-4 border-gray-900">
       
      </div>
      {selectedFile && ( 
        <pre className="p-2 pl-4">{selectedFile.code}</pre>
      )}
    </div>
  );
};

export default CodeFile;
