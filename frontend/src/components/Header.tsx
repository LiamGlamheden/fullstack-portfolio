import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function Header() {
    const navigate = useNavigate();

    const handleAbout = () => {
        navigate('/about');
      };

      const handleContact = () => {
        navigate('/contact');
      };

      const handleResume = ()=> {
        navigate('/resume');
      }
      const handleProjects = ()=> {
        navigate('/projects');
      }

      const handleIcon = ()=> {
        navigate('/');
      }
  return (

    <header style={{
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      padding: "1rem",
      backgroundColor: "#334155",
      color: "white"
    }}>
        
        <div onClick={handleIcon} style={{ 
            display: "flex", 
            alignItems: "center",
            gap: "1rem",
            cursor: "pointer"
            }}>
            <img  src="/Portfolio-icon.png" alt="Portfolio icon" style={{ height: "4em" }} />
            <p style={{ 
                fontSize: "1.5rem", 
                fontWeight: "600", 
                margin: 0, 
                color: "#f1f5f9"  
            }}>
                Liam Glamheden
            </p>
        </div>


      <nav style={{ display: "flex", gap: "2rem" }}>
        <p onClick={handleResume} style={{ cursor: "pointer" }}>Resume</p>
        <p onClick={handleAbout} style={{ cursor: "pointer" }}>About</p>
        <p onClick={handleProjects} style={{ cursor: "pointer" }}>Projects</p>
        {/* <p style={{ cursor: "pointer" }}>Skills</p> */}
        <p onClick={handleContact} style={{ cursor: "pointer" }}>Contact</p>
      </nav>
    </header>
  );
}
