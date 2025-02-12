import { ReactNode } from "react";

interface WhyWeCardProps {
  icon: ReactNode;
  title: string;
  description: string;
}

const WhyWeCard = ({ icon, title, description }: WhyWeCardProps) => {
  return (
    <div className="lg:border-l-[1px] border-gray-300 mb-8 lg:mb-0 px-4 lg:pr-0">
      <div className="text-5xl text-gray-600">{icon}</div>
      <p className="font-bold text-3xl my-4">{title}</p>
      <p className="text-lg">{description}</p>
    </div>
  );
};

export default WhyWeCard;
