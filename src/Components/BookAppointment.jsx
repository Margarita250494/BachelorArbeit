import React from "react";
import Doctor from "../Assets/doctor-book-appointment.webp";
import {useNavigate} from "react-router-dom";
import "../Styles/BookAppointment.css";
import {infoBookAppointment} from '../utils/bookApointment.data'
import {CalendarCheck, CircleCheck} from '../utils/icons'
import {clsx} from 'clsx'

function BookAppointment() {
  const navigate = useNavigate();

  const handleBookAppointmentClick = () => {
    navigate("/appointment");
  };

  const lastItem = infoBookAppointment.length - 1

  return (
    <section className="ba-section">
      <div className="ba-image-content">
        <img
          src={Doctor}
          alt="Doctor Group"
          className="ba-image1"
          loading="lazy"
        />
      </div>

      <div className="ba-text-content">
        <h2 className="ba-title">
          Why Choose Health
        </h2>
        <p className="ba-description">
          Discover the reasons to choose Health Plus for your healthcare needs.
          Experience expert care, convenience, and personalized solutions,
          making your well-being our top priority. Join us on a journey to
          better health and a happier life.
        </p>
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

        <button
          className="text-appointment-btn"
          type="button"
          onClick={handleBookAppointmentClick}
        >
          <CalendarCheck /> Book Appointment
        </button>
      </div>
    </section>
  );
}

export default BookAppointment;
