import React from "react";
import { Phone } from "lucide-react";

function Help() {
  return (
    <div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-white rounded-3xl md:p-12  font-[Mulish]">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between bg-gradient-to-r from-[#627a93] to-[#3b648f] rounded-3xl p-9">
          <div className="mb-6 md:mb-0">
            <h2 className="text-4xl md:text-5xl mb-2">
              We Are Here
              <span className="block italic font-normal font-[Playfair]">
                to Help
              </span>
            </h2>
            <p className="text-lg md:text-xl">
              Ready to discuss your legal needs? Let's get started!
            </p>
          </div>
          <div className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-4">
            <button
              className="text-[14px] bg-white hover:bg-transparent hover:text-white border-white border-2 text-slate-800 px-6 py-5 rounded-full text-lg transition duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-white"
              aria-label="Request Free Consultation"
            >
              Free Consultation
            </button>
            <div className="flex space-y-2 gap-7">
              <div className="flex items-center">
                <div className="bg-[#627a93] rounded-full p-2 mr-2">
                  <Phone className="h-5 w-5" />
                </div>
                <div>
                  <div className="text-sm">Montana</div>
                  <a
                    href="tel:+14062966435"
                    className="text-[15px] font-semibold hover:underline"
                  >
                    (406) 296-6435
                  </a>
                </div>
              </div>
              <div className="flex items-center">
                <div className="bg-[#627a93] rounded-full p-2 mr-2">
                  <Phone className="h-5 w-5" />
                </div>
                <div>
                  <div className="text-sm">Arizona</div>
                  <a
                    href="tel:+16232942934"
                    className="text-[15px] font-semibold hover:underline"
                  >
                    (623) 294-2934
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Help;
