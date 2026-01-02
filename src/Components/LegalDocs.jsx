import React, {Fragment, useEffect} from "react";
import {infoLegalDocs} from '../utils/legalDocs.data'
import AllRights from './AllRights'
import Description from './layout/Description'
import BrandTitle from './BrandTitle'

function LegalDocs() {
  useEffect(() => {
    window.scrollTo({top: 0, behavior: "smooth"});
  });

  return (
    <>
      <div className="w-full block pb-2 bg-white text-center">
        <BrandTitle
          to="/"
          classNameComponent="text-[48px] tracking-[0.8px] font-semibold
          "
          classNamePlus="text-[56px]"
        />
      </div>


      <ul className="py-3 px-8 bg-gradient">
        {infoLegalDocs.map(({title, description}) => (
          <li key={title}>
            <h4
              className="my-4 border-b-2
            border-gray-border text-[24px] md-xs:text-[32px] font-bold tracking-[0.8px]"
            >{title}</h4>
            <Description
              variant="legal"
              description={description}
            />
          </li>
        ))}
      </ul>

      <AllRights hasStyle />
    </>
  );
}

export default LegalDocs;
