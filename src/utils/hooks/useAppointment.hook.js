import {useCallback, useState} from "react";
import {toast} from "react-toastify";

const useAppointmentForm = () => {
  const [formData, setFormData] = useState({
    patientName: "",
    patientNumber: "",
    patientGender: "default",
    appointmentTime: "",
    preferredMode: "default"
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formErrors, setFormErrors] = useState({});

  const handleChange = useCallback((field) => (e) => {
    setFormData(prev => ({
      ...prev,
      [field]: e.target.value
    }));
    // Clear error for this field when user starts typing
    if (formErrors[field]) {
      setFormErrors(prev => ({
        ...prev,
        [field]: undefined
      }));
    }
  }, [formErrors]);

  const validateForm = useCallback(() => {
    const errors = {};
    const {
      patientName,
      patientNumber,
      patientGender,
      appointmentTime,
      preferredMode
    } = formData;

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

    return errors;
  }, [formData]);

  const resetForm = useCallback(() => {
    setFormData({
      patientName: "",
      patientNumber: "",
      patientGender: "default",
      appointmentTime: "",
      preferredMode: "default"
    });
    setFormErrors({});
  }, []);

  const handleSubmit = useCallback((e) => {
    e.preventDefault();

    const errors = validateForm();

    if (Object.keys(errors).length > 0) {
      setFormErrors(errors);
      return;
    }

    resetForm();

    toast.success("Appointment Scheduled!", {
      position: toast.POSITION.TOP_CENTER,
      onOpen: () => setIsSubmitted(true),
      onClose: () => setIsSubmitted(false)
    });
  }, [validateForm, resetForm]);

  return {
    formData,
    formErrors,
    isSubmitted,
    handleChange,
    handleSubmit,
    resetForm
  };
};

export default useAppointmentForm;