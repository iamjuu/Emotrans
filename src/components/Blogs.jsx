import BlogCard from "../layouts/BlogCard";
import DesignModal from "./DesignModal";
import { useDesignModal } from "../hooks/useDesignModal";
import { useState, useEffect } from "react";
import { ShimmerTitle, ShimmerText, ShimmerGrid } from "./Shimmer";
import {
  Logistics1, Logistics2, Logistics3, Logistics4, Logistics5, Logistics6,
  Logistics7, Logistics8, Logistics9, Logistics10, Logistics11, Logistics15,
  Logistics16, Logistics17, Logistics18
} from "../assets";

const Blogs = () => {
  const { isModalOpen, selectedCategory, openModal, closeModal } = useDesignModal();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  // Define image collections for each logistics category
  const imageCollections = {
    road: {
      images: [Logistics1, Logistics2, Logistics6]
    },
    air: {
      images: [Logistics5, Logistics7]
    },
    sea: {
      images: [Logistics8, Logistics9]
    },
    rail: {
      images: [Logistics3, Logistics4]
    },
    warehousing: {
      images: [Logistics10, Logistics11, Logistics15]
    },
    lastmile: {
      images: [Logistics16, Logistics17, Logistics18]
    }
  };

  return (
    <div className=" min-h-screen flex flex-col x lg:px-32 px-5 ">
      <div className=" flex flex-col items-center lg:flex-row justify-between">
        <div
          data-aos="fade-up"
          data-aos-delay="100"
        >
          {isLoading ? (
            <>
              <ShimmerTitle className="h-10 w-48 mb-4" />
              <ShimmerText lines={2} />
            </>
          ) : (
            <>
              <h1 className=" text-4xl font-semibold text-center lg:text-start">
                Our Services
              </h1>
              <p className=" mt-2 text-[14px] md:text-[24px] text-center lg:text-start">
                Explore our logistics solutions—road, air, sea, rail, warehousing, and last-mile delivery. Reliable freight and supply chain services to keep your business moving.
              </p>
            </>
          )}
        </div>

      </div>
      <div 
        className=" my-8"
        data-aos="fade-up"
        data-aos-delay="200"
      >
        {isLoading ? (
          <ShimmerGrid cols={3} className="justify-items-center" />
        ) : (
          <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
            <div data-aos="fade-up" data-aos-delay="300">
              <BlogCard 
                img={Logistics1} 
                headlines="Road Freight" 
                description="Door-to-door road logistics with reliable carriers and real-time tracking for domestic and cross-border shipments."
                category="road"
                onViewDesign={openModal}
              />
            </div>
            <div data-aos="fade-up" data-aos-delay="400">
              <BlogCard 
                img={Logistics5} 
                headlines="Air Cargo" 
                description="Fast air freight for time-sensitive cargo. We handle documentation, customs, and delivery to major hubs worldwide."
                category="air"
                onViewDesign={openModal}
              />
            </div>
            <div data-aos="fade-up" data-aos-delay="500">
              <BlogCard
                img={Logistics8}
                headlines="Sea Freight"
                description="Cost-effective ocean shipping for bulk and containerized cargo. FCL and LCL options with full visibility."
                category="sea"
                onViewDesign={openModal}
              />
            </div>
            <div data-aos="fade-up" data-aos-delay="600">
              <BlogCard 
                img={Logistics3} 
                headlines="Rail Freight" 
                description="Efficient rail solutions for long-haul and intermodal moves. Sustainable and reliable for heavy and bulk goods."
                category="rail"
                onViewDesign={openModal}
              />
            </div>
            <div data-aos="fade-up" data-aos-delay="700">
              <BlogCard 
                img={Logistics11} 
                headlines="Warehousing" 
                description="Secure storage, inventory management, and order fulfillment. Scale with flexible space and integrated systems."
                category="warehousing"
                onViewDesign={openModal}
              />
            </div>
            <div data-aos="fade-up" data-aos-delay="800">
              <BlogCard 
                img={Logistics16} 
                headlines="Last-Mile Delivery" 
                description="Final-leg delivery to your customers. Same-day and scheduled options with proof of delivery and tracking."
                category="lastmile"
                onViewDesign={openModal}
              />
            </div>
          </div>
        )}
      </div>

      {/* Design Modal */}
      <DesignModal
        isOpen={isModalOpen}
        onClose={closeModal}
        category={selectedCategory}
        imageCollections={imageCollections}
      />
    </div>
  );
};

export default Blogs;
