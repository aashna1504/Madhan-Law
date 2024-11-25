import React from "react";
import { Phone, ChevronDown, Menu } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

export default function Component() {
  const navigate = useNavigate();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="bg-[#413d3e]">
      <header className="text-white font-[Mulish] lg:flex fixed top-0 left-0 z-10 w-full bg-[#413d3e]">
        <div className="container mx-auto px-4 max-w-7xl w-full">
          <div className="flex flex-wrap items-center justify-between py-4">
            {/* Logo and Company Name */}
            <div className="flex items-center cursor-pointer">
              <div className="flex items-center gap-3">
                <img
                  className="w-12"
                  src="https://res.cloudinary.com/druohnmyv/image/upload/v1726062741/newlogo1_tzv4zc.png"
                  alt="Madhan Law logo"
                />
                <p className="font-[Canto] text-[22px] leading-tight">
                  MADHAN
                  <br />
                  LAW
                </p>
              </div>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-6 text-[15px]">
              <button
                onClick={() => {
                  navigate("/");
                }}
                className="text-white hover:text-gray-200"
              >
                Practice Area
              </button>
              <button
                onClick={() => {
                  navigate("/Case");
                }}
                className="text-white hover:text-gray-200"
              >
                Cases
              </button>
              <button
                onClick={() => {
                  navigate("/Team");
                }}
                className="text-white hover:text-gray-200"
              >
                Our Team
              </button>
              <button
                onClick={() => {
                  navigate("/");
                }}
                className="text-white hover:text-gray-200"
              >
                Areas We Serve
              </button>
              <button
                onClick={() => {
                  navigate("/Contact");
                }}
                className="text-white hover:text-gray-200"
              >
                Contact Us
              </button>
            </nav>

            {/* Contact Information and CTA */}
            <div className="hidden lg:flex items-center space-x-4">
              {/* Chennai Contact */}
              <div className="flex items-center gap-4">
                <div className="bg-[#627a93] rounded-full p-2">
                  <Phone className="h-4 w-4" />
                </div>
                <div className="flex flex-col">
                  <span className="text-[12px]">Chennai</span>
                  <span className="font-bold text-[15px]">9444037125</span>
                </div>
              </div>

              {/* Delhi Contact */}
              <div className="flex items-center gap-4">
                <div className="bg-[#627a93] rounded-full p-2">
                  <Phone className="h-4 w-4" />
                </div>
                <div className="flex flex-col">
                  <span className="text-sm">Delhi</span>
                  <span className="font-bold text-[15px]">8778100605</span>
                </div>
              </div>

              {/* CTA Button */}
              <button className="bg-[#627a93] text-white px-6 py-5 rounded-full hover:bg-[#4f6275] transition duration-300">
                Free Consultation
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button className="lg:hidden text-white" aria-label="Toggle menu">
              <Menu className="h-6 w-6" />
            </button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        <div className="lg:hidden hidden">
          <div className="container mx-auto px-4">
            <nav className="py-2 space-y-2">
              <button className="block w-full text-left text-white py-2">
                Practice Area
              </button>
              <button className="block w-full text-left text-white py-2">
                Cases
              </button>
              <button className="block w-full text-left text-white py-2">
                Our Team
              </button>
              <button className="block w-full text-left text-white py-2">
                Areas We Serve
              </button>
              <button className="block w-full text-left text-white py-2">
                Contact Us
              </button>
            </nav>

            <div className="py-2 space-y-4">
              <div className="flex items-center gap-2">
                <div className="bg-[#627a93] rounded-full p-2">
                  <Phone className="h-4 w-4" />
                </div>
                <div>
                  <span className="text-sm font-semibold">Chennai</span>
                  <span className="text-sm ml-2">9444037125</span>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <div className="bg-[#627a93] rounded-full p-2">
                  <Phone className="h-4 w-4" />
                </div>
                <div>
                  <span className="text-sm font-semibold">Delhi</span>
                  <span className="text-sm ml-2">8778100605</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
}
