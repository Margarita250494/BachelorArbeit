import {useEffect, useState} from "react";
import {toast, ToastContainer} from "react-toastify";
import AllRights from './AllRights'
import MainButton from './buttons/MainButton'
import BrandTitle from './BrandTitle'
import SectionHeading from './layout/SectionHeading'
import Input from './form/Input'
import Select from './form/Select'
import {genderData, modeData} from '../utils/form.data'
import SuccessMessage from './form/SuccessMessage'

function AppointmentForm() {
  useEffect(() => {
    window.scrollTo({top: 0, behavior: "smooth"});
  });

  const [patientName, setPatientName] = useState("");
  const [patientNumber, setPatientNumber] = useState("");
  const [patientGender, setPatientGender] = useState("default");
  const [appointmentTime, setAppointmentTime] = useState("");
  const [preferredMode, setPreferredMode] = useState("default");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formErrors, setFormErrors] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate form inputs
    const errors = {};
    if (!patientName.trim()) {
      errors.patientName = "Patient name is required";
    } else if (patientName.trim().length < 8) {
      errors.patientName = "Patient name must be at least 8 characters";
    }

    if (!patientNumber.trim()) {
      errors.patientNumber = "Patient phone number is required";
    } else if (patientNumber.trim().length !== 10) {
      errors.patientNumber = "Patient phone number must be of 10 digits";
    }

    if (patientGender === "default") {
      errors.patientGender = "Please select patient gender";
    }
    if (!appointmentTime) {
      errors.appointmentTime = "Appointment time is required";
    } else {
      const selectedTime = new Date(appointmentTime).getTime();
      const currentTime = new Date().getTime();
      if (selectedTime <= currentTime) {
        errors.appointmentTime = "Please select a future appointment time";
      }
    }
    if (preferredMode === "default") {
      errors.preferredMode = "Please select preferred mode";
    }

    if (Object.keys(errors).length > 0) {
      setFormErrors(errors);
      return;
    }

    // Reset form fields and errors after successful submission
    setPatientName("");
    setPatientNumber("");
    setPatientGender("default");
    setAppointmentTime("");
    setPreferredMode("default");
    setFormErrors({});

    toast.success("Appointment Scheduled !", {
      position: toast.POSITION.TOP_CENTER,
      onOpen: () => setIsSubmitted(true),
      onClose: () => setIsSubmitted(false)
    });
  };

  return (
    <>
      <div className="w-full block pb-2 bg-white text-center">
        <BrandTitle
          to="/"
          classNameComponent="text-[48px] tracking-[0.8px] font-semibold
          "
          classNamePlus="text-[56px]"
        />
      </div>


      <section className="p-6 md-xs:p-8 flex flex-col gap-10 bg-gradient">
        <SectionHeading
          heading="Book Appointment Online"
          defaultWidth
          className="!text-[32px]"
        />
        <form
          className="form-content flex flex-col gap-5"
          onSubmit={handleSubmit}
        >
          <Input
            id="fullName"
            label="Patient Full Name:"
            type="text"
            value={patientName}
            handleChange={(e) => setPatientName(e.target.value)}
            error={formErrors.patientName}
          />

          <Input
            id="phoneNumber"
            label="Patient Phone Number:"
            type="tel"
            value={patientNumber}
            handleChange={(e) => setPatientNumber(e.target.value)}
            error={formErrors.patientNumber}
          />

          <Select
            id="gender"
            label="Patient Gender:"
            value={patientGender}
            handleChange={(e) => setPatientGender(e.target.value)}
            options={genderData}
            error={formErrors.patientGender}
          />


          <Input
            id="appointment"
            label="Preferred Appointment Time:"
            type="datetime-local"
            value={appointmentTime}
            handleChange={(e) => setAppointmentTime(e.target.value)}
            error={formErrors.appointmentTime}
          />


          <Select
            id="mode"
            label="Preferred Mode:"
            value={preferredMode}
            handleChange={(e) => setPreferredMode(e.target.value)}
            error={formErrors.preferredMode}
            options={modeData}
          />

          <MainButton
            type="submit"
            title="Confirm Appointment"
            className="max-w-[239px]"
          />
          <SuccessMessage isSubmitted={isSubmitted} />
        </form>
      </section>


      <AllRights hasStyle />

      <ToastContainer
        autoClose={5000}
        limit={1}
        closeButton={false}
      />
    </>
  );
}

export default AppointmentForm;
