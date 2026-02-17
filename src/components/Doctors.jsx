import { useRef, useState, useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaArrowLeft } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";
import { Logistics1, Logistics3, Logistics5, Logistics8, Logistics11, Logistics16 } from "../assets";
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
      img: Logistics1,
      name: "Road Freight",
      specialties: "Domestic & cross-border trucking",
    },
    {
      img: Logistics3,
      name: "Rail Freight",
      specialties: "Long-haul & intermodal",
    },
    {
      img: Logistics5,
      name: "Air Cargo",
      specialties: "Express & time-critical shipping",
    },
    {
      img: Logistics8,
      name: "Sea Freight",
      specialties: "FCL, LCL & ocean logistics",
    },
    {
      img: Logistics11,
      name: "Warehousing",
      specialties: "Storage & fulfillment",
    },
    {
      img: Logistics16,
      name: "Last-Mile Delivery",
      specialties: "Final-leg & proof of delivery",
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
                Our Logistics Services
              </h1>
              <p className=" mt-2 text-center text-[14px] md:text-[24px] lg:text-start">
                Explore our freight and supply chain solutions—road, rail, air, sea, warehousing, and last-mile delivery.
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
      <div className="mt-5 [&_.slick-dots]:bottom-[-42px] [&_.slick-dots_li]:m-0 [&_.slick-dots_li_button]:before:!text-gray-400 [&_.slick-dots_li.slick-active_button]:before:!text-gray-800 [&_.slick-slide]:outline-none">
        {isLoading ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {Array.from({ length: 6 }).map((_, index) => (
              <ShimmerCard key={index} className="h-[380px]" />
            ))}
          </div>
        ) : (
          <Slider ref={slider} {...settings}>
            {data.map((e, index) => (
              <div className="px-2 sm:px-3" key={index}>
                <div className="group bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-md hover:shadow-xl hover:border-gray-200 transition-all duration-300 cursor-pointer">
                  <div className="relative overflow-hidden aspect-[4/3]">
                    <img
                      src={e.img}
                      alt={e.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-t-2xl" />
                  </div>
                  <div className="p-5">
                    <h3 className="text-lg font-semibold text-gray-900 mb-1">{e.name}</h3>
                    <p className="text-sm text-gray-500">{e.specialties}</p>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        )}
      </div>
    </div>
  );
};

export default Doctors;
