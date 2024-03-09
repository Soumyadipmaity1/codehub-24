import LinkPart from "../MyGroupsComponents/linkPart";
import GroupDetails from "../MyGroupsComponents/GroupDetails";
import GroupHeading from "../MyGroupsComponents/GroupHeading";

export default function MyGroup() {
    const projectImage1 = "https://img.freepik.com/premium-vector/anonymous-upser-circle-icon-vector-illustration-flat-style-with-long-shadow_520826-1931.jpg";
    const projectTitle1= "Project A";
    const company1 = "Company A";
    const duration1 = "02:45:30";
    const logInfo1 = "2.03.012.45";
   const employeeName1 = "Employee Name";

    const projectImage2 = "https://img.freepik.com/premium-vector/anonymous-upser-circle-icon-vector-illustration-flat-style-with-long-shadow_520826-1931.jpg";
    const projectTitle2= "Project B";
    const company2 = "Company B";
    const duration2 = "02:45:30";
    const logInfo2 = "2.03.012.45";
    const employeeName2 = "Employee Name";
return(

<section className="bg-black text-white">
<LinkPart/>
<div class="mx-40 p-1 pt-8">
        <h1 class="text-2xl font-bold py-5">Recent Logs</h1>
    </div>
<GroupHeading/>
<GroupDetails
     projectImage={projectImage1}
        projectTitle={projectTitle1}
        company={company1}
        duration={duration1}
        logInfo={logInfo1}
        employeeName={employeeName1}
/>

<GroupDetails
     projectImage={projectImage2}
        projectTitle={projectTitle2}
        company={company2}
        duration={duration2}
        logInfo={logInfo2}
        employeeName={employeeName2}
/>

<div class="mx-40 p-1 pt-8">
        <h1 class="text-2xl font-bold py-5">Older Logs</h1>
    </div>
<GroupHeading/>
<GroupDetails
     projectImage={projectImage1}
        projectTitle={projectTitle1}
        company={company1}
        duration={duration1}
        logInfo={logInfo1}
        employeeName={employeeName1}
/>

<GroupDetails
     projectImage={projectImage2}
        projectTitle={projectTitle2}
        company={company2}
        duration={duration2}
        logInfo={logInfo2}
        employeeName={employeeName2}
/>
<GroupDetails
     projectImage={projectImage1}
        projectTitle={projectTitle1}
        company={company1}
        duration={duration1}
        logInfo={logInfo1}
        employeeName={employeeName1}
/>

<GroupDetails
     projectImage={projectImage2}
        projectTitle={projectTitle2}
        company={company2}
        duration={duration2}
        logInfo={logInfo2}
        employeeName={employeeName2}
/>
</section>




);

}