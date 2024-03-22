const RecentLogs = ({ isCollapsed }) => {
    return (
        <div className={`text-white mx-auto bg-[#1C1917] ${isCollapsed ? 'hidden' : 'block'} flex-grow`}>
            <p className="bg-[#1C1917] px-24 p-0.5 border-b-2 border-white">Recent Logs</p>
        </div>
    );
};

export default RecentLogs;
