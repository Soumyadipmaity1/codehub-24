

const CodeFile = () => {
    return (
        <div className="flex justify-start flex-col border-r-4 pt-10 border-gray-800 w-[60%]">
            <div className="flex border-b-4 border-gray-900">
                <div className="px-8 m-1 rounded-md border-2 bg-gray-800 border-gray-800 py-1">File1.js</div>
                <div className="px-8 m-1 rounded-md border-2 bg-gray-800 border-gray-800 py-1">File2.jpg</div>
                <div className="px-8 m-1 rounded-md border-2 bg-gray-800 border-gray-800 py-1">File3.html</div>
            </div>
            <div>
                <p>&lt;&gt;</p>
            </div>
        </div>
    );
};

export default CodeFile;
