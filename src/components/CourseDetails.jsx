import React, { useState } from "react";

export default function CourseDetails({ setCurrentStep, formData, setFormData }) {
  const [data, setData] = useState(formData.course || {});

  const handleNext = () => {
    setFormData({ ...formData, course: data });
    setCurrentStep(4);
  };

  return (
    <div style={styles.page}>
      <div style={styles.card}>
        {/* Left side panel */}
        <div style={styles.left}>
          <h2 style={styles.title}>Course Details</h2>
          <p style={styles.subtitle}>
            Select the course and study mode you are applying for.
          </p>
        </div>

        {/* Right side form */}
        <div style={styles.right}>
          <div style={styles.row}>
            {/* Course Dropdown */}
            <select
              style={styles.input}
              value={data.course || ""}
              onChange={(e) => setData({ ...data, course: e.target.value })}
            >
              <option value="">-- Select Course --</option>
              <option value="CSE">Computer Science Engineering</option>
              <option value="ECE">Electronics & Communication Engineering</option>
              <option value="EEE">Electrical & Electronics Engineering</option>
              <option value="ME">Mechanical Engineering</option>
              <option value="CE">Civil Engineering</option>
              <option value="IT">Information Technology</option>
              <option value="AERO">Aeronautical Engineering</option>
              <option value="BIO">Biotechnology Engineering</option>
            </select>
          </div>

          <div style={styles.row}>
            {/* Mode of Study Dropdown */}
            <select
              style={styles.input}
              value={data.mode || ""}
              onChange={(e) => setData({ ...data, mode: e.target.value })}
            >
              <option value="">-- Select Mode of Study --</option>
              <option value="Regular">Regular</option>
              <option value="Online">Online</option>
              <option value="Part-time">Part-time</option>
            </select>
          </div>

          {/* Buttons */}
          <div style={styles.buttonRow}>
            <button style={styles.backButton} onClick={() => setCurrentStep(2)}>
              ← Back
            </button>
            <button style={styles.nextButton} onClick={handleNext}>
              Next →
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

// ✅ Internal CSS styles
const styles = {
  page: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
    background: "#f4f7fc",
    overflow: "hidden",
    padding: "0 20px",
  },
  card: {
    display: "flex",
    flexDirection: "row",
    width: "100%",
    maxWidth: "1000px",
    background: "#fff",
    borderRadius: "18px",
    boxShadow: "0 8px 20px rgba(0,0,0,0.15)",
    overflow: "hidden",
    minHeight: "400px",
  },
  left: {
    flex: "1",
    background: "linear-gradient(180deg, #283593, #3f51b5)",
    color: "white",
    padding: "50px 30px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
  },
  title: {
    fontSize: "24px",
    marginBottom: "12px",
  },
  subtitle: {
    fontSize: "14px",
    opacity: 0.9,
    lineHeight: "1.5",
  },
  right: {
    flex: "2",
    padding: "50px 40px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
  },
  row: {
    display: "flex",
    gap: "20px",
    marginBottom: "20px",
  },
  input: {
    flex: 1,
    padding: "14px 16px",
    border: "1px solid #ccc",
    borderRadius: "10px",
    fontSize: "15px",
    outline: "none",
    transition: "0.3s",
  },
  buttonRow: {
    display: "flex",
    justifyContent: "space-between",
    marginTop: "25px",
  },
  backButton: {
    padding: "12px 25px",
    border: "none",
    borderRadius: "10px",
    background: "#ddd",
    color: "#333",
    fontSize: "15px",
    cursor: "pointer",
    fontWeight: "bold",
    transition: "0.3s",
  },
  nextButton: {
    padding: "12px 25px",
    border: "none",
    borderRadius: "10px",
    background: "linear-gradient(90deg, #0d47a1, #1976d2)",
    color: "white",
    fontSize: "16px",
    fontWeight: "bold",
    cursor: "pointer",
    transition: "0.3s",
  },
};
