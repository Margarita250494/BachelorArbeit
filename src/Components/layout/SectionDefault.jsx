import {clsx} from 'clsx'

const SectionDefault = ({
                          id,
                          children,
                          isBgWhite,
                          isMobileBlock,
                          className
                        }) => {
  return (
    <section
      id={id}
      className={clsx('p-8 justify-center items-center gap-6',
        isBgWhite ? 'bg-white' : 'bg-gradient',
        isMobileBlock ? 'block lg-xl:flex' : 'flex',
        className)}
    >
      {children}
    </section>
  );
};

export default SectionDefault;