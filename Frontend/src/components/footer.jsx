export default function Footer() {
  return (
    <footer
      style={{
        marginTop: "40px",
        padding: "20px 10px",
        textAlign: "center",
        borderTop: "1px solid #e5e7eb",
        color: "#6b7280",
        fontSize: "14px",
        background: "transparent"
      }}
    >
      <div style={{ marginBottom: "6px", fontWeight: 500, color: "#374151" }}>
        Meeting Tracker
      </div>

      <div style={{ marginBottom: "6px" }}>
        Extract and manage meeting action items efficiently.
      </div>

      <div style={{ fontSize: "13px" }}>
        © {new Date().getFullYear()} Meeting Tracker • Built with React
      </div>
    </footer>
  );
}
