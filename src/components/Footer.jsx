import { useState } from "react";
import { LogisticsLogoWhite } from "../assets";

const Footer = () => {
  const [showToast, setShowToast] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleNewsletterSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    await new Promise((resolve) => setTimeout(resolve, 1000));

    setIsSubmitting(false);
    setShowToast(true);

    setTimeout(() => {
      setShowToast(false);
    }, 3000);
  };

  return (
    <>
      <div
        className="w-full bg-zinc-950 text-zinc-100 border-t border-zinc-800 mx-auto 
        px-6 sm:px-8 md:px-16 lg:px-24 xl:px-32 
        py-10 sm:py-12 md:py-14"
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-6 sm:gap-8">
          
          {/* Company Information */}
          <div>
            <div className="flex items-center mb-6">
              <img
                src={LogisticsLogoWhite}
                alt="Emotrans Logo"
                className="w-32"
              />
            </div>

            <div className="space-y-3 text-sm">
              {/* Address */}
              <div className="flex items-start">
                <div className="flex flex-col">
                  <span className="leading-relaxed">
                    Office No: 915, Business Avenue Building 515
                  </span>
                  <span>Port Saeed, Dubai, UAE</span>
                </div>
              </div>

              {/* Email */}
              <div>
                <span>Info@emotransuae.com</span>
              </div>

              {/* Phone */}
              <div>
                <span>+971 567280200, +971 4327 3858</span>
              </div>

              {/* PO Box */}
              <div>
                <span>PO Box: 97037</span>
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h2 className="text-white font-bold text-base sm:text-lg mb-4">
              Services
            </h2>
            <div className="space-y-2 text-sm">
              <span className="block">Road Freight</span>
              <span className="block">Air Cargo</span>
              <span className="block">Sea Freight</span>
              <span className="block">Rail Freight</span>
              <span className="block">Warehousing</span>
              <span className="block">Last-Mile Delivery</span>
            </div>
          </div>

          {/* Company */}
          <div>
            <h2 className="text-white font-bold text-base sm:text-lg mb-4">
              Emotrans
            </h2>
            <div className="space-y-2 text-sm">
              <span className="block">About Us</span>
              <span className="block">Our Services</span>
              <span className="block">Contact</span>
            </div>
          </div>

          {/* Social */}
          <div>
            <h2 className="text-white font-bold text-base sm:text-lg mb-4">
              Our Social Media
            </h2>
            <div className="space-y-2 text-sm">
              <span className="block">WhatsApp</span>
              <span className="block">Instagram</span>
              <span className="block">Facebook</span>
              <span className="block">LinkedIn</span>
            </div>
          </div>

          {/* Newsletter */}
          <div>
            <h1 className="text-[#41a8d1] font-bold text-base sm:text-lg mb-4">
              Join a Newsletter
            </h1>

            <form onSubmit={handleNewsletterSubmit} className="space-y-3">
              <input
                type="email"
                placeholder="Enter Your Email"
                className="w-full px-3 py-2.5 border border-[#41a8d1] rounded 
                focus:outline-none text-sm text-white bg-zinc-900"
                required
              />

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-[#41a8d1] text-white px-4 py-2.5 rounded 
                hover:bg-[#36ae9a] transition-colors text-sm font-medium"
              >
                {isSubmitting ? "Subscribing..." : "Send"}
              </button>

              <p className="text-xs text-zinc-500 mt-4">
                Copyright Emotrans
              </p>
            </form>
          </div>
        </div>
      </div>

      {/* Toast */}
      {showToast && (
        <div className="fixed top-4 right-4 z-50">
          <div className="bg-green-500 text-white px-6 py-3 rounded-lg shadow-lg">
            <p className="font-semibold">Success!</p>
            <p className="text-sm">
              You&apos;ve been subscribed to our newsletter.
            </p>
          </div>
        </div>
      )}
    </>
  );
};

export default Footer;