const ArrowButton = ({onClick, arrow}) => {
  return (
    <button
      type="button"
      onClick={onClick}
      className="mr-4 md:mr-6 text-black border-none
      bg-transparent outline-none text-[40px] md:text-[48px] hover:text-primary-700"
    >
      {arrow}
    </button>
  );
};

export default ArrowButton;