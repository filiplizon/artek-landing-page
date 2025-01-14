type BurgerMenuProps = {
  toggleMenu: () => void;
  isOpen: boolean;
};

export const BurgerMenu = ({ toggleMenu, isOpen }: BurgerMenuProps) => {
  return (
    <div className="md:hidden">
      <button
        onClick={toggleMenu}
        className="p-2 focus:outline-none"
        aria-label="Toggle menu"
        aria-expanded={isOpen}
        aria-controls="menu-items"
      >
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}
          ></path>
        </svg>
      </button>
    </div>
  );
};
