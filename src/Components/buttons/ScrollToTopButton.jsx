import {useEffect, useState} from 'react';
import {ArrowUp} from '../../utils/icons'
import {clsx} from 'clsx'

const ScrollToTopButton = () => {
  const [goUp, setGoUp] = useState(false);
  const scrollToTop = () => {
    window.scrollTo({top: 0, behavior: "smooth"});
  };
  useEffect(() => {
    const onPageScroll = () => {
      if (window.scrollY > 600) {
        setGoUp(true);
      } else {
        setGoUp(false);
      }
    };
    window.addEventListener("scroll", onPageScroll);

    return () => {
      window.removeEventListener("scroll", onPageScroll);
    };
  }, []);

  return (
    <button
      type="button"
      onClick={scrollToTop}
      className={clsx('w-[45px] h-[45px] items-center text-center ' +
        'justify-center text-white border-[3px] border-white rounded-full ' +
        'bg-primary-500 fixed bottom-8 right-8 md-xs:bottom-[50px] ' +
        'md-xs:right-[50px] text-[24px] z-20',
        goUp ? 'flex' : 'hidden')}
    >
      <ArrowUp />
    </button>
  );
};

export default ScrollToTopButton;