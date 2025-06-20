import React, { useEffect, useState } from 'react';

type Project = {
  id: number;
  title: string;
  description: string;
  groupSize: number;
  techStack: string;
  date: string;
};

const ProjectsPage: React.FC = () => {
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetch('https://localhost:5001/projects') 
      .then((res) => {
        if (!res.ok) throw new Error('Failed to fetch projects');
        return res.json();
      })
      .then((data) => setProjects(data))
      .catch((err) => setError(err.message))
      .finally(() => setLoading(false));
  }, []);

  if (loading) return <p>Loading projects...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div>
      <h1>My Projects</h1>
      {projects.map((project) => (
        <div key={project.id} style={{ border: '1px solid #ccc', margin: '1rem 0', padding: '1rem' }}>
          <h2>{project.title}</h2>
          <p>{project.description}</p>
          <p><strong>Group Size:</strong> {project.groupSize}</p>
          <p><strong>Tech Stack:</strong> {project.techStack}</p>
          <p><strong>Date:</strong> {new Date(project.date).toLocaleDateString()}</p>
        </div>
      ))}
    </div>
  );
};

export default ProjectsPage;
