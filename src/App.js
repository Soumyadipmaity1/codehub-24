import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { Route, Routes, useNavigate, Navigate } from "react-router-dom"
import HomePage from './pages/landing/components/HomePage';
import Error from "./pages/Error";
import Home from "./pages/Home";
import Group from "./pages/Group";
import GroupAllocated from "./pages/GroupAllocated";
import AddingPeople from "./pages/AddingPeople";
import Login from "./pages/loginpages/loginpage";
import Dashboard from "./pages/Dashboard";
import CodeEditor from "./pages/CodeEditor/CodeEditor";
import "./App.css"

// import GroupsLogin from "./pages/GroupsLogin/GroupsLogin";
function App() {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const { user } = useSelector((state) => state.profile)
  
  useEffect(() => {
    const token = localStorage.getItem("token")
    // if (token) {  isko hatae hai
    //   console.log()
    // } else {
    //   navigate("/login", { replace: true })
    // }
    console.log(token)
    console.log(user)
  }, [navigate])

  return (
    <Routes>
      {/* <Route
        path="/"
        element={
          localStorage.getItem("token")
            ? <HomePage />
            : <Navigate to="/login" replace />
        }
      /> */}
      <Route path="/" element={<HomePage />} />
      <Route path="/login" element={<Login />} />
      <Route path="/Mygroup" element={<Group />} />
          <Route path="/Mygroup/:mygroupId" element={<GroupAllocated />} />
          <Route
            path="/Mygroup/Groupallocate/AddPeople"
            element={<AddingPeople />}
          />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="*" element={<Error />} />
          <Route path="/Mygroup/:mygroupId/codeeditor" element={<CodeEditor/>} />
    </Routes>
  );
}

export default App;