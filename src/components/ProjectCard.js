import React from 'react';
import './ProjectCard.css';

const ProjectCard = ({ project, onClick }) => {
  return (
    <div className="project-card" onClick={() => onClick(project)}>
      <div className="project-card-image">
        {project.thumbnail ? (
          <img src={project.thumbnail} alt={project.title} />
        ) : (
          <div className="project-card-placeholder">
            <span>{project.title[0]}</span>
          </div>
        )}
      </div>
      <div className="project-card-content">
        <h3 className="project-card-title">{project.title}</h3>
        <p className="project-card-description">{project.description}</p>
        <div className="project-card-tags">
          {project.tags.map((tag, index) => (
            <span key={index} className="project-tag">
              {tag}
            </span>
          ))}
        </div>
      </div>
      <div className="project-card-overlay">
        <button className="view-project-btn">View Project</button>
      </div>
    </div>
  );
};

export default ProjectCard;
