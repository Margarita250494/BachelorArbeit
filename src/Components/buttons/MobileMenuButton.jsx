import {clsx} from 'clsx'
import {Close, Menu} from '../../utils/icons'

const MobileMenuButton = ({open = false, close = false, onClick}) => {
  return (
    <button
      type="button"
      onClick={onClick}
      className={clsx('border-none bg-transparent',
        open && 'block lg:hidden',
        close && 'absolute top-[28px] right-[28px]')}
    >
      {open &&
        <Menu
          size={28}
          className="text-black hover:text-blueSoft-300"
        />
      }
      {close &&
        <Close
          size={28}
          className="text-black hover:text-accent-red"
        />
      }
    </button>
  );
};

export default MobileMenuButton;