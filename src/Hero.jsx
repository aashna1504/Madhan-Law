import React from "react";
import { Phone, ChevronDown } from "lucide-react";
import { useNavigate } from "react-router-dom";
import Container from "./Components/Container";

function Hero() {
  const navigate = useNavigate();
  return (
    <div>
      <div className="bg-[#413d3e] bg-cover text-white min-h-screen font-[Mulish]">
        {/* <header className="py-4 lg:flex hidden">
          <div className="container mx-auto lg:px-[9rem] px-4 flex justify-between items-center text-[18px]">
            <div className="text-3xl font-bold">Madhan</div>
            <nav className="hidden md:flex space-x-6 text-[18px]">
              <a href="#" className="flex items-center">
                Practice Area <ChevronDown className="ml-1 w-4 h-4" />
              </a>
              <a href="#">Cases</a>
              <a href="#" className="flex items-center">
                Our Team <ChevronDown className="ml-1 w-4 h-4" />
              </a>
              <a href="#" className="flex items-center">
                Areas We Serve <ChevronDown className="ml-1 w-4 h-4" />
              </a>
              <a
                onClick={() => {
                  navigate("/Contact");
                }}
              >
                Contact Us
              </a>
            </nav>
            <div className="flex items-center space-x-4 text-[18px]">
              <div className="flex items-center gap-4">
                <div className="bg-[#627a93] rounded-full p-2 mr-2">
                  <Phone className="h-4 w-4" />
                </div>
                <div className="flex flex-col ">
                  <span className="text-[12px]">Chennai</span>
                  <span className="font-bold text-[16px]">9444037125</span>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="bg-[#627a93] rounded-full p-2 mr-2">
                  <Phone className="h-4 w-4" />
                </div>
                <div className="flex flex-col ">
                  <span className="text-sm">Delhi</span>
                  <span className="font-bold text-[16px]">9444037125</span>
                </div>
              </div>
            </div>
          </div>
        </header> */}

        <main className="flex flex-col md:flex-row text-white font-[Mulish] max-w-7xl mx-auto sm:px-6">
          <div className="mt-[9rem] flex flex-col md:flex-row">
            <div className="md:w-1/2 mb-8 md:mb-0">
              <h1 className="lg:text-[55px] text-[40px] font-[Playfair] leading-[4rem]">
                <p className=" flex gap-3 font-[Mulish]">
                  Protecting
                  <span className="  font-[Playfair]">Your Legal</span>
                </p>{" "}
                Interests <span className="font-normal">in India</span>
                <br />
                <span className="font-normal">& United States</span>
              </h1>
              <p className="mb-6 text-white text-[20px] mt-3">
                Whether you're a business owner seeking legal advice, a family
                member looking to protect your loved ones' assets, or an
                individual facing a legal dispute, our team of experienced
                attorneys is here to help. We specialize in the following
                practice areas:
              </p>
              <ul className="mb-8 space-y-2 text-[20px]">
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-[#627a93] rounded-full mr-2"></div>
                  Business Law
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-[#627a93] rounded-full mr-2"></div>
                  Estate & Probate
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-[#627a93] rounded-full mr-2"></div>
                  Civil Litigation
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-[#627a93] rounded-full mr-2"></div>
                  Real Estate Law
                </li>
              </ul>
              <button className="bg-[#627a93] text-white px-4 py-5 rounded-full transition duration-300 text-[18px]">
                Free Consultation
              </button>
            </div>
            <div className="md:w-1/2 relative">
              <img
                src="https://res.cloudinary.com/druohnmyv/image/upload/v1726690490/img2_he0mal.png"
                alt="Statue of Justice"
                className="w-full h-[40rem] object-contain rounded-lg"
              />
              <div className=" absolute bottom-0 left-0 right-0 bg-black bg-opacity-75 text-white lg:px-10 px-4 py-4 rounded-[3rem] flex justify-between">
                <div className="">
                  <div className="lg:text-[48px] text-[32px]">10+</div>
                  <div className="text-[15px]">
                    YEARS OF COMBINED <br></br>EXPERIENCE
                  </div>
                </div>
                <div className="">
                  <div className="lg:text-[48px] text-[32px]">100+</div>
                  <div className="text-[15px]">CLIENTS SERVED</div>
                </div>
                <div className="">
                  <div className="lg:text-[48px] text-[32px]">Millions</div>
                  <div className="text-[15px]">
                    OF RUPEES SAVED<br></br> FOR OUR CLIENTS
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}

export default Hero;
