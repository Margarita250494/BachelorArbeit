import React from "react";
import DoctorCard from "./DoctorCard";
import "../Styles/Doctors.css";
import {infoDoctors} from '../utils/doctors.data'
import SectionHeading from './layout/SectionHeading'
import CustomSection from './layout/CustomSection'
import Description from './layout/Description'

function Doctors() {
  return (
    <CustomSection
      id="doctors"
      isInfoSection={false}
    >
      <div className="dt-title-content">
        <SectionHeading
          defaultWidth={false}
          heading="Meet Our Doctors"
          className="tracking-[.7px] text-[32px] md:text-[40px]"
        />
        <Description
          variant="doctor"
          description="Meet our exceptional team of specialist doctors, dedicated to
          providing top-notch healthcare services at Health Plus. Trust in their
          knowledge and experience to lead you towards a healthier and happier
          life."
        />

      </div>

      <div className="dt-cards-content">
        {infoDoctors.map(({img, name, title, stars, reviews}) => (
          <DoctorCard
            key={name}
            img={img}
            name={name}
            title={title}
            stars={stars}
            reviews={reviews}
          />))}
      </div>
    </CustomSection>
  );
}

export default Doctors;
