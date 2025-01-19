"use client";

import { useState } from "react";
import { Logo } from "./Logo";
import { BurgerMenu } from "./BurgerMenu";
import { MenuItems } from "./MenuItems";

export const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <nav
      className="fixed w-full left-0 top-0 z-50 bg-gray-800 text-white shadow-md"
      aria-label="Main Navigation"
    >
      <div className="flex relative items-center justify-between max-w-[1230px] mx-auto p-4 lg:px-0">
        <Logo />
        <BurgerMenu toggleMenu={toggleMenu} isOpen={isOpen} />
        <MenuItems isOpen={isOpen} closeMenu={closeMenu} />
      </div>
    </nav>
  );
};
