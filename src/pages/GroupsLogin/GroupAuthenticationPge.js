// import GroupCodeForm from "./GroupCode";
import GroupsLogin from "./GroupsLogin";
import Sidebar from "../../components/Sidebar/Sidebar";
import Navbar from "../../components/Navbar/Navbar";
import GroupDash from "./GroupDash";
export default function GroupAuthentication(){


    return(

        <div>
<Navbar/>

<div className="flex">
<Sidebar/>

<div className="w-full bg-[#0D0D0D]">

<GroupDash/>
<GroupsLogin/>
</div>


</div>
</div>

    );
}