import React, { useState } from "react";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import PersonalDetails from "./components/PersonalDetails";
import AcademicDetails from "./components/AcademicDetails";
import CourseDetails from "./components/CourseDetails";
import Documents from "./components/Documents";
import ConfirmationPage from "./components/ConfirmationPage";
import "./App.css";

function App() {
  const [currentStep, setCurrentStep] = useState(1);

  // Sidebar open/close state
  const [sidebarOpen, setSidebarOpen] = useState(true);

  // Store all form data
  const [formData, setFormData] = useState({
    personal: {},
    academic: {},
    course: {},
    documents: {},
  });

  // Render pages based on currentStep
  const renderPage = () => {
    switch (currentStep) {
      case 1:
        return (
          <PersonalDetails
            setCurrentStep={setCurrentStep}
            formData={formData}
            setFormData={setFormData}
          />
        );
      case 2:
        return (
          <AcademicDetails
            setCurrentStep={setCurrentStep}
            formData={formData}
            setFormData={setFormData}
          />
        );
      case 3:
        return (
          <CourseDetails
            setCurrentStep={setCurrentStep}
            formData={formData}
            setFormData={setFormData}
          />
        );
      case 4:
        return (
          <Documents
            setCurrentStep={setCurrentStep}
            formData={formData}
            setFormData={setFormData}
          />
        );
      case 5:
        return (
          <ConfirmationPage
            setCurrentStep={setCurrentStep}
            formData={formData}
          />
        );
      default:
        return null;
    }
  };

  return (
    <div className="app">
      {/* Navbar with toggleSidebar */}
      <Navbar toggleSidebar={() => setSidebarOpen(!sidebarOpen)} />

      <div className="main">
        {/* Sidebar (slide open/close) */}
        <Sidebar
          currentStep={currentStep}
          setCurrentStep={setCurrentStep}
          sidebarOpen={sidebarOpen}
        />

        {/* Form area */}
        <div className="form-container">{renderPage()}</div>
      </div>
    </div>
  );
}

export default App;
