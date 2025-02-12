import Link from "next/link";

interface LinkButtonProps {
  href: string;
  children: React.ReactNode;
}

const LinkButton = ({ href, children }: LinkButtonProps) => {
  return (
    <Link
      href={href}
      className="px-6 py-2 text-white bg-gray-800 border-2 border-gray-800 uppercase font-bold rounded transition-all duration-300 ease-in-out hover:bg-white hover:text-gray-800 hover:transform hover:scale-105"
    >
      {children}
    </Link>
  );
};

export default LinkButton;
