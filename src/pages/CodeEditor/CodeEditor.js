
import CodeFile from "./Codes/Codes";
import RecentLogs from "./RecentLogs/RecentLogs";
import Sidebar from "./SideBar/SideBar";
import Navbar from "./Navbar/Navbar";

export default function CodeEditor() {

return(

<section className="bg-gray-950 text-white">

    <Navbar />
    <div className="flex justify-between">
    <Sidebar />
    <CodeFile />
    <RecentLogs />
    </div>
</section>



);










}