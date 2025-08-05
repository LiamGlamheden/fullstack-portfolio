export default function HomePage() {
    return (
      <div style={{
        maxWidth: '1000px',
        margin: '3rem auto',
        padding: '1rem',
        fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
        display: 'flex',
        alignItems: 'center',
        gap: '3rem',
        flexWrap: 'wrap'
      }}>
        <img 
          src="/PhotoOfMe2.jpg"  
          alt="Liam Glamheden" 
          style={{
            width: '300px',
            height: '300px',
            objectFit: 'cover',
            borderRadius: '1rem',
            boxShadow: '0 6px 12px rgba(0,0,0,0.15)'
          }}
        />
  
        <div style={{ flex: 1, minWidth: '280px' }}>
          <h1 style={{ fontSize: '2.5rem', marginBottom: '0.5rem' }}>Liam Glamheden</h1>
          <h2 style={{ fontSize: '1.6rem', color: '#4b5563', marginBottom: '1.2rem' }}>Junior Software Developer</h2>
          <p style={{ fontSize: '1.1rem', lineHeight: '1.7', color: '#374151' }}>
            Hello and welcome to my portfolio. Here, I showcase some of the projects I've been working on and share insights into my learning journey. I am a recently graduated software developer. I'm excited about the opportunity to contribute to real-world projects and grow as a developer in a collaborative environment.
          </p>

        </div>
      </div>
    );
  }
  