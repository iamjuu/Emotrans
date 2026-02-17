import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import ImageModal from './ImageModal';

const CATEGORY_LABELS = {
  road: 'Road Freight',
  air: 'Air Cargo',
  sea: 'Sea Freight',
  rail: 'Rail Freight',
  warehousing: 'Warehousing',
  lastmile: 'Last-Mile Delivery',
};

const DesignModal = ({ isOpen, onClose, category, imageCollections }) => {
  const [isImageModalOpen, setIsImageModalOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const currentCategory = imageCollections[category];
  const modalTitle = CATEGORY_LABELS[category] || `${category?.charAt(0).toUpperCase() + category?.slice(1)} Designs`;

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  // Reset image modal state when category changes
  useEffect(() => {
    if (isOpen && category) {
      setIsImageModalOpen(false);
      setCurrentImageIndex(0);
    }
  }, [isOpen, category]);

  if (!isOpen || !currentCategory) return null;

  // Modal functions
  const openImageModal = (index) => {
    setCurrentImageIndex(index);
    setIsImageModalOpen(true);
  };

  const closeImageModal = () => {
    setIsImageModalOpen(false);
  };

  const nextImage = () => {
    setCurrentImageIndex((prev) => 
      prev === currentCategory.images.length - 1 ? 0 : prev + 1
    );
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => 
      prev === 0 ? currentCategory.images.length - 1 : prev - 1
    );
  };

  return (
    <div className="fixed inset-0 z-50 bg-black bg-opacity-90 overflow-y-auto">
      {/* Close Button - Fixed position with higher z-index */}
      <button
        onClick={onClose}
        className="fixed top-2 right-2 sm:top-4 sm:right-4 z-[100] text-white hover:text-gray-300 transition-colors bg-black/70 backdrop-blur-sm rounded-full p-2 sm:p-3 shadow-lg"
        aria-label="Close modal"
      >
        <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>

      {/* Modal Content */}
      <div className="w-full max-w-7xl mx-auto bg-black min-h-screen">
        {/* Header with title and close button for mobile */}
        <div className="sticky top-0 bg-black  border-b border-gray-200 px-4 py-3 sm:hidden z-50">
          <div className="flex items-center justify-between">
            <h2 className="text-lg font-semibold text-gray-50 capitalize">
              {modalTitle}
            </h2>
            <button
              onClick={onClose}
              className="text-gray-500 hover:text-gray-700 transition-colors p-1"
              aria-label="Close modal"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>

        {/* Masonry Grid Layout */}
        <div className="px-2 sm:px-4 py-4 sm:py-8 pt-16 sm:pt-8">
          {/* Desktop title */}
          <div className="hidden sm:block mb-6">
            <h2 className="text-2xl font-bold text-gray-900 capitalize text-center">
              {modalTitle}
            </h2>
          </div>
          
          <div className="columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-2 sm:gap-4">
            {currentCategory.images.map((image, index) => (
              <div 
                key={index}
                className="break-inside-avoid mb-2 sm:mb-4 group cursor-pointer"
                onClick={() => openImageModal(index)}
              >
                <div className="relative overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-all duration-300">
                  <img
                    className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-300"
                    src={image}
                    alt={`${modalTitle} ${index + 1}`}
                    loading="lazy"
                  />
                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300 flex items-center justify-center">
                    <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <svg className="w-6 h-6 sm:w-8 sm:h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Image Modal */}
      <ImageModal
        isOpen={isImageModalOpen}
        onClose={closeImageModal}
        images={currentCategory.images}
        currentIndex={currentImageIndex}
        onNext={nextImage}
        onPrev={prevImage}
      />
    </div>
  );
};

DesignModal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  category: PropTypes.string,
  imageCollections: PropTypes.objectOf(
    PropTypes.shape({
      images: PropTypes.arrayOf(PropTypes.string).isRequired
    })
  ).isRequired
};

export default DesignModal;
