import { useParams, useNavigate } from 'react-router-dom';
import projectsData from '../data/projectsData';
import './ProjectPage.css';

function ProjectPage() {
  const { slug } = useParams();
  const navigate = useNavigate();
  const project = projectsData.find((p) => p.slug === slug);

  if (!project) {
    return (
      <div className="project-page">
        <div className="project-page-header">
          <button className="back-btn" onClick={() => navigate('/')}>
            ← Back to Projects
          </button>
        </div>
        <div className="project-not-found">Project not found</div>
      </div>
    );
  }

  return (
    <div className="project-page">
      <div className="project-page-header">
        <button className="back-btn" onClick={() => navigate('/')}>
          ← Back to Projects
        </button>
        <h2 className="project-page-title">{project.title}</h2>
      </div>
      <iframe
        className="project-page-iframe"
        src={project.path}
        title={project.title}
        frameBorder="0"
      />
    </div>
  );
}

export default ProjectPage;
