"use client";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider, { LazyLoadTypes } from "react-slick";
import SectionHeader from "../molecules/SectionHeader";

const Portfolio = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    className: "lg:px-20",
    lazyLoad: "ondemand" as LazyLoadTypes,
  };

  return (
    <div
      className="lg:h-min-screen pt-[70px] pb-28 flex flex-col justify-center items-center bg-gray-800 w-full text-white"
      id="portfolio"
    >
      <div className="max-w-[1150px] w-full lg:px-0">
        <SectionHeader text="Ons werk" dark />
        <h1 className="text-4xl font-bold mb-4 px-4 lg:px-0">Projecten</h1>
        <p className="mb-8 text-lg px-4 lg:px-0">
          Hier zijn enkele van onze recente projecten. We zijn trots op ons werk
          en streven ernaar de beste resultaten voor onze klanten te leveren.
        </p>
        <Slider {...settings}>
          <div>
            <img
              src="/images/20240528_102126.jpg"
              className="w-auto max-h-[500px] mx-auto h-auto"
            />
          </div>
          <div>
            <img
              src="/images/20241022_131505.jpg"
              alt="Project 3"
              className="w-auto max-h-[500px] mx-auto h-auto"
            />
          </div>
          <div className="flex justify-center items-center">
            <img
              src="/images/20240528_102133.jpg"
              alt="Project 2"
              className="w-auto max-h-[500px] mx-auto h-auto"
            />
          </div>
          <div>
            <img
              src="/images/20240529_120842.jpg"
              alt="Project 3"
              className="w-auto max-h-[500px] mx-auto h-auto"
            />
          </div>
          <div>
            <img
              src="/images/20240529_120856.jpg"
              alt="Project 3"
              className="w-auto max-h-[500px] mx-auto h-auto"
            />
          </div>
          <div>
            <img
              src="/images/20240530_141409.jpg"
              alt="Project 3"
              className="w-auto max-h-[500px] mx-auto h-auto"
            />
          </div>
          <div>
            <img
              src="/images/20240603_132109.jpg"
              alt="Project 3"
              className="w-auto max-h-[500px] mx-auto h-auto"
            />
          </div>
          <div>
            <img
              src="/images/20241022_082436.jpg"
              alt="Project 3"
              className="w-auto max-h-[500px] mx-auto h-auto"
            />
          </div>

          <div>
            <img
              src="/images/20241112_132839.jpg"
              alt="Project 3"
              className="w-auto max-h-[500px] mx-auto h-auto"
            />
          </div>
          <div>
            <img
              src="/images/20241113_144921.jpg"
              alt="Project 3"
              className="w-auto max-h-[500px] mx-auto h-auto"
            />
          </div>
          <div>
            <img
              src="/images/20241114_133238.jpg"
              alt="Project 3"
              className="w-auto max-h-[500px] mx-auto h-auto"
            />
          </div>
          <div>
            <img
              src="/images/20241121_091827(0).jpg"
              alt="Project 3"
              className="w-auto max-h-[500px] mx-auto h-auto"
            />
          </div>
          <div>
            <img
              src="/images/20241212_145106.jpg"
              alt="Project 3"
              className="w-auto max-h-[500px] mx-auto h-auto"
            />
          </div>
          <div>
            <img
              src="/images/20250109_124103.jpg"
              alt="Project 3"
              className="w-auto max-h-[500px] mx-auto h-auto"
            />
          </div>
          <div>
            <img
              src="/images/gevelsystemen.jpg"
              alt="Project 3"
              className="w-auto max-h-[500px] mx-auto h-auto"
            />
          </div>
          <div>
            <img
              src="/images/20250109_124110.jpg"
              alt="Project 3"
              className="w-auto max-h-[500px] mx-auto h-auto"
            />
          </div>
          <div>
            <img
              src="/images/20250109_124120.jpg"
              alt="Project 3"
              className="w-auto max-h-[500px] mx-auto h-auto"
            />
          </div>
          <div>
            <img
              src="/images/20250110_140617(0).jpg"
              alt="Project 3"
              className="w-auto max-h-[500px] mx-auto h-auto"
            />
          </div>
          <div>
            <img
              src="/images/20250114_115440.jpg"
              alt="Project 3"
              className="w-auto max-h-[500px] mx-auto h-auto"
            />
          </div>
          <div>
            <img
              src="/images/gevelsystemen.jpg"
              alt="Project 3"
              className="w-auto max-h-[500px] mx-auto h-auto"
            />
          </div>
        </Slider>
      </div>
    </div>
  );
};

export default Portfolio;
