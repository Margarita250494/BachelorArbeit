import {clsx} from 'clsx'

const AllRights = ({hasStyle}) => {
  return (
    <p
      className={clsx(
        hasStyle ? 'py-3 px-5 md-xs:py-6 md-xs:px-10 block font-serif ' +
          'text-[16px] md-xs:text-[18px] font-bold tracking-[0.8px] leading-[1.6rem] ' +
          'text-center md-xs:text-start' : '')}
    >© 2013-2023 Health+. All rights reserved.</p>
  );
};

export default AllRights;