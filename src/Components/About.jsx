import React from "react";
import Doctor from "../Assets/doctor-group.png";
import SolutionStep from "./SolutionStep";
import "../Styles/About.css";
import {aboutInfo} from '../utils/about.data'

function About() {
  return (
    <section
      className="about-section"
      id="about"
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
        <h2 className="about-title">
          <span>About Us</span>
        </h2>
        <p className="about-description">
          Welcome to Health Plus, your trusted partner for accessible and
          personalized healthcare. Our expert doctors offer online consultations
          and specialized services, prioritizing your well-being. Join us on
          this journey towards a healthier you.
        </p>

        <h4 className="about-text-title">Your Solutions</h4>
        {aboutInfo.map(({title, description}) => (
          <SolutionStep
            key={title}
            title={title}
            description={description}
          />

        ))}
      </div>
    </section>
  );
}

export default About;
