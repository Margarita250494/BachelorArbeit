import {clsx} from 'clsx'

const CustomSection = ({id, isInfoSection, children}) => {
  return (
    <section
      id={id}
      className={clsx(
        isInfoSection ? 'px-8' : 'p-8 mb-8',
        'text-center bg-white')}
    >
      {children}
    </section>
  );
};

export default CustomSection;