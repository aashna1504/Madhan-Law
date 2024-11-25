import React from "react";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
function Services() {
  const navigate = useNavigate();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 font-[Mulish] ">
        <header className="mb-8 flex items-center">
          <h1 className="text-[48px] mb-2">
            Legal Services
            <span className="block text-[48px] font-[Playfair] font-normal">
              We Provide
            </span>
          </h1>
          <nav className="flex flex-wrap gap-2 mt-4 ml-20">
            <button className="px-9 py-2 bg-[#627a93] text-white rounded-full">
              Estate & Probate Law
            </button>
            <button className="px-9 py-2 bg-white text-gray-700 border border-gray-300 rounded-full">
              Civil Litigation
            </button>
            <button className="px-9 py-2 bg-white text-gray-700 border border-gray-300 rounded-full">
              Business Law
            </button>
            <button className="px-9 py-2 bg-white text-gray-700 border border-gray-300 rounded-full">
              Real Estate Law
            </button>
          </nav>
        </header>

        <main className="flex flex-col md:flex-row gap-20">
          <div className="md:w-1/4">
            <div className=" w-full h-full">
              <img
                src={`https://res.cloudinary.com/druohnmyv/image/upload/v1726153876/450-b-c-the-12-tables-of-law-are-inscribed-1664850892_gu8klt.jpg`}
                alt="Person signing a document"
                className="h-full object-cover z-30 rounded-[2rem]"
              />
            </div>
          </div>

          <div className="md:w-2/4">
            <h2 className="text-[40px] mb-4">Estate & Probate Law</h2>
            <p className="text-gray-600 mb-6 text-[16px]">
              At HagEstad Law Group, PLLC, we understand that your legacy is
              important to you. That's why we offer comprehensive estate and
              probate law services to ensure that your assets and loved ones are
              protected. Our experienced attorneys will guide you through every
              step of the estate planning process, from drafting wills and
              trusts to establishing powers of attorney and healthcare
              directives. We'll help you create a plan that reflects your wishes
              and safeguards your family's future.
            </p>

            <div className="flex flex-col md:flex-row gap-8">
              <div className="md:w-1/2 text-[16px]">
                <h3 className="text-[24px] mb-4">in Montana</h3>
                <ul className="space-y-2">
                  <li className="flex items-center">
                    Estate Planning
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4 ml-1"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </li>
                  <li className="flex items-center">
                    Probate & Estate Administration
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4 ml-1"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </li>
                  <li className="flex items-center">
                    Trust Administration
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4 ml-1"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </li>
                </ul>
                <a
                  href="#"
                  className="text-[#627a93] hover:underline mt-4 inline-block"
                >
                  All Montana Estate & Probate Law Services
                </a>
              </div>
              <div className="md:w-1/2 text-[16px]">
                <h3 className="text-[24px] mb-4">in Arizona</h3>
                <ul className="space-y-2">
                  <li>Estate Planning</li>
                  <li>Probate & Estate Administration</li>
                  <li>Trust Administration</li>
                </ul>
                <a
                  href="#"
                  className="text-[#627a93] hover:underline mt-4 inline-block"
                >
                  All Arizona Estate & Probate Law Services
                </a>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}

export default Services;
