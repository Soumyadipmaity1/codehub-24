import React, { useState, useEffect } from 'react';
import CODES from '../SideBar/Mapping';

const CodeFile = ({ selectedIndex }) => {
  const [selectedFile, setSelectedFile] = useState(null);

  useEffect(() => {
    setSelectedFile(CODES[selectedIndex]);
  }, [selectedIndex]);

  return (
    <div>
      <div>
        {selectedFile && (
          <p className="p-2 text-red-900 pl-4">{selectedFile.title}</p>
        )}
      </div>
      <div className='item-end tet-end pl-[400px] pt-2' >
        <button className="text-[#C376FF] relative bg-[#2E2E2E] p-2 text-xl rounded-md left-[64%] top-[16%] ">Save Changes</button>
      </div>
    </div>
  );
};

export default CodeFile;
