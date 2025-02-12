"use client";

import MenuItem from "../atoms/MenuItem";

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
      <MenuItem href="#home" label="Home" closeMenu={closeMenu} />
      <MenuItem href="#services" label="Diensten" closeMenu={closeMenu} />
      <MenuItem href="#portfolio" label="Projecten" closeMenu={closeMenu} />
      <MenuItem href="#contact" label="Contact" closeMenu={closeMenu} />
    </ul>
  );
};
