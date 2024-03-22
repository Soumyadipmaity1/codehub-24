import React, { useState, useEffect } from 'react';
import CODES from '../SideBar/Mapping'; 

const CodeFile = ({ selectedIndex }) => {
  const [selectedFile, setSelectedFile] = useState(null);

  useEffect(() => {
    setSelectedFile(CODES[selectedIndex]);
  }, [selectedIndex]);

  return (
    <div>
      {selectedFile && ( 
        <pre className="p-2 pl-4">{selectedFile.code}</pre>
      )}
    </div>
  );
};

export default CodeFile;
