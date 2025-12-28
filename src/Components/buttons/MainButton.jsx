import {clsx} from 'clsx'

const MainButton = ({
                      type = 'button',
                      icon,
                      title,
                      onClick,
                      disabled,
                      isMobileHidden,
                      className
                    }) => {
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={clsx(" h-[51.5px] text-[16px] md-xs:text-[18px] py-[14px] px-[20px] " +
        "tracking-[.8px] text-white border border-transparent rounded-[28px] " +
        "outline-transparent bg-primary-500 font-serif items-center " +
        "gap-[6px] duration-300 hover:text-primary-500 hover:bg-transparent " +
        "hover:border-primary-500", isMobileHidden ? 'hidden lg:flex' : 'flex', className)}
    >
      {icon} {title}
    </button>
  );
};

export default MainButton;


