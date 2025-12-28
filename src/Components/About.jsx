import React from "react";
import Doctor from "../Assets/doctor-group.webp";
import SolutionStep from "./SolutionStep";
import "../Styles/About.css";
import {aboutInfo} from '../utils/about.data'
import SectionDefault from './layout/SectionDefault'
import SectionHeading from './layout/SectionHeading'
import Description from './layout/Description'

function About() {
  return (
    <SectionDefault
      id="about"
      isBgWhite={false}
      isMobileBlock
    >
      <div className="about-image-content">
        <img
          src={Doctor}
          alt="Doctor Group"
          className="about-image1"
          loading="lazy"
        />
      </div>

      <div className="about-text-content">
        <SectionHeading heading="About Us" />
        <Description
          variant="about"
          description="Welcome to Health Plus, your trusted partner for accessible and
          personalized healthcare. Our expert doctors offer online consultations
          and specialized services, prioritizing your well-being. Join us on
          this journey towards a healthier you."
        />


        <h4 className="about-text-title">Your Solutions</h4>
        {aboutInfo.map(({title, description}) => (
          <SolutionStep
            key={title}
            title={title}
            description={description}
          />

        ))}
      </div>
    </SectionDefault>
  );
}

export default About;
