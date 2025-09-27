import React from "react";
import { FaBars, FaSignOutAlt } from "react-icons/fa"; // icons

export default function Navbar({ toggleSidebar }) {
  return (
    <nav style={styles.navbar}>
      {/* Left: Menu icon */}
      <div style={styles.left}>
        <FaBars style={styles.icon} onClick={toggleSidebar} />
      </div>

      {/* Center: Title */}
      <div style={styles.center}>
        <h2 style={styles.title}>College Admission Portal</h2>
      </div>

      {/* Right: Logout */}
      <div style={styles.right}>
        <FaSignOutAlt
          style={styles.icon}
          onClick={() => alert("Logging out...")}
        />
      </div>
    </nav>
  );
}

// ✅ Internal CSS
const styles = {
  navbar: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    background: "linear-gradient(90deg, #0d47a1, #1976d2)",
    color: "white",
    padding: "0.6rem 1.5rem",
    boxShadow: "0 2px 5px rgba(0,0,0,0.2)",
    position: "fixed",
    top: 0,
    left: 0,
    right: 0,
    height: "55px",
    zIndex: 1000,
  },
  left: { flex: 1 },
  center: { flex: 2, textAlign: "center" },
  right: { flex: 1, textAlign: "right" },
  title: { margin: 0, fontSize: "20px" },
  icon: {
    fontSize: "20px",
    cursor: "pointer",
    margin: "0 10px",
    transition: "0.2s",
  },
};
