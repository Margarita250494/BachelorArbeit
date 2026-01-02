import {clsx} from 'clsx'

const variants = {
  info: 'text-[18px] leading-[1.8rem] text-gray-600 tracking-[0.8px] text-center my-16 mx-2 md:mx-8 lg-xl:mx-16 ',
  footer: 'text-[20px] leading-[1.7rem] text-gray-150 tracking-[0.8px] mt-4 mb-6 w-full md:w-[420px] md:mb-10',
  doctor: 'text-[20px] tracking-[0.8px] leading-[1.8rem] text-gray-600 text-center mt-12 mx-0 md:mt-16 md:mx-auto',
  hero: 'text-[16px] md-xs:text-[18px] leading-[1.6rem] text-gray-600 tracking-[0.7px] w-full lg:w-[475px] my-8',
  about: 'text-[18px] leading-[1.7rem] text-gray-700 tracking-[0.7px] my-8',
  legal: 'text-[16px] leading-[1.8rem] tracking-[0.8px] mb-4 md-xs:text-[18px]',
  book: 'text-[18px] leading-[1.8rem] text-gray-700 tracking-[0.8px] my-8'
};

const Description = ({description, variant, className}) => {
  return (
    <p
      className={clsx(' font-serif', variants[variant], className
      )}
    >
      {description}
    </p>
  );
};

export default Description;