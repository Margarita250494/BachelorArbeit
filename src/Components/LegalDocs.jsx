import React, {Fragment, useEffect} from "react";
import {Link} from "react-router-dom";
import "../Styles/LegalDocs.css";
import {infoLegalDocs} from '../utils/legalDocs.data'
import AllRights from './AllRights'

function LegalDocs() {
  useEffect(() => {
    window.scrollTo({top: 0, behavior: "smooth"});
  });

  return (
    <div className="legal-section-title">
      <Link
        to="/"
        className="legal-siteTitle"
      >
        Health <span className="legal-siteSign">+</span>
      </Link>


      <div className="legal-text-content">
        {infoLegalDocs.map(({title, description}) => (
          <Fragment key={title}>
            <h4 className="legal-title">{title}</h4>
            <p className="legal-description">
              {description}
            </p>
          </Fragment>
        ))}
      </div>

      <AllRights className="legal-footer" />
    </div>
  );
}

export default LegalDocs;
