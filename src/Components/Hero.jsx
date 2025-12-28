import {useEffect, useState} from "react";
import Doctor from "../Assets/doctor-picture.webp";
import {useNavigate} from "react-router-dom";
import "../Styles/Hero.css";
import {ArrowUp, CalendarCheck} from '../utils/icons'
import {infoHero} from '../utils/hero.data'
import MainButton from './buttons/MainButton'
import SectionDefault from './layout/SectionDefault'
import Description from './layout/Description'

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
    <>
      <SectionDefault
        isBgWhite={false}
        isMobileBlock={false}
      >
        <div className="w-full px-0 lg:w-[60%] lg:px-8">
          <h4
            className="mb-3 text-gray-600 font-serif text-[20px]
            md-xs:text-[22px] font-bold
          tracking-[0.7px]"
          >❤️ Health comes first
          </h4>
          <h1
            className="w-full lg:w-[500px] text-black text-[28px]
          md-xs:text-[40px] font-bold"
          >
            Find your Doctor and make an Appointments
          </h1>
          <Description
            variant="hero"
            description="Talk to online doctors and get medical advice,
            online prescriptions,refills and medical notes within minutes.
            On-demand healthcare services at your fingertips."
          />
          <MainButton
            onClick={handleBookAppointmentClick}
            icon={<CalendarCheck />}
            title="Book Appointment"
          />
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
      </SectionDefault>

      <button
        type="button"
        onClick={scrollToTop}
        className={`scroll-up ${goUp ? 'show-scroll' : ''}`}
      >
        <ArrowUp />
      </button>
    </>
  );
}

export default Hero;
