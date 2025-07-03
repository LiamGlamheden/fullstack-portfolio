export default function ResumePage() {
    return (
      <div style={{ padding: 20 }}>
        <h1>My Resume</h1>
  
        <div
          style={{
            position: 'relative',
            paddingBottom: '141.42%', 
            height: 0,
            overflow: 'hidden',
            border: '1px solid #ccc',
          }}
        >
          <iframe
            src="/CV_Liam_Glamheden.pdf"
            title="Resume PDF"
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%',
              border: 'none',
            }}
          />
        </div>
  
        <p>
          Or download it here:{' '}
          <a href="/CV_Liam_Glamheden.pdf" download>
            Download Resume
          </a>
        </p>
      </div>
    );
  }
  