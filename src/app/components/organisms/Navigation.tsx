"use client";

import { useState } from "react";
import { Logo } from "../atoms/Logo";
import { BurgerMenu } from "../atoms/BurgerMenu";
import { MenuItems } from "../molecules/MenuItems";

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
      className="fixed w-full left-0 top-0 z-50 bg-gray-800 text-white shadow"
      aria-label="Main Navigation"
    >
      <div className="flex relative h-[60px] items-center justify-between max-w-[1150px] mx-auto py-4 px-2">
        <Logo />
        <BurgerMenu toggleMenu={toggleMenu} isOpen={isOpen} />
        <MenuItems isOpen={isOpen} closeMenu={closeMenu} />
      </div>
    </nav>
  );
};
