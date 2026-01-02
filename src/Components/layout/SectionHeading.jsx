import React from 'react';
import {clsx} from 'clsx'

const SectionHeading = ({heading, defaultWidth = true, className}) => {
  return (
    <h2 className={clsx("font-sans font-bold text-[40px]", className)}>
      <span
        className={clsx("relative before:content-[''] before:absolute " +
          "before:h-1 before:bg-accent-pink before:rounded-[8px] before:left-0 " +
          "before:bottom-[-12px]",
          defaultWidth ? 'before:w-[75%]' : 'before:w-[64%]')}
      >{heading}</span>
    </h2>
  );
};

export default SectionHeading;