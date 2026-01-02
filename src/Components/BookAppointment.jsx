import React from "react";
import Doctor from "../Assets/doctor-book-appointment.webp";
import {useNavigate} from "react-router-dom";
import {infoBookAppointment} from '../utils/data/bookApointment.data'
import {CalendarCheck, CircleCheck} from '../utils/icons'
import {clsx} from 'clsx'
import MainButton from './buttons/MainButton'
import SectionDefault from './layout/SectionDefault'
import SectionHeading from './layout/SectionHeading'
import Description from './layout/Description'
import ImageContainer from './layout/ImageContainer'

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
      <ImageContainer
        image={Doctor}
        imageAlt="Doctor Group"
        isBig={false}
      />

      <div className="w-full lg-xl:w-[50%]">
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
              className={clsx('my-7 font-serif text-[22px] font-bold ' +
                'tracking-[0.7px] flex gap-[6px] items-center',
                index === 0 && 'mt-10',
                index === lastItem && 'mb-10')}
            >
              <CircleCheck className="text-primary-600" />
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
