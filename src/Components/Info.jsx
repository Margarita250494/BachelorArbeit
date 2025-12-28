import React from "react";
import InformationCard from "./InformationCard";
import "../Styles/Info.css";
import {infoData} from '../utils/info.data'

function Info() {
  return (
    <section
      className="info-section"
      id="services"
    >
      <div className="info-title-content">
        <h2 className="info-title">
          <span>What We Do</span>
        </h2>
        <p className="info-description">
          We bring healthcare to your convenience, offering a comprehensive
          range of on-demand medical services tailored to your needs. Our
          platform allows you to connect with experienced online doctors who
          provide expert medical advice, issue online prescriptions, and offer
          quick refills whenever you require them.
        </p>
      </div>

      <ul className="info-cards-content">
        {infoData.map(({title, icon, description}) => (
          <InformationCard
            key={title}
            title={title}
            description={description}
            icon={icon}
          />))}

      </ul>
    </section>
  );
}

export default Info;
