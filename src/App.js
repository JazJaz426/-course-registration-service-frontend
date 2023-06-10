import * as React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";

import "./App.css";
import AllCourses from "./views/AllCourses";
import EnrolledCourses from "./views/EnrolledCourses";
import MenuBar from "./components/MenuBar";
import LoginDialog from "./components/LoginDialog";

export default function App() {
  return (
    <BrowserRouter>
      <div>
        <MenuBar />
       <Routes>
        <Route path="/" element={<AllCourses />} />
        <Route path="/enrolledCourses" element={<EnrolledCourses />} />
        <Route path="/test" element={<LoginDialog />} />
      </Routes>
    </div>
    </BrowserRouter>
  );
}
