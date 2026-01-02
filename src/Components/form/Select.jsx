import React, {memo} from 'react';
import ErrorMessage from './ErrorMessage'

const Select = memo(({id, value, handleChange, label, options, error}) => {
  return (
    <label
      htmlFor={id}
      className="block mb-4 font-serif text-[18px] md-xs:text-[24px] tracking-[0.7px]
      before:content-['*'] before:text-accent-red before:pr-1"
    >
      {label}
      <select
        id={id}
        value={value}
        onChange={handleChange}
        required
        className="
          block w-full my-2 px-3 h-10
          rounded-[6px] bg-blueSoft-50
          text-[16px] md-xs:text-[18px] tracking-[0.7px]
          outline-none
        "
      >
        {options.map(({value, option}) => (
          <option
            key={value}
            value={value}
          >
            {option}
          </option>))}
      </select>
      {error && <ErrorMessage message={error} />}
    </label>
  );
})

export default Select;