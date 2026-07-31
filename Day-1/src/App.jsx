import { useState } from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Course from "./pages/Course";
import Home from "./pages/Home";
import Profile from "./pages/Profile";

function App() {
  const [state, setState] = useState();
  return (
    <>
    <Navbar />
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/course" element={<Course />} />
      <Route path="profile" element={<Profile/>} />
    </Routes>
    </>
  );
}

export default App;
