import React, {useState} from "react";
import "../Styles/Navbar.css";
import {Link} from "react-router-dom";
import {toast} from "react-toastify";
import {HeaderList} from './HeaderList'
import {Close, CommentDots, Menu} from '../utils/icons'
import {clsx} from 'clsx'

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
    <header className="navbar-section">
      <Link
        to="/"
        className="navbar-title"
      >
        Health <span className="navbar-sign">+</span>
      </Link>


      {/* Desktop */}
      <HeaderList className="navbar-items" />


      <button
        className="navbar-btn"
        type="button"
        disabled={isButtonDisabled}
        onClick={handleChatBtnClick}
      >
        <CommentDots
          size={18}
        /> <span>Live Chat</span>
      </button>

      {/* Mobile */}
      <nav className={clsx('mobile-navbar', nav ? 'open-nav' : '')}>
        <button
          onClick={openNav}
          type="button"
          className="mobile-navbar-close"
        >
          <Close
            size={28}
            className="hamb-icon"
          />
        </button>

        <HeaderList
          isMobile
          className="mobile-navbar-links"
        />
      </nav>

      {/* Hamburger Icon */}
      <button
        className="mobile-nav"
        type="button"
        onClick={openNav}
      >
        <Menu
          className="hamb-icon"
        />

      </button>
    </header>
  );
}

export default Header;
