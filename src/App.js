import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { Route, Routes, useNavigate, Navigate } from "react-router-dom"
import HomePage from './pages/landing/components/HomePage';
import Login from "./pages/loginpages/loginpage"
import MyGroup from "./pages/MyGroupPage/MyGroup";
import "./App.css"


function App() {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  useEffect(() => {
    const token = localStorage.getItem("token")
    // if (token) {  isko hatae hai
    //   console.log()
    // } else {
    //   navigate("/login", { replace: true })
    // }
    console.log(token)
  }, [navigate])

  return (
    // <Routes>
    //   {/* <Route
    //     path="/"
    //     element={
    //       localStorage.getItem("token")
    //         ? <HomePage />
    //         : <Navigate to="/login" replace />
    //     }
    //   /> */}
    //   <Route path="/" element={<HomePage />} />
    //   <Route path="/login" element={<Login />} />
    // </Routes>

    <MyGroup/>

  );
}

export default App;
