import Image from "next/image";

interface ServiceCardProps {
  title: string;
  description: string;
  imageUrl: string;
  bgColor?: string;
  textColor?: string;
}

const ServiceCard = ({
  title,
  description,
  imageUrl,
  bgColor = "bg-white",
  textColor = "text-gray-800",
}: ServiceCardProps) => {
  return (
    <div
      className={`rounded flex flex-col shadow-md lg:border-2 lg:w-1/2 ${bgColor} ${textColor}`}
    >
      <Image
        src={imageUrl}
        alt={title}
        width={500}
        height={300}
        className=" w-full h-full lg:mt-0 lg:h-3/5"
      />
      <div className="p-4 flex h-1/2 flex-col justify-center lg:items-center lg:py-0">
        <div className="font-bold text-2xl mb-2">{title}</div>
        <p className="text-base h-2/3">{description}</p>
      </div>
    </div>
  );
};

export default ServiceCard;
