import {useCallback, useState} from "react";
import {toast} from "react-toastify";

const EMAIL_REGEX = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;

const useNewsletter = () => {
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleEmailChange = useCallback((e) => {
    setEmail(e.target.value);
  }, []);

  const validateEmail = useCallback((email) => {
    return EMAIL_REGEX.test(email);
  }, []);

  const subscribe = useCallback(() => {
    if (isSubmitting) return;

    if (!email.trim()) {
      toast.error("Please enter an email address!", {
        position: toast.POSITION.TOP_CENTER
      });
      return;
    }

    if (validateEmail(email)) {
      toast.success("Subscribed to Newsletter!", {
        position: toast.POSITION.TOP_CENTER,
        onOpen: () => {
          setIsSubmitting(true);
          setEmail("");
        },
        onClose: () => setIsSubmitting(false)
      });
    } else {
      toast.error("Invalid Email Address!", {
        position: toast.POSITION.TOP_CENTER,
        onOpen: () => setIsSubmitting(true),
        onClose: () => setIsSubmitting(false)
      });
    }
  }, [email, isSubmitting, validateEmail]);

  const reset = useCallback(() => {
    setEmail("");
    setIsSubmitting(false);
  }, []);

  return {
    email,
    isSubmitting,
    handleEmailChange,
    subscribe,
    reset
  };
};

export default useNewsletter;