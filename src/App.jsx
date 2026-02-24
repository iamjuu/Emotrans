import { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Counter from "./components/couter";
import Services from "./components/Services";
import Doctors from "./components/Doctors";
import Blogs from "./components/Blogs";
import QRConnect from "./components/QRConnect";
import Footer from "./components/Footer";
// import { AnimatedTestimonialsDemo } from "./components/acternity/card";
import { FollowingPointerDemo } from "./components/card-hover";
// import { CometCardDemo } from "./components/3dcard";
import {
  Logistics1,
  Logistics10,
  Logistics2,
  Logistics3,
  Logistics4,
  Logistics6,
  Logistics7,
  Logistics9,
  LogisticsLogo,
} from "./assets";
import { GlobeDemo } from "./components/global";
import { LayoutGridDemo } from "./components/grid-layout";

// Titles: 32 chars each | Descriptions: 115 chars each
const cardData = [
  {
    slug: "roadways-airways-seaways-railways",
    author: "EmoTrans",
    date: "28th March, 2024",
    title: "Roadways, Airways, Seaways & Rail",
    description:
      "End-to-end cargo across all modes. We connect your goods from origin to destination with reliable road, air, sea, and rail logistics worldwide.",
    image: Logistics1,
    authorAvatar: LogisticsLogo,
  },
  {
    slug: "warehouse-and-storage",
    author: "EmoTrans",
    date: "15th April, 2024",
    title: "Warehousing & Storage Solutions.",
    description:
      "Secure, scalable warehousing and inventory. Our facilities support your supply chain with real-time tracking and efficient distribution.",
    image: Logistics6,
    authorAvatar: LogisticsLogo,
  },
  {
    slug: "global-freight-forwarding",
    author: "EmoTrans",
    date: "1st May, 2024",
    title: "Global Freight Forwarding Support",
    description:
      "International shipping and customs made simple. We handle documentation, compliance, and timely delivery across borders for you.",
    image: Logistics10,
    authorAvatar: LogisticsLogo,
  },
  {
    slug: "last-mile-delivery",
    author: "EmoTrans",
    date: "20th June, 2024",
    title: "Last-Mile Delivery & Fulfillment",
    description:
      "From warehouse to your customer's door. Fast, tracked last-mile delivery and fulfillment services to complete your logistics chain.",
    image: Logistics4,
    authorAvatar: LogisticsLogo,
  },
];

const App = () => {
  const whatsappNumber = "585817555";
  const whatsappText = encodeURIComponent("Hi, I'm interested in your services. Please provide me with more information.");
  const [isBouncing, setIsBouncing] = useState(false);

  // Normalize the WhatsApp number to international format without '+' or leading zeros
  const getWhatsAppLink = () => {
    const digitsOnly = String(whatsappNumber)
      .replace(/\D/g, "")
      .replace(/^0+/, "");
    // Prepend default country code '91' (India) if missing; adjust if your country differs
    const withCountryCode = digitsOnly.startsWith("971")
      ? digitsOnly
      : `971${digitsOnly}`;
    return `https://api.whatsapp.com/send?phone=${withCountryCode}&text=${whatsappText}`;
  };

  useEffect(() => {
    const triggerBounce = () => {
      setIsBouncing(true);
      const timeoutId = setTimeout(() => setIsBouncing(false), 1200);
      return timeoutId;
    };

    // Start with an initial bounce, then repeat every 10 seconds
    let timeoutId = triggerBounce();
    const intervalId = setInterval(() => {
      timeoutId = triggerBounce();
    }, 10000);

    return () => {
      clearInterval(intervalId);
      clearTimeout(timeoutId);
    };
  }, []);

  return (
    <Router>
      <div className="min-h-screen bg-black">
        <Navbar />

        <Routes>
          <Route
            path="/"
            element={
              <main>
                <div className=" " id="home">
                  <div className="max-w-lg mx-auto">
                  {/* <GlobeDemo /> */}
                  </div>
                  <Home />
                </div>
                <div className="   pt-[25px] md:pt-[10px]" id="about">
                  <About />
                </div>

                <div className="   pt-[25px] md:pt-[10px]" id="blog">
                  <Blogs />
                </div>
                <div className="   pt-[25px] md:pt-[10px]" id="services">
                  <Services />
                </div>
                <div className="   pt-[125px] md:pt-[10px]">
                  {/* <AnimatedTestimonialsDemo /> */}
                  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                  <div className="grid gap-16 md:gap-20 lg:gap-24 grid-cols-4">
                    {cardData.map((item) => (
                      <FollowingPointerDemo key={item.slug} content={item} />
                    ))}
                  </div>
                  </div>
                </div>
                <div className="   pt-[25px] md:pt-[10px]">
                  <Counter />
                </div>
                <div className="  pt-[25px] md:pt-[10px]" id="grid">

<LayoutGridDemo />
                </div>

                <div className="   pt-[25px] md:pt-[10px]" id="doctors">
                  <Doctors />
                </div>
              </main>
            }
          />
          <Route path="/qr-connect" element={<QRConnect />} />
        </Routes>

        <Footer />

        {/* Floating WhatsApp button */}
        <a
          href={getWhatsAppLink()}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Chat on WhatsApp"
          className={`fixed z-50 bottom-24 right-5 transition-transform hover:scale-105 active:scale-95 ${
            isBouncing ? "animate-bounce" : ""
          }`}
        >
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg"
            alt="WhatsApp"
            className="w-16  drop-shadow-xl"
          />
        </a>
      </div>
    </Router>
  );
};

export default App;
