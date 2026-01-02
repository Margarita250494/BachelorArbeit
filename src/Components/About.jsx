import React from "react";
import Doctor from "../Assets/doctor-group.webp";
import SolutionStep from "./SolutionStep";
import {aboutInfo} from '../utils/about.data'
import SectionDefault from './layout/SectionDefault'
import SectionHeading from './layout/SectionHeading'
import Description from './layout/Description'
import ImageContainer from './layout/ImageContainer'

function About() {
  return (
    <SectionDefault
      id="about"
      isBgWhite={false}
      isMobileBlock
    >
      <ImageContainer
        image={Doctor}
        imageAlt="Doctor Group"
        isBig
      />


      <div className="w-full lg-xl:w-[50%]">
        <SectionHeading heading="About Us" />
        <Description
          variant="about"
          description="Welcome to Health Plus, your trusted partner for accessible and
          personalized healthcare. Our expert doctors offer online consultations
          and specialized services, prioritizing your well-being. Join us on
          this journey towards a healthier you."
        />


        <h4
          className="mb-6 text-gray-600 text-[24px] font-bold
        tracking-[0.7px]"
        >
          Your Solutions
        </h4>
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
