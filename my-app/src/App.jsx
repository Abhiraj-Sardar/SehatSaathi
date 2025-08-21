import React from "react";
import Dashboard from "./components/Dashboard";
import Navbar from "./components/Navbar";
import LoginForm from "./components/LoginForm";
import MedicalConsultationForm from "./components/MedicalConsultationForm";
import NGOEventForm from "./components/NGOEventForm";
import Home from "./components/Home";
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

function App() {
  return (
    <>
    {/*  */}
    {/* <Home/> */}
    
    <BrowserRouter>
        <Routes>
              <Route path="/" element={<Home/>} />
              <Route path="/Profile" element={<Dashboard/>}/>
              <Route path="/Login" element={<LoginForm/>} />
              <Route path="/ConsultationForm" element={<MedicalConsultationForm/>} />
              <Route path="/ngoeventform" element={<NGOEventForm/>} />
        </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
