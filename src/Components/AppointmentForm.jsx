import {useEffect} from "react";
import {ToastContainer} from "react-toastify";
import AllRights from './AllRights'
import MainButton from './buttons/MainButton'
import BrandTitle from './BrandTitle'
import SectionHeading from './layout/SectionHeading'
import Input from './form/Input'
import Select from './form/Select'
import {genderData, modeData} from '../utils/data/form.data'
import SuccessMessage from './form/SuccessMessage'
import useAppointmentForm from '../utils/hooks/useAppointment.hook'

function AppointmentForm() {
  useEffect(() => {
    window.scrollTo({top: 0, behavior: "smooth"});
  }, []);

  const {
    formData,
    formErrors,
    isSubmitted,
    handleChange,
    handleSubmit
  } = useAppointmentForm();
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
            value={formData.patientName}
            handleChange={handleChange('patientName')}
            error={formErrors.patientName}
          />

          <Input
            id="phoneNumber"
            label="Patient Phone Number:"
            type="tel"
            value={formData.patientNumber}
            handleChange={handleChange('patientNumber')}
            error={formErrors.patientNumber}
          />

          <Select
            id="gender"
            label="Patient Gender:"
            value={formData.patientGender}
            handleChange={handleChange('patientGender')}
            options={genderData}
            error={formErrors.patientGender}
          />


          <Input
            id="appointment"
            label="Preferred Appointment Time:"
            type="datetime-local"
            value={formData.appointmentTime}
            handleChange={handleChange('appointmentTime')}
            error={formErrors.appointmentTime}
          />


          <Select
            id="mode"
            label="Preferred Mode:"
            value={formData.preferredMode}
            handleChange={handleChange('preferredMode')}
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
