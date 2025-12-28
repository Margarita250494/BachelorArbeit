import React, {useEffect, useState} from "react";
import Doctor from "../Assets/doctor-picture.webp";
import {useNavigate} from "react-router-dom";
import "../Styles/Hero.css";
import {ArrowUp, CalendarCheck} from '../utils/icons'
import {infoHero} from '../utils/hero.data'

function Hero() {
  const navigate = useNavigate();
  const [goUp, setGoUp] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({top: 0, behavior: "smooth"});
  };

  const handleBookAppointmentClick = () => {
    navigate("/appointment");
  };

  useEffect(() => {
    const onPageScroll = () => {
      if (window.scrollY > 600) {
        setGoUp(true);
      } else {
        setGoUp(false);
      }
    };
    window.addEventListener("scroll", onPageScroll);

    return () => {
      window.removeEventListener("scroll", onPageScroll);
    };
  }, []);

  return (
    <section className="section-container">
      <div className="hero-section">
        <div className="text-section">
          <h4 className="text-headline">❤️ Health comes first</h4>
          <h1 className="text-title">
            Find your Doctor and make an Appointments
          </h1>
          <p className="text-description">
            Talk to online doctors and get medical advice, online prescriptions,
            refills and medical notes within minutes. On-demand healthcare
            services at your fingertips.
          </p>
          <button
            className="text-appointment-btn"
            type="button"
            onClick={handleBookAppointmentClick}
          >
            <CalendarCheck /> Book Appointment
          </button>
          <ul className="text-stats">
            {infoHero.map(({id, number, desc}) => (
              <li
                key={id}
                className="text-stats-container"
              >
                <p>{number}+</p>
                <p>{desc}</p>
              </li>
            ))}
          </ul>
        </div>

        <div className="hero-image-section">
          <img
            className="hero-image1"
            src={Doctor}
            alt="Doctor"
            loading="eager"
          />
        </div>
      </div>

      <button
        type="button"
        onClick={scrollToTop}
        className={`scroll-up ${goUp ? 'show-scroll' : ''}`}
      >
        <ArrowUp />
      </button>
    </section>
  );
}

export default Hero;
