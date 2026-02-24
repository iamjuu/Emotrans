import React, { useState } from "react";
import Button from "../layouts/Button";

const Contact = ({ closeForm }) => {
  const [showToast, setShowToast] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission delay
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    setIsSubmitting(false);
    setShowToast(true);
    
    // Hide toast after 3 seconds
    setTimeout(() => {
      setShowToast(false);
      closeForm();
    }, 3000);
  };
  return (
    <div 
      className="fixed inset-0 flex items-center justify-center bg-black/60 backdrop-blur-sm z-50 p-4"
      onClick={closeForm}
    >
      <div 
        className="relative max-w-md w-full max-h-[500px] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="bg-zinc-900 rounded-2xl shadow-2xl overflow-hidden flex flex-col max-h-full border border-zinc-700">
          {/* Header */}
          <div className="bg-gradient-to-r from-[#41a8d1] to-cyan-600 px-8 py-4   flex-shrink-0">
            <div className="flex items-center justify-between">
              <div>
                <h1 className="text-[20px] font-bold text-white">Book Consultation</h1>
                <p className="text-white/80 text-sm mt-1">Get your logistics consultation</p>
              </div>
              <button
                onClick={closeForm}
                className="text-white hover:text-white/80 transition-colors p-2"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
          </div>

          {/* Form - Scrollable */}
          <div className="overflow-y-auto flex-1 scrollbar-hide">
            <form onSubmit={handleSubmit} className="p-8 space-y-6">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <label htmlFor="userFirstName" className="block text-sm font-medium text-zinc-300">
                  First Name
                </label>
                <input
                  className="w-full py-3 px-4 border border-zinc-600 rounded-lg focus:ring-2 focus:ring-[#41a8d1] focus:border-transparent transition-all duration-200 text-white bg-zinc-800 placeholder-zinc-500"
                  type="text"
                  name="userFirstName"
                  id="userFirstName"
                  placeholder="Enter first name"
                  required
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="userLastName" className="block text-sm font-medium text-zinc-300">
                  Last Name
                </label>
                <input
                  className="w-full py-3 px-4 border border-zinc-600 rounded-lg focus:ring-2 focus:ring-[#41a8d1] focus:border-transparent transition-all duration-200 text-white bg-zinc-800 placeholder-zinc-500"
                  type="text"
                  name="userLastName"
                  id="userLastName"
                  placeholder="Enter last name"
                  required
                />
              </div>
            </div>

            <div className="space-y-2">
              <label htmlFor="userEmail" className="block text-sm font-medium text-zinc-300">
                Email Address
              </label>
              <input
                className="w-full py-3 px-4 border border-zinc-600 rounded-lg focus:ring-2 focus:ring-[#41a8d1] focus:border-transparent transition-all duration-200 text-white bg-zinc-800 placeholder-zinc-500"
                type="email"
                name="userEmail"
                id="userEmail"
                placeholder="Enter your email"
                required
              />
            </div>

            <div className="space-y-2">
              <label htmlFor="userNumber" className="block text-sm font-medium text-zinc-300">
                Phone Number
              </label>
              <input
                className="w-full py-3 px-4 border border-zinc-600 rounded-lg focus:ring-2 focus:ring-[#41a8d1] focus:border-transparent transition-all duration-200 text-white bg-zinc-800 placeholder-zinc-500"
                type="tel"
                name="userNumber"
                id="userNumber"
                placeholder="Enter your phone number"
                required
              />
            </div>

            <div className="space-y-2">
              <label htmlFor="serviceType" className="block text-sm font-medium text-zinc-300">
                Service Type
              </label>
              <select
                className="w-full py-3 px-4 border border-zinc-600 rounded-lg focus:ring-2 focus:ring-[#41a8d1] focus:border-transparent transition-all duration-200 text-white bg-zinc-800 placeholder-zinc-500"
                name="serviceType"
                id="serviceType"
                required
              >
                <option value="">Select a service</option>
                <option value="residential">Residential Design</option>
                <option value="commercial">Commercial Design</option>
                <option value="space-planning">Space Planning</option>
                <option value="color-consultation">Color Consultation</option>
                <option value="furniture-selection">Furniture Selection</option>
                <option value="lighting-design">Lighting Design</option>
              </select>
            </div>

            <div className="space-y-2">
              <label htmlFor="message" className="block text-sm font-medium text-zinc-300">
                Message (Optional)
              </label>
              <textarea
                className="w-full py-3 px-4 border border-zinc-600 rounded-lg focus:ring-2 focus:ring-[#41a8d1] focus:border-transparent transition-all duration-200 resize-none text-white bg-zinc-800 placeholder-zinc-500"
                name="message"
                id="message"
                rows="3"
                placeholder="Tell us about your project..."
              />
            </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-3 pt-4">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="flex-1 bg-gradient-to-r from-[#41a8d1] to-cyan-600 text-white   text-[12px] py-3 px-6 rounded-lg font-semibold hover:opacity-90 transition-all duration-200 transform hover:scale-105 shadow-lg disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none flex items-center justify-center"
                >
                  {isSubmitting ? (
                    <>
                      <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Submitting...
                    </>
                  ) : (
                    'Book Consultation'
                  )}
                </button>
                <button
                  type="button"
                  onClick={closeForm}
                  disabled={isSubmitting}
                  className="flex-1 bg-zinc-700 text-white py-3 text-[12px] px-6 rounded-lg font-semibold hover:bg-zinc-600 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>

      {/* Toast Notification */}
      {showToast && (
        <div className="fixed top-4 right-4 z-[60] animate-slide-in">
          <div className="bg-green-500 text-white px-6 py-4 rounded-lg shadow-lg flex items-center space-x-3 max-w-sm">
            <svg className="w-6 h-6 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
            <div>
              <p className="font-semibold">Success!</p>
              <p className="text-sm">Your consultation request has been submitted.</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Contact;
