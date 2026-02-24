import Button from "../layouts/Button";
import Orb from "./Orb";
import { Logistics5 } from "../assets";
import { GlobeDemo } from "./global";

const Home = () => {
  return (
    <div
      className="relative bg-black backdrop-blur-sm min-h-screen flex flex-col justify-end items-center lg:px-32 px-5 text-white overflow-hidden bg-cover bg-center bg-no-repeat"

    >
      {/* Blur overlay (keeps bg image visible, adds blur) */}
      <div className="absolute inset-0 backdrop-blur-sm bg-black/30 -z-10" aria-hidden />

      <div
        className="absolute mt-7 inset-0 w-full h-full"
        style={{ zIndex: 0 }}
      >
        <Orb
          hoverIntensity={2}
          rotateOnHover
          hue={0}
          forceHoverState={false}
          backgroundColor="#000000"
        />
      </div>

      {/* Content: hero text in flow, globe fixed at right bottom */}
      <div className="relative z-10 w-full max-w-7xl mx-auto min-h-[85vh] py-8 lg:py-12">
        {/* Hero text — top left */}
        <div className="flex flex-col justify-center space-y-5 sm:space-y-6 max-w-xl animate-fade-in">
          <h1
            className=" text-2xl text-white text-left sm:text-3xl md:text-4xl lg:text-[56px] leading-relaxed sm:leading-loose lg:leading-[1] tracking-tight"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            Your Trusted Logistics Partner Road, Rail, Air & Sea—Delivered
          </h1>
          <p
            className="text-sm sm:text-base text-white md:text-lg leading-relaxed text-left"
            data-aos="fade-up"
            data-aos-delay="400"
          >
            End-to-end freight and supply chain solutions that keep your business moving.
            We handle roadways, railways, airways, and seaways with reliable tracking,
            on-time delivery, and transparent pricing. From warehousing to last-mile—we deliver.
          </p>
          <div
            className="pt-2 sm:pt-4"
            data-aos="fade-up"
            data-aos-delay="600"
          >
            <Button
              className="bg-transparent border-2 border-[#41a8d1] text-[#41a8d1] hover:bg-[#41a8d1] hover:text-white hover:border-[#41a8d1]"
              title="Connect me"
              as="a"
              href="https://wa.me/971585817555"
              target="_blank"
              rel="noopener noreferrer"
            />
          </div>
        </div>

        {/* Globe — absolutely positioned at right bottom corner */}
        <div className="absolute bottom-0 right-0 w-full sm:w-[85%] lg:w-[55%] xl:w-[50%] h-[220px] sm:h-[260px] lg:h-[320px] overflow-hidden pointer-events-none lg:pointer-events-auto">
          <div className="absolute right-0 top-0 h-[320px] sm:h-[400px] lg:h-[480px] w-[100%] min-w-[320px] max-w-[520px] flex items-start justify-end">
            <GlobeDemo />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
