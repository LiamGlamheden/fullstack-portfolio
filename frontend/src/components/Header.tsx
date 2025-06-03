import React from 'react';

export default function Header() {
  return (
    <header style={{
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      padding: "1rem",
      backgroundColor: "#334155",
      color: "white"
    }}>
        <div style={{ display: "flex", alignItems: "center"}}>
            <img src="/Portfolio-icon.png" alt="Portfolio icon" style={{ height: "4em" }} />
            <p>Liam Glamheden</p>
        </div>

      <nav style={{ display: "flex", gap: "2rem" }}>
        <p style={{ cursor: "pointer" }}>Resume</p>
        <p style={{ cursor: "pointer" }}>About</p>
        <p style={{ cursor: "pointer" }}>Projects</p>
        <p style={{ cursor: "pointer" }}>Skills</p>
        <p style={{ cursor: "pointer" }}>Contact</p>
      </nav>
    </header>
  );
}
