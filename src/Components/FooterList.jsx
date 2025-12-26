import React from 'react';
import {Link} from 'react-router-dom'

const FooterList = ({id, title, infoArray}) => {
  return (
    <nav
      className="ft-list"
      id={id}
    >
      <h4 className="ft-list-title">{title}</h4>
      <ul className="ft-list-items">
        {infoArray.map((item) => (
          item.type === 'link' ? (
            <li key={item.title}>
              <Link to={item.link}>{item.title}</Link>
            </li>
          ) : (
            <li key={item.title}>
              <a href={item.link}>{item.title}</a>
            </li>
          )
        ))}
      </ul>
    </nav>
  );
};

export default FooterList;