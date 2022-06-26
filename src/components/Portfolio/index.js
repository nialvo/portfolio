import React, { useState } from 'react';
import Project from "../Project";

function Portfolio() {

  // Replace links with deployed projects and GitHub repos
  const [projects] = useState([
    {
      name: 'cloud-casino',
      description: 'Mock casino with MySQL/Express/Sequelize',
      link: "https://cloud247casino.herokuapp.com/",
      repo: "https://github.com/nialvo/cloud247casino"
    },
    {
      name: 'piet',
      description: 'Mondrian-style random art generator',
      link: "https://nialvo.github.io/Piet/",
      repo: "https://github.com/nialvo/Piet"
    },
    {
      name: 'bluer-skies',
      description: 'Scrollable and searchable pollution map',
      link: "https://nialvo.github.io/PollutionMap/",
      repo: "https://github.com/nialvo/PollutionMap"
    },
    {
      name: 'formidable',
      description: 'MERN stack form builder',
      link: "https://form-idable.herokuapp.com",
      repo: "https://github.com/nialvo/formidable"
    },
  ]);

  return (
    <div>
      <div className="row portfDiv">
        {projects.map((project, idx) => (
          <Project
            project={project}
            key={"project" + idx}
          />
        ))}
      </div>
    </div>
  );
};

export default Portfolio;
