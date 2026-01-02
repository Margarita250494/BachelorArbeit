import React from 'react';
import {clsx} from 'clsx'

function Quote({isEnd}) {
  return (
    <span
      className={clsx("absolute  text-primary-700 " +
        "text-[40px] font-bold tracking-[2px]",
        isEnd ? '-right-[18px] -bottom-6' : '-top-[18px] -left-6')}
    >''</span>
  );
}

export default Quote;