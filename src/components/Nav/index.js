import React, { useEffect } from 'react';
import { removeHyphensAndCapitalize } from '../../utils/helpers';

function Nav(props) {
  const {
    pages = [],
    setCurrentPage,
    currentPage,
  } = props;

  useEffect(() => {
    document.title = removeHyphensAndCapitalize(currentPage.name);
  }, [currentPage]);

  return (    
      <nav>
        <ul className="row">
          {pages.map((Page) => (
            <li
              className={`navMenuItems hover ${
                currentPage.name === Page.name && 'navActive'
                }`}
              key={Page.name}
            >
              <span
                onClick={() => setCurrentPage(Page)}
              >
                {removeHyphensAndCapitalize(Page.name)}
              </span>
            </li>
          ))}
        </ul>
      </nav>
  );
}

export default Nav;
