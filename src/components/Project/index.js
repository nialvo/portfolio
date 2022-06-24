import React from 'react';
import { removeHyphensAndCapitalize } from '../../utils/helpers';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithubSquare } from '@fortawesome/free-brands-svg-icons'



function Project({ project }) {

  const { name, repo, link, description } = project;

  return (
    <div  className="projectBox" key={name}>
      <div className="project">
      <a className="link hover" href={link}>
      <img
        src={require(`../../assets/projects/${name}.PNG`)}
        alt={removeHyphensAndCapitalize(name)}
        className="projectImage"
      />
      </a>
      <div>
        <h3 className="row between" >
          <a className="link hover" href={link}>{removeHyphensAndCapitalize(name)}</a>{' '}
          <a className="link hoverDarkIcon leftMargin" href={repo}>
          <FontAwesomeIcon icon={faGithubSquare} />
          </a>
        </h3>
        <p>{description}</p>
      </div>
      </div>
    </div>
  );
}

export default Project;
