import React, {memo} from 'react';
import ErrorMessage from './ErrorMessage'

const Input = memo(({id, type, label, handleChange, value, error}) => {
  return (
    <label
      htmlFor={id}
      className="block mb-4 font-serif text-[24px] tracking-[0.7px]
      before:content-['*'] before:text-accent-red before:pr-1"
    >
      {label}
      <input
        id={id}
        value={value}
        type={type}
        onChange={handleChange}
        required
        className="
          block w-full my-2 px-3 h-10
          rounded-[6px] bg-blueSoft-50
          text-[18px] tracking-[0.7px]
        "
      />
      {error && <ErrorMessage error={error} />}
    </label>

  );
})

export default Input;