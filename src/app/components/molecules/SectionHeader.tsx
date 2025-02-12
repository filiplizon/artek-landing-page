interface SectionHeaderProps {
  text: string;
  dark?: boolean;
}

const SectionHeader = ({ text, dark }: SectionHeaderProps) => {
  return (
    <div className="flex items-center w-full mb-4 px-4 lg:px-0">
      <div
        className={`h-[20px] w-[20px] ${dark ? "bg-gray-400" : "bg-gray-600"}`}
      ></div>
      <p
        className={`font-bold ${
          dark ? "text-gray-400" : "text-gray-600"
        } mx-4 flex-shrink-0`}
      >
        {text}
      </p>
      <div
        className={`h-[2px] ${dark ? "bg-gray-400" : "bg-gray-600"} flex-grow`}
      ></div>
    </div>
  );
};

export default SectionHeader;
