import React, { useState } from "react";
import ProjectModal from "./ProjectModal";
import projects from "../../data/projects";
import "./projects.css";

export default function ProejectsPage() {
  const [selectedProject, setSelectProject] = useState(null);

  const openModal = (project) => {
    setSelectProject(project);
  };

  return (
    <div className="project-container m-5">
      <h1 className="text-center">Projects</h1>
      <div className="d-flex justify-content-center align-items-center">
        <div className="project-buttons">
          {projects.map((project) => {
            return (
              <button
                key={project.id} className="project-button"
                onClick={() => openModal(project)}
                style={{ backgroundImage: `url(${project.buildingImage})` }}
              >
                <span>{project.company}</span>
              </button>
            );
          })}
        </div>
      </div>

      {selectedProject && (
        <ProjectModal
          isOpen={!selectedProject}
          toggle={() => setSelectProject(null)}
          title={selectedProject.company}
          description={selectedProject.description}
          images={selectedProject.images}
        />
      )}
    </div >
  );
}
