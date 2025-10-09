import React, { useRef, useState, useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaArrowLeft } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";
import { Hall1, hall2, Livingroom1, Wall1, Wall2, Wall3 } from "../assets";
import { ShimmerTitle, ShimmerText, ShimmerCard } from "./Shimmer";

const Doctors = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);
  const data = [
    {
      img: Wall1,
      name: "Dr. Sarah Williams",
      specialties: "Interior Design Specialist",
    },
    {
      img: Wall2,
      name: "Dr. Michael Chen",
      specialties: "Space Planning Expert",
    },
    {
      img: Wall3,
      name: "Dr. Emma Thompson",
      specialties: "Color & Texture Consultant",
    },
    {
      img: Hall1,
      name: "Dr. James Rodriguez",
      specialties: "Lighting Design Professional",
    },
    {
      img: hall2,
      name: "Dr. Lisa Anderson",
      specialties: "Furniture & Decor Specialist",
    },
    {
      img: Livingroom1,
      name: "Dr. David Park",
      specialties: "Modern Interior Architect",
    },
  ];

  const slider = useRef(null);

  const settings = {
    accessibility: true,
    dots: true,
    infinite: true,
    speed: 500,
    arrows: false,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1023,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
    ],
  };

  return (
    <div className=" py-[130px] flex flex-col  lg:px-32 px-5">
      <div className=" flex flex-col items-center lg:flex-row justify-between mb-10 lg:mb-0">
        <div>
          {isLoading ? (
            <>
              <ShimmerTitle className="h-10 w-80 mb-4" />
              <ShimmerText lines={2} />
            </>
          ) : (
            <>
              <h1 className=" text-4xl font-semibold text-center lg:text-start">
                Our Interior Design 
              </h1>
              <p className=" mt-2 text-center lg:text-start">
                Explore our gallery of stunning interior design images, showcasing creative transformations and inspiring spaces.
              </p>
            </>
          )}
        </div>
        {!isLoading && (
          <div className="flex gap-5 mt-4 lg:mt-0">
            <button
              className="border border-gray-300 font-[200] text-black  p-3 rounded-full"
              onClick={() => slider.current.slickPrev()}
            >
              <FaArrowLeft size={20} />
            </button>
            <button
              className="border border-gray-300 font-[200] text-black  p-3 rounded-full"
              onClick={() => slider.current.slickNext()}
            >
              <FaArrowRight size={20} />
            </button>
          </div>
        )}
      </div>
      <div className=" mt-5">
        {isLoading ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {Array.from({ length: 6 }).map((_, index) => (
              <ShimmerCard key={index} className="h-[380px]" />
            ))}
          </div>
        ) : (
          <Slider ref={slider} {...settings}>
            {data.map((e, index) => (
              <div
                className="h-[30px] text-black rounded-xl shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] mb-2 cursor-pointer hover:shadow-[rgba(0,_0,_0,_0.35)_0px_5px_15px] transition-all duration-300 bg-white"
                key={index}
              >
                <div className="relative overflow-hidden">
                  <img
                    src={e.img}
                    alt="Interior design showcase"
                    className=" h-56 rounded-t-xl w-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-t-xl"></div>
                </div>
{/* 
                <div className=" flex flex-col justify-center items-center p-4">
                  <h1 className=" font-semibold text-xl pt-2 text-gray-800">{e.name}</h1>
                  <h3 className=" pt-2 text-gray-600 text-center text-sm font-medium">{e.specialties}</h3>
                  <div className="mt-3 w-12 h-1 bg-gradient-to-r from-amber-400 to-orange-500 rounded-full"></div>
                </div> */}

              </div>

            ))}
          </Slider>
        )}
      </div>
    </div>
  );
};

export default Doctors;
