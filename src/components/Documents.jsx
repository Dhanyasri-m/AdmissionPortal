import React, { useState } from "react";

export default function Documents({ setCurrentStep, formData, setFormData }) {
  const [docs, setDocs] = useState(formData.documents || {});

  const handleFileChange = (e, field) => {
    setDocs({ ...docs, [field]: e.target.files[0] });
  };

  const handleNext = () => {
    setFormData({ ...formData, documents: docs });
    setCurrentStep(5);
  };

  return (
    <div style={styles.page}>
      <div style={styles.card}>
        {/* Left side panel */}
        <div style={styles.left}>
          <h2 style={styles.title}>Upload Documents</h2>
          <p style={styles.subtitle}>
            Please upload the required documents (PDF/JPG/PNG).
          </p>
        </div>

        {/* Right side form */}
        <div style={styles.right}>
          {/* Upload fields */}
          <div style={styles.uploadGroup}>
            <label style={styles.label}>10th Marksheet</label>
            <input
              type="file"
              onChange={(e) => handleFileChange(e, "tenthMarksheet")}
            />
            {docs.tenthMarksheet && (
              <p style={styles.fileText}>✅ {docs.tenthMarksheet.name}</p>
            )}
          </div>

          <div style={styles.uploadGroup}>
            <label style={styles.label}>12th Marksheet</label>
            <input
              type="file"
              onChange={(e) => handleFileChange(e, "twelfthMarksheet")}
            />
            {docs.twelfthMarksheet && (
              <p style={styles.fileText}>✅ {docs.twelfthMarksheet.name}</p>
            )}
          </div>

          <div style={styles.uploadGroup}>
            <label style={styles.label}>Transfer Certificate (TC)</label>
            <input
              type="file"
              onChange={(e) => handleFileChange(e, "transferCertificate")}
            />
            {docs.transferCertificate && (
              <p style={styles.fileText}>✅ {docs.transferCertificate.name}</p>
            )}
          </div>

          <div style={styles.uploadGroup}>
            <label style={styles.label}>Passport-size Photo</label>
            <input
              type="file"
              accept="image/*"
              onChange={(e) => handleFileChange(e, "photo")}
            />
            {docs.photo && (
              <p style={styles.fileText}>✅ {docs.photo.name}</p>
            )}
          </div>

          <div style={styles.uploadGroup}>
            <label style={styles.label}>ID Proof (Aadhaar/Passport)</label>
            <input
              type="file"
              onChange={(e) => handleFileChange(e, "idProof")}
            />
            {docs.idProof && (
              <p style={styles.fileText}>✅ {docs.idProof.name}</p>
            )}
          </div>

          {/* Buttons */}
          <div style={styles.buttonRow}>
            <button style={styles.backButton} onClick={() => setCurrentStep(3)}>
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
    minHeight: "500px",
  },
  left: {
    flex: "1",
    background: "linear-gradient(180deg, #1a237e, #3949ab)",
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
    justifyContent: "flex-start",
  },
  uploadGroup: {
    marginBottom: "20px",
  },
  label: {
    display: "block",
    marginBottom: "8px",
    fontWeight: "bold",
    fontSize: "15px",
  },
  fileText: {
    fontSize: "14px",
    color: "green",
    marginTop: "5px",
  },
  buttonRow: {
    display: "flex",
    justifyContent: "space-between",
    marginTop: "20px",
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
