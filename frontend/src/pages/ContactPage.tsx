import { useState } from 'react';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Submitted:', formData);
    alert("Message sent!");
  };

  return (
    <div style={{ display: 'flex', justifyContent: 'center', gap: '2rem', padding: '2rem' }}>
      <div style={{
        backgroundColor: "#e5e7eb",
        padding: "1rem",
        borderRadius: "0.5rem",
        width: "250px",
        fontFamily: "sans-serif",
        height: "fit-content"
      }}>
        <h2 style={{ marginBottom: "1rem" }}>Contact</h2>
        <p><a href="liam.l.glamheden@gmail.com">liam.l.glamheden@gmail.com</a></p>
        <p><a href="https://github.com/LiamGlamheden" target="_blank" rel="noopener noreferrer">GitHub</a></p>
        <p><a href="https://www.linkedin.com/in/liam-glamheden-b45463262/" target="_blank" rel="noopener noreferrer">LinkedIn</a></p>
      </div>

      <div style={{ maxWidth: '400px', width: '100%' }}>
        <h2>Contact Me</h2>
        <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          <input
            type="text"
            name="name"
            placeholder="Your name"
            value={formData.name}
            onChange={handleChange}
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Your email"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <textarea
            name="message"
            placeholder="Your message"
            rows={5}
            value={formData.message}
            onChange={handleChange}
            required
          />
          <button type="submit">Send</button>
        </form>
      </div>
    </div>
  );
}
