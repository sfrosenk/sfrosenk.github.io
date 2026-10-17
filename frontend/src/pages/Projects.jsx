import { useEffect, useState } from "react";
import { fetchProjects } from "../api";
import ProjectCard from "./ProjectCard";

export default function Projects() {
  const [projects, setProjects] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchProjects()
      .then(setProjects)
      .catch(() => setError("Could not load projects. Is the backend running?"));
  }, []);

  if (error) return <p className="status">{error}</p>;
  if (!projects) return <p className="status">Loading...</p>;

  return (
    <section className="projects">
      <h1>Projects</h1>
      <div className="project-list">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </section>
  );
}
