export default function ProjectCard({ project }) {
  return (
    <div className="project-card">
      <h2>{project.title}</h2>
      <p className="description">{project.description}</p>
      <p className="tech">Tech: {project.tech.join(", ")}</p>
      <div className="project-links">
        {project.github_url && (
          <a href={project.github_url} target="_blank" rel="noopener noreferrer">
            GitHub
          </a>
        )}
        {project.live_url && (
          <a href={project.live_url} target="_blank" rel="noopener noreferrer">
            Live Site
          </a>
        )}
      </div>
    </div>
  );
}
