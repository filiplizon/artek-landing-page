import Link from "next/link";

interface MenuItemProps {
  href: string;
  label: string;
  closeMenu: () => void | null;
}

const MenuItem = ({ href, label, closeMenu }: MenuItemProps) => {
  return (
    <li className="mb-2 mt-2 md:mb-0 md:mt-0">
      <Link
        className="p-2 mr-2 text-custom-blue transition-color-shadow duration-300 ease-in-out hover:text-gray-800 rounded hover:shadow-inset-100 font-bold"
        href={href}
        onClick={closeMenu}
      >
        {label}
      </Link>
    </li>
  );
};

export default MenuItem;
