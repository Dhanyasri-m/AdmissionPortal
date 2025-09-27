import React from "react";

export default function ConfirmationPage({ formData, setCurrentStep }) {
  const handleSubmit = () => {
    alert("🎉 Application Submitted Successfully!");
  };

  return (
    <div style={styles.page}>
      <div style={styles.card}>
        {/* Left side panel */}
        <div style={styles.left}>
          <h2 style={styles.title}>Review & Confirm</h2>
          <p style={styles.subtitle}>
            Please review your details carefully. You can edit any section before final submission.
          </p>
        </div>

        {/* Right side review */}
        <div style={styles.right}>
          {/* Personal Details */}
          <div style={styles.section}>
            <h3 style={styles.sectionTitle}>Personal Details</h3>
            <pre style={styles.pre}>{JSON.stringify(formData.personal, null, 2)}</pre>
            <button style={styles.editButton} onClick={() => setCurrentStep(1)}>Edit</button>
          </div>

          {/* Academic Details */}
          <div style={styles.section}>
            <h3 style={styles.sectionTitle}>Academic Details</h3>
            <pre style={styles.pre}>{JSON.stringify(formData.academic, null, 2)}</pre>
            <button style={styles.editButton} onClick={() => setCurrentStep(2)}>Edit</button>
          </div>

          {/* Course Details */}
          <div style={styles.section}>
            <h3 style={styles.sectionTitle}>Course Details</h3>
            <pre style={styles.pre}>{JSON.stringify(formData.course, null, 2)}</pre>
            <button style={styles.editButton} onClick={() => setCurrentStep(3)}>Edit</button>
          </div>

          {/* Documents */}
          <div style={styles.section}>
            <h3 style={styles.sectionTitle}>Documents</h3>
            <p>{formData.documents.files?.length || 0} files uploaded</p>
            <button style={styles.editButton} onClick={() => setCurrentStep(4)}>Edit</button>
          </div>

          {/* Final Submit */}
          <button style={styles.submitButton} onClick={handleSubmit}>
            ✅ Apply & Confirm
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
    minHeight: "500px",
  },
  left: {
    flex: "1",
    background: "linear-gradient(180deg, #004d40, #26a69a)",
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
    padding: "40px",
    display: "flex",
    flexDirection: "column",
    overflowY: "auto",
  },
  section: {
    border: "1px solid #ddd",
    borderRadius: "10px",
    padding: "15px 20px",
    marginBottom: "20px",
    background: "#fafafa",
  },
  sectionTitle: {
    margin: "0 0 10px",
    color: "#0d47a1",
    fontSize: "18px",
  },
  pre: {
    background: "#fff",
    padding: "10px",
    borderRadius: "6px",
    border: "1px solid #eee",
    fontSize: "13px",
    maxHeight: "120px",
    overflowY: "auto",
  },
  editButton: {
    marginTop: "10px",
    padding: "8px 15px",
    border: "none",
    borderRadius: "8px",
    background: "#1976d2",
    color: "white",
    fontSize: "14px",
    cursor: "pointer",
    transition: "0.3s",
  },
  submitButton: {
    alignSelf: "flex-end",
    padding: "14px 28px",
    border: "none",
    borderRadius: "10px",
    background: "linear-gradient(90deg, #2e7d32, #43a047)",
    color: "white",
    fontSize: "16px",
    fontWeight: "bold",
    cursor: "pointer",
    marginTop: "15px",
    transition: "0.3s",
  },
};
