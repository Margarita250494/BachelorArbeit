import React from "react";
import {Star} from '../utils/icons'

function DoctorCard(props) {
  return (
    <div className="w-[332px] h-[400px] text-left font-serif">
      <img
        src={props.img}
        width={268}
        height={259}
        alt={props.name}
        className="pt-4 px-8 w-full h-[275px] object-contain rounded-[20px]
        bg-blueSoft-200 bg-center"
        loading="lazy"
      />
      <h4 className="mt-3 text-[22px] font-bold tracking-[0.7px]">{props.name}</h4>
      <h5 className="mt-[6px] mb-[8px] font-sans text-gray-700 text-[18px] tracking-[0.7px]">{props.title}</h5>
      <p className="text-[18px] font-bold tracking-[0.7px] flex gap-1 items-center">
        <Star className="text-accent-yellow mr-[6px]" />
        {props.stars}
        <span className="font-bold tracking-[0.7px] text-gray-500"> ({props.reviews}+ Reviews)</span>
      </p>
    </div>
  );
}

export default DoctorCard;
