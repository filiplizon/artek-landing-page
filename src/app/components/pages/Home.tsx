"use client";
import Image from "next/image";
import { IoConstructOutline } from "react-icons/io5";
import LinkButton from "../atoms/LinkButton";
import CompanyInfo from "../atoms/CompanyInfo";

const Home = () => {
  return (
    <div
      className="mt-[60px] lg:bg-[url('/images/gevelsystemen.jpg')] lg:bg-cover lg:bg-center lg:bg-fixed relative h-min-screen w-full flex flex-col items-center lg-bg-opacity-10 lg:justify-center lg:mt-8 lg:h-screen lg:flex-row-reverse"
      id="home"
    >
      <div className="w-full lg:w-3/5 mb-4 lg:ml-8 lg:mb-0 lg:hidden">
        <Image
          src="/images/gevelsystemen.jpg"
          alt="Example"
          width={600}
          height={300}
          className="w-full h-full lg:mt-0 lg:bg-fixed"
        />
      </div>
      <div className="flex relative flex-col pt-4 pb-6 items-center w-full rounded lg:bg-white lg:text-gray-800 lg:border-2 lg:border-gray-800 lg:shadow-md lg:px-8 lg:w-[1150px] lg:items-start lg:bg-opacity-95">
        <div className="absolute top-0 right-0 mt-6 mr-8 w-16 h-16 bg-gray-800 text-white text-4xl flex items-center justify-center rounded hidden lg:flex">
          <IoConstructOutline />
        </div>
        <h1 className="font-bold text-3xl mb-2 lg:text-5xl">ART-BUD</h1>
        <h2 className="text-2xl underline">Gevelsystemen</h2>
        <p className="px-4 mt-3 text-lg lg:px-0 lg:w-3/5">
          Gevelsystemen zijn essentieel voor de esthetiek en functionaliteit van
          een gebouw. Ze bieden bescherming tegen weersinvloeden, verbeteren de
          energie-efficiëntie en dragen bij aan de uitstraling van het pand. Wij
          specialiseren ons in hoogwaardige gevelsystemen die voldoen aan de
          hoogste normen van duurzaamheid en design. Onze oplossingen zijn op
          maat gemaakt voor elk project, zowel nieuwbouw als renovatie.
        </p>
        <div className="flex flex-col-reverse mt-4 w-full lg:flex-row lg:justify-between">
          <div className="flex mt-5 space-x-4 justify-center lg:justify-start lg:mt-0">
            <LinkButton href="#services">Zie meer</LinkButton>
            <LinkButton href="#contact">Contact</LinkButton>
          </div>
          <div className="px-4">
            <CompanyInfo />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
