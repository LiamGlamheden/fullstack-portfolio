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
        <img src="/Portfolio-icon.png" alt="Portfolio icon" style={{ height: "4em"}} />
        <p>My Portfolio</p>
      </header>
    );
  }
  