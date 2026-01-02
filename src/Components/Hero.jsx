import Doctor from "../Assets/doctor-picture.webp";
import {useNavigate} from "react-router-dom";
import {CalendarCheck} from '../utils/icons'
import {infoHero} from '../utils/data/hero.data'
import MainButton from './buttons/MainButton'
import SectionDefault from './layout/SectionDefault'
import Description from './layout/Description'
import ScrollToTopButton from './buttons/ScrollToTopButton'

function Hero() {
  const navigate = useNavigate();
  const handleBookAppointmentClick = () => {
    navigate("/appointment");
  };


  return (
    <>
      <SectionDefault
        isBgWhite={false}
        isMobileBlock={false}
      >
        <div className="w-full px-0 lg:w-[60%] lg:px-8">
          <h4
            className="mb-3 text-gray-600 font-serif text-[20px]
            md-xs:text-[22px] font-bold tracking-[0.7px]"
          >❤️ Health comes first
          </h4>
          <h1
            className="w-full lg:w-[500px] font-sans text-[28px]
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
          <ul className="flex items-center gap-[18px] md-xs:gap-12 mt-10">
            {infoHero.map(({id, number, desc}) => (
              <li
                key={id}
                className="text-center tracking-[0.7px]"
              >
                <p className="mb-2 text-primary-500 text-[22px] md-xs:text-[32px] font-bold font-serif">{number}+</p>
                <p
                  className="text-gray-600 font-sans text-[16px] md-xs:text-[22px]
                tracking-[0.7px]"
                >{desc}</p>
              </li>
            ))}
          </ul>
        </div>

        <div className="hidden lg:flex justify-center w-[40%] max-w-full">
          <img
            width={641}
            height={617}
            className="w-full h-auto"
            src={Doctor}
            alt="Doctor"
            loading="eager"
          />
        </div>
      </SectionDefault>

      <ScrollToTopButton />
    </>
  );
}

export default Hero;
