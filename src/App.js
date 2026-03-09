import React, { useState, useMemo } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import './App.css';
import SearchBar from './components/SearchBar';
import ProjectGrid from './components/ProjectGrid';
import ProjectModal from './components/ProjectModal';
import ProjectPage from './components/ProjectPage';
import ViewToggle from './components/ViewToggle';
import projectsData from './data/projectsData';

function Home({ viewMode, onViewModeChange }) {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedProject, setSelectedProject] = useState(null);
  const navigate = useNavigate();

  const filteredProjects = useMemo(() => {
    if (!searchTerm.trim()) {
      return projectsData;
    }

    const searchLower = searchTerm.toLowerCase();
    return projectsData.filter(
      (project) =>
        project.title.toLowerCase().includes(searchLower) ||
        project.description.toLowerCase().includes(searchLower) ||
        project.tags.some((tag) => tag.toLowerCase().includes(searchLower))
    );
  }, [searchTerm]);

  const handleProjectClick = (project) => {
    if (viewMode === 'page') {
      navigate(`/projects/${project.slug}`);
    } else {
      setSelectedProject(project);
    }
  };

  const handleCloseModal = () => {
    setSelectedProject(null);
  };

  return (
    <>
      <header className="app-header">
        <div className="header-content">
          <h1 className="app-title">My Projects</h1>
          <p className="app-subtitle">
            A collection of interactive web applications
          </p>
          <ViewToggle viewMode={viewMode} onToggle={onViewModeChange} />
        </div>
      </header>

      <main className="app-main">
        <div className="container">
          <SearchBar
            searchTerm={searchTerm}
            onSearchChange={setSearchTerm}
            projectCount={filteredProjects.length}
          />
          <ProjectGrid
            projects={filteredProjects}
            onProjectClick={handleProjectClick}
          />
        </div>
      </main>

      {selectedProject && (
        <ProjectModal project={selectedProject} onClose={handleCloseModal} />
      )}

      <footer className="app-footer">
        <p>&copy; 2026 Venkat's Projects Portfolio</p>
      </footer>
    </>
  );
}

function App() {
  const [viewMode, setViewMode] = useState(
    () => localStorage.getItem('viewMode') || 'modal'
  );

  const handleViewModeChange = (mode) => {
    setViewMode(mode);
    localStorage.setItem('viewMode', mode);
  };

  return (
    <div className="App">
      <Routes>
        <Route
          path="/"
          element={
            <Home
              viewMode={viewMode}
              onViewModeChange={handleViewModeChange}
            />
          }
        />
        <Route path="/projects/:slug" element={<ProjectPage />} />
      </Routes>
    </div>
  );
}

export default App;
