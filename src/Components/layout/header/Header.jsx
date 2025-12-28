import {useState} from "react";
import {toast} from "react-toastify";
import {HeaderList} from './HeaderList'
import {CommentDots} from '../../../utils/icons'
import {clsx} from 'clsx'
import MainButton from '../../buttons/MainButton'
import BrandTitle from '../../BrandTitle'
import MobileMenuButton from '../../buttons/MobileMenuButton'

function Header() {
  const [nav, setNav] = useState(false);
  const [isButtonDisabled, setIsButtonDisabled] = useState(false);

  const openNav = () => {
    setNav(!nav);
  };

  const handleChatBtnClick = () => {
    if (!isButtonDisabled) {
      toast.info("Experiencing high traffic, Please wait a moment.", {
        position: toast.POSITION.TOP_CENTER,
        onOpen: () => setIsButtonDisabled(true),
        onClose: () => setIsButtonDisabled(false)
      });
    }
  };

  return (
    <header
      className="px-8 flex justify-between items-center
      h-[80px] bg-white"
    >
      <BrandTitle to="/" />
      {/* Desktop */}
      <HeaderList
        className="hidden lg:flex justify-center items-center gap-8
        font-serif list-none no-underline text-[18px]"
      />

      <MainButton
        disabled={isButtonDisabled}
        onClick={handleChatBtnClick}
        icon={<CommentDots size={18} />}
        title="Live Chat"
        isMobileHidden
      />

      {/* Mobile */}
      <nav
        className={clsx(
          'z-20 fixed top-0 flex h-screen w-full flex-col items-center ' +
          'justify-center bg-white transition-[left] duration-500 ease-in-out',
          nav ? 'left-0' : '-left-full'
        )}
      >
        <MobileMenuButton
          close
          onClick={openNav}
        />


        <HeaderList
          isMobile
          onClick={openNav}
          className="flex flex-col text-[24px] gap-6 text-center no-underline
          font-bold"
        />
      </nav>

      {/* Hamburger Icon */}
      <MobileMenuButton
        open
        onClick={openNav}
      />
    </header>
  );
}

export default Header;
