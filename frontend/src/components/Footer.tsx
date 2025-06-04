export default function Footer() {
    return (
      <footer style={{
        backgroundColor: "#1f2937",
        color: "white",
        padding: "1rem",
        textAlign: "center",
        marginTop: "auto"
      }}>
        <p>Get in touch: <a href="mailto:liam.l.glamheden@gmail.com" style={{color: "#93c5fd", textDecoration: "none"}}>liam.l.glamheden@gmail.com</a></p>
        <div style={{ marginTop: "0.5rem", fontSize: "0.9rem" }}>
          <a href="https://github.com/LiamGlamheden" target="_blank" rel="noopener noreferrer" style={{ color: "#93c5fd", textDecoration: "none", margin: "0 0.5rem" }}>
            GitHub
          </a>
          |
          <a href="https://www.linkedin.com/in/liam-glamheden-b45463262/" target="_blank" rel="noopener noreferrer" style={{ color: "#93c5fd", textDecoration: "none", margin: "0 0.5rem" }}>
            LinkedIn
          </a>
        </div>
      </footer>
    );
  }
  