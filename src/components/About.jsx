import { Logistics11 } from "../assets/index.js"
import { useState, useEffect } from "react";
import { ShimmerTitle, ShimmerText, ShimmerImage } from "./Shimmer";

const About = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);
  return (
    <div className="  flex flex-col lg:flex-row justify-between  lg:px-32 px-5 py-24 gap-5 text-zinc-100">
      <div className=" w-full lg:w-3/4 space-y-4">
        {isLoading ? (
          <>
            <ShimmerTitle className="h-10 w-32 mb-4" />
            <ShimmerText lines={3} />
            <ShimmerText lines={3} />
            <ShimmerText lines={3} />
          </>
        ) : (
          <div className="space-y-4 ">
            <h1 
              className="  text-[24px] md:text-[42px] font-[600] text-center lg:text-start text-[#41a8d1]"
              data-aos="fade-up"
              style={{ fontFamily: "'montserrat', serif" }}
              data-aos-delay="100"
            >
              About Us
            </h1>
            <p 
              className=" text-justify text-zinc-300 text-[14px] md:text-[20px]  lg:text-start"
              data-aos="slide-up"
              data-aos-delay="200"
            >
              We are a trusted logistics partner focused on moving your cargo reliably 
              across road, rail, air, and sea. Our team combines operational expertise 
              with modern technology to deliver end-to-end supply chain solutions that 
              keep your business on schedule and your customers satisfied.
            </p>
            <p 
              className="text-justify text-zinc-300 text-[14px] md:text-[20px] lg:text-start"
              data-aos="fade"
              data-aos-delay="300"
            >
              With years of experience in freight, warehousing, and distribution, we 
              specialize in domestic and international shipping, last-mile delivery, 
              and inventory management. From pickup to delivery, we work closely with 
              our clients to ensure every shipment is tracked, on time, and handled with care.
            </p>
         
          </div>
        )}
      </div>
      <div 
        className=" w-full lg:w-3/4"
        data-aos="fade-up"
        data-aos-delay="500"
      >
        {isLoading ? (
          <ShimmerImage height="h-80" className="rounded-lg" />
        ) : (
          <img 
            className=" rounded-lg h-[400px] w-full object-cover" 
            src={Logistics11} 
            alt="Logistics and cargo delivery" 
            data-aos="slide-down"
            data-aos-delay="600"
            data-aos-duration="800"
          />
        )}
      </div>
    </div>
  );
};

export default About;
