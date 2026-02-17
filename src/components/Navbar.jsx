import { useState } from "react";
import { Link } from "react-scroll";
import { Link as RouterLink, useLocation } from "react-router-dom";
import Button from "../layouts/Button";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import Contact from "../models/Contact";
import { LogoWhite } from "../assets";

const Navbar = () => {
  const [menu, setMenu] = useState(false);
  const [showForm, setShowForm] = useState(false);
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  const navItems = [
    { name: "Home", to: "/" },
    { name: "About Us", to: "about" },
    { name: "Services", to: "services" },
    { name: "Blog", to: "blog" },
    // { name: "QR Connect", to: "/qr-connect", isRoute: true }
  ];

  const handleChange = () => {
    setMenu(!menu);
  };

  const closeMenu = () => {
    setMenu(false);
  };

  const openForm = () => {
    setShowForm(true);
    setMenu(false);
  };

  const closeForm = () => {
    setShowForm(false);
  };

  return (
    <div className=" fixed w-full z-50 flex text-white bg-black/80">
      <div className="max-w-8xl mx-auto w-full  ">
        <div className=" flex flex-row justify-between py-2 md:px-32 px-5  shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px]">
          <div className=" flex flex-row items-center cursor-pointer">
            {isHomePage ? (
              <Link to="home" spy={true} smooth={true} duration={500}>
                <img 
                  src={LogoWhite} 
                  alt="Cam Design Logo" 
                  className="w-8 sm:w-10 md:w-16 lg:w-20" 
                  data-aos="fade-right"
                  data-aos-delay="100"
                />
              </Link>
            ) : (
              <RouterLink to="/">
                <img 
                  src={LogoWhite} 
                  alt="Cam Design Logo" 
                  className="w-8 sm:w-10 md:w-16 lg:w-20" 
                  data-aos="fade-right"
                  data-aos-delay="100"
                />
              </RouterLink>
            )}
          </div>

          <nav className=" hidden lg:flex flex-row items-center text-lg font-medium gap-8">
            {navItems.map((item, index) => (
              item.isRoute ? (
                <RouterLink
                  key={index}
                  to={item.to}
                  className="text-xs sm:text-sm md:text-[14px] hover:text-hoverColor transition-all cursor-pointer"
                  data-aos="fade-down"
                  data-aos-delay={200 + (index * 100)}
                >
                  {item.name}
                </RouterLink>
              ) : isHomePage ? (
                <Link
                  key={index}
                  to={item.to}
                  spy={true}
                  smooth={true}
                  duration={500}
                  className="text-xs sm:text-sm md:text-[14px] hover:text-hoverColor transition-all cursor-pointer"
                  data-aos="fade-down"
                  data-aos-delay={200 + (index * 100)}
                >
                  {item.name}
                </Link>
              ) : (
                <RouterLink
                  key={index}
                  to={`/#${item.to}`}
                  className="text-xs sm:text-sm md:text-[14px] hover:text-hoverColor transition-all cursor-pointer"
                  data-aos="fade-down"
                  data-aos-delay={200 + (index * 100)}
                >
                  {item.name}
                </RouterLink>
              )
            ))}
          </nav>

          <div className=" hidden lg:flex">
            <div className="flex items-center">

            <button
              className="border-[#f97316] border text-white px-4 py-2 rounded-md hover:bg-hoverColor transition duration-300 ease-in-out"
              onClick={openForm}
              data-aos="fade-left"
              data-aos-delay="600"
              >
              Contact Us
            </button>
              </div>
          </div>

          {showForm && <Contact closeForm={closeForm} />}

          <div className=" lg:hidden flex items-center">
            {menu ? (
              <AiOutlineClose size={28} onClick={handleChange} />
            ) : (
              <AiOutlineMenu size={28} onClick={handleChange} />
            )}
          </div>
        </div>
        <div
          className={`${
            menu ? "translate-x-0" : "-translate-x-full"
          } lg:hidden flex flex-col absolute  bg-[#2b2f20] backdrop-blur-md text-white left-0 top-16 font-semibold text-lg sm:text-xl md:text-2xl text-center pt-8 pb-4 gap-8 w-full h-fit transition-transform duration-300`}
        >
          {navItems.map((item, index) => (
            item.isRoute ? (
              <RouterLink
                key={index}
                to={item.to}
                className="text-sm sm:text-base md:text-lg hover:text-hoverColor transition-all cursor-pointer"
                onClick={closeMenu}
              >
                {item.name}
              </RouterLink>
            ) : isHomePage ? (
              <Link
                key={index}
                to={item.to}
                spy={true}
                smooth={true}
                duration={500}
                className="text-sm sm:text-base md:text-lg hover:text-hoverColor transition-all cursor-pointer"
                onClick={closeMenu}
              >
                {item.name}
              </Link>
            ) : (
              <RouterLink
                key={index}
                to={`/#${item.to}`}
                className="text-sm sm:text-base md:text-lg hover:text-hoverColor transition-all cursor-pointer"
                onClick={closeMenu}
              >
                {item.name}
              </RouterLink>
            )
          ))}

          <div className=" lg:hidden">
            <button
              className="bg-[#f97316] text-white px-4 py-2 rounded-md hover:bg-hoverColor transition duration-300 ease-in-out"
              onClick={openForm}
            >
              Contact Us
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
