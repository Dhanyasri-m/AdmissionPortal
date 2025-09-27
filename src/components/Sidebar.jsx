import React from "react";
import {
  FaUser,
  FaBook,
  FaGraduationCap,
  FaFileAlt,
  FaCheckCircle,
} from "react-icons/fa";

export default function Sidebar({ currentStep, setCurrentStep, sidebarOpen }) {
  const steps = [
    { name: "Personal", icon: <FaUser /> },
    { name: "Academic", icon: <FaBook /> },
    { name: "Course", icon: <FaGraduationCap /> },
    { name: "Documents", icon: <FaFileAlt /> },
    { name: "Confirm", icon: <FaCheckCircle /> },
  ];

  return (
    <aside
      style={{
        ...styles.sidebar,
        transform: sidebarOpen ? "translateX(0)" : "translateX(-100%)",
      }}
    >
      <ul style={styles.list}>
        {steps.map((step, index) => (
          <li
            key={index}
            style={{
              ...styles.item,
              ...(currentStep === index + 1 ? styles.active : {}),
            }}
            onClick={() => {
              if (index + 1 <= currentStep) setCurrentStep(index + 1);
            }}
          >
            <span style={styles.icon}>{step.icon}</span>
            <span style={styles.label}>{step.name}</span>
          </li>
        ))}
      </ul>
    </aside>
  );
}

// ✅ Internal CSS
const styles = {
  sidebar: {
    width: "220px",
    background: "linear-gradient(180deg, #0d47a1, #1976d2)",
    color: "white",
    transition: "transform 0.3s ease",
    boxShadow: "2px 0 5px rgba(0,0,0,0.3)",
    overflowY: "auto",
    position: "fixed",
    top: "74px", // Start below Navbar
    left: 0,
    bottom: 0,
    zIndex: 900,
  },
  list: {
    listStyle: "none",
    padding: 0,
    margin: 0,
  },
  item: {
    display: "flex",
    alignItems: "center",
    padding: "12px 20px",
    cursor: "pointer",
    transition: "background 0.2s ease",
  },
  active: {
    background: "rgba(255, 255, 255, 0.2)",
    borderLeft: "4px solid #ffcc00",
  },
  icon: { marginRight: "10px", fontSize: "1.2rem" },
  label: { fontSize: "1rem", fontWeight: 500 },
};
