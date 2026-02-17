import Button from "../layouts/Button";
import {LogisticsVideo, MainBackground} from "../assets/index.js";
import { useState } from "react";

const Home = () => {
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);

  const handleVideoCanPlay = () => {
    console.log('Video can play');
    setIsVideoLoaded(true);
  };

  const handleVideoPlay = () => {
    console.log('Video started playing');
    setIsVideoPlaying(true);
  };

  const handleVideoError = (e) => {
    console.log('Video failed to load:', e);
    setIsVideoLoaded(true);
    setIsVideoPlaying(true); // Show content even if video fails
    e.target.style.display = 'none';
  };

  const handleVideoLoadStart = () => {
    console.log('Video loading started');
    setIsVideoLoaded(false);
    setIsVideoPlaying(false);
  };
  return (
    <div className="relative min-h-screen   flex flex-col justify-center lg:px-32 px-5 text-white">
      <div className="absolute inset-0 w-full h-full bg-black opacity-90 -z-20"></div>
      {/* Fallback background image */}
      <div 
        className="absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat opacity-90 -z-15"
       
      ></div>
      <video
        className="absolute inset-0 w-full h-full object-cover opacity-90 -z-10"
        src={LogisticsVideo}
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
        poster=""
        onError={handleVideoError}
        onLoadStart={handleVideoLoadStart}
        onCanPlay={handleVideoCanPlay}
        onPlay={handleVideoPlay}
      />
      {/* Video loading loader overlay */}
      {!isVideoPlaying && (
        <div className="absolute inset-0 w-full h-full bg-black bg-opacity-80 flex items-center justify-center -z-5 overflow-hidden">
          <div className="text-center px-4 max-w-sm mx-auto">
            <div className="relative w-16 h-16 mx-auto mb-4">
              {/* Spinning loader */}
              <div className="w-16 h-16 border-4 border-orange-500 border-t-transparent rounded-full animate-spin"></div>
              {/* Pulse effect */}
              <div className="w-16 h-16 border-4 border-orange-500 border-opacity-30 rounded-full animate-ping absolute top-0 left-0"></div>
            </div>
            <p className="text-white text-lg font-medium">Loading Experience...</p>
            <p className="text-gray-300 text-sm mt-2">Preparing your design journey</p>
          </div>
        </div>
      )}
      
      {/* Content - only show after video starts playing */}
      {isVideoPlaying && (
        <div className="relative z-10 w-full lg:w-4/5 space-y-4 sm:space-y-5 mt-6 sm:mt-8 lg:mt-10 animate-fade-in">
          <h1 
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-tight sm:leading-tight"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            Your Trusted Logistics Partner Road, Rail, Air & Sea—Delivered
          </h1>
          <p 
            className="text-sm sm:text-base md:text-lg leading-relaxed sm:leading-relaxed"
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
              title="Connect me" 
              as="a"
              href="https://wa.me/918593074903"
              target="_blank"
              rel="noopener noreferrer"
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default Home;
