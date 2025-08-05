export default function AboutPage() {
    return (
      <div style={{ maxWidth: "900px", margin: "2rem auto", padding: "1rem", fontFamily: "sans-serif" }}>
        <div style={{ textAlign: "center", marginBottom: "2rem" }}>
          <img
            src="/PhotoOfMe1.jpg"
            alt="Liam Glamheden"
            style={{ width: "200px", height: "200px", objectFit: "cover", borderRadius: "10px", marginBottom: "1rem" }}
          />
          <h1>About Me</h1>
        </div>
  
        <section style={{ marginBottom: "2rem" }}>
          <p style={{ fontSize: "1.1rem", lineHeight: "1.7", color: "#374151" }}>
            Hi! My name is Liam Glamheden. I began my journey into development during high school, where I studied game
            development at LBS in Borås. That experience sparked my interest in programming and building systems in
            general — especially creating logical structures and then seeing them come to life visually.
          </p>
  
          <p style={{ fontSize: "1.1rem", lineHeight: "1.7", color: "#374151" }}>
            After graduating from LBS, I decided to continue my learning at the vocational university in Borås, where I
            recently completed a degree in System Development. I chose this path because I wanted a broader experience —
            not just focusing on frontend, but understanding all areas of software development.
          </p>
        </section>
  
        <section style={{ marginBottom: "2rem" }}>
          <h2 style={{ color: "#1f2937" }}>Development Interests</h2>
          <p style={{ fontSize: "1.1rem", lineHeight: "1.7", color: "#374151" }}>
            I enjoy both frontend and backend development. Writing clean, structured code that’s reusable — like
            components or class hierarchies — is something I take pride in. I’m always curious to improve my skills, and
            I find joy in planning and designing how things work behind the scenes.
          </p>
        </section>
  
        <section style={{ marginBottom: "2rem" }}>
          <h2 style={{ color: "#1f2937" }}>Teamwork & Projects</h2>
          <p style={{ fontSize: "1.1rem", lineHeight: "1.7", color: "#374151" }}>
            Throughout both high school and vocational university, I’ve worked on several group projects. These
            experiences taught me how to collaborate with different people in both small and large teams, which I believe
            is an important part of working in software development.
          </p>
        </section>
  
        <section style={{ marginBottom: "2rem" }}>
          <h2 style={{ color: "#1f2937" }}>Goals</h2>
          <p style={{ fontSize: "1.1rem", lineHeight: "1.7", color: "#374151" }}>
            I’m looking for opportunities to deepen my skills across all areas of software development. My main focus
            right now is to become better at coding, planning, and working efficiently in real-world environments.
          </p>
        </section>
  
        <section style={{
          backgroundColor: "#f3f4f6",
          padding: "1rem",
          borderRadius: "8px",
          color: "#1f2937",
          maxWidth: "600px",
          margin: "2rem auto 0 auto"
        }}>
          <h3 style={{ marginBottom: "0.5rem" }}>A little more about me</h3>
          <p style={{ fontSize: "1rem", lineHeight: "1.6" }}>
            I enjoy hanging out with friends in my free time and I’ve always had a general interest in technology and how
            things work.
          </p>
        </section>
      </div>
    );
  }
  