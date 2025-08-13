export default function AboutPage() {
  return (
    <div
      style={{
        maxWidth: "900px",
        margin: "2rem auto",
        padding: "1rem",
        fontFamily: "sans-serif",
      }}
    >
      <div style={{ textAlign: "center", marginBottom: "2rem" }}>
        <img
          src="/PhotoOfMe1.jpg"
          alt="Liam Glamheden"
          style={{
            width: "400px",
            height: "400px",
            objectFit: "cover",
            borderRadius: "12px",
            marginBottom: "1rem",
            boxShadow: "0 4px 12px rgba(0,0,0,0.15)",
          }}
        />
        <h1>About Me</h1>
      </div>

      <section style={{ marginBottom: "2rem" }}>
        <p style={{ fontSize: "1.1rem", lineHeight: "1.7", color: "#374151" }}>
          I recently graduated from Yrkeshögskolan in Borås, where I studied
          software development. Most of my studies focused on .NET and backend,
          but I also worked a lot with frontend tools like React and CSS.
          My interest in coding started in high school at LBS / Ljud och Bildskolan
          in Borås, where I studied game development and found my passion for
          building projects and writing code.
        </p>
      </section>

      <section style={{ marginBottom: "2rem" }}>
        <h2 style={{ color: "#1f2937" }}>Development Interests</h2>
        <p style={{ fontSize: "1.1rem", lineHeight: "1.7", color: "#374151" }}>
          I have worked with several programming languages and tools, such as:
          <br />
          <strong>
            C#, JavaScript, TypeScript, PHP, HTML, CSS, SQL, Node.js,
            GitHub, and Bitbucket.
          </strong>{" "}
          My main focus is on <strong>C#, React, and JavaScript/TypeScript</strong>.
          I enjoy learning new skills and like the whole process — from making
          designs in Figma to building them into working projects.
        </p>
      </section>

      <section style={{ marginBottom: "2rem" }}>
        <h2 style={{ color: "#1f2937" }}>Teamwork & Projects</h2>
        <p style={{ fontSize: "1.1rem", lineHeight: "1.7", color: "#374151" }}>
          In both high school and vocational university, I worked on many group
          projects. These taught me how to work well with different people in
          both small and large teams, which is an important part of being a
          developer.
        </p>
      </section>

      <section style={{ marginBottom: "2rem" }}>
        <h2 style={{ color: "#1f2937" }}>Goals</h2>
        <p style={{ fontSize: "1.1rem", lineHeight: "1.7", color: "#374151" }}>
          I want to improve my skills in all areas of software development.
          Right now, I’m focusing on getting better at coding, planning, and
          working effectively in real projects.
        </p>
      </section>

      <section
        style={{
          backgroundColor: "#f3f4f6",
          padding: "1rem",
          borderRadius: "8px",
          color: "#1f2937",
          maxWidth: "600px",
          margin: "2rem auto 0 auto",
        }}
      >
        <h3 style={{ marginBottom: "0.5rem" }}>A little more about me</h3>
        <p style={{ fontSize: "1rem", lineHeight: "1.6" }}>
          In my free time, I like spending time with friends and exploring my
          interest in technology and how things work.
        </p>
      </section>
    </div>
  );
}
