import React from "react";
import DoctorCard from "./DoctorCard";
import "../Styles/Doctors.css";
import {infoDoctors} from '../utils/doctors.data'

function Doctors() {
  return (
    <section
      className="doctor-section"
      id="doctors"
    >
      <div className="dt-title-content">
        <h2 className="dt-title">
          <span>Meet Our Doctors</span>
        </h2>

        <p className="dt-description">
          Meet our exceptional team of specialist doctors, dedicated to
          providing top-notch healthcare services at Health Plus. Trust in their
          knowledge and experience to lead you towards a healthier and happier
          life.
        </p>
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
    </section>
  );
}

export default Doctors;
