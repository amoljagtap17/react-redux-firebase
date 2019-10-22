import React from 'react'

const ProjectSummary = ({ project }) => {
  return (
    <div className="card z-depth-0 project-summary">
      <div className="card-content grey-text text-darken-3">
        <span className="card-title">{project.title}</span>
        <p>Posted by AJ</p>
        <p className="grey-text"> 22nd October, 2am</p>
      </div>
    </div>
  )
}

export default ProjectSummary
