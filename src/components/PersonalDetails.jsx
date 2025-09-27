import React, { useState } from "react";

export default function PersonalDetails({ setCurrentStep, formData, setFormData }) {
  const [data, setData] = useState(formData.personal || {});

  const handleNext = () => {
    setFormData({ ...formData, personal: data });
    setCurrentStep(2);
  };

  return (
    <div style={styles.page}>
      <div style={styles.card}>
        {/* Left side title */}
        <div style={styles.left}>
          <h2 style={styles.title}>Personal Details</h2>
          <p style={styles.subtitle}>
            Please provide your basic information for admission processing.
          </p>
        </div>

        {/* Right side form */}
        <div style={styles.right}>
          <div style={styles.row}>
            <input
              style={styles.input}
              placeholder="Full Name"
              value={data.name || ""}
              onChange={(e) => setData({ ...data, name: e.target.value })}
            />
            <input
              style={styles.input}
              type="date"
              value={data.dob || ""}
              onChange={(e) => setData({ ...data, dob: e.target.value })}
            />
          </div>

          <div style={styles.row}>
            <input
              style={styles.input}
              placeholder="Gender"
              value={data.gender || ""}
              onChange={(e) => setData({ ...data, gender: e.target.value })}
            />
            <input
              style={styles.input}
              placeholder="Phone"
              value={data.phone || ""}
              onChange={(e) => setData({ ...data, phone: e.target.value })}
            />
          </div>

          <div style={styles.row}>
            <input
              style={{ ...styles.input, flex: 1 }}
              placeholder="Email"
              value={data.email || ""}
              onChange={(e) => setData({ ...data, email: e.target.value })}
            />
          </div>

          <button style={styles.button} onClick={handleNext}>
            Next →
          </button>
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
    height: "100vh", // Full screen height
    background: "#f4f7fc",
    overflow: "hidden", // Prevent scrolling
    padding: "0 20px",
  },
  card: {
    display: "flex",
    flexDirection: "row",
    width: "100%",
    maxWidth: "1000px", // Increased size
    background: "#fff",
    borderRadius: "18px",
    boxShadow: "0 8px 20px rgba(0,0,0,0.15)",
    overflow: "hidden",
    minHeight: "500px", // Bigger card height
  },
  left: {
    flex: "1",
    background: "linear-gradient(180deg, #0d47a1, #1976d2)",
    color: "white",
    padding: "50px 30px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
  },
  title: {
    fontSize: "26px",
    marginBottom: "15px",
  },
  subtitle: {
    fontSize: "15px",
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
  button: {
    alignSelf: "flex-end",
    padding: "14px 28px",
    border: "none",
    borderRadius: "10px",
    background: "linear-gradient(90deg, #0d47a1, #1976d2)",
    color: "white",
    fontSize: "17px",
    fontWeight: "bold",
    cursor: "pointer",
    transition: "0.3s",
    marginTop: "25px",
  },
};
