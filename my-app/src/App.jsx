import React from "react";
import Navbar from "./components/Navbar";
import LoginForm from "./components/LoginForm";
import MedicalConsultationForm from "./components/MedicalConsultationForm";
import NGOEventForm from "./components/NGOEventForm";
import Home from "./components/Home";
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Article from "./components/Article";
import Videos from "./components/Videos";
import PatientDashboard from "./components/PatientDashboard";
import NGODashboard from "./components/NGODashboard";
import ConsultHome from "./VideoConsulting/ConsultHome";
import Meeting from "./VideoConsulting/Meeting";
import DoctorPrescriptionPDF from "./components/DoctorPrescriptionPDF";
import DoctorDashboard from "./components/DoctorDashboard";
import Blog from "./components/Blog";

function App() {
  return (
    <>
    
    <BrowserRouter>
        <Routes>
              <Route path="/" element={<Home/>} />
              <Route path="/Profile" element={<PatientDashboard/>}/>
              <Route path="/Login" element={<LoginForm/>} />
              <Route path="/ConsultationForm" element={<MedicalConsultationForm/>} />
              <Route path="/ngoeventform" element={<NGOEventForm/>} />
              <Route path="/Article" element={<Article/>} />
              <Route path="/Videos" element={<Videos/>} />
              <Route path="/NGO" element={<NGODashboard/>} />
              <Route path="/Consult" element={<ConsultHome/>} />
              <Route path="/meeting/:meetingId" element={<Meeting />} />
              <Route path="/Doctor" element={<DoctorDashboard/>} />
              <Route path="/Prescription" element={<DoctorPrescriptionPDF/>} />
              <Route path="/Blog" element={<Blog/>} />
        </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
