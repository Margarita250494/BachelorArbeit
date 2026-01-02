import React from "react";
import InformationCard from "./InformationCard";
import {infoData} from '../utils/data/info.data'
import SectionHeading from './layout/SectionHeading'
import CustomSection from './layout/CustomSection'
import Description from './layout/Description'

function Info() {
  return (
    <CustomSection
      isInfoSection
      id="services"
    >
      <div className="mt-16 mb-[128px]">
        <SectionHeading heading="What We Do" />
        <Description
          variant="info"
          description="We bring healthcare to your convenience, offering a comprehensive
          range of on-demand medical services tailored to your needs. Our
          platform allows you to connect with experienced online doctors who
          provide expert medical advice, issue online prescriptions, and offer
          quick refills whenever you require them."
        />
      </div>

      <ul className="my-16 grid grid-cols-1 md:grid-cols-2 lg-xl:grid-cols-3 gap-8">
        {infoData.map(({title, icon, description}) => (
          <InformationCard
            key={title}
            title={title}
            description={description}
            icon={icon}
          />))}

      </ul>
    </CustomSection>
  );
}

export default Info;
