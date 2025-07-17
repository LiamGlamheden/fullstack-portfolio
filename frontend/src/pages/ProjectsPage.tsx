import React, { useEffect, useState } from 'react';

type Project = {
  id: number;
  title: string;
  description: string;
  groupSize: number;
  techStack: string;
  date: string;
  imageUrl?: string;
  githubUrl: string;
};

const ProjectsPage: React.FC = () => {
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // Automatically switch between local and production URLs
  const apiBaseUrl =
    window.location.hostname === 'localhost'
      ? 'http://localhost:5236'
      : 'https://liamglamheden.com';

  useEffect(() => {
    fetch(`${apiBaseUrl}/projects`)
    .then((res) => {
        if (!res.ok) throw new Error('Failed to fetch projects');
        return res.json();
      })
      .then((data) => setProjects(data))
      .catch((err) => setError(err.message))
      .finally(() => setLoading(false));
  }, [apiBaseUrl]);

  if (loading) return <p>Loading projects...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div>
      <h1>My Projects</h1>
      {projects.map((project, index) => {
        const isEven = index % 2 === 0;
        return (
          <div
            key={project.id}
            style={{
              display: 'flex',
              flexDirection: isEven ? 'row' : 'row-reverse',
              border: '1px solid #ccc',
              margin: '1rem 0',
              padding: '1rem',
              alignItems: 'center',
              gap: '20px',
            }}
          >
            {project.imageUrl && (
              <img
                src={project.imageUrl}
                alt={project.title}
                style={{ width: 150, height: 150, objectFit: 'cover', borderRadius: 8 }}
              />
            )}
            <div>
              <h2>{project.title}</h2>
              <p>{project.description}</p>
              <p>
                <strong>Group Size:</strong> {project.groupSize}
              </p>
              <p>
                <strong>Tech Stack:</strong> {project.techStack}
              </p>
              <p>
                <strong>GitHub:</strong>{' '}
                <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                  {project.githubUrl}
                </a>
              </p>
              <p>
                <strong>Date:</strong> {new Date(project.date).toLocaleDateString()}
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ProjectsPage;
