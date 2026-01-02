import {Link} from 'react-router-dom'
import {clsx} from 'clsx'

const BrandTitle = ({as = 'h4', to, classNameComponent, classNamePlus}) => {
  const Component = to ? Link : as;
  return (
    <Component
      className={clsx("font-sans text-primary-500 font-bold no-underline",
        to ? 'tracking-[.6px] text-[32px]'
          : 'tracking-[.8px] text-[40px]', classNameComponent)}
      to={to}
    >
      Health <span
      className={clsx("font-cambria font-bold text-[40px]",
        to ? 'text-accent-green ' : 'text-accent-teal', classNamePlus)}
    >+</span>
    </Component>
  );
};

export default BrandTitle;