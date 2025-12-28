import React from "react";
import Doctor from "../Assets/doctor-book-appointment.webp";
import {useNavigate} from "react-router-dom";
import "../Styles/BookAppointment.css";
import {infoBookAppointment} from '../utils/bookApointment.data'
import {CalendarCheck, CircleCheck} from '../utils/icons'
import {clsx} from 'clsx'
import MainButton from './buttons/MainButton'
import SectionDefault from './layout/SectionDefault'
import SectionHeading from './layout/SectionHeading'
import Description from './layout/Description'

function BookAppointment() {
  const navigate = useNavigate();

  const handleBookAppointmentClick = () => {
    navigate("/appointment");
  };

  const lastItem = infoBookAppointment.length - 1

  return (
    <SectionDefault
      isBgWhite
      isMobileBlock
    >
      <div className="ba-image-content">
        <img
          src={Doctor}
          alt="Doctor Group"
          className="ba-image1"
          loading="lazy"
        />
      </div>

      <div className="ba-text-content">
        <SectionHeading heading="Why Choose Health" />
        <Description
          variant="book"
          description="Discover the reasons to choose Health Plus for your healthcare needs.
          Experience expert care, convenience, and personalized solutions,
          making your well-being our top priority. Join us on a journey to
          better health and a happier life."
        />

        <ul>
          {infoBookAppointment.map((info, index) => (
            <li
              key={info.title}
              className={clsx('ba-checks',
                index === 0 && 'ba-check-first',
                index === lastItem && 'ba-check-last')}
            >
              <CircleCheck className="ba-icon-check" />
              {info.title}
            </li>
          ))}</ul>
        <MainButton
          onClick={handleBookAppointmentClick}
          icon={<CalendarCheck />}
          title="Book Appointment"
        />
      </div>
    </SectionDefault>
  );
}

export default BookAppointment;
