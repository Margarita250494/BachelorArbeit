import React, {useState} from "react";
import {toast, ToastContainer} from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import MainButton from './buttons/MainButton'

function SubscribeNewsletter() {
  const [inputEmail, setInputEmail] = useState("");
  const [isButtonDisabled, setIsButtonDisabled] = useState(false);
  const emailRegex = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;

  const handleEmailInput = (event) => {
    setInputEmail(event.target.value);
  };

  const handleBookAppointmentClick = () => {
    if (!isButtonDisabled) {
      emailRegex.test(inputEmail)
        ? toast.success("Subscribed to Newsletter !", {
          position: toast.POSITION.TOP_CENTER,
          onOpen: () => {
            setIsButtonDisabled(true);
            setInputEmail("");
          },
          onClose: () => setIsButtonDisabled(false)
        })
        : toast.error("Invalid Email Address !", {
          position: toast.POSITION.TOP_CENTER,
          onOpen: () => setIsButtonDisabled(true),
          onClose: () => setIsButtonDisabled(false)
        });
    }
  };

  return (
    <div>
      <h6
        className="text-white font-serif text-[22px] font-bold
      tracking-[0.8px]"
      >Stay Update to our Newsletter
      </h6>
      <input
        type="text"
        inputMode="email"
        className="w-full md:w-[300px] my-4 mr-0 md:mt-5 md:mr-2 py-4 px-[22px]
        text-white bg-gray-800 border-none rounded-[50px] outline-none
        font-serif text-[18px] tracking-[0.8px]"
        placeholder="Enter your email address"
        name="email"
        value={inputEmail}
        onChange={handleEmailInput}
        autoComplete="true"
      />
      <MainButton
        title="Subscribe"
        onClick={handleBookAppointmentClick}
        disabled={isButtonDisabled}
        className="tracking-normal h-[49px] md:h-auto inline-block lg:inline-block"

      />

      <ToastContainer
        autoClose={4000}
        limit={1}
        closeButton={false}
      />
    </div>
  );
}

export default SubscribeNewsletter;
