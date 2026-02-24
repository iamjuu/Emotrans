import { useState, useEffect } from "react";
import { Logistics11, Logistics5, Logistics8 } from "../assets";
import { ShimmerTitle, ShimmerText, ShimmerImage, ShimmerButton } from "./Shimmer";

const Services = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);
  return (
    <div className="min-h-screen  py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Title - Centered */}
        <div 
          className="text-center mb-12 lg:mb-16"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          {isLoading ? (
            <div className="space-y-4">
              <ShimmerTitle className="h-16 w-3/4 mx-auto mb-4" />
              <ShimmerTitle className="h-16 w-1/2 mx-auto" />
            </div>
          ) : (
            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-serif font-light text-white leading-tight">
              Your Gateway to Reliable
              <br />
              <span className="text-[#41a8d1]">Logistics & Freight</span>
            </h1>
          )}
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 xl:gap-16">
          {/* Left Content */}
          <div 
            className="flex flex-col justify-center space-y-6 lg:space-y-8"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            {isLoading ? (
              <>
                <ShimmerText lines={4} />
                <ShimmerButton className="w-40 h-8" />
              </>
            ) : (
              <>
                <p className="text-zinc-400 text-[14px] md:text-[20px] leading-relaxed">
                  We deliver end-to-end logistics and freight solutions across road, rail, air, and sea. 
                  From warehousing and customs clearance to last-mile delivery, our team brings 
                  expertise in supply chain management, real-time tracking, and on-time delivery. 
                  Whether domestic or international, we keep your cargo moving with transparency and care.
                </p>
                <a 
                  href="#about" 
                  className="inline-flex items-center text-zinc-400 hover:text-[#41a8d1] font-medium text-lg lg:text-xl transition-colors duration-300 group w-fit"
                >
                  Read About Us 
                  <svg 
                    className="ml-2 w-5 h-5 lg:w-6 lg:h-6 transform group-hover:translate-x-1 transition-transform duration-300" 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </a>
              </>
            )}
          </div>

          {/* Right Content - Images Grid + Stats (single visual block) */}
          <div 
            className="relative flex flex-col"
            data-aos="fade-up"
            data-aos-delay="300"
          >
            {isLoading ? (
              <>
                <div className="grid grid-cols-2 gap-2 sm:gap-4 lg:gap-6 w-full aspect-[4/5] sm:aspect-[5/6] lg:aspect-[4/5] min-h-[16rem] max-h-[28rem] lg:max-h-[32rem]">
                  <div className="row-span-2 col-span-1 min-h-0">
                    <ShimmerImage height="h-full" className="rounded-xl sm:rounded-2xl lg:rounded-3xl" />
                  </div>
                  <div className="col-span-1 min-h-0">
                    <ShimmerImage height="h-full" className="rounded-xl sm:rounded-2xl lg:rounded-3xl" />
                  </div>
                  <div className="col-span-1 min-h-0">
                    <ShimmerImage height="h-full" className="rounded-xl sm:rounded-2xl lg:rounded-3xl" />
                  </div>
                </div>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6 py-6 sm:py-8">
                  {[1, 2, 3, 4].map((i) => (
                    <div key={i} className="h-14 sm:h-16 bg-zinc-700 rounded animate-pulse" />
                  ))}
                </div>
              </>
            ) : (
              <>
                {/* Image grid - aspect-ratio scales with width so responsive */}
                <div className="grid grid-cols-2 gap-2 sm:gap-4 lg:gap-6 w-full aspect-[4/5] sm:aspect-[5/6] lg:aspect-[4/5] min-h-[16rem] max-h-[28rem] lg:max-h-[32rem]">
                  {/* Large logistics image - Left (spans 2 rows) */}
                  <div className="row-span-2 col-span-1 min-h-0">
                    <div className="relative h-full rounded-xl sm:rounded-2xl lg:rounded-3xl overflow-hidden shadow-2xl group hover:shadow-3xl transition-all duration-500">
                      <img 
                        src={Logistics11} 
                        alt="Warehousing and logistics operations" 
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
                    </div>
                  </div>
                  {/* Air / cargo - Top Right */}
                  <div className="col-span-1 min-h-0">
                    <div className="relative h-full rounded-xl sm:rounded-2xl lg:rounded-3xl overflow-hidden shadow-2xl group hover:shadow-3xl transition-all duration-500">
                      <img 
                        src={Logistics5} 
                        alt="Air cargo and freight" 
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
                    </div>
                  </div>
                  {/* Sea freight - Bottom Right */}
                  <div className="col-span-1 min-h-0">
                    <div className="relative h-full rounded-xl sm:rounded-2xl lg:rounded-3xl overflow-hidden shadow-2xl group hover:shadow-3xl transition-all duration-500">
                      <img 
                        src={Logistics8} 
                        alt="Sea freight and shipping" 
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
                    </div>
                  </div>
                </div>

            
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
