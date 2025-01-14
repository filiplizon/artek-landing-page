"use client";

type MenuItemsProps = {
  isOpen: boolean;
  closeMenu: () => void | null;
};

export const MenuItems = ({ isOpen, closeMenu }: MenuItemsProps) => {
  return (
    <ul
      id="menu-items"
      className={`flex flex-col bg-gray-800 items-center w-full absolute top-full left-0 p-2 transition-all duration-300 ease-in-out ${
        isOpen
          ? "visible max-h-screen opacity-100"
          : "max-h-0 opacity-0 md:opacity-100"
      } md:flex md:flex-row md:static md:visible md:w-auto `}
      aria-hidden={!isOpen}
    >
      <li className="mb-2 mt-2 md:mb-0 md:mt-0">
        <a className="p-2 mr-2" href="#home" onClick={closeMenu}>
          Home
        </a>
      </li>
      <li className="mb-2 md:mb-0">
        <a className="p-2 mr-2" href="#services" onClick={closeMenu}>
          Diensten
        </a>
      </li>
      <li className="mb-2 md:mb-0">
        <a className="p-2 mr-2" href="#portfolio" onClick={closeMenu}>
          Projecten
        </a>
      </li>
      <li className="mb-2 md:mb-0">
        <a className="p-2 mr-2" href="#contact" onClick={closeMenu}>
          Contact
        </a>
      </li>
    </ul>
  );
};
