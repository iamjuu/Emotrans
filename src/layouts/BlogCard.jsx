import PropTypes from 'prop-types';
import { useState, useEffect } from 'react';
import { ShimmerImage, ShimmerTitle, ShimmerText, ShimmerButton } from '../components/Shimmer';

const BlogCard = ({ img, headlines, description, category, onViewDesign }) => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, Math.random() * 2000 + 1000); // Random loading time between 1-3 seconds

    return () => clearTimeout(timer);
  }, []);
  return (
    <div className="group relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 ease-in-out overflow-hidden cursor-pointer hover:-translate-y-2 max-w-sm">
      {isLoading ? (
        <>
          {/* Image Container */}
          <div className="relative overflow-hidden">
            <ShimmerImage height="h-64" className="rounded-none" />
          </div>

          {/* Content Container */}
          <div className="p-6 space-y-3">
            <ShimmerTitle className="h-6 w-3/4 mb-2" />
            <ShimmerText lines={3} />
            <div className="pt-2">
              <ShimmerButton className="w-24 h-4" />
            </div>
          </div>
        </>
      ) : (
        <>
          {/* Image Container */}
          <div className="relative overflow-hidden">
            <img
              className="w-full h-64 object-cover transition-transform duration-700 group-hover:scale-110"
              src={img}
              alt={headlines}
            />
            {/* Overlay Gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            
            {/* Hover Overlay with Icon */}
            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <div className="bg-white/20 backdrop-blur-sm rounded-full p-3">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>
              </div>
            </div>
          </div>

          {/* Content Container */}
          <div className="p-6 space-y-3">
            <h2 className="text-[20px] font-bold text-gray-800 group-hover:text-blue-600 transition-colors duration-300 line-clamp-2">
              {headlines}
            </h2>
            <p className="text-gray-600 text-[14px] md:text-[18px] leading-relaxed line-clamp-3">
              {description}
            </p>
            
            {/* Read More Button */}
            <div className="pt-2">
              <button 
                onClick={() => onViewDesign(category)}
                className="inline-flex items-center text-blue-600 text-sm font-medium group-hover:text-blue-700 transition-colors duration-300 hover:underline"
              >
                View Design
                <svg className="ml-2 w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </div>

          {/* Decorative Border */}
          <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 to-purple-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
        </>
      )}
    </div>
  );
};

BlogCard.propTypes = {
  img: PropTypes.string.isRequired,
  headlines: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  onViewDesign: PropTypes.func.isRequired
};

export default BlogCard;
