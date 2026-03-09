import React from 'react';
import ProjectCard from './ProjectCard';
import './ProjectGrid.css';

const ProjectGrid = ({ projects, onProjectClick }) => {
  if (projects.length === 0) {
    return (
      <div className="no-projects">
        <svg
          className="no-projects-icon"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
        <h3>No projects found</h3>
        <p>Try adjusting your search terms</p>
      </div>
    );
  }

  return (
    <div className="project-grid">
      {projects.map((project) => (
        <ProjectCard
          key={project.id}
          project={project}
          onClick={onProjectClick}
        />
      ))}
    </div>
  );
};

export default ProjectGrid;
