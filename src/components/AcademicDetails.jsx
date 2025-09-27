import React, { useState } from "react";

export default function AcademicDetails({ setCurrentStep, formData, setFormData }) {
  const [data, setData] = useState(formData.academic || {});

  const handleNext = () => {
    setFormData({ ...formData, academic: data });
    setCurrentStep(3);
  };

  return (
    <div style={styles.page}>
      <div style={styles.card}>
        {/* Left side panel */}
        <div style={styles.left}>
          <h2 style={styles.title}>Academic Details</h2>
          <p style={styles.subtitle}>
            Enter your educational background and marks for eligibility
            verification.
          </p>
        </div>

        {/* Right side form */}
        <div style={styles.right}>
          <div style={styles.row}>
            <input
              style={styles.input}
              placeholder="Previous School/College"
              value={data.school || ""}
              onChange={(e) => setData({ ...data, school: e.target.value })}
            />
            <input
              style={styles.input}
              placeholder="Board/University"
              value={data.board || ""}
              onChange={(e) => setData({ ...data, board: e.target.value })}
            />
          </div>

          <div style={styles.row}>
            <input
              style={styles.input}
              placeholder="Marks/Grades"
              value={data.marks || ""}
              onChange={(e) => setData({ ...data, marks: e.target.value })}
            />
            <input
              style={styles.input}
              placeholder="Year of Passing"
              value={data.year || ""}
              onChange={(e) => setData({ ...data, year: e.target.value })}
            />
          </div>

          {/* Buttons */}
          <div style={styles.buttonRow}>
            <button style={styles.backButton} onClick={() => setCurrentStep(1)}>
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
    minHeight: "450px",
  },
  left: {
    flex: "1",
    background: "linear-gradient(180deg, #1565c0, #42a5f5)",
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
