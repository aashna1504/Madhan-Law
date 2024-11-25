import React from "react";

function Expertise() {
  return (
    <div>
      <section class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 font-[Mulish]">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-20">
          <div class="grid grid-cols-2 gap-4">
            <div class="bg-white">
              <img
                src="https://res.cloudinary.com/druohnmyv/image/upload/v1726727089/64be8d6e80da249dbd2987e5_DSC01502_20_1__4XLG_sa5qba.webp"
                alt="G. Patrick HagEstad"
                class="w-full h-auto rounded-[2rem]"
              />
              <h3 class="mt-2 text-[32px] ">
                G. Patrick <br />
                HagEstad
              </h3>
            </div>
            <div class="bg-white">
              <img
                src="https://res.cloudinary.com/druohnmyv/image/upload/v1726727089/64be8d6e80da249dbd2987e5_DSC01502_20_1__4XLG_sa5qba.webp"
                alt="David J. HagEstad"
                class="w-full h-auto rounded-[2rem]"
              />
              <h3 class="mt-2 text-[32px] ">
                David J. <br />
                HagEstad
              </h3>
            </div>
            <div class="col-span-2 lg:col-span-1 bg-white">
              <img
                src="https://res.cloudinary.com/druohnmyv/image/upload/v1726727089/64be8d6e80da249dbd2987e5_DSC01502_20_1__4XLG_sa5qba.webp"
                alt="Brien B. Birge"
                class="w-full h-auto rounded-[2rem]"
              />
              <h3 class="mt-2 text-[32px] ">Brien B. Birge</h3>
            </div>
          </div>

          <div className="w-[30rem] flec flec-col justify-end">
            <h2 class="text-[48px] mb-4 leading-[3.5rem]">
              <span class="font-[Playfair] font-light">
                Expertise In Action:
              </span>
              <br />
              <span class="text-gray-800">
                Meet The Madhan law Attorneys
              </span>
            </h2>
            <p class="text-gray-600 mb-4 text-[18px]">
              At Madhan law, our skilled attorneys are dedicated
              to delivering exceptional legal services, utilizing the latest
              technology to offer efficient and cost-effective solutions
              tailored to your unique needs.
            </p>
            <p class="text-gray-600 mb-6 text-[18px]">
              Our proven track record of success, no-nonsense approach, and
              focus on achieving results ensure the best possible outcome. With
              a strong network of professional relationships, we are
              well-equipped to serve you. Communication and transparency are
              paramount, keeping you informed and engaged throughout the legal
              process.
            </p>

            <div class="bg-white rounded-[2rem] border p-6 mb-6 shadow-md">
              <div class="grid grid-cols-2 gap-4">
                <div class="">
                  <h3 class="text-[48px] text-[#434d48] leading-[4rem]">
                    Saved Millions
                  </h3>
                  <p class="text-[12px] text-[#434d48] uppercase font-bold">
                    OF CLIENT'S MONEY
                  </p>
                </div>
                <div class="">
                  <h3 class="text-[48px] text-[#434d48] leading-[4rem]">
                    Extensive Track Record
                  </h3>
                  <p class="text-[12px] text-[#434d48] uppercase font-bold">
                    OF ACHIEVING CLIENT GOALS
                  </p>
                </div>
                <div class="">
                  <h3 class="text-[48px] text-[#434d48] leading-[4rem]">
                    100+
                  </h3>
                  <p class="text-[12px] text-[#434d48] uppercase font-bold">
                    CLIENTS SERVED
                  </p>
                </div>
                <div class="">
                  <h3 class="text-[48px] text-[#434d48] leading-[4rem]">10+</h3>
                  <p class="text-[12px] text-[#434d48] uppercase font-bold">
                    YEARS OF COMBINED <br />
                    EXPERIENCE
                  </p>
                </div>
              </div>
            </div>

            <div class="flex justify-start">
              {/* <img src="/placeholder.svg?height=60&width=120&text=PEER+RATED" alt="Martindale-Hubbell Peer Rated" class="h-12 w-auto" /> */}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Expertise;
