import React from "react";

const Projects = ({ projects }) => {
  //console.log(projects)
  //console.log(JSON.parse(projects))
  return (
    //<center><h1>Contact List</h1></center>
    projects.map((project) => (
      <div key={project.id} className="project">
        <h5>{project.label}</h5>
      </div>
    ))
  );
};

export default Projects;
