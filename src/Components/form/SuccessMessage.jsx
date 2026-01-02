import {clsx} from 'clsx'

function SuccessMessage({isSubmitted}) {
  return (
    <p
      className={clsx("mt-3 md-xs:mt-5 text-accent-green text-[18px] " +
        "md-xs:text-[22px] tracking-[0.7px] leading-[1.7rem]",
        isSubmitted ? 'block' : 'hidden')}
    >
      Appointment details has been sent to the patients phone number via
      SMS.
    </p>
  );
}

export default SuccessMessage;