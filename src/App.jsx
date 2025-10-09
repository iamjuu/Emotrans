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
import { AnimatedTestimonialsDemo } from "./components/acternity/card";
// import { CometCardDemo } from "./components/3dcard";
const App = () => {
  const whatsappNumber = "8593074903";
  const whatsappText = encodeURIComponent("Hi there , How can i help you ?");
  const [isBouncing, setIsBouncing] = useState(false);

  // Normalize the WhatsApp number to international format without '+' or leading zeros
  const getWhatsAppLink = () => {
    const digitsOnly = String(whatsappNumber)
      .replace(/\D/g, "")
      .replace(/^0+/, "");
    // Prepend default country code '91' (India) if missing; adjust if your country differs
    const withCountryCode = digitsOnly.startsWith("91")
      ? digitsOnly
      : `91${digitsOnly}`;
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
      <div>
        <Navbar />

        <Routes>
          <Route
            path="/"
            element={
              <main>
                <div className="   " id="home">
                  <Home />
                </div>

                <div className="   pt-[25px] md:pt-[100px]" id="about">
                  <About />
                </div>

                <div className="   pt-[25px] md:pt-[100px]" id="blog">
                  <Blogs />
                </div>
                <div className="   pt-[25px] md:pt-[100px]">
                  <AnimatedTestimonialsDemo />
                </div>

                <div className="   pt-[25px] md:pt-[100px]" id="services">
                  <Services />
                </div>
                <div className="   pt-[25px] md:pt-[100px]">
                  <Counter />
                </div>

                <div className="   pt-[25px] md:pt-[100px]" id="doctors">
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
