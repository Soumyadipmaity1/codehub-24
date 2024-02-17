import "./App.css";
import { BrowserRouter as Routers, Route, Routes } from "react-router-dom";
import Error from "./pages/Error";
import Home from "./pages/Home";
import Group from "./pages/Group";
import GroupAllocated from "./pages/GroupAllocated";
import AddingPeople from "./pages/AddingPeople";
import Login from "./pages/loginpages/loginpage";
import Dashboard from "./pages/Dashboard";

function App() {
  return (
    <>
      <Login />
      {/*I have included the login and the dashboard in the same div you  can add the authentication function as you wish */}
      <Routers>
        {/* Added the routing part for my dashboard */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Mygroup" element={<Group />} />
          <Route path="/Mygroup/Groupallocate" element={<GroupAllocated />} />
          <Route
            path="/Mygroup/Groupallocate/AddPeople"
            element={<AddingPeople />}
          />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </Routers>
    </>
  );
}

export default App;
