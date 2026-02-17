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
    <div className=" min-h-screen flex flex-col lg:flex-row justify-between items-center lg:px-32 px-5 pt-24 lg:pt-16 gap-5">
      <div className=" w-full lg:w-3/4 space-y-4">
        {isLoading ? (
          <>
            <ShimmerTitle className="h-10 w-32 mb-4" />
            <ShimmerText lines={3} />
            <ShimmerText lines={3} />
            <ShimmerText lines={3} />
          </>
        ) : (
          <>
            <h1 
              className=" text-4xl font-semibold text-center lg:text-start"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              About Us
            </h1>
            <p 
              className=" text-justify   text-[14px] md:text-[24px]  lg:text-start"
              data-aos="slide-up"
              data-aos-delay="200"
            >
              We are a trusted logistics partner focused on moving your cargo reliably 
              across road, rail, air, and sea. Our team combines operational expertise 
              with modern technology to deliver end-to-end supply chain solutions that 
              keep your business on schedule and your customers satisfied.
            </p>
            <p 
              className="text-justify text-[14px] md:text-[24px] lg:text-start"
              data-aos="fade"
              data-aos-delay="300"
            >
              With years of experience in freight, warehousing, and distribution, we 
              specialize in domestic and international shipping, last-mile delivery, 
              and inventory management. From pickup to delivery, we work closely with 
              our clients to ensure every shipment is tracked, on time, and handled with care.
            </p>
            {/* <p 
              className="text-justify text-[14px] md:text-[24px] lg:text-start"
              data-aos="slide-down"
              data-aos-delay="400"
            >
              Our services include multimodal freight, warehousing, customs clearance, 
              real-time tracking, and dedicated support. We believe logistics should 
              be transparent, efficient, and scalable—so you can focus on growing 
              your business while we handle the movement of your goods.
            </p> */}
          </>
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
            className=" rounded-lg" 
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
