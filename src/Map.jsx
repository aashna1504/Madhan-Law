import React from "react";

function Map() {
  return (
    <div>
      <section class=" bg-[#ececec] font-[Mulish]">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div class="grid grid-cols-1 lg:grid-cols-2 gap-20">
            <div className="">
              <h1 class="text-[48px] mb-4 leading-[3rem]">
                Got Legal Needs?{" "}
                <span class="font-light font-[Playfair]">
                  Tell Us About Them!
                </span>
              </h1>
              <p class="text-gray-600 mb-4 text-[16px]">
                At HagEstad Law Group, PLLC, we are here to help you with all
                your legal needs.
              </p>
              <p class="text-gray-600 mb-6 text-[16px]">
                We understand that legal issues can be complex and overwhelming,
                but you don't have to navigate them alone!
              </p>

              <div class="bg-gray-200 rounded-[2rem] overflow-hidden mb-6">
                <div class="h-[30rem] w-full bg-gray-300 flex items-center justify-center">
                  <p class="text-gray-600">Google Maps Embed Placeholder</p>
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-10">
              <div class="bg-gradient-to-r from-[#627a93] to-[#3b648f] text-white rounded-[2rem] p-8 h-auto">
                <h2 class="text-[40px] mb-4 leading-[3rem]">
                  Contact HagEstad Law Group
                  <br /> Today!
                </h2>
                <p class="mb-6">Discuss your legal needs with us.</p>
                <a
                  href="#"
                  class="inline-block bg-white text-[#627a93] font-semibold px-7 py-5 text-[18px] rounded-full hover:bg-blue-100 transition duration-300"
                >
                  Free Consultation
                </a>
              </div>
              <p class="text-[16px] text-gray-500 mb-4">
                * Communication through our website does not establish an
                attorney-client relationship between you and HagEstad Law Group,
                PLLC
              </p>

              <div class="flex flex-wrap justify-start gap-4">
                <div class="flex items-center">
                  <div class="bg-[#627a93] rounded-full p-2 mr-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="h-4 w-4 text-white"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                      />
                    </svg>
                  </div>
                  <div>
                    <div class="text-sm text-gray-600">Montana</div>
                    <a
                      href="tel:+1406792755"
                      class="text-[16px] text-[#434d48] hover:underline"
                    >
                      (406) 792-7555
                    </a>
                  </div>
                </div>
                <div class="flex items-center">
                  <div class="bg-[#627a93] rounded-full p-2 mr-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="h-4 w-4 text-white"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                      />
                    </svg>
                  </div>
                  <div>
                    <div class="text-sm text-gray-600">Arizona</div>
                    <a
                      href="tel:+16232438444"
                      class="text-[16px] text-[#434d48] hover:underline"
                    >
                      (623) 243-8444
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Map;
