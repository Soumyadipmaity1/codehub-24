
import { Link } from "react-router-dom";

export default function GroupDash(){


    return(
    <div>
<h1 className="text-4xl font-bold text-white p-7 pt-12">Dashboard</h1>

<div className="border-b-2 p-3 mx-7 border-gray-600">
    
    <ul className="flex text-xl font-semibold text-white ">
        <li><Link to="#">RnPsoft /</Link></li>
        <li><Link to="#"> My Groups</Link></li>
        
    </ul>
</div>
    </div>
    );
}