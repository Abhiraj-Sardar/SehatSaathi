import React from "react";
import Dashboard from "./components/Dashboard";
import Navbar from "./components/Navbar";
import Ngolist from "./components/Ngolist";
import LoginForm from "./components/LoginForm";
import MedicalConsultationForm from "./components/MedicalConsultationForm";

function App() {
  return (
    <>
    <Navbar/>
    <Dashboard/>
    {/* <LoginForm/> */}
    {/* <MedicalConsultationForm/> */}
    </>
  );
}

export default App;
