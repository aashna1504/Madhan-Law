import React from "react";

function Footer() {
  return (
    <div>
      <footer class="bg-white text-gray-700 py-12 font-[Mulish]">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="grid grid-cols-1 md:grid-cols-4 gap-[2rem] text-[16px]">
            <div class="col-span-1">
              {/* <img src="/placeholder.svg?height=50&width=100" alt="Madhan Madhan law" class="mb-4"> */}
              <nav class="space-y-2">
                <a href="#" class="block hover:text-blue-600">
                  Blog
                </a>
                <a href="#" class="block hover:text-blue-600">
                  Contact Us
                </a>
              </nav>
              <div class="mt-4">
                <a href="#" class="text-blue-600 hover:text-blue-800">
                  <svg
                    class="h-6 w-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                      clip-rule="evenodd"
                    />
                  </svg>
                </a>
              </div>
            </div>
            <div class="col-span-2">
              <h2 class="text-[32px] mb-4">Featured Legal Services</h2>
              <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <h3 class="font-semibold mb-2">In Chennai:</h3>
                  <ul class="space-y-2">
                    <li>Trusts & Estates Attorney in Chennai,IN</li>
                    <li>Trusts & Estates Attorney in Delhi, IN</li>
                    <li>Trusts & Estates Attorney in Hydrabad, IN</li>
                  </ul>
                </div>
                <div>
                  <h3 class="font-semibold mb-2">In Delhi:</h3>
                  <ul class="space-y-2">
                    <li>Phoenix Estate & Probate Lawyers</li>
                    <li>Phoenix Business Lawyers</li>
                    <li>Phoenix Real Estate Lawyers</li>
                  </ul>
                </div>
              </div>
            </div>
            <div class="col-span-1">
              <h3 class="font-semibold mb-2">Chennai Office:</h3>
              <p>#1/207,1st Floor,East Coast Road</p>
              <p>Palavakkam,Chennai-600041,TAMIL NADU,INDIA</p>
              <p>9444037125</p>

              <h3 class="font-semibold mt-4 mb-2">Delhi Office:</h3>
              <p>P 97, South Extension-II</p>
              <p>New Delhi-110049</p>
              <p>8778100605</p>
            </div>
          </div>
          <div class="mt-8 pt-8 border-t border-gray-200 flex flex-col md:flex-row justify-between items-center">
            <p class="text-sm">&copy; 2024 Madhan law.</p>
            <div class="mt-4 md:mt-0">
              <a href="#" class="text-sm hover:text-blue-600 mr-4">
                Legal Disclaimer
              </a>
              <a href="#" class="text-sm hover:text-blue-600">
                Privacy Policy
              </a>
            </div>
            <p class="text-sm mt-4 md:mt-0">
              Powered by Grow Law Firm Marketing Agency
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
