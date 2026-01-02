import React from 'react';

function ErrorMessage({error}) {
  return (
    <p
      className="text-accent-red font-serif text-[16px] tracking-[0.7px]
    leading-[1.7rem]"
    >
      {error}
    </p>
  );
}

export default ErrorMessage;